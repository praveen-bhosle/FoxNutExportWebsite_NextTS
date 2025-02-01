import type { NextConfig } from 'next'
import { redirect } from 'next/dist/server/api-utils'

const nextConfig: NextConfig = {
  /* config options here */
}

module.exports = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/new',
        permanent: true
      }
    ]
  }
}

export default nextConfig
