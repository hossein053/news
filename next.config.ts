import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'news-indol-omega.vercel.app',
    //     port: '3000',
    //     pathname: '/uploads/**'
    //   },
    // ],
    domains: ['news-2bazv5d9w-hossein053s-projects.vercel.app','news-indol-omega.vercel.app'],
    loader: 'default',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  }
}

export default nextConfig
