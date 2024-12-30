import CollectionCard from '@/components/collection-card/collection-card';
import { CollectionData, CollectionType } from '@/types/movie-collection';
import Link from 'next/link';

import styles from './page.module.css';

const CollectionsPage = () => {
  const collectionsData: Record<CollectionType, CollectionData> = {
    TOP_POPULAR_ALL: {
      name: 'Популярные фильмы и сериалы',
      pathname: 'popular-all',
    },
    TOP_POPULAR_MOVIES: {
      name: 'Популярные фильмы',
      pathname: 'popular-movies',
    },
    TOP_250_TV_SHOWS: {
      name: '250 лучших сериалов',
      pathname: 'top250-series',
    },
    TOP_250_MOVIES: {
      name: '250 лучших фильмов',
      pathname: 'top250-movies',
    },
    VAMPIRE_THEME: {
      name: 'Фильмы про вампиров',
      pathname: 'vampire-theme',
    },
    COMICS_THEME: {
      name: 'Фильмы, основанные на комиксах',
      pathname: 'comics-theme',
    },
  };

  const collectionTypes: CollectionType[] = Object.keys(
    collectionsData
  ) as CollectionType[];

  return (
    <div className={styles.page}>
      {collectionTypes.map((type) => (
        <Link
          key={type}
          href={`/collections/${collectionsData[type].pathname}`}
        >
          <CollectionCard name={collectionsData[type].name} />
        </Link>
      ))}
    </div>
  );
};

export default CollectionsPage;
