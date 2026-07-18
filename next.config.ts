import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dipanjanmurmu.wordpress.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
