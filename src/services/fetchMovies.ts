import { MovieCollectionResponse } from '@/types/movie';

const BASE_URL = 'https://kinopoiskapiunofficial.tech';
const API_KEY = process.env.API_KEY ?? '';

export async function fetchMovies(page: number) {
  const response = await fetch(
    `${BASE_URL}/api/v2.2/films/collections?page=${page}`,
    {
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    }
  );
  return (await response.json()) as MovieCollectionResponse;
}
