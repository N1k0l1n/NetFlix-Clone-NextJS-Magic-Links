/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ["images.unsplash.com", "i.ytimg.com"],
  },
  reactStrictMode: true,
  env: {
    API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  }
};