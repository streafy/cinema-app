import { FilteredMoviesResponse } from '@/types/filtered-movies';
import { FiltersResponse } from '@/types/filters';
import { MovieCollectionResponse, MovieDetails } from '@/types/movie';
import { CollectionType } from '@/types/movie-collection';
import { notFound } from 'next/navigation';

const BASE_URL = 'https://kinopoiskapiunofficial.tech';
const API_KEY = process.env.API_KEY ?? '';

export async function fetchMovieCollection(type: CollectionType, page: number) {
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
