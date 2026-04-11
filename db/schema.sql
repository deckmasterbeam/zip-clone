CREATE TABLE IF NOT EXISTS completions (
  id          BIGSERIAL PRIMARY KEY,
  puzzle_id   TEXT        NOT NULL,
  player_uuid UUID        NOT NULL,
  time_seconds FLOAT      NOT NULL,
  flawless    BOOLEAN     NOT NULL,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS completions_puzzle_id_idx ON completions (puzzle_id);
CREATE INDEX IF NOT EXISTS completions_player_uuid_idx ON completions (player_uuid);
