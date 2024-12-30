import {
  FavoriteMovieIdsContext,
  FavoriteMoviesDispatchContext,
} from '@/contexts/favorite-movies';
import { useContext } from 'react';

export const useFavoriteMovies = () => {
  const favoriteMovieIds = useContext(FavoriteMovieIdsContext);
  const dispatch = useContext(FavoriteMoviesDispatchContext);

  if (dispatch === null) {
    throw new Error('favorite movies dispatch is null');
  }

  return {
    favoriteMovieIds,
    add: (id: number) => dispatch({ type: 'added', id }),
    remove: (id: number) => dispatch({ type: 'removed', id }),
  };
};
