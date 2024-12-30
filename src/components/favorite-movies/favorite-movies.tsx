'use client';

import MovieCard from '@/components/movie-card/movie-card';
import { useFavoriteMovies } from '@/hooks/use-favorite-movies';
import { movieDetailsToMovie } from '@/lib/utils';
import { Movie } from '@/types/movie';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './favorite-movies.module.css';

const FAVORITE_MOVIES_ENDPOINT = 'api/movie';

const FavoriteMovies = () => {
  const { favoriteMovieIds } = useFavoriteMovies();
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const favoritesIsEmpty = favoriteMovieIds.length === 0;

  useEffect(() => {
    if (favoritesIsEmpty) return;

    const urlParams = favoriteMovieIds.join(',');
    fetch(`${FAVORITE_MOVIES_ENDPOINT}/?favorites=${urlParams}`)
      .then((result) => result.json())
      .then((result) => result.map(movieDetailsToMovie))
      .then((result) => setFavorites(result));
  }, [favoriteMovieIds, favoritesIsEmpty]);

  if (favoritesIsEmpty) {
    return <div className={styles.empty}>Пусто</div>;
  }
  return (
    <div className={styles.container}>
      {favorites.map((movie) => {
        if (movie.kinopoiskId === undefined) return;
        return (
          <Link
            className={styles.link}
            key={movie.kinopoiskId}
            href={`/movie/${movie.kinopoiskId?.toString()}`}
          >
            <MovieCard
              id={movie.kinopoiskId}
              name={
                movie.nameRu ??
                movie.nameEn ??
                movie.nameOriginal ??
                'Неизвестный фильм'
              }
              image={movie.posterUrlPreview ?? ''}
              year={movie.year ?? ''}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default FavoriteMovies;
