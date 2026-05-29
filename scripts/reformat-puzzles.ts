// Regenerates src/puzzles.ts with compact single-line arrays and // prettier-ignore on PUZZLES.
// Run after adding new puzzles or after npm run solve to restore the compact format.
//
// Usage:
//   npm run reformat

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { PUZZLES } from '../src/puzzles.ts';
import { formatPuzzle } from './puzzle-format.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUZZLES_PATH = join(__dirname, '../src/puzzles.ts');

const FILE_HEADER = `export type Cell = { r: number; c: number };

export type Wall = [Cell, Cell];

type Solution = Cell[];

export type Puzzle = {
  id: string;
  name: string;
  gridSize: number;
  waypoints: Cell[];
  walls?: Wall[];
  solutions?: Solution[];
};

// prettier-ignore
export const PUZZLES: Puzzle[] = [
`;

const content = FILE_HEADER + PUZZLES.map(formatPuzzle).join('\n') + '\n];\n';

writeFileSync(PUZZLES_PATH, content, 'utf-8');
console.log(`Reformatted ${PUZZLES.length} puzzles in puzzles.ts`);
