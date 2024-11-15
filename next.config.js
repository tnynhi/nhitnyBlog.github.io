/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/nhitnyBlog.github.io' : '',
  assetPrefix: isProd ? '/nhitnyBlog.github.io/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
