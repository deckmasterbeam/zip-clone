import type { Cell, Wall, Puzzle } from '../src/puzzles.ts';

export const fmtCell = (c: Cell) => `{ r: ${c.r}, c: ${c.c} }`;

export function formatPuzzle(p: Puzzle): string {
  const lines: string[] = [
    `  {`,
    `    id: '${p.id}',`,
    `    name: '${p.name}',`,
    `    gridSize: ${p.gridSize},`,
    `    waypoints: [${p.waypoints.map(fmtCell).join(', ')}],`,
  ];

  if (p.walls && p.walls.length > 0) {
    lines.push(`    walls: [`);
    for (const [a, b] of p.walls as Wall[]) {
      lines.push(`      [${fmtCell(a)}, ${fmtCell(b)}],`);
    }
    lines.push(`    ],`);
  }

  if (p.solutions && p.solutions.length > 0) {
    lines.push(`    solutions: [`);
    for (const sol of p.solutions) {
      lines.push(`      [${sol.map(fmtCell).join(', ')}],`);
    }
    lines.push(`    ],`);
  }

  lines.push(`  },`);
  return lines.join('\n');
}
