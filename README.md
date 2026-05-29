# Zip clone

This project recreates zip

## Designer

When runnning locally, a designer mode is avalible so that I can design/recreate game boards and then save them into the puzzle list

## Todos

- [ ] **Screenshot-to-puzzle parser** — Python script using OpenCV + pytesseract that takes a screenshot of a completed LinkedIn Zip game and outputs a `Puzzle` object. Approach: detect grid bounding box → warp to square → divide into cells → OCR digits for waypoints → sample gap strips between adjacent cells for walls.

- [ ] Make a leaderboard

- [ ] Get all Zips into the puzzle list. All the zips since Febuary are stored here: https://daily-logic-puzzles.vercel.app/linkedin-games/zip-fe-today
    - [ ] 25?
    - [ ] January 26
    - [ ] Febuary 26
    - [X] March 26
    - [In progress] April 26

- [ ] Rendering wall corners
