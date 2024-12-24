import { FilteredMoviesResponse } from '@/types/filtered-movies';
import { MovieCollectionResponse } from '@/types/movie';
import { CollectionType } from '@/types/movie-collection';

const BASE_URL = 'https://kinopoiskapiunofficial.tech';
const API_KEY = process.env.API_KEY ?? '';

export const fetchMovieCollectionPageCount = async (type: CollectionType) => {
  const response = await fetch(
    `${BASE_URL}/api/v2.2/films/collections?type=${type}`,
    {
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
      next: { revalidate: 60 * 60 * 2 },
    }
  );
  return ((await response.json()) as MovieCollectionResponse).totalPages;
};

export async function fetchFilteredMoviesPageCount(query: string) {
  const response = await fetch(`${BASE_URL}/api/v2.2/films?${query}`, {
    headers: {
      'X-API-KEY': API_KEY,
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
    next: { revalidate: 60 * 60 * 2 },
  });

  return ((await response.json()) as FilteredMoviesResponse).totalPages;
}
