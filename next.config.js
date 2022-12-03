/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mdbootstrap.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
