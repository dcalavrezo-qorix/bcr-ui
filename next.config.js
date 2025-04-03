/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,

  // 👇 Required for GitHub Pages under /bcr-ui
  basePath: '/bcr-ui',
  assetPrefix: '/bcr-ui',

  staticPageGenerationTimeout: 600,
};

module.exports = nextConfig;
