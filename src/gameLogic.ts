import type { Cell, Wall } from './puzzles'

export const CELL_SIZE = 80
export const GAP = 8
export const WALL_THICKNESS = 5

export const cellKey = (c: Cell) => `${c.row},${c.col}`

// Normalized wall key — order-independent
export const wallKey = (a: Cell, b: Cell) => {
  const ak = a.row * 100 + a.col
  const bk = b.row * 100 + b.col
  return ak < bk ? `${cellKey(a)}|${cellKey(b)}` : `${cellKey(b)}|${cellKey(a)}`
}

export const isAdjacent = (a: Cell, b: Cell) =>
  Math.abs(a.row - b.row) + Math.abs(a.col - b.col) === 1

export const cellCenter = (c: Cell) => ({
  x: c.col * (CELL_SIZE + GAP) + CELL_SIZE / 2,
  y: c.row * (CELL_SIZE + GAP) + CELL_SIZE / 2,
})

export function gridPx(gridSize: number) {
  return gridSize * CELL_SIZE + (gridSize - 1) * GAP
}

export function getCellAt(x: number, y: number, gridSize: number): Cell | null {
  const col = Math.floor(x / (CELL_SIZE + GAP))
  const row = Math.floor(y / (CELL_SIZE + GAP))
  if (col < 0 || col >= gridSize || row < 0 || row >= gridSize) return null
  const cellX = x - col * (CELL_SIZE + GAP)
  const cellY = y - row * (CELL_SIZE + GAP)
  if (cellX > CELL_SIZE || cellY > CELL_SIZE) return null
  return { row, col }
}

export function buildWallSet(walls: Wall[]): Set<string> {
  return new Set(walls.map(([a, b]) => wallKey(a, b)))
}

export function buildWaypointMap(waypoints: Cell[]): Map<string, number> {
  return new Map(waypoints.map((c, i) => [cellKey(c), i + 1]))
}

export function extendPath(
  prev: Cell[],
  cell: Cell,
  wallSet: Set<string>,
  waypointMap: Map<string, number>,
): Cell[] {
  const key = cellKey(cell)

  // Retract one step if landing on the immediately previous cell
  const idx = prev.findIndex(c => cellKey(c) === key)
  if (idx !== -1) {
    if (idx === prev.length - 2) return prev.slice(0, idx + 1)
    return prev
  }

  const last = prev[prev.length - 1]
  if (!last || !isAdjacent(last, cell)) return prev
  if (wallSet.has(wallKey(last, cell))) return prev

  // Waypoints must be visited in sequence
  const wLabel = waypointMap.get(key)
  if (wLabel !== undefined) {
    const visitedWaypoints = prev.filter(c => waypointMap.has(cellKey(c))).length
    if (wLabel !== visitedWaypoints + 1) return prev
  }

  return [...prev, cell]
}

export function checkWon(
  path: Cell[],
  totalCells: number,
  lastWaypoint: Cell,
): boolean {
  return (
    path.length === totalCells &&
    path.length > 0 &&
    cellKey(path[path.length - 1]) === cellKey(lastWaypoint)
  )
}

export function pathToSvgPoints(path: Cell[]): string {
  return path
    .map(c => { const { x, y } = cellCenter(c); return `${x},${y}` })
    .join(' ')
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  const ms = Math.floor((seconds % 1) * 10)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${ms}`
}
