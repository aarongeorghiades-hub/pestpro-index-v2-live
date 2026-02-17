import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.pestproindex.com',
          },
        ],
        destination: 'https://pestproindex.com/:path*',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
