/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['down-id.img.susercontent.com'],
  },
};

module.exports = nextConfig;
