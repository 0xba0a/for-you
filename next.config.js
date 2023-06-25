/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.foryou.uz",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
