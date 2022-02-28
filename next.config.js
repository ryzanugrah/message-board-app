/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    appName: 'Message Board App',
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/message/list-message',
      },
      {
        source: '/message',
        destination: '/message/detail-message',
      },
      {
        source: '/create',
        destination: '/message/add-message',
      },
      {
        source: '/login',
        destination: '/auth/login',
      },
      {
        source: '/register',
        destination: '/auth/register',
      },
      {
        source: '/user',
        destination: '/user/list-user',
      },
      {
        source: '/profile',
        destination: '/user/profile',
      },
    ];
  },
};

module.exports = nextConfig;
