import type { Cell, Puzzle } from './puzzles'
import {
  CELL_SIZE,
  GAP,
  WALL_THICKNESS,
  cellKey,
  gridPx,
  getCellAt,
  buildWallSet,
  buildWaypointMap,
  extendPath,
  pathToSvgPoints,
} from './gameLogic'

type Props = {
  puzzle: Puzzle
  path: Cell[]
  isWon: boolean
  revealed: boolean
  onPathChange: (path: Cell[]) => void
  onDragChange: (dragging: boolean) => void
  isDragging: boolean
}

export function GameGrid({ puzzle, path, isWon, revealed, onPathChange, onDragChange, isDragging }: Props) {
  const { gridSize, waypoints } = puzzle
  const px = gridPx(gridSize)
  const waypointMap = buildWaypointMap(waypoints)
  const wallSet = buildWallSet(puzzle.walls ?? [])
  const pathSet = new Set(path.map(cellKey))
  const svgPoints = pathToSvgPoints(path)

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cell = getCellAt(e.clientX - rect.left, e.clientY - rect.top, gridSize)
    if (!cell || cellKey(cell) !== cellKey(waypoints[0])) return
    e.currentTarget.setPointerCapture(e.pointerId)
    onPathChange([cell])
    onDragChange(true)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const cell = getCellAt(e.clientX - rect.left, e.clientY - rect.top, gridSize)
    if (!cell) return
    onPathChange(extendPath(path, cell, wallSet, waypointMap))
  }

  const handlePointerUp = () => onDragChange(false)

  return (
    <div
      className={`grid${isWon ? ' grid--won' : ''}`}
      style={{ width: px, height: px }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <svg className="path-svg" width={px} height={px}>
        {path.length >= 2 && (
          <polyline
            points={svgPoints}
            fill="none"
            stroke={isWon ? 'var(--green)' : 'var(--blue-darkest)'}
            strokeWidth={CELL_SIZE * 0.55}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.28}
          />
        )}
      </svg>

      {revealed && (puzzle.walls ?? []).map(([a, b], i) => {
        const horizontal = a.row !== b.row
        const top = a.row <= b.row ? a : b
        const left = a.col <= b.col ? a : b
        if (horizontal) {
          return (
            <div
              key={i}
              className="wall"
              style={{
                left: left.col * (CELL_SIZE + GAP),
                top: (top.row + 1) * (CELL_SIZE + GAP) - GAP / 2 - WALL_THICKNESS / 2,
                width: CELL_SIZE,
                height: WALL_THICKNESS,
              }}
            />
          )
        } else {
          return (
            <div
              key={i}
              className="wall"
              style={{
                left: (left.col + 1) * (CELL_SIZE + GAP) - GAP / 2 - WALL_THICKNESS / 2,
                top: top.row * (CELL_SIZE + GAP),
                width: WALL_THICKNESS,
                height: CELL_SIZE,
              }}
            />
          )
        }
      })}

      {Array.from({ length: gridSize }, (_, row) =>
        Array.from({ length: gridSize }, (_, col) => {
          const cell = { row, col }
          const key = cellKey(cell)
          const waypointLabel = waypointMap.get(key)
          const isWaypoint = waypointLabel !== undefined
          const inPath = pathSet.has(key)
          const classes = [
            'cell',
            inPath && 'cell--path',
            revealed && isWaypoint && 'cell--waypoint',
            isWon && inPath && 'cell--won',
            revealed && isWon && isWaypoint && 'cell--waypoint-won',
          ]
            .filter(Boolean)
            .join(' ')
          return (
            <div
              key={key}
              className={classes}
              style={{
                left: col * (CELL_SIZE + GAP),
                top: row * (CELL_SIZE + GAP),
                width: CELL_SIZE,
                height: CELL_SIZE,
              }}
            >
              {revealed && isWaypoint && (
                <span className="cell-label">{waypointLabel}</span>
              )}
            </div>
          )
        })
      )}
    </div>
  )
}
