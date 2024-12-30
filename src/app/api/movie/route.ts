import { fetchFavoriteMovies } from '@/lib/api';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const favorites = searchParams.get('favorites');

  if (!favorites) {
    return Response.json(null);
  }

  const favoriteMovieIds = favorites.split(',').map((item) => parseInt(item));
  return Response.json(await fetchFavoriteMovies(favoriteMovieIds));
};
