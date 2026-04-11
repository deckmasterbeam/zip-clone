import type { Cell, Wall } from './puzzles';
import {
  CELL_SIZE,
  GAP,
  WALL_THICKNESS,
  cellKey,
  wallKey,
  gridPx,
  buildWallSet,
  buildWaypointMap,
} from './gameLogic';

export type DesignerMode = 'waypoints' | 'walls';

const WALL_HIT = 20; // px — clickable area centred on each gap

export const DesignerGrid = ({
  gridSize,
  waypoints,
  walls,
  mode,
  onWaypointsChange,
  onWallsChange,
}: {
  gridSize: number;
  waypoints: Cell[];
  walls: Wall[];
  mode: DesignerMode;
  onWaypointsChange: (waypoints: Cell[]) => void;
  onWallsChange: (walls: Wall[]) => void;
}) => {
  const px = gridPx(gridSize);
  const waypointMap = buildWaypointMap(waypoints);
  const wallSet = buildWallSet(walls);

  const handleCellClick = (cell: Cell) => {
    if (mode !== 'waypoints') {
      return;
    }
    const key = cellKey(cell);
    const existingIdx = waypoints.findIndex((w) => cellKey(w) === key);
    if (existingIdx !== -1) {
      // Remove this waypoint and everything after it
      onWaypointsChange(waypoints.slice(0, existingIdx));
    } else {
      onWaypointsChange([...waypoints, cell]);
    }
  };

  const toggleWall = (a: Cell, b: Cell) => {
    const key = wallKey(a, b);
    if (wallSet.has(key)) {
      onWallsChange(walls.filter(([wa, wb]) => wallKey(wa, wb) !== key));
    } else {
      onWallsChange([...walls, [a, b]]);
    }
  };

  return (
    <div className="grid grid--designer" style={{ width: px, height: px }}>
      {/* Cells */}
      {Array.from({ length: gridSize }, (_, row) =>
        Array.from({ length: gridSize }, (_, col) => {
          const cell = { row, col };
          const key = cellKey(cell);
          const waypointLabel = waypointMap.get(key);
          const isWaypoint = waypointLabel !== undefined;
          const classes = [
            'cell',
            isWaypoint && 'cell--waypoint',
            mode === 'waypoints' && 'cell--clickable',
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
              onClick={() => handleCellClick(cell)}
            >
              {isWaypoint && <span className="cell-label">{waypointLabel}</span>}
            </div>
          );
        })
      )}

      {/* Placed walls */}
      {walls.map(([a, b], i) => {
        const horizontal = a.row !== b.row;
        const top = a.row <= b.row ? a : b;
        const left = a.col <= b.col ? a : b;
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
          );
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
          );
        }
      })}

      {/* Wall hit areas — only rendered in walls mode */}
      {mode === 'walls' &&
        Array.from({ length: gridSize }, (_, row) =>
          Array.from({ length: gridSize - 1 }, (_, col) => {
            const a = { row, col };
            const b = { row, col: col + 1 };
            const active = wallSet.has(wallKey(a, b));
            return (
              <div
                key={`v-${row}-${col}`}
                className={`wall-hit${active ? ' wall-hit--active' : ''}`}
                style={{
                  left: (col + 1) * (CELL_SIZE + GAP) - GAP / 2 - WALL_HIT / 2,
                  top: row * (CELL_SIZE + GAP),
                  width: WALL_HIT,
                  height: CELL_SIZE,
                }}
                onClick={() => toggleWall(a, b)}
              />
            );
          })
        )}

      {mode === 'walls' &&
        Array.from({ length: gridSize - 1 }, (_, row) =>
          Array.from({ length: gridSize }, (_, col) => {
            const a = { row, col };
            const b = { row: row + 1, col };
            const active = wallSet.has(wallKey(a, b));
            return (
              <div
                key={`h-${row}-${col}`}
                className={`wall-hit${active ? ' wall-hit--active' : ''}`}
                style={{
                  left: col * (CELL_SIZE + GAP),
                  top: (row + 1) * (CELL_SIZE + GAP) - GAP / 2 - WALL_HIT / 2,
                  width: CELL_SIZE,
                  height: WALL_HIT,
                }}
                onClick={() => toggleWall(a, b)}
              />
            );
          })
        )}
    </div>
  );
};
