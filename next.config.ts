import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'export' output for Vercel - use regular Next.js app
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix for Vercel deployment
  // basePath: '/Full-Stack-1',
  // assetPrefix: '/Full-Stack-1',
};

export default nextConfig;
