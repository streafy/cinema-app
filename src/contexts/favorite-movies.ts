import { FavoriteMoviesReducerAction } from '@/types/favorite-movies';
import { createContext, Dispatch } from 'react';

export const FavoriteMovieIdsContext = createContext<number[]>([]);
export const FavoriteMoviesDispatchContext =
  createContext<Dispatch<FavoriteMoviesReducerAction> | null>(null);
