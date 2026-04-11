import { getPlayerUUID } from "./playerUUID";

export type PuzzleRecord = { bestTime: number; flawless: boolean };

export const loadRecord = (puzzleId: string): PuzzleRecord | null => {
  try {
    const raw = localStorage.getItem(`zip-record:${puzzleId}`);
    return raw ? (JSON.parse(raw) as PuzzleRecord) : null;
  } catch {
    return null;
  }
}

export const saveRecord = (
  puzzleId: string,
  time: number,
  flawless: boolean
): PuzzleRecord => {
  const prev = loadRecord(puzzleId);
  const record: PuzzleRecord = {
    bestTime: prev ? Math.min(prev.bestTime, time) : time,
    flawless,
  };
  localStorage.setItem(`zip-record:${puzzleId}`, JSON.stringify(record));
  return record;
}

export const saveRecordRemote = (puzzleId: string, elapsed: number, flawless: boolean) => {
  fetch("/api/record-completion", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      puzzleId: puzzleId,
      timeSeconds: elapsed,
      flawless,
      playerUuid: getPlayerUUID(),
    }),
  }).catch(() => {
    /* non-blocking */
  });
}