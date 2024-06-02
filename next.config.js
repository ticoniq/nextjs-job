/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "f4nw9e2cwax6y3mx.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
