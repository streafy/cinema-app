'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const FavoriteMoviesProvider = dynamic(
  () =>
    import('@/providers/favorite-movies-provider').then(
      (module) => module.FavoriteMoviesProvider
    ),
  { ssr: false }
);

type FavoriteMoviesLayoutProps = {
  children: ReactNode;
};

const FavoriteMoviesLayout = ({ children }: FavoriteMoviesLayoutProps) => {
  return <FavoriteMoviesProvider>{children}</FavoriteMoviesProvider>;
};

export default FavoriteMoviesLayout;
