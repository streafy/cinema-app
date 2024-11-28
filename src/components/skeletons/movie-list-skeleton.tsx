import MovieCardSkeleton from '@/components/skeletons/movie-card-skeleton';

import styles from './movie-list-skeleton.module.css';

export const MovieListSkeleton = () => {
  return (
    <div className={styles.list}>
      {[...Array(20)].map((_, index) => (
        <MovieCardSkeleton key={index} />
      ))}
    </div>
  );
};
