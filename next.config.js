/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "pbs.twimg.com",
      "cdn.hashnode.com",
      "fly.io",
      "i.pinimg.com",
    ],
  },
};

module.exports = nextConfig;
