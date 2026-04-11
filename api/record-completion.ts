import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { puzzleId, timeSeconds, flawless, playerUuid } = req.body ?? {};

  if (
    typeof puzzleId !== "string" ||
    puzzleId.length === 0 ||
    typeof timeSeconds !== "number" ||
    timeSeconds <= 0 ||
    typeof flawless !== "boolean" ||
    typeof playerUuid !== "string" ||
    !UUID_RE.test(playerUuid)
  ) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  const sql = neon(process.env.DATABASE_URL!);

  await sql`
    INSERT INTO completions (puzzle_id, player_uuid, time_seconds, flawless)
    VALUES (${puzzleId}, ${playerUuid}, ${timeSeconds}, ${flawless})
  `;

  return res.status(200).json({ ok: true });
}
