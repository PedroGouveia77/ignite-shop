import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['files.stripe.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
