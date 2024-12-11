import MovieDetails from '@/components/movie-details/movie-details';
import { fetchMovieDetails } from '@/services/fetchMovieDetails';

import styles from './page.module.css';

type MovieDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const movieId = parseInt((await params).id);
  const movie = await fetchMovieDetails(movieId);

  return (
    <main className={styles.page}>
      <MovieDetails
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
