import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["cdn.weatherapi.com"], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.weatherapi.com',
      },
    ],
  },
};

export default nextConfig;
