/** @type {import('next').NextConfig} */
const nextConfig = {
  server: {
    port: 8989, // Use the PORT environment variable if available, otherwise default to 3000
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
