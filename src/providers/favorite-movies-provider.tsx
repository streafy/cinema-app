'use client';

import {
  FavoriteMovieIdsContext,
  FavoriteMoviesDispatchContext,
} from '@/contexts/favorite-movies';
import { FavoriteMoviesReducerAction } from '@/types/favorite-movies';
import { ReactNode, useEffect, useReducer } from 'react';

const FAVORITE_MOVIES_KEY = 'favoriteMovieIds';

const initializer = (initialValue: number[]) =>
  JSON.parse(localStorage.getItem(FAVORITE_MOVIES_KEY) || '[]') || initialValue;

type FavoriteMoviesProviderProps = {
  children?: ReactNode;
};

export const FavoriteMoviesProvider = ({
  children,
}: FavoriteMoviesProviderProps) => {
  const [favoriteMovies, dispatch] = useReducer(
    favoriteMoviesReducer,
    [],
    initializer
  );

  useEffect(() => {
    localStorage.setItem(FAVORITE_MOVIES_KEY, JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  return (
    <FavoriteMovieIdsContext.Provider value={favoriteMovies}>
      <FavoriteMoviesDispatchContext.Provider value={dispatch}>
        {children}
      </FavoriteMoviesDispatchContext.Provider>
    </FavoriteMovieIdsContext.Provider>
  );
};

const favoriteMoviesReducer = (
  favoriteMovieIds: number[],
  action: FavoriteMoviesReducerAction
) => {
  switch (action.type) {
    case 'added':
      if (favoriteMovieIds.includes(action.id)) {
        return favoriteMovieIds;
      }
      return [...favoriteMovieIds, action.id];
    case 'removed':
      return favoriteMovieIds.filter((element) => element !== action.id);
    default:
      throw Error('unsupported action');
  }
};
