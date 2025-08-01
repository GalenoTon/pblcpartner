import type { NextConfig } from "next";

<<<<<<< HEAD
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
//
=======
>>>>>>> 5a0297f32605967c3986949a85564d5d7804bab3
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;


module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
}



export default nextConfig;
