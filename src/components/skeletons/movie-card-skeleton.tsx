import styles from './movie-card-skeleton.module.css';

const MovieCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.text}></div>
      <div className={styles.text}></div>
    </div>
  );
};

export default MovieCardSkeleton;
