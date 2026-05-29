// Finds all valid solutions for each puzzle and writes them into puzzles.ts.
//
// Usage:
//   npm run solve        — process all unsolved puzzles
//   npm run solve 5      — process only the next 5 unsolved puzzles

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { PUZZLES } from '../src/puzzles.ts';
import { hasValidParity, findAllSolutions, insertSolutions } from './solver.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUZZLES_PATH = join(__dirname, '../src/puzzles.ts');

const limit = Number(process.argv[2]) || Infinity;
let fileContent = readFileSync(PUZZLES_PATH, 'utf-8');
let updateCount = 0;
const errors: string[] = [];

for (const puzzle of PUZZLES) {
  if (updateCount >= limit) break;
  if (puzzle.solutions) {
    console.log(`skip  ${puzzle.name} (already solved)`);
    continue;
  }

  if (!hasValidParity(puzzle)) {
    const s = puzzle.waypoints[0];
    const e = puzzle.waypoints[puzzle.waypoints.length - 1];
    const msg = `${puzzle.name} (${puzzle.id}): start (${s.r},${s.c}) and end (${e.r},${e.c}) share the same grid color — no Hamiltonian path possible`;
    console.log(`ERROR ${msg}`);
    errors.push(msg);
    continue;
  }

  process.stdout.write(`solve ${puzzle.name}... `);
  const t = Date.now();
  const { solutions, timedOut } = findAllSolutions(puzzle);
  const ms = Date.now() - t;

  if (timedOut) {
    const msg = `${puzzle.name} (${puzzle.id}): search timed out after ${ms}ms`;
    console.log(`TIMEOUT ${msg}`);
    errors.push(msg);
    continue;
  }

  if (solutions.length === 0) {
    const msg = `${puzzle.name} (${puzzle.id}): no solutions found after ${ms}ms — check puzzle data`;
    console.log(`ERROR ${msg}`);
    errors.push(msg);
    continue;
  }

  console.log(`${solutions.length} solution(s) in ${ms}ms`);
  fileContent = insertSolutions(fileContent, puzzle.id, solutions);
  updateCount++;
}

if (updateCount > 0) {
  writeFileSync(PUZZLES_PATH, fileContent, 'utf-8');
  console.log(`\nWrote ${updateCount} puzzle update(s) to puzzles.ts`);
} else {
  console.log('\nAll puzzles already solved, nothing to write.');
}

if (errors.length > 0) {
  console.log(`\n${errors.length} puzzle(s) with errors:`);
  for (const e of errors) console.log(`  • ${e}`);
}
