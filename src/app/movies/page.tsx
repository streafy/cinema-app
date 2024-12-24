import MovieList from '@/components/movie-list/movie-list';
import Pagination from '@/components/pagination/pagination';
import { MovieListSkeleton } from '@/components/skeletons/movie-list-skeleton';
import { fetchFilteredMovies, fetchFilteredMoviesPageCount } from '@/lib/api';
import { Suspense } from 'react';

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

  const searchParamsWithoutPage = new URLSearchParams(searchParamsData);
  searchParamsWithoutPage.delete('page');
  const queryWithoutPage = searchParamsWithoutPage.toString();

  const currentPage = Number(searchParamsData.page) || 1;
  const totalPages = await fetchFilteredMoviesPageCount(queryWithoutPage);
  const displayedPages = Math.min(9, totalPages);

  if (totalPages === 0) {
    return <span>Пусто</span>;
  }

  return (
    <main className={styles.page}>
      <>
        <Suspense key={currentPage} fallback={<MovieListSkeleton />}>
          <MovieList fetchMovieList={async () => fetchFilteredMovies(query)} />
        </Suspense>
        <Pagination totalPages={totalPages} displayedPages={displayedPages} />
      </>
    </main>
  );
};

export default MoviesPage;
