import FavoriteIcon from '@/components/favorite-icon/favorite-icon';
import Image from 'next/image';

import styles from './movie-card.module.css';

type MovieCardProps = {
  id: number;
  name: string;
  image: string;
  year: string;
};

const MovieCard = ({ id, name, image, year }: MovieCardProps) => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.iconContainer}>
        <FavoriteIcon id={id} />
      </div>
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
