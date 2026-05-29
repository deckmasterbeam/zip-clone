// Renders a solution path using box-drawing characters.
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

// Map each cell key to its index in the path
const idxMap = new Map(cells.map((c, i) => [`${c.r},${c.c}`, i]));

// For each cell, determine which cardinal neighbors are adjacent in the path
const N = 1,
  S = 2,
  E = 4,
  W = 8;

// prettier-ignore
const CHARS: Record<number, string> = {
  [0]:    '·',                                        // not in path
  [N]:    '╵', [S]: '╷', [E]:  '╶', [W]:  '╴',      // path endpoint
  [N|S]:  '│', [E|W]: '─',                           // straight
  [N|E]:  '╰', [N|W]: '╯', [S|E]: '╭', [S|W]: '╮', // corner
};

console.log(`${cells.length} cells, ${rows}×${cols} grid\n`);

for (let r = 0; r < rows; r++) {
  const row: string[] = [];
  for (let c = 0; c < cols; c++) {
    const idx = idxMap.get(`${r},${c}`);
    if (idx === undefined) {
      row.push('·');
      continue;
    }
    const adjacent = (nr: number, nc: number) => {
      const ni = idxMap.get(`${nr},${nc}`);
      return ni !== undefined && (ni === idx - 1 || ni === idx + 1);
    };
    let conn = 0;
    if (r > 0 && adjacent(r - 1, c)) conn |= N;
    if (r < rows - 1 && adjacent(r + 1, c)) conn |= S;
    if (c > 0 && adjacent(r, c - 1)) conn |= W;
    if (c < cols - 1 && adjacent(r, c + 1)) conn |= E;
    row.push(CHARS[conn] ?? '?');
  }
  console.log(row.join(''));
}
