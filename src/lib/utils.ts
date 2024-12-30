import { MovieDetails } from '@/types/movie';

export const movieDetailsToMovie = (movieDetails: MovieDetails) => {
  return {
    kinopoiskId: movieDetails.kinopoiskId,
    nameRu: movieDetails.nameRu,
    nameEn: movieDetails.nameEn,
    nameOriginal: movieDetails.nameOriginal,
    countries: movieDetails.countries,
    genres: movieDetails.genres,
    ratingKinopoisk: movieDetails.ratingKinopoisk,
    ratingImbd: movieDetails.ratingImdb,
    year: movieDetails.year?.toString() ?? null,
    type: movieDetails.type,
    posterUrl: movieDetails.posterUrl,
    posterUrlPreview: movieDetails.posterUrlPreview,
  };
};
