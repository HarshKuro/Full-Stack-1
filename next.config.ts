import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix for user/organization GitHub Pages (harshkuro.github.io)
  // basePath: '/myshowcase',
  // assetPrefix: '/myshowcase',
};

export default nextConfig;
