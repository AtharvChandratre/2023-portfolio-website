/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: ['marketing.illinois.edu'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
