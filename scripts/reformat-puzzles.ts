// Regenerates src/puzzles.ts with compact single-line arrays and // prettier-ignore on PUZZLES.
// Run after adding new puzzles or after npm run solve to restore the compact format.
//
// Usage:
//   npm run reformat

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { PUZZLES } from '../src/puzzles.ts';
import { formatPuzzle } from './puzzle-format.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUZZLES_PATH = join(__dirname, '../src/puzzles.ts');

const existing = readFileSync(PUZZLES_PATH, 'utf-8');
const marker = 'export const PUZZLES: Puzzle[] = [';
const markerIndex = existing.indexOf(marker);
if (markerIndex === -1) throw new Error(`Could not find "${marker}" in puzzles.ts`);
const FILE_HEADER = existing.slice(0, markerIndex + marker.length) + '\n';

const content = FILE_HEADER + PUZZLES.map(formatPuzzle).join('\n') + '\n];\n';

writeFileSync(PUZZLES_PATH, content, 'utf-8');
console.log(`Reformatted ${PUZZLES.length} puzzles in puzzles.ts`);
