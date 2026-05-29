import type { Cell, Wall, Puzzle } from '../src/puzzles.ts';

export const cellKey = (c: Cell) => `${c.r},${c.c}`;

export const wallKey = (a: Cell, b: Cell): string => {
  const ak = a.r * 100 + a.c;
  const bk = b.r * 100 + b.c;
  return ak < bk ? `${cellKey(a)}|${cellKey(b)}` : `${cellKey(b)}|${cellKey(a)}`;
};

export const buildWallSet = (walls: Wall[]): Set<string> =>
  new Set(walls.map(([a, b]) => wallKey(a, b)));

export function neighbors(c: Cell, gridSize: number): Cell[] {
  const out: Cell[] = [];
  if (c.r > 0) out.push({ r: c.r - 1, c: c.c });
  if (c.r < gridSize - 1) out.push({ r: c.r + 1, c: c.c });
  if (c.c > 0) out.push({ r: c.r, c: c.c - 1 });
  if (c.c < gridSize - 1) out.push({ r: c.r, c: c.c + 1 });
  return out;
}

// A Hamiltonian path of N cells makes N-1 steps, alternating checkerboard color each step.
// Start and end are the same color iff N-1 is even iff N is odd.
export function hasValidParity(puzzle: Puzzle): boolean {
  const { gridSize, waypoints } = puzzle;
  const start = waypoints[0];
  const end = waypoints[waypoints.length - 1];
  const total = gridSize * gridSize;
  const startParity = (start.r + start.c) % 2;
  const endParity = (end.r + end.c) % 2;
  return total % 2 === 0 ? startParity !== endParity : startParity === endParity;
}

export type SolveResult = { solutions: Cell[][]; timedOut: boolean };

export function findAllSolutions(puzzle: Puzzle, timeoutMs = 30000): SolveResult {
  const { gridSize, waypoints, walls } = puzzle;
  const wallSet = buildWallSet(walls ?? []);
  const totalCells = gridSize * gridSize;
  const solutions: Cell[][] = [];
  const deadline = Date.now() + timeoutMs;
  let timedOut = false;
  let nodeCount = 0;

  const waypointIndexMap = new Map<string, number>(waypoints.map((c, i) => [cellKey(c), i]));
  const lastWpIdx = waypoints.length - 1;

  function dfs(path: Cell[], visited: Set<string>, nextWpIdx: number): void {
    if (timedOut) return;
    if (++nodeCount % 100_000 === 0 && Date.now() > deadline) {
      timedOut = true;
      return;
    }

    const cur = path[path.length - 1];

    for (const nb of neighbors(cur, gridSize)) {
      const key = cellKey(nb);
      if (visited.has(key)) continue;
      if (wallSet.has(wallKey(cur, nb))) continue;

      const wpIdx = waypointIndexMap.get(key);

      if (wpIdx !== undefined) {
        if (wpIdx !== nextWpIdx) continue;
        if (wpIdx === lastWpIdx) {
          if (path.length === totalCells - 1) {
            solutions.push([...path, nb]);
          }
          continue;
        }
      }

      visited.add(key);
      path.push(nb);
      dfs(path, visited, wpIdx !== undefined ? nextWpIdx + 1 : nextWpIdx);
      path.pop();
      visited.delete(key);
    }
  }

  const start = waypoints[0];
  dfs([start], new Set([cellKey(start)]), 1);
  return { solutions, timedOut };
}

export function formatSolutionsField(solutions: Cell[][]): string {
  const solutionLines = solutions.map((sol) => {
    const cells = sol.map((c) => `{ r: ${c.r}, c: ${c.c} }`).join(', ');
    return `      [${cells}]`;
  });
  return `    solutions: [\n${solutionLines.join(',\n')},\n    ],`;
}

export function insertSolutions(
  fileContent: string,
  puzzleId: string,
  solutions: Cell[][]
): string {
  const idPos = fileContent.indexOf(`id: '${puzzleId}'`);
  if (idPos === -1) throw new Error(`Puzzle ${puzzleId} not found in file`);

  let openBrace = idPos;
  while (fileContent[openBrace] !== '{') openBrace--;

  let depth = 1;
  let pos = openBrace + 1;
  while (pos < fileContent.length && depth > 0) {
    if (fileContent[pos] === '{') depth++;
    else if (fileContent[pos] === '}') depth--;
    pos++;
  }
  const closePos = pos - 1;

  let insertPos = closePos;
  while (insertPos > 0 && fileContent[insertPos - 1] !== '\n') insertPos--;

  return (
    fileContent.slice(0, insertPos) +
    formatSolutionsField(solutions) +
    '\n' +
    fileContent.slice(insertPos)
  );
}
