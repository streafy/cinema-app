import { FilteredMoviesResponse } from '@/types/filtered-movies';

const BASE_URL = 'https://kinopoiskapiunofficial.tech';
const API_KEY = process.env.API_KEY ?? '';

export async function fetchFilteredMovies(query: string) {
  const response = await fetch(`${BASE_URL}/api/v2.2/films?${query}`, {
    headers: {
      'X-API-KEY': API_KEY,
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
    next: { revalidate: 60 * 60 * 2 },
  });

  return ((await response.json()) as FilteredMoviesResponse).items;
}
