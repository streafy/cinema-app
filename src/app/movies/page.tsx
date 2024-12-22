import MovieList from '@/components/movie-list/movie-list';
import Pagination from '@/components/pagination/pagination';
import { fetchFilteredMovies } from '@/services/fetchFilteredMovies';

import styles from './page.module.css';

type MoviesPageProps = {
  searchParams: Promise<{
    keyword?: string;
    countries?: string;
    genres?: string;
    order?: string;
    type?: string;
    ratingFrom?: string;
    ratingTo?: string;
    yearFrom?: string;
    yearTo?: string;
    imdbId?: string;
    page?: string;
  }>;
};

const MoviesPage = async ({ searchParams }: MoviesPageProps) => {
  const searchParamsData = await searchParams;

  const query = new URLSearchParams(searchParamsData).toString();
  const response = await fetchFilteredMovies(query);

  const movies = response.items;
  const totalPages = response.totalPages;
  const totalItems = response.total;

  const displayedPages = Math.min(9, totalPages);

  return (
    <main className={styles.page}>
      {totalItems === 0 && <span>Пусто</span>}
      {totalItems !== 0 && (
        <>
          <MovieList movies={movies} />
          <Pagination totalPages={totalPages} displayedPages={displayedPages} />
        </>
      )}
    </main>
  );
};

export default MoviesPage;
