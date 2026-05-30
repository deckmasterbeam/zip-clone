# Zip clone

This project recreates zip

## Designer

When runnning locally, a designer mode is avalible so that I can design/recreate game boards and then save them into the puzzle list

## Todos

- [ ] **Screenshot-to-puzzle parser** — Python script using OpenCV + pytesseract that takes a screenshot of a completed LinkedIn Zip game and outputs a `Puzzle` object. Approach: detect grid bounding box → warp to square → divide into cells → OCR digits for waypoints → sample gap strips between adjacent cells for walls.

- [ ] Make a leaderboard

- [ ] Get all Zips into the puzzle list. All the zips since Febuary are stored here: 
  - (this list is incomplete, I think they only expose the last N most recent puzzles?) https://daily-logic-puzzles.vercel.app/linkedin-games/zip-fe-today
  - (much better, fuller history) https://www.youtube.com/playlist?list=PLLE2dY85AtnfQA-RHK7qynggMLKDMHHJ3
  - [ ] 2025
  - [ ] January 2026
  - [ ] Febuary 2026
  - [x] March 2026
  - [In progress] April 2026
  - [In progress] May 2026

- [ ] Rendering wall corners

- [ ] Random mode

- [ ] Challenge mode to see if you can solve all the unique solutions, for the subset of puzzles that have multiple solutions
