/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal_web',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;