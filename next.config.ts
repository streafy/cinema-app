import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kinopoiskapiunofficial.tech',
        port: '',
        pathname: '/images/posters/*/*',
      },
    ],
  },
  logging: {
    fetches: { fullUrl: true, hmrRefreshes: true },
  },
};

export default nextConfig;
