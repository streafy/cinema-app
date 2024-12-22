export type SortBy = 'RATING' | 'NUM_VOTE' | 'YEAR';

export type MovieType =
  | 'FILM'
  | 'TV_SHOW'
  | 'TV_SERIES'
  | 'MINI_SERIES'
  | 'ALL';

export type SearchFormData = {
  [key: string]: FormDataEntryValue;
};
