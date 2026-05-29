import { describe, it, expect } from 'vitest';
import type { Cell, Puzzle } from '../src/puzzles.ts';
import {
  cellKey,
  wallKey,
  neighbors,
  hasValidParity,
  findAllSolutions,
  formatSolutionsField,
  insertSolutions,
} from './solver.ts';

const puzzle = (gridSize: number, start: Cell, end: Cell, extra?: Partial<Puzzle>): Puzzle => ({
  id: 'test',
  name: 'test',
  gridSize,
  waypoints: [start, end],
  ...extra,
});

describe('cellKey', () => {
  it('formats as "r,c"', () => {
    expect(cellKey({ r: 3, c: 5 })).toBe('3,5');
    expect(cellKey({ r: 0, c: 0 })).toBe('0,0');
  });
});

describe('wallKey', () => {
  it('is order-independent', () => {
    const a: Cell = { r: 0, c: 0 };
    const b: Cell = { r: 0, c: 1 };
    expect(wallKey(a, b)).toBe(wallKey(b, a));
  });

  it('differs for different walls', () => {
    const key1 = wallKey({ r: 0, c: 0 }, { r: 0, c: 1 });
    const key2 = wallKey({ r: 1, c: 0 }, { r: 1, c: 1 });
    expect(key1).not.toBe(key2);
  });
});

describe('neighbors', () => {
  it('returns 2 neighbors for a corner cell', () => {
    expect(neighbors({ r: 0, c: 0 }, 4)).toHaveLength(2);
  });

  it('returns 3 neighbors for an edge cell', () => {
    expect(neighbors({ r: 0, c: 1 }, 4)).toHaveLength(3);
  });

  it('returns 4 neighbors for a middle cell', () => {
    expect(neighbors({ r: 1, c: 1 }, 4)).toHaveLength(4);
  });

  it('returns the correct neighbors', () => {
    expect(neighbors({ r: 0, c: 0 }, 3)).toEqual(
      expect.arrayContaining([
        { r: 1, c: 0 },
        { r: 0, c: 1 },
      ])
    );
  });
});

describe('hasValidParity', () => {
  it('accepts valid parity for an even grid (opposite colors)', () => {
    // 4×4 (16 cells): start (0,0)=even, end (0,1)=odd — ok
    expect(hasValidParity(puzzle(4, { r: 0, c: 0 }, { r: 0, c: 1 }))).toBe(true);
  });

  it('rejects invalid parity for an even grid (same color)', () => {
    // 4×4: start (0,0)=even, end (2,2)=even — impossible
    expect(hasValidParity(puzzle(4, { r: 0, c: 0 }, { r: 2, c: 2 }))).toBe(false);
  });

  it('accepts valid parity for an odd grid (same color)', () => {
    // 3×3 (9 cells): start (0,0)=even, end (2,2)=even — ok
    expect(hasValidParity(puzzle(3, { r: 0, c: 0 }, { r: 2, c: 2 }))).toBe(true);
  });

  it('rejects invalid parity for an odd grid (opposite colors)', () => {
    // 3×3: start (0,0)=even, end (0,1)=odd — impossible
    expect(hasValidParity(puzzle(3, { r: 0, c: 0 }, { r: 0, c: 1 }))).toBe(false);
  });

  it('rejects puzzle #366 (known bad data)', () => {
    // start (5,1) and end (7,3) are both even-parity on an 8×8 grid
    expect(hasValidParity(puzzle(8, { r: 5, c: 1 }, { r: 7, c: 3 }))).toBe(false);
  });
});

describe('findAllSolutions', () => {
  it('finds the one solution for a 2×2 puzzle', () => {
    // start (0,0), end (0,1) — only path visits (1,0) and (1,1) first
    const { solutions, timedOut } = findAllSolutions(puzzle(2, { r: 0, c: 0 }, { r: 0, c: 1 }));
    expect(timedOut).toBe(false);
    expect(solutions).toHaveLength(1);
    expect(solutions[0]).toEqual([
      { r: 0, c: 0 },
      { r: 1, c: 0 },
      { r: 1, c: 1 },
      { r: 0, c: 1 },
    ]);
  });

  it('finds no solutions when the only path is walled off', () => {
    // blocking (0,0)↔(1,0) leaves no way to reach all cells before (0,1)
    const { solutions } = findAllSolutions(
      puzzle(
        2,
        { r: 0, c: 0 },
        { r: 0, c: 1 },
        {
          walls: [
            [
              { r: 0, c: 0 },
              { r: 1, c: 0 },
            ],
          ],
        }
      )
    );
    expect(solutions).toHaveLength(0);
  });

  it('respects waypoint ordering', () => {
    // 2×2, three waypoints in sequence: (0,0)→(1,1)→(0,1)
    // (1,1) must be visited before (0,1)
    const p: Puzzle = {
      id: 'test',
      name: 'test',
      gridSize: 2,
      waypoints: [
        { r: 0, c: 0 },
        { r: 1, c: 1 },
        { r: 0, c: 1 },
      ],
    };
    const { solutions } = findAllSolutions(p);
    expect(solutions.length).toBeGreaterThan(0);
    for (const sol of solutions) {
      const midIdx = sol.findIndex((c) => c.r === 1 && c.c === 1);
      const endIdx = sol.findIndex((c) => c.r === 0 && c.c === 1);
      expect(midIdx).toBeLessThan(endIdx);
    }
  });
});

describe('formatSolutionsField', () => {
  it('formats a single solution', () => {
    const solutions = [
      [
        { r: 0, c: 0 },
        { r: 0, c: 1 },
      ],
    ];
    const result = formatSolutionsField(solutions);
    expect(result).toBe('    solutions: [\n      [{ r: 0, c: 0 }, { r: 0, c: 1 }],\n    ],');
  });

  it('formats multiple solutions', () => {
    const solutions = [
      [
        { r: 0, c: 0 },
        { r: 0, c: 1 },
      ],
      [
        { r: 0, c: 0 },
        { r: 1, c: 0 },
      ],
    ];
    const result = formatSolutionsField(solutions);
    expect(result.split('\n').filter((l) => l.trim().startsWith('['))).toHaveLength(2);
  });
});

describe('insertSolutions', () => {
  const fileContent =
    [
      `export const PUZZLES: Puzzle[] = [`,
      `  {`,
      `    id: 'test-id',`,
      `    name: 'Test',`,
      `    gridSize: 2,`,
      `    waypoints: [{ r: 0, c: 0 }, { r: 0, c: 1 }],`,
      `  },`,
      `];`,
    ].join('\n') + '\n';

  it('inserts the solutions field before the closing brace', () => {
    const solutions = [
      [
        { r: 0, c: 0 },
        { r: 1, c: 0 },
        { r: 1, c: 1 },
        { r: 0, c: 1 },
      ],
    ];
    const result = insertSolutions(fileContent, 'test-id', solutions);
    expect(result).toContain('solutions:');
    expect(result).toContain('{ r: 0, c: 0 }');
    // solutions field should appear before the closing brace
    expect(result.indexOf('solutions:')).toBeLessThan(result.indexOf('  },'));
  });

  it('throws when the puzzle id is not found', () => {
    expect(() => insertSolutions(fileContent, 'no-such-id', [])).toThrow('no-such-id');
  });
});
