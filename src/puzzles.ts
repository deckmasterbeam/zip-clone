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
    id: '2feaaff6-e7fd-42b7-8188-1951a5b9e23c',
    name: 'Mar 23, 2026 #371',
    gridSize: 7,
    waypoints: [
      { row: 3, col: 3 },
      { row: 1, col: 3 },
      { row: 2, col: 2 },
      { row: 4, col: 4 },
      { row: 5, col: 3 },
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
        { row: 1, col: 3 },
      ],
      [
        { row: 1, col: 1 },
        { row: 2, col: 1 },
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
        { row: 4, col: 1 },
        { row: 4, col: 2 },
      ],
      [
        { row: 4, col: 2 },
        { row: 5, col: 2 },
      ],
      [
        { row: 3, col: 0 },
        { row: 3, col: 1 },
      ],
      [
        { row: 4, col: 0 },
        { row: 4, col: 1 },
      ],
      [
        { row: 5, col: 0 },
        { row: 5, col: 1 },
      ],
      [
        { row: 5, col: 1 },
        { row: 6, col: 1 },
      ],
      [
        { row: 5, col: 2 },
        { row: 6, col: 2 },
      ],
      [
        { row: 5, col: 3 },
        { row: 6, col: 3 },
      ],
      [
        { row: 5, col: 3 },
        { row: 5, col: 4 },
      ],
      [
        { row: 5, col: 4 },
        { row: 6, col: 4 },
      ],
      [
        { row: 5, col: 5 },
        { row: 6, col: 5 },
      ],
      [
        { row: 4, col: 5 },
        { row: 5, col: 5 },
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
      [
        { row: 1, col: 4 },
        { row: 2, col: 4 },
      ],
      [
        { row: 0, col: 5 },
        { row: 1, col: 5 },
      ],
      [
        { row: 1, col: 5 },
        { row: 1, col: 6 },
      ],
      [
        { row: 2, col: 5 },
        { row: 2, col: 6 },
      ],
      [
        { row: 3, col: 5 },
        { row: 3, col: 6 },
      ],
      [
        { row: 2, col: 3 },
        { row: 3, col: 3 },
      ],
      [
        { row: 3, col: 3 },
        { row: 4, col: 3 },
      ],
    ],
  },
  {
    id: '04f08605-3bc6-4884-8106-bf1abf0137fa',
    name: 'Mar 22, 2026 #370',
    gridSize: 7,
    waypoints: [
      { row: 5, col: 5 },
      { row: 4, col: 6 },
      { row: 2, col: 0 },
      { row: 3, col: 4 },
      { row: 5, col: 3 },
      { row: 1, col: 3 },
      { row: 3, col: 2 },
      { row: 1, col: 1 },
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
        { row: 1, col: 1 },
        { row: 1, col: 2 },
      ],
      [
        { row: 2, col: 1 },
        { row: 2, col: 2 },
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
        { row: 5, col: 1 },
        { row: 6, col: 1 },
      ],
      [
        { row: 5, col: 2 },
        { row: 6, col: 2 },
      ],
      [
        { row: 4, col: 4 },
        { row: 4, col: 5 },
      ],
      [
        { row: 5, col: 4 },
        { row: 5, col: 5 },
      ],
      [
        { row: 5, col: 4 },
        { row: 6, col: 4 },
      ],
      [
        { row: 5, col: 5 },
        { row: 6, col: 5 },
      ],
      [
        { row: 2, col: 4 },
        { row: 2, col: 5 },
      ],
      [
        { row: 1, col: 4 },
        { row: 1, col: 5 },
      ],
      [
        { row: 0, col: 4 },
        { row: 1, col: 4 },
      ],
      [
        { row: 0, col: 5 },
        { row: 1, col: 5 },
      ],
    ],
  },
  {
    id: 'bac8b822-826c-4cf8-b250-c10746c960dd',
    name: 'Mar 21, 2026 #369',
    gridSize: 6,
    waypoints: [
      { row: 1, col: 3 },
      { row: 4, col: 3 },
      { row: 4, col: 4 },
      { row: 1, col: 4 },
      { row: 1, col: 2 },
      { row: 4, col: 2 },
      { row: 1, col: 1 },
      { row: 4, col: 1 },
    ],
  },
  {
    id: 'eeb0b467-d6b0-489f-b89d-af8b67fb2fd4',
    name: 'Mar 20, 2026 #368',
    gridSize: 7,
    waypoints: [
      { row: 3, col: 3 },
      { row: 3, col: 4 },
      { row: 4, col: 3 },
      { row: 3, col: 2 },
      { row: 2, col: 1 },
      { row: 1, col: 5 },
      { row: 1, col: 1 },
      { row: 1, col: 3 },
      { row: 2, col: 3 },
      { row: 2, col: 5 },
      { row: 3, col: 5 },
      { row: 5, col: 3 },
      { row: 3, col: 1 },
    ],
  },
  {
    id: '56d0f967-310d-4754-9e4a-47951aed9e4f',
    name: 'Mar 19, 2026 #367',
    gridSize: 6,
    waypoints: [
      { row: 2, col: 5 },
      { row: 5, col: 5 },
      { row: 4, col: 2 },
      { row: 4, col: 4 },
      { row: 3, col: 3 },
      { row: 0, col: 4 },
      { row: 1, col: 3 },
      { row: 0, col: 0 },
      { row: 1, col: 1 },
      { row: 3, col: 0 },
      { row: 5, col: 1 },
      { row: 2, col: 2 },
    ],
  },
  {
    id: '378059b0-dbe4-4930-95e8-f442031e4621',
    name: 'Mar 18, 2026 #366',
    gridSize: 8,
    waypoints: [
      { row: 5, col: 1 },
      { row: 0, col: 1 },
      { row: 0, col: 4 },
      { row: 7, col: 6 },
      { row: 1, col: 6 },
      { row: 7, col: 3 },
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
        { row: 3, col: 0 },
        { row: 3, col: 1 },
      ],
      [
        { row: 4, col: 0 },
        { row: 4, col: 1 },
      ],
      [
        { row: 4, col: 2 },
        { row: 5, col: 2 },
      ],
      [
        { row: 4, col: 2 },
        { row: 4, col: 3 },
      ],
      [
        { row: 3, col: 2 },
        { row: 3, col: 3 },
      ],
      [
        { row: 2, col: 2 },
        { row: 2, col: 3 },
      ],
      [
        { row: 1, col: 2 },
        { row: 1, col: 3 },
      ],
      [
        { row: 1, col: 5 },
        { row: 2, col: 5 },
      ],
      [
        { row: 2, col: 4 },
        { row: 2, col: 5 },
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
        { row: 5, col: 4 },
        { row: 5, col: 5 },
      ],
      [
        { row: 6, col: 4 },
        { row: 6, col: 5 },
      ],
      [
        { row: 6, col: 6 },
        { row: 7, col: 6 },
      ],
      [
        { row: 6, col: 6 },
        { row: 6, col: 7 },
      ],
      [
        { row: 5, col: 6 },
        { row: 5, col: 7 },
      ],
      [
        { row: 4, col: 6 },
        { row: 4, col: 7 },
      ],
      [
        { row: 3, col: 6 },
        { row: 3, col: 7 },
      ],
      [
        { row: 2, col: 6 },
        { row: 2, col: 7 },
      ],
    ],
  },
  {
    id: 'd13155db-12a2-40e9-a884-43d5924cdb71',
    name: 'Mar 17, 2026 #365',
    gridSize: 6,
    waypoints: [
      { row: 1, col: 2 },
      { row: 3, col: 4 },
      { row: 4, col: 2 },
      { row: 4, col: 3 },
      { row: 2, col: 1 },
      { row: 1, col: 3 },
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
        { row: 1, col: 1 },
        { row: 2, col: 1 },
      ],
      [
        { row: 1, col: 2 },
        { row: 2, col: 2 },
      ],
      [
        { row: 1, col: 3 },
        { row: 2, col: 3 },
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
        { row: 3, col: 2 },
        { row: 4, col: 2 },
      ],
      [
        { row: 3, col: 3 },
        { row: 4, col: 3 },
      ],
      [
        { row: 3, col: 4 },
        { row: 4, col: 4 },
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
    id: '5accaa33-bacd-4357-b6cc-6ccb75f36674',
    name: 'Mar 16, 2026 #364',
    gridSize: 6,
    waypoints: [
      { row: 2, col: 2 },
      { row: 1, col: 1 },
      { row: 4, col: 1 },
      { row: 4, col: 4 },
      { row: 3, col: 3 },
      { row: 1, col: 4 },
    ],
    walls: [
      [
        { row: 0, col: 4 },
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
    id: '1f2bc0cc-571f-4e8c-91af-5fb977399de1',
    name: 'Mar 15, 2026 #363',
    gridSize: 8,
    waypoints: [
      { row: 6, col: 2 },
      { row: 7, col: 0 },
      { row: 7, col: 7 },
      { row: 5, col: 5 },
      { row: 5, col: 6 },
      { row: 0, col: 7 },
      { row: 0, col: 0 },
      { row: 5, col: 2 },
      { row: 6, col: 3 },
      { row: 4, col: 6 },
      { row: 1, col: 5 },
      { row: 2, col: 5 },
      { row: 3, col: 1 },
      { row: 2, col: 2 },
      { row: 1, col: 4 },
      { row: 2, col: 1 },
    ],
  },
  {
    id: 'd3d7c494-e0a2-4f68-a6c7-395819ae7b0e',
    name: 'Mar 14, 2026 #362',
    gridSize: 6,
    waypoints: [
      { row: 1, col: 4 },
      { row: 4, col: 4 },
      { row: 3, col: 5 },
      { row: 0, col: 5 },
      { row: 0, col: 3 },
      { row: 1, col: 1 },
      { row: 0, col: 0 },
      { row: 2, col: 0 },
      { row: 5, col: 0 },
      { row: 4, col: 1 },
      { row: 5, col: 2 },
      { row: 5, col: 5 },
    ],
    walls: [
      [
        { row: 2, col: 2 },
        { row: 3, col: 2 },
      ],
      [
        { row: 2, col: 2 },
        { row: 2, col: 3 },
      ],
      [
        { row: 2, col: 3 },
        { row: 3, col: 3 },
      ],
      [
        { row: 3, col: 2 },
        { row: 3, col: 3 },
      ],
    ],
  },
  {
    id: '975b3244-83fc-48a5-bcb8-3c9eea5e0452',
    name: 'Mar 13, 2026 #361',
    gridSize: 7,
    waypoints: [
      { row: 2, col: 4 },
      { row: 1, col: 4 },
      { row: 4, col: 5 },
      { row: 0, col: 1 },
      { row: 4, col: 4 },
      { row: 6, col: 6 },
      { row: 6, col: 5 },
      { row: 4, col: 2 },
      { row: 2, col: 2 },
      { row: 2, col: 1 },
      { row: 5, col: 2 },
      { row: 0, col: 0 },
    ],
  },
  {
    id: 'd6c5e732-6022-484c-969b-913d9429d678',
    name: 'Mar 12, 2026 #360',
    gridSize: 6,
    waypoints: [
      { row: 1, col: 1 },
      { row: 3, col: 3 },
      { row: 4, col: 4 },
      { row: 2, col: 2 },
      { row: 1, col: 3 },
      { row: 1, col: 4 },
      { row: 4, col: 2 },
      { row: 4, col: 1 },
    ],
    walls: [
      [
        { row: 3, col: 1 },
        { row: 4, col: 1 },
      ],
      [
        { row: 4, col: 2 },
        { row: 5, col: 2 },
      ],
      [
        { row: 4, col: 3 },
        { row: 4, col: 4 },
      ],
      [
        { row: 3, col: 4 },
        { row: 3, col: 5 },
      ],
      [
        { row: 1, col: 4 },
        { row: 2, col: 4 },
      ],
      [
        { row: 0, col: 3 },
        { row: 1, col: 3 },
      ],
      [
        { row: 1, col: 1 },
        { row: 1, col: 2 },
      ],
      [
        { row: 2, col: 0 },
        { row: 2, col: 1 },
      ],
    ],
  },
  {
    id: 'e5a8f04e-8ff8-4cd8-9972-a07890fb6a52',
    name: 'Mar 11, 2026 #359',
    gridSize: 7,
    waypoints: [
      { row: 4, col: 2 },
      { row: 1, col: 1 },
      { row: 0, col: 0 },
      { row: 6, col: 2 },
      { row: 2, col: 4 },
      { row: 0, col: 4 },
      { row: 6, col: 6 },
      { row: 5, col: 5 },
    ],
    walls: [
      [
        { row: 3, col: 0 },
        { row: 3, col: 1 },
      ],
      [
        { row: 4, col: 0 },
        { row: 4, col: 1 },
      ],
      [
        { row: 5, col: 0 },
        { row: 5, col: 1 },
      ],
      [
        { row: 5, col: 1 },
        { row: 6, col: 1 },
      ],
      [
        { row: 5, col: 2 },
        { row: 6, col: 2 },
      ],
      [
        { row: 5, col: 3 },
        { row: 6, col: 3 },
      ],
      [
        { row: 5, col: 3 },
        { row: 5, col: 4 },
      ],
      [
        { row: 4, col: 3 },
        { row: 4, col: 4 },
      ],
      [
        { row: 3, col: 3 },
        { row: 4, col: 3 },
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
        { row: 2, col: 3 },
        { row: 3, col: 3 },
      ],
      [
        { row: 2, col: 2 },
        { row: 2, col: 3 },
      ],
      [
        { row: 1, col: 2 },
        { row: 1, col: 3 },
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
        { row: 0, col: 5 },
        { row: 1, col: 5 },
      ],
      [
        { row: 1, col: 5 },
        { row: 1, col: 6 },
      ],
      [
        { row: 2, col: 5 },
        { row: 2, col: 6 },
      ],
      [
        { row: 1, col: 4 },
        { row: 2, col: 4 },
      ],
      [
        { row: 2, col: 4 },
        { row: 2, col: 5 },
      ],
      [
        { row: 3, col: 5 },
        { row: 3, col: 6 },
      ],
    ],
  },
  {
    id: 'e53624da-4f51-4fa9-acae-5621414610b9',
    name: 'Mar 10, 2026 #358',
    gridSize: 6,
    waypoints: [
      { row: 1, col: 4 },
      { row: 3, col: 4 },
      { row: 4, col: 2 },
      { row: 5, col: 3 },
      { row: 4, col: 4 },
      { row: 2, col: 5 },
      { row: 0, col: 2 },
      { row: 3, col: 0 },
      { row: 4, col: 1 },
      { row: 2, col: 1 },
      { row: 1, col: 3 },
      { row: 1, col: 1 },
    ],
    walls: [
      [
        { row: 3, col: 1 },
        { row: 3, col: 2 },
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
        { row: 2, col: 3 },
        { row: 2, col: 4 },
      ],
    ],
  },
  {
    id: '3ca5efee-27d7-45bb-884d-dcc7da7e723c',
    name: 'Mar 9, 2026 #357',
    gridSize: 6,
    waypoints: [
      { row: 1, col: 2 },
      { row: 2, col: 4 },
      { row: 3, col: 3 },
      { row: 4, col: 3 },
      { row: 2, col: 2 },
      { row: 3, col: 1 },
    ],
    walls: [
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
        { row: 3, col: 0 },
        { row: 3, col: 1 },
      ],
      [
        { row: 4, col: 0 },
        { row: 4, col: 1 },
      ],
      [
        { row: 4, col: 1 },
        { row: 4, col: 2 },
      ],
      [
        { row: 1, col: 1 },
        { row: 1, col: 2 },
      ],
      [
        { row: 1, col: 2 },
        { row: 1, col: 3 },
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
        { row: 4, col: 2 },
        { row: 4, col: 3 },
      ],
      [
        { row: 4, col: 3 },
        { row: 4, col: 4 },
      ],
      [
        { row: 1, col: 3 },
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
        { row: 3, col: 4 },
        { row: 3, col: 5 },
      ],
      [
        { row: 4, col: 4 },
        { row: 4, col: 5 },
      ],
    ],
  },
  {
    id: '6c992ab5-b775-41a7-95dd-9812e7e9201b',
    name: 'Mar 8, 2026 #356',
    gridSize: 7,
    waypoints: [
      { row: 1, col: 1 },
      { row: 1, col: 2 },
      { row: 2, col: 1 },
      { row: 3, col: 3 },
      { row: 2, col: 4 },
      { row: 5, col: 2 },
      { row: 4, col: 1 },
      { row: 4, col: 2 },
      { row: 1, col: 4 },
      { row: 2, col: 5 },
      { row: 4, col: 5 },
      { row: 5, col: 4 },
      { row: 5, col: 5 },
    ],
    walls: [
      [
        { row: 5, col: 0 },
        { row: 5, col: 1 },
      ],
      [
        { row: 5, col: 1 },
        { row: 6, col: 1 },
      ],
      [
        { row: 2, col: 2 },
        { row: 3, col: 2 },
      ],
      [
        { row: 2, col: 2 },
        { row: 2, col: 3 },
      ],
      [
        { row: 4, col: 3 },
        { row: 4, col: 4 },
      ],
      [
        { row: 3, col: 4 },
        { row: 4, col: 4 },
      ],
      [
        { row: 0, col: 5 },
        { row: 1, col: 5 },
      ],
      [
        { row: 1, col: 5 },
        { row: 1, col: 6 },
      ],
    ],
  },
  {
    id: '4a776e9c-9afb-486e-8b51-f2a3232013b7',
    name: 'Mar 7, 2026 #355',
    gridSize: 8,
    waypoints: [
      { row: 4, col: 0 },
      { row: 2, col: 5 },
      { row: 5, col: 5 },
      { row: 6, col: 3 },
      { row: 5, col: 2 },
      { row: 2, col: 2 },
      { row: 0, col: 1 },
      { row: 1, col: 4 },
      { row: 3, col: 7 },
      { row: 7, col: 6 },
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
        { row: 1, col: 2 },
        { row: 1, col: 3 },
      ],
      [
        { row: 1, col: 4 },
        { row: 1, col: 5 },
      ],
      [
        { row: 0, col: 5 },
        { row: 1, col: 5 },
      ],
      [
        { row: 0, col: 6 },
        { row: 1, col: 6 },
      ],
      [
        { row: 1, col: 6 },
        { row: 1, col: 7 },
      ],
      [
        { row: 3, col: 6 },
        { row: 3, col: 7 },
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
        { row: 3, col: 2 },
        { row: 3, col: 3 },
      ],
      [
        { row: 4, col: 2 },
        { row: 4, col: 3 },
      ],
      [
        { row: 4, col: 0 },
        { row: 4, col: 1 },
      ],
      [
        { row: 6, col: 0 },
        { row: 6, col: 1 },
      ],
      [
        { row: 6, col: 1 },
        { row: 7, col: 1 },
      ],
      [
        { row: 6, col: 2 },
        { row: 7, col: 2 },
      ],
      [
        { row: 6, col: 2 },
        { row: 6, col: 3 },
      ],
      [
        { row: 6, col: 4 },
        { row: 6, col: 5 },
      ],
      [
        { row: 6, col: 6 },
        { row: 7, col: 6 },
      ],
      [
        { row: 6, col: 6 },
        { row: 6, col: 7 },
      ],
      [
        { row: 5, col: 6 },
        { row: 5, col: 7 },
      ],
    ],
  },
  {
    id: '5ac36502-4ea1-4afc-a585-d639c0fb9346',
    name: 'Mar 6, 2026 #354',
    gridSize: 7,
    waypoints: [
      { row: 5, col: 3 },
      { row: 5, col: 1 },
      { row: 4, col: 3 },
      { row: 3, col: 3 },
      { row: 3, col: 1 },
      { row: 4, col: 1 },
      { row: 2, col: 5 },
      { row: 3, col: 5 },
      { row: 5, col: 4 },
      { row: 5, col: 5 },
      { row: 4, col: 5 },
      { row: 2, col: 3 },
      { row: 2, col: 1 },
      { row: 1, col: 1 },
      { row: 1, col: 2 },
      { row: 1, col: 3 },
      { row: 1, col: 5 },
    ],
  },
  {
    id: '996e9cec-24fb-4f2e-99fa-0a580cd83d55',
    name: 'Mar 5, 2026 #353',
    gridSize: 6,
    waypoints: [
      { row: 5, col: 1 },
      { row: 3, col: 0 },
      { row: 4, col: 5 },
      { row: 2, col: 5 },
      { row: 4, col: 3 },
      { row: 3, col: 2 },
      { row: 1, col: 0 },
      { row: 1, col: 2 },
      { row: 0, col: 4 },
      { row: 2, col: 3 },
    ],
  },
  {
    id: '6a40145c-6b23-4934-a81a-40494bc158f8',
    name: 'Mar 4, 2026 #352',
    gridSize: 8,
    waypoints: [
      { row: 2, col: 2 },
      { row: 5, col: 5 },
      { row: 2, col: 5 },
      { row: 3, col: 6 },
      { row: 5, col: 2 },
      { row: 4, col: 1 },
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
        { row: 3, col: 0 },
        { row: 3, col: 1 },
      ],
      [
        { row: 3, col: 1 },
        { row: 4, col: 1 },
      ],
      [
        { row: 3, col: 2 },
        { row: 4, col: 2 },
      ],
      [
        { row: 2, col: 1 },
        { row: 2, col: 2 },
      ],
      [
        { row: 2, col: 2 },
        { row: 3, col: 2 },
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
        { row: 1, col: 3 },
        { row: 1, col: 4 },
      ],
      [
        { row: 0, col: 4 },
        { row: 1, col: 4 },
      ],
      [
        { row: 0, col: 5 },
        { row: 1, col: 5 },
      ],
      [
        { row: 0, col: 6 },
        { row: 1, col: 6 },
      ],
      [
        { row: 1, col: 5 },
        { row: 2, col: 5 },
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
        { row: 3, col: 4 },
        { row: 3, col: 5 },
      ],
      [
        { row: 3, col: 5 },
        { row: 4, col: 5 },
      ],
      [
        { row: 3, col: 6 },
        { row: 4, col: 6 },
      ],
      [
        { row: 5, col: 5 },
        { row: 5, col: 6 },
      ],
      [
        { row: 5, col: 6 },
        { row: 5, col: 7 },
      ],
      [
        { row: 6, col: 6 },
        { row: 6, col: 7 },
      ],
      [
        { row: 6, col: 6 },
        { row: 7, col: 6 },
      ],
      [
        { row: 6, col: 5 },
        { row: 7, col: 5 },
      ],
      [
        { row: 6, col: 4 },
        { row: 7, col: 4 },
      ],
      [
        { row: 6, col: 3 },
        { row: 6, col: 4 },
      ],
      [
        { row: 5, col: 3 },
        { row: 5, col: 4 },
      ],
      [
        { row: 4, col: 3 },
        { row: 4, col: 4 },
      ],
      [
        { row: 6, col: 3 },
        { row: 7, col: 3 },
      ],
      [
        { row: 6, col: 2 },
        { row: 7, col: 2 },
      ],
      [
        { row: 6, col: 1 },
        { row: 7, col: 1 },
      ],
      [
        { row: 5, col: 1 },
        { row: 6, col: 1 },
      ],
      [
        { row: 5, col: 2 },
        { row: 6, col: 2 },
      ],
      [
        { row: 5, col: 2 },
        { row: 5, col: 3 },
      ],
      [
        { row: 4, col: 2 },
        { row: 4, col: 3 },
      ],
    ],
  },
  {
    id: 'e7f05207-e8a3-4258-91ea-ff67d8a300a7',
    name: 'Mar 3, 2026 #351',
    gridSize: 6,
    waypoints: [
      { row: 1, col: 2 },
      { row: 4, col: 2 },
      { row: 4, col: 3 },
      { row: 4, col: 4 },
      { row: 4, col: 1 },
      { row: 1, col: 1 },
      { row: 1, col: 4 },
      { row: 1, col: 3 },
    ],
    walls: [
      [
        { row: 2, col: 0 },
        { row: 2, col: 1 },
      ],
      [
        { row: 3, col: 0 },
        { row: 3, col: 1 },
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
        { row: 2, col: 4 },
        { row: 2, col: 5 },
      ],
      [
        { row: 3, col: 4 },
        { row: 3, col: 5 },
      ],
    ],
  },
  {
    id: 'cca885c6-b007-4c34-94cc-a1d08f698c1f',
    name: 'Mar 2, 2026 #350',
    gridSize: 6,
    waypoints: [
      { row: 0, col: 3 },
      { row: 0, col: 2 },
      { row: 0, col: 5 },
      { row: 0, col: 0 },
    ],
    walls: [
      [
        { row: 1, col: 2 },
        { row: 1, col: 3 },
      ],
      [
        { row: 1, col: 3 },
        { row: 1, col: 4 },
      ],
      [
        { row: 2, col: 3 },
        { row: 2, col: 4 },
      ],
      [
        { row: 2, col: 3 },
        { row: 3, col: 3 },
      ],
      [
        { row: 2, col: 2 },
        { row: 3, col: 2 },
      ],
      [
        { row: 2, col: 1 },
        { row: 2, col: 2 },
      ],
      [
        { row: 1, col: 1 },
        { row: 1, col: 2 },
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
        { row: 3, col: 0 },
        { row: 3, col: 1 },
      ],
      [
        { row: 4, col: 0 },
        { row: 4, col: 1 },
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
      [
        { row: 1, col: 4 },
        { row: 1, col: 5 },
      ],
    ],
  },
  {
    id: '3b73f665-0fde-479c-af0a-ed6f0d26cb34',
    name: 'Mar 1, 2026 #349',
    gridSize: 8,
    waypoints: [
      { row: 3, col: 6 },
      { row: 1, col: 3 },
      { row: 1, col: 4 },
      { row: 1, col: 6 },
      { row: 2, col: 6 },
      { row: 3, col: 4 },
      { row: 3, col: 3 },
      { row: 3, col: 1 },
      { row: 2, col: 1 },
      { row: 1, col: 1 },
      { row: 2, col: 3 },
      { row: 2, col: 4 },
    ],
    walls: [
      [
        { row: 4, col: 6 },
        { row: 4, col: 7 },
      ],
      [
        { row: 5, col: 6 },
        { row: 5, col: 7 },
      ],
      [
        { row: 6, col: 6 },
        { row: 6, col: 7 },
      ],
      [
        { row: 6, col: 5 },
        { row: 6, col: 6 },
      ],
      [
        { row: 5, col: 5 },
        { row: 5, col: 6 },
      ],
      [
        { row: 4, col: 5 },
        { row: 4, col: 6 },
      ],
      [
        { row: 4, col: 4 },
        { row: 4, col: 5 },
      ],
      [
        { row: 5, col: 4 },
        { row: 5, col: 5 },
      ],
      [
        { row: 6, col: 4 },
        { row: 6, col: 5 },
      ],
      [
        { row: 6, col: 2 },
        { row: 6, col: 3 },
      ],
      [
        { row: 5, col: 2 },
        { row: 5, col: 3 },
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
        { row: 6, col: 1 },
        { row: 6, col: 2 },
      ],
      [
        { row: 6, col: 0 },
        { row: 6, col: 1 },
      ],
      [
        { row: 5, col: 0 },
        { row: 5, col: 1 },
      ],
      [
        { row: 4, col: 0 },
        { row: 4, col: 1 },
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
  {
    id: 'c9b864f1-f41b-4bba-b204-7cc3987eb232',
    name: 'Jan 6, 2026 #293',
    gridSize: 6,
    waypoints: [
      { row: 2, col: 3 },
      { row: 3, col: 3 },
      { row: 3, col: 2 },
      { row: 4, col: 2 },
      { row: 3, col: 1 },
      { row: 4, col: 3 },
      { row: 3, col: 4 },
      { row: 2, col: 4 },
      { row: 1, col: 3 },
      { row: 2, col: 1 },
      { row: 1, col: 2 },
      { row: 2, col: 2 },
    ],
  },
];
