import type { Cell, Puzzle } from './puzzles';
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
} from './gameLogic';

export const GameGrid = ({
  puzzle,
  path,
  isWon,
  revealed,
  onPathChange,
  onDragChange,
  isDragging,
}: {
  puzzle: Puzzle;
  path: Cell[];
  isWon: boolean;
  revealed: boolean;
  onPathChange: (path: Cell[]) => void;
  onDragChange: (dragging: boolean) => void;
  isDragging: boolean;
}) => {
  const { gridSize, waypoints } = puzzle;
  const px = gridPx(gridSize);
  const waypointMap = buildWaypointMap(waypoints);
  const wallSet = buildWallSet(puzzle.walls ?? []);
  const pathSet = new Set(path.map(cellKey));
  const svgPoints = pathToSvgPoints(path);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const renderScale = rect.width / px;
    const cell = getCellAt(
      (e.clientX - rect.left) / renderScale,
      (e.clientY - rect.top) / renderScale,
      gridSize
    );
    if (!cell) {
      return;
    }
    const key = cellKey(cell);
    const lastCell = path[path.length - 1];
    const isStart = key === cellKey(waypoints[0]);
    const isResume = lastCell && key === cellKey(lastCell);
    if (!isStart && !isResume) {
      return;
    }
    e.currentTarget.setPointerCapture(e.pointerId);
    if (isStart) {
      onPathChange([cell]);
    }
    onDragChange(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const renderScale = rect.width / px;
    const cell = getCellAt(
      (e.clientX - rect.left) / renderScale,
      (e.clientY - rect.top) / renderScale,
      gridSize
    );
    if (!cell) {
      return;
    }
    onPathChange(extendPath(path, cell, wallSet, waypointMap));
  };

  const handlePointerUp = () => onDragChange(false);

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

      {revealed &&
        (puzzle.walls ?? []).map(([a, b], i) => {
          const horizontal = a.r !== b.r;
          const top = a.r <= b.r ? a : b;
          const left = a.c <= b.c ? a : b;
          if (horizontal) {
            return (
              <div
                key={i}
                className="wall"
                style={{
                  left: left.c * (CELL_SIZE + GAP),
                  top: (top.r + 1) * (CELL_SIZE + GAP) - GAP / 2 - WALL_THICKNESS / 2,
                  width: CELL_SIZE,
                  height: WALL_THICKNESS,
                }}
              />
            );
          } else {
            return (
              <div
                key={i}
                className="wall"
                style={{
                  left: (left.c + 1) * (CELL_SIZE + GAP) - GAP / 2 - WALL_THICKNESS / 2,
                  top: top.r * (CELL_SIZE + GAP),
                  width: WALL_THICKNESS,
                  height: CELL_SIZE,
                }}
              />
            );
          }
        })}

      {Array.from({ length: gridSize }, (_, row) =>
        Array.from({ length: gridSize }, (_, col) => {
          const cell = { r: row, c: col };
          const key = cellKey(cell);
          const waypointLabel = waypointMap.get(key);
          const isWaypoint = waypointLabel !== undefined;
          const inPath = pathSet.has(key);
          const classes = [
            'cell',
            inPath && 'cell--path',
            revealed && isWaypoint && 'cell--waypoint',
            isWon && inPath && 'cell--won',
            revealed && isWon && isWaypoint && 'cell--waypoint-won',
          ]
            .filter(Boolean)
            .join(' ');
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
              {revealed && isWaypoint && <span className="cell-label">{waypointLabel}</span>}
            </div>
          );
        })
      )}
    </div>
  );
};
