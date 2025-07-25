import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix for Vercel deployment
  // basePath: '/Full-Stack-1',
  // assetPrefix: '/Full-Stack-1',
};

export default nextConfig;
