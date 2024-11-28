export type MovieCollectionResponse = {
  total: number;
  totalPages: number;
  items: Movie[];
};

export type Movie = {
  kinopoiskId: number;
  nameRu?: string;
  nameEn?: string;
  nameOriginal?: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk?: number;
  ratingImbd?: number;
  year?: string;
  type: MovieType;
  posterUrl: string;
  posterUrlPreview: string;
};

export type MovieDetails = {
  kinopoiskId: number;
  kinopoiskHDId?: string;
  imdbId?: string;
  nameRu?: string;
  nameEn?: string;
  nameOriginal?: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl?: string;
  logoUrl?: string;
  reviewsCount: number;
  ratingGoodReview?: number;
  ratingGoodReviewVoteCount?: number;
  ratingKinopoisk?: number;
  ratingKinopoiskVoteCount?: number;
  ratingImdb?: number;
  ratingImdbVoteCount?: number;
  ratingFilmCritics?: number;
  ratingFilmCriticsVoteCount?: number;
  ratingAwait?: number;
  ratingAwaitCount?: number;
  ratingRfCritics?: number;
  ratingRfCriticsVoteCount?: number;
  webUrl: string;
  year?: number;
  filmLength?: number;
  slogan?: number;
  description?: string;
  shortDescription?: string;
  editorAnnotation?: string;
  isTicketsAvailable: boolean;
  productionStatus?: ProductionStatus;
  type?: MovieType;
  ratingMpaa?: string;
  ratingAgeLimits?: string;
  hasImax?: boolean;
  has3D?: boolean;
  lastSync: string;
  countries: Country[];
  genres: Genre[];
  startYear?: number;
  endYear?: number;
  serial?: boolean;
  shortFilm?: boolean;
  completed?: boolean;
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
