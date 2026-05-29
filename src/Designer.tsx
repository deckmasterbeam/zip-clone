import { useState } from 'react';
import type { Cell, Wall } from './puzzles';
import { DesignerGrid, type DesignerMode } from './DesignerGrid';

const toPuzzleTs = (name: string, gridSize: number, waypoints: Cell[], walls: Wall[]): string => {
  const id = crypto.randomUUID();
  const waypointsStr = waypoints.map((w) => `{ r: ${w.r}, c: ${w.c} }`).join(', ');

  const wallsStr =
    walls.length === 0
      ? ''
      : `\n    walls: [\n${walls
          .map(([a, b]) => `      [{ r: ${a.r}, c: ${a.c} }, { r: ${b.r}, c: ${b.c} }],`)
          .join('\n')}\n    ],`;

  return `{
    id: '${id}',
    name: '${name}',
    gridSize: ${gridSize},
    waypoints: [${waypointsStr}],${wallsStr}
  },`;
};

const MAX_SIZE = 10;
const MIN_SIZE = 2;

export const Designer = ({ onClose }: { onClose: () => void }) => {
  const [gridSize, setGridSize] = useState(4);
  const [waypoints, setWaypoints] = useState<Cell[]>([]);
  const [walls, setWalls] = useState<Wall[]>([]);
  const [mode, setMode] = useState<DesignerMode>('waypoints');
  const [name, setName] = useState('Custom');
  const [copied, setCopied] = useState(false);

  const handleGridSizeChange = (size: number) => {
    setGridSize(size);
    setWaypoints((prev) => prev.filter((w) => w.r < size && w.c < size));
    setWalls((prev) =>
      prev.filter(([a, b]) => a.r < size && a.c < size && b.r < size && b.c < size)
    );
  };

  const copyToClipboard = async () => {
    const src = toPuzzleTs(name, gridSize, waypoints, walls);
    await navigator.clipboard.writeText(src);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hints: Record<DesignerMode, string> = {
    waypoints:
      'Click cells to place waypoints in order. Click an existing waypoint to remove it and all after it.',
    walls: 'Click the gap between two cells to place or remove a wall.',
  };

  return (
    <div className="designer">
      <div className="designer-toolbar">
        <div className="designer-group">
          <span className="designer-label">Size</span>
          <button
            className="tool-btn"
            onClick={() => handleGridSizeChange(gridSize - 1)}
            disabled={gridSize <= MIN_SIZE}
            aria-label="Decrease grid size"
          >
            −
          </button>
          <span className="designer-size-display">
            {gridSize}×{gridSize}
          </span>
          <button
            className="tool-btn"
            onClick={() => handleGridSizeChange(gridSize + 1)}
            disabled={gridSize >= MAX_SIZE}
            aria-label="Increase grid size"
          >
            +
          </button>
        </div>

        <div className="designer-group">
          <span className="designer-label">Mode</span>
          <button
            className={`tool-btn${mode === 'waypoints' ? ' tool-btn--active' : ''}`}
            onClick={() => setMode('waypoints')}
          >
            Waypoints
          </button>
          <button
            className={`tool-btn${mode === 'walls' ? ' tool-btn--active' : ''}`}
            onClick={() => setMode('walls')}
          >
            Walls
          </button>
        </div>

        <div className="designer-group">
          <input
            className="designer-name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Puzzle name"
            aria-label="Puzzle name"
          />
          <button className="tool-btn tool-btn--copy" onClick={copyToClipboard}>
            {copied ? '✓ Copied!' : 'Copy puzzle'}
          </button>
          <button
            className="tool-btn tool-btn--reset-designer"
            onClick={() => {
              setWaypoints([]);
              setWalls([]);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <DesignerGrid
        gridSize={gridSize}
        waypoints={waypoints}
        walls={walls}
        mode={mode}
        onWaypointsChange={setWaypoints}
        onWallsChange={setWalls}
      />

      <p className="designer-hint">{hints[mode]}</p>

      <button className="btn-back" onClick={onClose}>
        ← Back to game
      </button>
    </div>
  );
};
