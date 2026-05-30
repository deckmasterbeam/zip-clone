import { PUZZLES } from './puzzles';

export const getPuzzleIndexFromUrl = (): number => {
  const id = new URLSearchParams(window.location.search).get('puzzle');
  const i = id ? PUZZLES.findIndex((p) => p.id === id) : -1;
  return i >= 0 ? i : 0;
};

export const setPuzzleInUrl = (index: number): void => {
  const params = new URLSearchParams(window.location.search);
  params.set('puzzle', PUZZLES[index].id);
  window.history.pushState(null, '', `?${params}`);
};
