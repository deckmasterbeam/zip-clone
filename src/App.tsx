import { useState, useEffect, useRef } from 'react';
import './App.css';
import { PUZZLES, type Cell } from './puzzles';
import { checkWon, formatTime, gridPx } from './gameLogic';
import { PuzzleNavigator } from './PuzzleNavigator';
import { GameGrid } from './GameGrid';
import { Designer } from './Designer';
import { DEV } from './env';
import { loadRecord, saveRecord, saveRecordRemote, type PuzzleRecord } from './saveLoadScore';
import { getPuzzleIndexFromUrl, setPuzzleInUrl } from './puzzleUrl';

type AppMode = 'play' | 'designer';

type GameState = 'idle' | 'playing' | 'won';

const useTimer = (running: boolean) => {
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (running) {
      startRef.current = performance.now() - elapsed * 1000;
      const tick = () => {
        setElapsed((performance.now() - startRef.current!) / 1000);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    } else {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    }
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [running]);

  const reset = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }
    startRef.current = null;
    setElapsed(0);
  };

  return { elapsed, reset };
};

const initialPuzzleIndex = getPuzzleIndexFromUrl();

const App = () => {
  const [appMode, setAppMode] = useState<AppMode>('play');
  const [gameState, setGameState] = useState<GameState>('idle');
  const [levelIndex, setLevelIndex] = useState(initialPuzzleIndex);
  const [path, setPath] = useState<Cell[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [record, setRecord] = useState<PuzzleRecord | null>(
    loadRecord(PUZZLES[initialPuzzleIndex].id)
  );
  const hasRetractedRef = useRef(false);
  const gridSizerRef = useRef<HTMLDivElement>(null);
  const [availableWidth, setAvailableWidth] = useState(9999);

  useEffect(() => {
    if (!gridSizerRef.current) {
      return;
    }
    const ro = new ResizeObserver(([e]) => {
      if (e.contentRect.width > 0) setAvailableWidth(e.contentRect.width);
    });
    ro.observe(gridSizerRef.current);
    return () => ro.disconnect();
  }, [appMode]);

  const puzzle = PUZZLES[levelIndex];
  const { gridSize, waypoints } = puzzle;
  const pxSize = gridPx(gridSize);
  const scale = Math.min(1, availableWidth / pxSize);
  const totalCells = gridSize * gridSize;
  const isWon = checkWon(path, totalCells, waypoints[waypoints.length - 1]);

  const { elapsed, reset: resetTimer } = useTimer(gameState === 'playing');

  useEffect(() => {
    if (isWon && gameState === 'playing') {
      setGameState('won');
      const flawless = !hasRetractedRef.current;
      setRecord(saveRecord(puzzle.id, elapsed, flawless));
      if (!DEV) {
        saveRecordRemote(puzzle.id, elapsed, flawless);
      }
    }
  }, [isWon, gameState]);

  const startGame = () => {
    setPath([]);
    setIsDragging(false);
    resetTimer();
    hasRetractedRef.current = false;
    setGameState('playing');
  };

  const selectLevel = (i: number) => {
    setPuzzleInUrl(i);
    setLevelIndex(i);
    setPath([]);
    setIsDragging(false);
    resetTimer();
    setGameState('idle');
    setRecord(loadRecord(PUZZLES[i].id));
  };

  const reset = () => {
    setPath([]);
    setIsDragging(false);
    resetTimer();
    hasRetractedRef.current = false;
    setGameState('idle');
  };

  return (
    <div className="app">
      <div className="card">
        <div className="card-header">
          <h1 className="game-title">Zip</h1>
          <p className="game-desc">Visit every number in order and cover every cell</p>
        </div>

        {appMode === 'play' ? (
          <>
            <PuzzleNavigator puzzles={PUZZLES} activeIndex={levelIndex} onSelect={selectLevel} />

            <div className="timer" aria-live="polite">
              {formatTime(elapsed)}
              {record && (
                <span className="timer-best">
                  Best {formatTime(record.bestTime)}
                  {record.flawless && ` · ✦ Flawless`}
                </span>
              )}
            </div>

            <div ref={gridSizerRef} className="grid-sizer" style={{ height: pxSize * scale }}>
              <div
                className="grid-wrapper"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'top center',
                  width: pxSize,
                  height: pxSize,
                }}
              >
                <GameGrid
                  puzzle={puzzle}
                  path={path}
                  isWon={isWon}
                  isDragging={isDragging}
                  revealed={gameState !== 'idle'}
                  onPathChange={(newPath) => {
                    if (newPath.length < path.length) hasRetractedRef.current = true;
                    setPath(newPath);
                  }}
                  onDragChange={setIsDragging}
                />
                {gameState === 'idle' && (
                  <div className="grid-overlay">
                    <button className="btn-start" onClick={startGame}>
                      Start
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="card-footer">
              {isWon ? (
                <p className="status status--won">Solved!{record?.flawless ? ' ✦ Flawless' : ''}</p>
              ) : (
                <p className="status">
                  {gameState === 'idle' ? '\u00a0' : `${path.length} / ${totalCells} cells`}
                </p>
              )}
              <div className="footer-actions">
                <button className="btn-reset" onClick={reset}>
                  Reset
                </button>
                {DEV && (
                  <button
                    className="btn-designer"
                    onClick={() => {
                      reset();
                      setAppMode('designer');
                    }}
                  >
                    Designer
                  </button>
                )}
              </div>
            </div>
          </>
        ) : DEV ? (
          <Designer onClose={() => setAppMode('play')} />
        ) : null}
      </div>
    </div>
  );
};

export default App;
