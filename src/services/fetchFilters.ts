import { FiltersResponse } from '@/types/filters';

const BASE_URL = 'https://kinopoiskapiunofficial.tech';
const API_KEY = process.env.API_KEY ?? '';

export async function fetchFilters() {
  const response = await fetch(`${BASE_URL}//api/v2.2/films/filters`, {
    headers: {
      'X-API-KEY': API_KEY,
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
  });

  return (await response.json()) as FiltersResponse;
}
