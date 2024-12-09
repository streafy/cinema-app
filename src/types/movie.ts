export type MovieCollectionResponse = {
  total: number;
  totalPages: number;
  items: Movie[];
};

export type Movie = {
  kinopoiskId?: number;
  nameRu?: string | null;
  nameEn?: string | null;
  nameOriginal?: string | null;
  countries?: Country[];
  genres?: Genre[];
  ratingKinopoisk?: number | null;
  ratingImbd?: number | null;
  year?: string | null;
  type?: MovieType;
  posterUrl?: string;
  posterUrlPreview?: string;
};

export type MovieDetails = {
  kinopoiskId: number;
  kinopoiskHDId: string | null;
  imdbId: string | null;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string | null;
  logoUrl: string | null;
  reviewsCount: number;
  ratingGoodReview: number | null;
  ratingGoodReviewVoteCount: number | null;
  ratingKinopoisk: number | null;
  ratingKinopoiskVoteCount: number | null;
  ratingImdb: number | null;
  ratingImdbVoteCount: number | null;
  ratingFilmCritics: number | null;
  ratingFilmCriticsVoteCount: number | null;
  ratingAwait: number | null;
  ratingAwaitCount: number | null;
  ratingRfCritics: number | null;
  ratingRfCriticsVoteCount: number | null;
  webUrl: string;
  year: number | null;
  filmLength: number | null;
  slogan: number | null;
  description: string | null;
  shortDescription: string | null;
  editorAnnotation: string | null;
  isTicketsAvailable: boolean;
  productionStatus: ProductionStatus | null;
  type: MovieType;
  ratingMpaa: string | null;
  ratingAgeLimits: string | null;
  hasImax: boolean | null;
  has3D: boolean | null;
  lastSync: string;
  countries: Country[];
  genres: Genre[];
  startYear: number | null;
  endYear: number | null;
  serial?: boolean | null;
  shortFilm?: boolean | null;
  completed?: boolean | null;
};

export type Country = {
  country: string;
};

export type Genre = {
  genre: string;
};

export type MovieType =
  | 'FILM'
  | 'TV_SHOW'
  | 'VIDEO'
  | 'MINI_SERIES'
  | 'TV_SERIES'
  | 'UNKNOWN';

export type ProductionStatus =
  | 'FILMING'
  | 'PRE_PRODUCTION'
  | 'COMPLETED'
  | 'ANNOUNCED'
  | 'UNKNOWN'
  | 'POST_PRODUCTION ';
