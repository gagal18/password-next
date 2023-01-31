/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PASSWORD_PROTECT: process.env.ENVIRONMENT === 'staging',
  }
}

module.exports = nextConfig
