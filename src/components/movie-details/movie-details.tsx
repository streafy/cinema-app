import Image from 'next/image';

import styles from './movie-details.module.css';

type MovieDetailsProps = {
  name: string;
  image: string;
  description: string;
  genre: string;
  country: string;
};

const MovieDetails = ({
  name,
  image,
  description,
  genre,
  country,
}: MovieDetailsProps) => {
  return (
    <div className={styles.movieDetails}>
      <Image
        className={styles.image}
        src={image}
        alt={name}
        width={630}
        height={945}
      />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.description}>{description}</p>
        <span>Жанр: {genre}</span>
        <span>Страна: {country}</span>
      </div>
    </div>
  );
};

export default MovieDetails;
