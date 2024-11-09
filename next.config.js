/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["res.cloudinary.com"], // Add your image hostname(s) here
  },
};

module.exports = nextConfig;
