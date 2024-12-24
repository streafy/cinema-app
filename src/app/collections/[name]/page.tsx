import MovieList from '@/components/movie-list/movie-list';
import Pagination from '@/components/pagination/pagination';
import { MovieListSkeleton } from '@/components/skeletons/movie-list-skeleton';
import { fetchMovieCollectionPageCount } from '@/lib/queries';
import { fetchMovieCollection } from '@/services/fetchMovieCollection';
import { CollectionPathname, CollectionType } from '@/types/movie-collection';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import styles from './page.module.css';

type CollectionPageProps = {
  params: Promise<{
    name: string;
  }>;
  searchParams?: Promise<{ page?: string }>;
};

const CollectionPage = async ({
  params,
  searchParams,
}: CollectionPageProps) => {
  const collectionTypes: Record<CollectionPathname, CollectionType> = {
    'popular-all': 'TOP_POPULAR_ALL',
    'popular-movies': 'TOP_POPULAR_MOVIES',
    'top250-series': 'TOP_250_TV_SHOWS',
    'top250-movies': 'TOP_250_MOVIES',
    'vampire-theme': 'VAMPIRE_THEME',
    'comics-theme': 'COMICS_THEME',
  };
  const pathname = (await params).name as CollectionPathname;

  if (!Object.hasOwn(collectionTypes, pathname)) {
    return notFound();
  }

  const collectionType = collectionTypes[pathname];
  const currentPage = Number((await searchParams)?.page) || 1;
  const totalPages = await fetchMovieCollectionPageCount(collectionType);
  const displayedPages = Math.min(9, totalPages);

  if (totalPages === 0) {
    return <span>Пусто</span>;
  }

  return (
    <div className={styles.page}>
      <>
        <Suspense key={currentPage} fallback={<MovieListSkeleton />}>
          <MovieList
            fetchMovieList={async () =>
              fetchMovieCollection(collectionType, currentPage)
            }
          />
        </Suspense>
        <Pagination totalPages={totalPages} displayedPages={displayedPages} />
      </>
    </div>
  );
};

export default CollectionPage;
