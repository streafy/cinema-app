import { MovieCollectionResponse } from '@/types/movie';
import { CollectionType } from '@/types/movie-collection';

const BASE_URL = 'https://kinopoiskapiunofficial.tech';
const API_KEY = process.env.API_KEY ?? '';

const DEFAULT_PAGE = 1;
const DEFAULT_TYPE: CollectionType = 'TOP_POPULAR_ALL';

export async function fetchMovieCollection(
  type: CollectionType = DEFAULT_TYPE,
  page: number = DEFAULT_PAGE
) {
  const response = await fetch(
    `${BASE_URL}/api/v2.2/films/collections?type=${type}&page=${page}`,
    {
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60 * 2,
      },
    }
  );
  return ((await response.json()) as MovieCollectionResponse).items;
}
