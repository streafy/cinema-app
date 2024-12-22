import { Country, Genre, MovieType } from '@/types/movie';

export type FilteredMoviesResponse = {
  total: number;
  totalPages: number;
  items: FilteredMoviesItem[];
};

export type FilteredMoviesItem = {
  kinopoiskId?: number;
  imdbId?: string | null;
  nameRu?: string | null;
  nameEn?: string | null;
  nameOriginal?: string | null;
  countries?: Country[];
  genres?: Genre[];
  ratingKinopoisk?: number | null;
  ratingImdb?: number | null;
  year?: string | null;
  type?: MovieType;
  posterUrl?: string;
  posterUrlPreview?: string;
};
