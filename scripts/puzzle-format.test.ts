import { describe, it, expect } from 'vitest';
import type { Puzzle } from '../src/puzzles.ts';
import { fmtCell, formatPuzzle } from './puzzle-format.ts';

describe('fmtCell', () => {
  it('formats a cell as a { r, c } literal', () => {
    expect(fmtCell({ r: 3, c: 5 })).toBe('{ r: 3, c: 5 }');
    expect(fmtCell({ r: 0, c: 0 })).toBe('{ r: 0, c: 0 }');
  });
});

describe('formatPuzzle', () => {
  const base: Puzzle = {
    id: 'abc-123',
    name: 'Test Puzzle',
    gridSize: 3,
    waypoints: [
      { r: 0, c: 0 },
      { r: 2, c: 2 },
    ],
  };

  it('includes the id, name, gridSize and waypoints', () => {
    const result = formatPuzzle(base);
    expect(result).toContain("id: 'abc-123'");
    expect(result).toContain("name: 'Test Puzzle'");
    expect(result).toContain('gridSize: 3');
    expect(result).toContain('waypoints: [{ r: 0, c: 0 }, { r: 2, c: 2 }]');
  });

  it('omits walls and solutions when absent', () => {
    const result = formatPuzzle(base);
    expect(result).not.toContain('walls');
    expect(result).not.toContain('solutions');
  });

  it('includes walls one per line when present', () => {
    const p: Puzzle = {
      ...base,
      walls: [
        [
          { r: 0, c: 0 },
          { r: 1, c: 0 },
        ],
      ],
    };
    const result = formatPuzzle(p);
    expect(result).toContain('walls: [');
    expect(result).toContain('[{ r: 0, c: 0 }, { r: 1, c: 0 }]');
  });

  it('includes solutions one per line when present', () => {
    const p: Puzzle = {
      ...base,
      gridSize: 2,
      waypoints: [
        { r: 0, c: 0 },
        { r: 0, c: 1 },
      ],
      solutions: [
        [
          { r: 0, c: 0 },
          { r: 1, c: 0 },
          { r: 1, c: 1 },
          { r: 0, c: 1 },
        ],
      ],
    };
    const result = formatPuzzle(p);
    expect(result).toContain('solutions: [');
    expect(result).toContain('{ r: 0, c: 0 }, { r: 1, c: 0 }, { r: 1, c: 1 }, { r: 0, c: 1 }');
  });

  it('produces output that starts and ends with the puzzle braces', () => {
    const result = formatPuzzle(base);
    expect(result.trimStart()).toMatch(/^\{/);
    expect(result.trimEnd()).toMatch(/\},$/);
  });
});
