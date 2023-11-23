/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: '*',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000'
          }
        ]
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/source/url.html',
        destination: '/testing/source/url',
        permanent: true,
      },
      {
        source: '/super/test/url/page.html',
        destination: '/super/test/url',
        permanent: true,
      },
      {
        source: '/super/test/url',
        destination: '/super/testing/source/url',
        permanent: true,
      },
      {
        source: '/cancel',
        destination: '/?cancel=1',
        permanent: true,
      },
      {
        source: '/success',
        destination: '/?success=1',
        permanent: true,
      }
    ]
  }
};

module.exports = nextConfig;
