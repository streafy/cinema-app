export type FavoriteMoviesReducerAction =
  | {
      type: 'added';
      id: number;
    }
  | {
      type: 'removed';
      id: number;
    };
