import type { NextConfig } from 'next'
import { redirect } from 'next/dist/server/api-utils'
import { headers } from 'next/headers'

const nextConfig: NextConfig = {
  /* config options here */
}

module.exports = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/new',
        permanent: true,
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          }
        ]
      }
    ]
  }
}

export default nextConfig
