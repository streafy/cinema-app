'use client';

import { useFavoriteMovies } from '@/hooks/use-favorite-movies';
import { StarIcon as OutlinedStarIcon } from '@heroicons/react/24/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { MouseEvent, useEffect, useState } from 'react';

import styles from './favorite-icon.module.css';

type FavoriteIconProps = {
  id: number;
};

const FavoriteIcon = ({ id }: FavoriteIconProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { favoriteMovieIds, add, remove } = useFavoriteMovies();
  const alreadyFavorite = favoriteMovieIds.includes(id);

  const handleClick = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    if (alreadyFavorite) {
      remove(id);
    } else {
      add(id);
    }
  };

  if (alreadyFavorite) {
    return (
      <SolidStarIcon
        className={clsx(styles.favoriteIcon, styles.filled)}
        onClick={handleClick}
      />
    );
  }

  return (
    <>
      {isClient && (
        <OutlinedStarIcon
          className={styles.favoriteIcon}
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default FavoriteIcon;
