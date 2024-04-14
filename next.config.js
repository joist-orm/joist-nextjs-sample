/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  experimental: {
    serverComponentsExternalPackages: ['knex', 'superstruct', 'joist-orm'],
  },
}

module.exports = nextConfig
