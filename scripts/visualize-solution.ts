// Renders a solution path as a step-numbered grid.
//
// Usage:
//   npm run visualize "[{ r: 0, c: 0 }, { r: 1, c: 0 }, ...]"

const input = process.argv[2];

if (!input) {
  console.error('Usage: npm run visualize "<solution-array>"');
  process.exit(1);
}

const cells: { r: number; c: number }[] = [];
const re = /\{\s*r:\s*(\d+),\s*c:\s*(\d+)\s*\}/g;
let match;
while ((match = re.exec(input)) !== null) {
  cells.push({ r: Number(match[1]), c: Number(match[2]) });
}

if (cells.length === 0) {
  console.error('No cells parsed. Expected format: [{ r: 0, c: 0 }, { r: 1, c: 0 }, ...]');
  process.exit(1);
}

const rows = Math.max(...cells.map((c) => c.r)) + 1;
const cols = Math.max(...cells.map((c) => c.c)) + 1;
const stepMap = new Map(cells.map((c, i) => [`${c.r},${c.c}`, i + 1]));
const pad = String(cells.length).length;

console.log(`${cells.length} cells, ${rows}×${cols} grid\n`);

for (let r = 0; r < rows; r++) {
  const row = Array.from({ length: cols }, (_, c) => {
    const step = stepMap.get(`${r},${c}`);
    return step !== undefined ? String(step).padStart(pad) : ' '.repeat(pad);
  });
  console.log(row.join('  '));
}
