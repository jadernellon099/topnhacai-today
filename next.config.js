/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['vaobo.com', 'topnhacai.today', 'api.vaobo.com', 'topnhacai.b-cdn.net', '789b.win'],
  },
  env: {
    api: 'https://62bbd4adeff39ad5ee15c6d1.mockapi.io/',
    api_topnhacai: "https://api.topnhacai.today/api"
  },
}

module.exports = nextConfig
