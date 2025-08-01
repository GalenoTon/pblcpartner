import type { NextConfig } from "next";

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// module.exports = nextConfig;

// next.config.js

module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
}



export default nextConfig;
