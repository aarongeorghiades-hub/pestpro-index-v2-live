import type { NextConfig } from "next";

const londonBoroughSlugs = [
  'barking-and-dagenham',
  'barnet',
  'bexley',
  'brent',
  'bromley',
  'camden',
  'city-of-london',
  'croydon',
  'ealing',
  'enfield',
  'greenwich',
  'hackney',
  'hammersmith-and-fulham',
  'haringey',
  'harrow',
  'havering',
  'hillingdon',
  'hounslow',
  'islington',
  'kensington-and-chelsea',
  'kingston-upon-thames',
  'lambeth',
  'lewisham',
  'merton',
  'newham',
  'redbridge',
  'richmond-upon-thames',
  'southwark',
  'sutton',
  'tower-hamlets',
  'waltham-forest',
  'wandsworth',
  'westminster',
];

const nextConfig: NextConfig = {
  async redirects() {
    const londonBoroughRedirects = londonBoroughSlugs.map((slug) => ({
      source: `/pest-control/${slug}`,
      destination: `/pest-control/london/${slug}`,
      permanent: true,
    }));

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
      {
        source: '/prices',
        destination: '/pest-control-costs',
        permanent: true,
      },
      {
        source: '/pests',
        destination: '/pest-library',
        permanent: true,
      },
      {
        source: '/pests/:slug',
        destination: '/pest/:slug',
        permanent: true,
      },
      ...londonBoroughRedirects,
    ];
  },
};

export default nextConfig;
