import MovieDetails from '@/components/movie-details/movie-details';
import { fetchMovieDetails } from '@/lib/api';
import { notFound } from 'next/navigation';

import styles from './page.module.css';

type MovieDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const movieId = parseInt((await params).id);

  if (isNaN(movieId)) {
    return notFound();
  }

  const movie = await fetchMovieDetails(movieId);

  return (
    <main className={styles.page}>
      <MovieDetails
        id={movieId}
        name={movie.nameRu ?? ''}
        image={movie.posterUrl}
        description={movie.description ?? ''}
        genre={movie.genres[0].genre}
        country={movie.countries[0].country}
      />
    </main>
  );
};

export default MovieDetailsPage;
