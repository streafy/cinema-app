import MovieDetails from '@/components/movie-details/movie-details';
import { fetchMovieDetails } from '@/services/fetchMovieDetails';
import { fetchMovies } from '@/services/fetchMovies';

import styles from './page.module.css';

type MovieDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  const movies = await fetchMovies(1);
  return movies.items.map((movie) => ({ id: movie.kinopoiskId?.toString() }));
}

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
