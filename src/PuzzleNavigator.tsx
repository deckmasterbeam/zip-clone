import type { Puzzle } from "./puzzles";
import { formatTime } from "./gameLogic";

function getBestTime(
  puzzleId: string
): { time: number; flawless: boolean } | null {
  try {
    const raw = localStorage.getItem(`zip-record:${puzzleId}`);
    if (!raw) {
      return null;
    }
    const r = JSON.parse(raw) as {
      bestTime: number;
      flawless: boolean;
    };
    return { time: r.bestTime, flawless: r.flawless };
  } catch {
    return null;
  }
}

type Props = {
  puzzles: Puzzle[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

export function PuzzleNavigator({ puzzles, activeIndex, onSelect }: Props) {
  return (
    <select
      className="level-select"
      value={activeIndex}
      onChange={(e) => onSelect(Number(e.target.value))}
      aria-label="Puzzle level"
    >
      {puzzles.map((p, i) => {
        const best = getBestTime(p.id);
        const completed = best !== null;
        const bestTimeStr = completed ? `${formatTime(best!.time)}` : "";
        const icon = completed ? (best!.flawless ? "✦ " : "✓ ") : "";

        return (
          <option key={i} value={i}>
            {i + 1}. {icon} {p.name} {bestTimeStr && `- ${bestTimeStr}`}
          </option>
        );
      })}
    </select>
  );
}
