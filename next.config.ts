import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   port: '3000',
      //   pathname: '/uploads/**'
      // },
      {
        protocol: 'https',
        hostname: 'news-indol-omega.vercel.app',
        port: '3000',
        pathname: '/uploads/**'
      },
    ],
    loader: 'default',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  }
}

export default nextConfig
