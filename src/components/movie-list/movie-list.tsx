import MovieCard from '@/components/movie-card/movie-card';
import { Movie } from '@/types/movie';
import Link from 'next/link';

import styles from './movie-list.module.css';

type MovieListProps = {
  movies: Movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <Link
          className={styles.link}
          key={movie.kinopoiskId}
          href={`/movie/${movie.kinopoiskId?.toString()}`}
        >
          <MovieCard
            name={movie.nameRu ?? ''}
            image={movie.posterUrlPreview ?? ''}
            year={movie.year ?? ''}
          />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
