export type Cell = { row: number; col: number }

// A wall blocks movement between two adjacent cells.
export type Wall = [Cell, Cell]

export type Puzzle = {
  id: string
  name: string
  gridSize: number
  waypoints: Cell[]
  walls?: Wall[]
}

export const PUZZLES: Puzzle[] = [
  {
    id: 'cc56b61d-a27f-4d94-a591-417e9c15881b',
    name: 'Basic test puzzle',
    gridSize: 3,
    waypoints: [
      { row: 0, col: 0 }, // 1
      { row: 0, col: 2 }, // 2
      { row: 1, col: 1 }, // 3
    ],
  },
  {
    id: 'c9b864f1-f41b-4bba-b204-7cc3987eb232',
    name: 'Jan 6, 2026',
    gridSize: 6,
    waypoints: [
      { row: 2, col: 3 }, // 1
      { row: 3, col: 3 }, // 2
      { row: 3, col: 2 }, // 3
      { row: 4, col: 2 }, // 4
      { row: 3, col: 1 }, // 5
      { row: 4, col: 3 }, // 6
      { row: 3, col: 4 }, // 7
      { row: 2, col: 4 }, // 8
      { row: 1, col: 3 }, // 9
      { row: 2, col: 1 }, // 10
      { row: 1, col: 2 }, // 11
      { row: 2, col: 2 }, // 12
    ],
  },
  {
    id: '42d3f369-47a5-41d3-a127-e556da3a5a26',
    name: 'Jan 8, 2026',
    gridSize: 8,
    waypoints: [
      { row: 2, col: 0 }, // 1
      { row: 4, col: 0 }, // 2
      { row: 6, col: 7 }, // 3
      { row: 6, col: 6 }, // 4
      { row: 5, col: 7 }, // 5
      { row: 3, col: 7 }, // 6
      { row: 1, col: 0 }, // 7
      { row: 1, col: 1 }, // 8
      { row: 2, col: 2 }, // 9
      { row: 2, col: 6 }, // 10
      { row: 4, col: 6 }, // 11
      { row: 5, col: 5 }, // 12
      { row: 5, col: 1 }, // 13
      { row: 5, col: 2 }, // 14
      { row: 4, col: 2 }, // 15
      { row: 3, col: 1 }, // 16
      { row: 3, col: 5 }, // 17
      { row: 2, col: 5 }, // 18
    ],
    walls: [
      [{ row: 3, col: 3 }, { row: 4, col: 3 }],
      [{ row: 3, col: 4 }, { row: 4, col: 4 }],
      [{ row: 3, col: 3 }, { row: 3, col: 4 }],
      [{ row: 4, col: 3 }, { row: 4, col: 4 }],
    ],
  },
  {
    id: 'ae40b2af-4e68-4b2c-a00a-bf98468e773a',
    name: 'Apr 10, 2026',
    gridSize: 6,
    waypoints: [
      { row: 4, col: 2 }, // 1
      { row: 4, col: 1 }, // 2
      { row: 1, col: 3 }, // 3
      { row: 1, col: 4 }, // 4
      { row: 3, col: 4 }, // 5
      { row: 4, col: 4 }, // 6
      { row: 1, col: 2 }, // 7
      { row: 2, col: 1 }, // 8
      { row: 1, col: 1 }, // 9
      { row: 4, col: 3 }, // 10
    ],
  }
]
