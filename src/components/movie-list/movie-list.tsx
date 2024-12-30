import MovieCard from '@/components/movie-card/movie-card';
import { Movie } from '@/types/movie';
import { CollectionType } from '@/types/movie-collection';
import Link from 'next/link';

import styles from './movie-list.module.css';

type MovieListProps = {
  fetchMovieList: () => Promise<Movie[]>;
  collectionType?: CollectionType;
  currentPage?: number;
};

const MovieList = async ({ fetchMovieList }: MovieListProps) => {
  const movies = await fetchMovieList();

  return (
    <div className={styles.movieList}>
      {movies.map((movie) => {
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

export default MovieList;
