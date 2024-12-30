'use client';

import { useFavoriteMovies } from '@/hooks/use-favorite-movies';
import { StarIcon as OutlinedStarIcon } from '@heroicons/react/24/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid';

import styles from './add-to-favorites.module.css';

type AddToFavoritesProps = {
  id: number;
};

const AddToFavorites = ({ id }: AddToFavoritesProps) => {
  const { favoriteMovieIds, add, remove } = useFavoriteMovies();

  const alreadyFavorite = favoriteMovieIds.includes(id);

  const handleClick = (id: number) => {
    if (alreadyFavorite) {
      remove(id);
    } else {
      add(id);
    }
  };

  return (
    <button className={styles.addToFavorites} onClick={() => handleClick(id)}>
      {alreadyFavorite ? (
        <>
          Добавлено в избранное
          <SolidStarIcon className={styles.icon} />
        </>
      ) : (
        <>
          Добавить в избранное
          <OutlinedStarIcon className={styles.icon} />
        </>
      )}
    </button>
  );
};

export default AddToFavorites;
