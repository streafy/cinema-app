import MovieList from '@/components/movie-list/movie-list';
import Pagination from '@/components/pagination/pagination';
import { fetchMovieCollection } from '@/services/fetchMovieCollection';

import styles from './page.module.css';

type HomePageProps = {
  searchParams?: Promise<{ page?: string }>;
};

const HomePage = async (props: HomePageProps) => {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const moviesResponse = await fetchMovieCollection(
    'TOP_250_MOVIES',
    currentPage
  );
  const movies = moviesResponse.items;
  const totalPages = moviesResponse.totalPages;

  const displayedPages = Math.min(9, totalPages);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MovieList movies={movies} />
        <Pagination totalPages={totalPages} displayedPages={displayedPages} />
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export default HomePage;
