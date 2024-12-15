export type CollectionType =
  | 'TOP_POPULAR_ALL'
  | 'TOP_POPULAR_MOVIES'
  | 'TOP_250_TV_SHOWS'
  | 'TOP_250_MOVIES'
  | 'VAMPIRE_THEME'
  | 'COMICS_THEME';

export type CollectionPathname =
  | 'popular-all'
  | 'popular-movies'
  | 'top250-series'
  | 'top250-movies'
  | 'vampire-theme'
  | 'comics-theme';

export type CollectionData = {
  name: string;
  pathname: CollectionPathname;
};
