// Reports puzzles missing solutions and puzzles with multiple solutions.
// Run with: npm run status

import { PUZZLES } from '../src/puzzles.ts';

const unsolved = PUZZLES.filter((p) => !p.solutions);
const multi = PUZZLES.filter((p) => (p.solutions?.length ?? 0) > 1);

if (unsolved.length === 0) {
  console.log('All puzzles solved. ✓');
} else {
  console.log(`${unsolved.length} unsolved puzzle(s):\n`);
  for (const p of unsolved) {
    console.log(`  ${p.id}  ${p.name}`);
  }
}

console.log();

if (multi.length === 0) {
  console.log('No puzzles with multiple solutions. ✓');
} else {
  console.log(`${multi.length} puzzle(s) with multiple solutions:\n`);
  for (const p of multi) {
    console.log(`  ${p.solutions!.length} solutions  ${p.id}  ${p.name}`);
  }
}
