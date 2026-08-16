import type { NextConfig } from 'next';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'creative-agency-landing-page';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  turbopack: {
    root: path.resolve(__dirname, '..'),
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
    ],
  },
};

export default nextConfig;
