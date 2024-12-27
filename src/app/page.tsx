import MovieSearch from '@/components/movie-search/movie-search';
import { fetchFilters } from '@/lib/api';

import styles from './page.module.css';

const HomePage = async () => {
  const { genres, countries } = await fetchFilters();

  return (
    <main className={styles.page}>
      <MovieSearch genres={genres} countries={countries} />
    </main>
  );
};

export default HomePage;
