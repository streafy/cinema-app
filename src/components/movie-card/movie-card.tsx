import Image from 'next/image';

import styles from './movie-card.module.css';

type MovieCardProps = {
  name: string;
  image: string;
  year: string;
};

const MovieCard = ({ name, image, year }: MovieCardProps) => {
  return (
    <div className={styles.movieCard}>
      <Image
        className={styles.image}
        src={image}
        alt=""
        width={180}
        height={270}
      />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.info}>{year}</span>
      </div>
    </div>
  );
};

export default MovieCard;
