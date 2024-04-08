/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  experimental: {
    serverComponentsExternalPackages: ['knex', 'superstruct'],
  },
}

module.exports = nextConfig
