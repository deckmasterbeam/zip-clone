import type { Cell, Wall } from './puzzles';
import { wallKey } from './gameLogic';

const DIRS = [
  { row: -1, col: 0 },
  { row: 1, col: 0 },
  { row: 0, col: -1 },
  { row: 0, col: 1 },
];

function neighbors(cell: Cell, gridSize: number): Cell[] {
  return DIRS.map((d) => ({ row: cell.row + d.row, col: cell.col + d.col })).filter(
    (c) => c.row >= 0 && c.row < gridSize && c.col >= 0 && c.col < gridSize
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Generates a Hamiltonian path through an N×N grid using Warnsdorff's heuristic
 * (always move to the unvisited neighbor with the fewest onward moves).
 * Returns null if it fails (rare for grids ≤ 8; caller should retry).
 */
function hamiltonianPath(gridSize: number): Cell[] | null {
  const total = gridSize * gridSize;
  const visited = Array.from({ length: gridSize }, () => new Array(gridSize).fill(false));
  const path: Cell[] = [];

  const start: Cell = {
    row: Math.floor(Math.random() * gridSize),
    col: Math.floor(Math.random() * gridSize),
  };

  visited[start.row][start.col] = true;
  path.push(start);

  let current = start;

  for (let step = 1; step < total; step++) {
    const unvisited = neighbors(current, gridSize).filter((n) => !visited[n.row][n.col]);

    if (unvisited.length === 0) {
      return null;
    }

    // Warnsdorff: prefer neighbor with fewest unvisited onward neighbors
    // Shuffle first so ties are broken randomly
    const scored = shuffle(unvisited).map((n) => ({
      cell: n,
      onward: neighbors(n, gridSize).filter((nb) => !visited[nb.row][nb.col]).length,
    }));
    scored.sort((a, b) => a.onward - b.onward);

    const next = scored[0].cell;
    visited[next.row][next.col] = true;
    path.push(next);
    current = next;
  }

  return path;
}

/**
 * Collect all grid edges that are NOT used by the solution path.
 * Walls placed on these edges can never block the solution.
 */
function nonPathEdges(path: Cell[], gridSize: number): Wall[] {
  // Build a set of path edge keys (order-independent)
  const pathEdgeKeys = new Set<string>();
  for (let i = 0; i + 1 < path.length; i++) {
    pathEdgeKeys.add(wallKey(path[i], path[i + 1]));
  }

  const edges: Wall[] = [];
  // Enumerate every horizontal and vertical grid edge once
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      // Right neighbor
      if (col + 1 < gridSize) {
        const a = { row, col };
        const b = { row, col: col + 1 };
        if (!pathEdgeKeys.has(wallKey(a, b))) {
          edges.push([a, b]);
        }
      }
      // Down neighbor
      if (row + 1 < gridSize) {
        const a = { row, col };
        const b = { row: row + 1, col };
        if (!pathEdgeKeys.has(wallKey(a, b))) {
          edges.push([a, b]);
        }
      }
    }
  }
  return edges;
}

/**
 * Pick walls: randomly select ~20% of non-path edges, capped so the puzzle
 * doesn't feel over-walled. Returns an empty array for small grids (≤ 3).
 */
function pickWalls(path: Cell[], gridSize: number): Wall[] {
  if (gridSize <= 3) {
    return [];
  }
  const candidates = shuffle(nonPathEdges(path, gridSize));
  const total = gridSize * gridSize;
  const maxWalls = Math.floor(total * 0.2);
  return candidates.slice(0, maxWalls);
}

/**
 * Pick waypoint indices evenly spread along the path.
 * Always includes index 0 and the last index.
 */
function pickWaypointIndices(pathLength: number, count: number): number[] {
  if (count >= pathLength) {
    return Array.from({ length: pathLength }, (_, i) => i);
  }
  const indices: number[] = [0];
  const step = (pathLength - 1) / (count - 1);
  for (let i = 1; i < count - 1; i++) {
    indices.push(Math.round(i * step));
  }
  indices.push(pathLength - 1);
  return indices;
}

/**
 * Generate a random solvable puzzle for the given grid size.
 * Returns { waypoints, walls } to be loaded into the designer.
 */
export function generateRandomPuzzle(gridSize: number): { waypoints: Cell[]; walls: Wall[] } {
  const total = gridSize * gridSize;

  // Retry until Warnsdorff succeeds (almost always on first try)
  let path: Cell[] | null = null;
  for (let attempt = 0; attempt < 20; attempt++) {
    path = hamiltonianPath(gridSize);
    if (path) {
      break;
    }
  }

  if (!path) {
    throw new Error('Could not generate a Hamiltonian path after 20 attempts');
  }

  // Scale waypoint count to grid size: ~1 waypoint per 4–5 cells, min 2, max 12
  const waypointCount = Math.min(12, Math.max(2, Math.round(total / 4)));
  const indices = pickWaypointIndices(path.length, waypointCount);
  const waypoints = indices.map((i) => path![i]);
  const walls = pickWalls(path, gridSize);

  return { waypoints, walls };
}
