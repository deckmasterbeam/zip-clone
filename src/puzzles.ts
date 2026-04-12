export type Cell = { row: number; col: number };

export type Wall = [Cell, Cell];

export type Puzzle = {
  id: string;
  name: string;
  gridSize: number;
  waypoints: Cell[];
  walls?: Wall[];
};

export const PUZZLES: Puzzle[] = [
  {
    id: '511b1b26-c2aa-44b1-848d-89b90634bd1a',
    name: 'Apr 11, 2026 #390',
    gridSize: 8,
    waypoints: [
      { row: 5, col: 2 },
      { row: 5, col: 3 },
      { row: 4, col: 2 },
      { row: 3, col: 2 },
      { row: 2, col: 4 },
      { row: 2, col: 5 },
      { row: 3, col: 5 },
      { row: 4, col: 5 },
      { row: 6, col: 4 },
      { row: 5, col: 1 },
      { row: 2, col: 2 },
      { row: 6, col: 6 },
      { row: 1, col: 2 },
      { row: 1, col: 1 },
      { row: 6, col: 5 },
      { row: 5, col: 5 },
    ],
  },
  {
    id: 'ae40b2af-4e68-4b2c-a00a-bf98468e773a',
    name: 'Apr 10, 2026 #389',
    gridSize: 6,
    waypoints: [
      { row: 4, col: 2 },
      { row: 4, col: 1 },
      { row: 1, col: 3 },
      { row: 1, col: 4 },
      { row: 3, col: 4 },
      { row: 4, col: 4 },
      { row: 1, col: 2 },
      { row: 2, col: 1 },
      { row: 1, col: 1 },
      { row: 4, col: 3 },
    ],
  },
  {
    id: '05f437b1-3a94-4205-a01e-657015787e63',
    name: 'Apr 9, 2026 #388',
    gridSize: 6,
    waypoints: [
      { row: 3, col: 4 },
      { row: 3, col: 1 },
      { row: 3, col: 0 },
      { row: 2, col: 5 },
      { row: 2, col: 1 },
      { row: 2, col: 4 },
      { row: 2, col: 2 },
    ],
    walls: [
      [
        { row: 4, col: 1 },
        { row: 5, col: 1 },
      ],
      [
        { row: 4, col: 2 },
        { row: 5, col: 2 },
      ],
      [
        { row: 4, col: 3 },
        { row: 5, col: 3 },
      ],
      [
        { row: 4, col: 4 },
        { row: 5, col: 4 },
      ],
    ],
  },
  {
    id: 'fd50d48a-0e4a-4ebf-b6c1-7938f108c767',
    name: 'Apr 8, 2026 #387',
    gridSize: 6,
    waypoints: [
      { row: 3, col: 1 },
      { row: 4, col: 2 },
      { row: 2, col: 3 },
      { row: 1, col: 3 },
      { row: 2, col: 4 },
      { row: 3, col: 2 },
    ],
    walls: [
      [
        { row: 0, col: 1 },
        { row: 1, col: 1 },
      ],
      [
        { row: 1, col: 0 },
        { row: 1, col: 1 },
      ],
      [
        { row: 2, col: 0 },
        { row: 2, col: 1 },
      ],
      [
        { row: 2, col: 1 },
        { row: 3, col: 1 },
      ],
      [
        { row: 2, col: 2 },
        { row: 3, col: 2 },
      ],
      [
        { row: 2, col: 3 },
        { row: 3, col: 3 },
      ],
      [
        { row: 2, col: 4 },
        { row: 3, col: 4 },
      ],
      [
        { row: 3, col: 4 },
        { row: 3, col: 5 },
      ],
      [
        { row: 4, col: 4 },
        { row: 4, col: 5 },
      ],
      [
        { row: 4, col: 4 },
        { row: 5, col: 4 },
      ],
    ],
  },
  {
    id: '70077e9f-a4fa-4a19-aadf-6466e098feef',
    name: 'Apr 7, 2026 #386',
    gridSize: 6,
    waypoints: [
      { row: 4, col: 4 },
      { row: 3, col: 3 },
      { row: 5, col: 5 },
      { row: 2, col: 5 },
      { row: 5, col: 2 },
      { row: 1, col: 4 },
      { row: 4, col: 1 },
    ],
    walls: [
      [
        { row: 1, col: 0 },
        { row: 1, col: 1 },
      ],
      [
        { row: 0, col: 1 },
        { row: 1, col: 1 },
      ],
      [
        { row: 0, col: 2 },
        { row: 1, col: 2 },
      ],
      [
        { row: 0, col: 3 },
        { row: 1, col: 3 },
      ],
      [
        { row: 0, col: 4 },
        { row: 1, col: 4 },
      ],
      [
        { row: 1, col: 4 },
        { row: 1, col: 5 },
      ],
      [
        { row: 2, col: 4 },
        { row: 2, col: 5 },
      ],
      [
        { row: 2, col: 4 },
        { row: 3, col: 4 },
      ],
      [
        { row: 2, col: 3 },
        { row: 3, col: 3 },
      ],
      [
        { row: 3, col: 2 },
        { row: 3, col: 3 },
      ],
      [
        { row: 4, col: 2 },
        { row: 4, col: 3 },
      ],
    ],
  },
  {
    id: '14663c34-5eb5-48ce-8c18-d95a03633518',
    name: 'Apr 6, 2026 #385',
    gridSize: 6,
    waypoints: [
      { row: 3, col: 2 },
      { row: 4, col: 4 },
      { row: 2, col: 3 },
      { row: 1, col: 1 },
    ],
    walls: [
      [
        { row: 2, col: 2 },
        { row: 3, col: 2 },
      ],
      [
        { row: 2, col: 3 },
        { row: 3, col: 3 },
      ],
      [
        { row: 2, col: 4 },
        { row: 3, col: 4 },
      ],
      [
        { row: 3, col: 4 },
        { row: 3, col: 5 },
      ],
      [
        { row: 4, col: 4 },
        { row: 4, col: 5 },
      ],
      [
        { row: 4, col: 4 },
        { row: 5, col: 4 },
      ],
      [
        { row: 4, col: 3 },
        { row: 5, col: 3 },
      ],
      [
        { row: 4, col: 2 },
        { row: 5, col: 2 },
      ],
      [
        { row: 4, col: 1 },
        { row: 5, col: 1 },
      ],
      [
        { row: 4, col: 0 },
        { row: 4, col: 1 },
      ],
      [
        { row: 3, col: 0 },
        { row: 3, col: 1 },
      ],
      [
        { row: 2, col: 0 },
        { row: 2, col: 1 },
      ],
      [
        { row: 1, col: 0 },
        { row: 1, col: 1 },
      ],
      [
        { row: 0, col: 1 },
        { row: 1, col: 1 },
      ],
      [
        { row: 0, col: 2 },
        { row: 1, col: 2 },
      ],
      [
        { row: 0, col: 3 },
        { row: 1, col: 3 },
      ],
      [
        { row: 0, col: 4 },
        { row: 1, col: 4 },
      ],
    ],
  },
  {
    id: 'a2eb83cb-6abf-44bf-a47b-90115fe32b0e',
    name: 'Apr 5, 2026 #384',
    gridSize: 7,
    waypoints: [
      { row: 2, col: 0 },
      { row: 1, col: 1 },
      { row: 0, col: 2 },
      { row: 1, col: 5 },
      { row: 0, col: 4 },
      { row: 2, col: 6 },
      { row: 4, col: 0 },
      { row: 6, col: 2 },
      { row: 5, col: 1 },
      { row: 4, col: 6 },
      { row: 6, col: 4 },
      { row: 5, col: 5 },
    ],
    walls: [
      [
        { row: 1, col: 3 },
        { row: 2, col: 3 },
      ],
      [
        { row: 1, col: 3 },
        { row: 1, col: 4 },
      ],
      [
        { row: 5, col: 2 },
        { row: 5, col: 3 },
      ],
      [
        { row: 4, col: 3 },
        { row: 5, col: 3 },
      ],
    ],
  },
  {
    id: '5b61839a-1581-4e64-b9c5-80458c209e2e',
    name: 'Apr 4, 2026 #383',
    gridSize: 7,
    waypoints: [
      { row: 2, col: 6 },
      { row: 1, col: 5 },
      { row: 6, col: 6 },
      { row: 5, col: 1 },
      { row: 4, col: 0 },
      { row: 0, col: 0 },
    ],
    walls: [
      [
        { row: 0, col: 3 },
        { row: 1, col: 3 },
      ],
      [
        { row: 2, col: 3 },
        { row: 2, col: 4 },
      ],
      [
        { row: 2, col: 2 },
        { row: 2, col: 3 },
      ],
      [
        { row: 1, col: 4 },
        { row: 1, col: 5 },
      ],
      [
        { row: 2, col: 4 },
        { row: 2, col: 5 },
      ],
      [
        { row: 1, col: 1 },
        { row: 1, col: 2 },
      ],
      [
        { row: 2, col: 1 },
        { row: 2, col: 2 },
      ],
      [
        { row: 3, col: 1 },
        { row: 3, col: 2 },
      ],
      [
        { row: 3, col: 2 },
        { row: 3, col: 3 },
      ],
      [
        { row: 3, col: 3 },
        { row: 3, col: 4 },
      ],
      [
        { row: 3, col: 4 },
        { row: 3, col: 5 },
      ],
      [
        { row: 4, col: 4 },
        { row: 4, col: 5 },
      ],
      [
        { row: 4, col: 3 },
        { row: 4, col: 4 },
      ],
      [
        { row: 4, col: 2 },
        { row: 4, col: 3 },
      ],
      [
        { row: 4, col: 1 },
        { row: 4, col: 2 },
      ],
      [
        { row: 5, col: 1 },
        { row: 5, col: 2 },
      ],
      [
        { row: 5, col: 3 },
        { row: 6, col: 3 },
      ],
      [
        { row: 5, col: 4 },
        { row: 5, col: 5 },
      ],
    ],
  },
  {
    id: '78d3059c-e796-4f67-ac8f-5eb387e71d0c',
    name: 'Apr 3, 2026 #382',
    gridSize: 6,
    waypoints: [
      { row: 0, col: 0 },
      { row: 5, col: 5 },
      { row: 1, col: 4 },
      { row: 1, col: 1 },
      { row: 2, col: 3 },
      { row: 2, col: 2 },
      { row: 4, col: 1 },
      { row: 4, col: 4 },
      { row: 3, col: 3 },
      { row: 3, col: 2 },
    ],
  },
  {
    id: '1d755f3b-8fbc-473a-bf01-306cf28d64aa',
    name: 'Apr 2, 2026 #381',
    gridSize: 6,
    waypoints: [
      { row: 3, col: 2 },
      { row: 2, col: 3 },
      { row: 3, col: 1 },
      { row: 4, col: 2 },
      { row: 1, col: 2 },
      { row: 4, col: 3 },
      { row: 2, col: 4 },
      { row: 1, col: 3 },
    ],
  },
  {
    id: 'd8b659f8-c8f8-4c5a-99f2-aef1e8a0f7bc',
    name: 'Apr 1, 2026 #380',
    gridSize: 6,
    waypoints: [
      { row: 1, col: 2 },
      { row: 3, col: 4 },
      { row: 1, col: 1 },
      { row: 2, col: 1 },
      { row: 4, col: 4 },
      { row: 4, col: 3 },
      { row: 3, col: 3 },
      { row: 2, col: 2 },
    ],
    walls: [
      [
        { row: 1, col: 2 },
        { row: 2, col: 2 },
      ],
      [
        { row: 0, col: 1 },
        { row: 1, col: 1 },
      ],
      [
        { row: 0, col: 2 },
        { row: 1, col: 2 },
      ],
      [
        { row: 0, col: 3 },
        { row: 1, col: 3 },
      ],
      [
        { row: 0, col: 4 },
        { row: 1, col: 4 },
      ],
      [
        { row: 2, col: 3 },
        { row: 2, col: 4 },
      ],
      [
        { row: 3, col: 1 },
        { row: 3, col: 2 },
      ],
      [
        { row: 3, col: 3 },
        { row: 4, col: 3 },
      ],
      [
        { row: 4, col: 4 },
        { row: 5, col: 4 },
      ],
      [
        { row: 4, col: 3 },
        { row: 5, col: 3 },
      ],
      [
        { row: 4, col: 2 },
        { row: 5, col: 2 },
      ],
      [
        { row: 4, col: 1 },
        { row: 5, col: 1 },
      ],
    ],
  },
  {
    id: 'c5fbb76a-a092-4251-9018-f52eff82503b',
    name: 'Mar 31, 2026 #379',
    gridSize: 6,
    waypoints: [
      { row: 1, col: 2 },
      { row: 3, col: 4 },
      { row: 1, col: 1 },
      { row: 2, col: 1 },
      { row: 4, col: 4 },
      { row: 4, col: 3 },
      { row: 3, col: 3 },
      { row: 2, col: 2 },
    ],
    walls: [
      [
        { row: 0, col: 1 },
        { row: 1, col: 1 },
      ],
      [
        { row: 0, col: 2 },
        { row: 1, col: 2 },
      ],
      [
        { row: 0, col: 3 },
        { row: 1, col: 3 },
      ],
      [
        { row: 0, col: 4 },
        { row: 1, col: 4 },
      ],
      [
        { row: 1, col: 2 },
        { row: 2, col: 2 },
      ],
      [
        { row: 2, col: 3 },
        { row: 2, col: 4 },
      ],
      [
        { row: 3, col: 3 },
        { row: 4, col: 3 },
      ],
      [
        { row: 3, col: 1 },
        { row: 3, col: 2 },
      ],
      [
        { row: 4, col: 1 },
        { row: 5, col: 1 },
      ],
      [
        { row: 4, col: 2 },
        { row: 5, col: 2 },
      ],
      [
        { row: 4, col: 3 },
        { row: 5, col: 3 },
      ],
      [
        { row: 4, col: 4 },
        { row: 5, col: 4 },
      ],
    ],
  },
  {
    id: '85081611-9b17-4e7c-be5a-2c87d21e4817',
    name: 'Mar 30, 2026 #378',
    gridSize: 6,
    waypoints: [
      { row: 2, col: 0 },
      { row: 5, col: 5 },
      { row: 0, col: 2 },
      { row: 1, col: 1 },
      { row: 2, col: 1 },
      { row: 2, col: 2 },
      { row: 3, col: 3 },
      { row: 4, col: 4 },
      { row: 1, col: 2 },
    ],
    walls: [
      [
        { row: 3, col: 2 },
        { row: 4, col: 2 },
      ],
      [
        { row: 3, col: 3 },
        { row: 4, col: 3 },
      ],
      [
        { row: 2, col: 3 },
        { row: 2, col: 4 },
      ],
      [
        { row: 3, col: 3 },
        { row: 3, col: 4 },
      ],
      [
        { row: 4, col: 2 },
        { row: 5, col: 2 },
      ],
      [
        { row: 4, col: 3 },
        { row: 5, col: 3 },
      ],
      [
        { row: 4, col: 4 },
        { row: 5, col: 4 },
      ],
      [
        { row: 4, col: 4 },
        { row: 4, col: 5 },
      ],
      [
        { row: 3, col: 4 },
        { row: 3, col: 5 },
      ],
      [
        { row: 2, col: 4 },
        { row: 2, col: 5 },
      ],
    ],
  },
  {
    id: '8075a4b3-9ff0-419d-a322-2c4156ba8a7b',
    name: 'Mar 29, 2026 #377',
    gridSize: 6,
    waypoints: [
      { row: 2, col: 5 },
      { row: 3, col: 0 },
      { row: 4, col: 2 },
      { row: 1, col: 3 },
    ],
    walls: [
      [
        { row: 1, col: 3 },
        { row: 1, col: 4 },
      ],
      [
        { row: 0, col: 3 },
        { row: 1, col: 3 },
      ],
      [
        { row: 0, col: 2 },
        { row: 1, col: 2 },
      ],
      [
        { row: 1, col: 1 },
        { row: 1, col: 2 },
      ],
      [
        { row: 2, col: 1 },
        { row: 2, col: 2 },
      ],
      [
        { row: 2, col: 2 },
        { row: 2, col: 3 },
      ],
      [
        { row: 3, col: 2 },
        { row: 3, col: 3 },
      ],
      [
        { row: 4, col: 1 },
        { row: 4, col: 2 },
      ],
      [
        { row: 4, col: 2 },
        { row: 5, col: 2 },
      ],
      [
        { row: 4, col: 3 },
        { row: 5, col: 3 },
      ],
      [
        { row: 4, col: 3 },
        { row: 4, col: 4 },
      ],
      [
        { row: 3, col: 3 },
        { row: 3, col: 4 },
      ],
    ],
  },
  {
    id: '5920a67c-44ad-4fde-91e5-baae7158c07f',
    name: 'Mar 28, 2026 #376',
    gridSize: 7,
    waypoints: [
      { row: 0, col: 0 },
      { row: 5, col: 4 },
      { row: 5, col: 1 },
      { row: 2, col: 4 },
      { row: 1, col: 2 },
      { row: 4, col: 2 },
      { row: 6, col: 6 },
      { row: 1, col: 5 },
      { row: 3, col: 3 },
    ],
  },
  {
    id: '61145c30-78f1-441e-b794-c09f4a0a736b',
    name: 'Mar 27, 2026 #375',
    gridSize: 7,
    waypoints: [
      { row: 1, col: 3 },
      { row: 3, col: 1 },
      { row: 1, col: 1 },
      { row: 1, col: 2 },
      { row: 1, col: 4 },
      { row: 1, col: 5 },
      { row: 5, col: 5 },
      { row: 3, col: 5 },
      { row: 3, col: 4 },
      { row: 5, col: 4 },
      { row: 5, col: 1 },
      { row: 5, col: 2 },
      { row: 3, col: 2 },
      { row: 3, col: 3 },
      { row: 5, col: 3 },
    ],
    walls: [
      [
        { row: 5, col: 3 },
        { row: 6, col: 3 },
      ],
      [
        { row: 3, col: 1 },
        { row: 4, col: 1 },
      ],
      [
        { row: 0, col: 3 },
        { row: 1, col: 3 },
      ],
      [
        { row: 2, col: 5 },
        { row: 3, col: 5 },
      ],
    ],
  },
  {
    id: '5fd8ef45-2f26-44f7-9b0d-231224e419c3',
    name: 'Mar 26, 2026 #374',
    gridSize: 6,
    waypoints: [
      { row: 3, col: 3 },
      { row: 4, col: 2 },
      { row: 2, col: 2 },
      { row: 1, col: 3 },
      { row: 4, col: 4 },
      { row: 1, col: 2 },
      { row: 1, col: 1 },
      { row: 4, col: 3 },
    ],
  },
  {
    id: 'aed93700-185b-4085-b2ee-0f61f0055302',
    name: 'Mar 25, 2026 #373',
    gridSize: 6,
    waypoints: [
      { row: 1, col: 1 },
      { row: 1, col: 2 },
      { row: 4, col: 2 },
      { row: 2, col: 4 },
      { row: 3, col: 4 },
      { row: 4, col: 4 },
      { row: 4, col: 3 },
      { row: 1, col: 3 },
      { row: 1, col: 4 },
      { row: 4, col: 1 },
      { row: 3, col: 1 },
      { row: 2, col: 1 },
    ],
  },
  {
    id: '14299c2c-95b6-4551-8f57-032b6bb3f616',
    name: 'Mar 24, 2026 #372',
    gridSize: 6,
    waypoints: [
      { row: 1, col: 1 },
      { row: 1, col: 4 },
      { row: 0, col: 5 },
      { row: 4, col: 4 },
      { row: 3, col: 5 },
      { row: 5, col: 2 },
      { row: 5, col: 0 },
      { row: 4, col: 1 },
      { row: 2, col: 0 },
      { row: 0, col: 3 },
    ],
    walls: [
      [
        { row: 2, col: 2 },
        { row: 2, col: 3 },
      ],
      [
        { row: 3, col: 2 },
        { row: 3, col: 3 },
      ],
      [
        { row: 2, col: 1 },
        { row: 3, col: 1 },
      ],
      [
        { row: 2, col: 0 },
        { row: 3, col: 0 },
      ],
      [
        { row: 2, col: 4 },
        { row: 3, col: 4 },
      ],
      [
        { row: 2, col: 5 },
        { row: 3, col: 5 },
      ],
    ],
  },
  {
    id: '42d3f369-47a5-41d3-a127-e556da3a5a26',
    name: 'Jan 8, 2026 #295',
    gridSize: 8,
    waypoints: [
      { row: 2, col: 0 },
      { row: 4, col: 0 },
      { row: 6, col: 7 },
      { row: 6, col: 6 },
      { row: 5, col: 7 },
      { row: 3, col: 7 },
      { row: 1, col: 0 },
      { row: 1, col: 1 },
      { row: 2, col: 2 },
      { row: 2, col: 6 },
      { row: 4, col: 6 },
      { row: 5, col: 5 },
      { row: 5, col: 1 },
      { row: 5, col: 2 },
      { row: 4, col: 2 },
      { row: 3, col: 1 },
      { row: 3, col: 5 },
      { row: 2, col: 5 },
    ],
    walls: [
      [
        { row: 3, col: 3 },
        { row: 4, col: 3 },
      ],
      [
        { row: 3, col: 4 },
        { row: 4, col: 4 },
      ],
      [
        { row: 3, col: 3 },
        { row: 3, col: 4 },
      ],
      [
        { row: 4, col: 3 },
        { row: 4, col: 4 },
      ],
    ],
  },
];
