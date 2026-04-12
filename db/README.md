# Database Setup

The app uses a Neon Postgres database connected through Vercel.

## 1. Create the database

In the [Vercel dashboard](https://vercel.com/dashboard):

1. Go to **Storage** → **Create Database**
2. Choose **Postgres (powered by Neon)**
3. Name it (e.g. `zip-player`) and select a region close to your deployment
4. Click **Create & Continue**, then connect it to your `zip-player` project

This automatically adds `DATABASE_URL` (and several `POSTGRES_*` aliases) to your project's environment variables.

## 2. Run the schema

Open the **Neon SQL Editor** (linked from the Vercel Storage dashboard) and paste the contents of `schema.sql`, then run it.

Alternatively, pull the env vars locally and run it with `psql`:

```sh
vercel env pull .env.local
psql $DATABASE_URL -f db/schema.sql
```

## 3. Local development

Use `vercel dev` instead of `npm run dev` so the `api/` serverless functions run and `DATABASE_URL` is injected from your linked project:

```sh
npx vercel dev
```

## Schema reference

| Column         | Type          | Description                                  |
| -------------- | ------------- | -------------------------------------------- |
| `id`           | `BIGSERIAL`   | Auto-incrementing primary key                |
| `puzzle_id`    | `TEXT`        | UUID of the puzzle from `puzzles.ts`         |
| `player_uuid`  | `UUID`        | Anonymous player ID stored in `localStorage` |
| `time_seconds` | `FLOAT`       | Completion time in seconds                   |
| `flawless`     | `BOOLEAN`     | `true` if the path was never retracted       |
| `completed_at` | `TIMESTAMPTZ` | Server-side timestamp, defaults to `NOW()`   |
