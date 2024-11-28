import { MovieDetails } from '@/types/movie';
import { notFound } from 'next/navigation';

const BASE_URL = 'https://kinopoiskapiunofficial.tech';
const API_KEY = process.env.API_KEY ?? '';

export async function fetchMovieDetails(id: number) {
  const response = await fetch(`${BASE_URL}/api/v2.2/films/${id}`, {
    headers: {
      'X-API-KEY': API_KEY,
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 404) {
    return notFound();
  }

  return (await response.json()) as MovieDetails;
}
