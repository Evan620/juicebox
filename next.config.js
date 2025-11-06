/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.spr.so', 'assets.super.so'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig

