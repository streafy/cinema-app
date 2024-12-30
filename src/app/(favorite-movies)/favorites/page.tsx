import FavoriteMovies from '@/components/favorite-movies/favorite-movies';

import styles from './page.module.css';

const Page = () => {
  return (
    <div className={styles.page}>
      <FavoriteMovies />
    </div>
  );
};

export default Page;
