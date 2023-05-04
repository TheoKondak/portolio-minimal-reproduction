/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  experimental: {
    appDir: true,
  },
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',

//   openAnalyzer: false,
// });
// module.exports = withBundleAnalyzer(nextConfig);

// console.log(process.env.ANALYZE);

module.exports = nextConfig;
