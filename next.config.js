/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "nor"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
