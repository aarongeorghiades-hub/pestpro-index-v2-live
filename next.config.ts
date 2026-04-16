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

const citySlugs = [
  'birmingham',
  'manchester',
  'liverpool',
  'nottingham',
  'brighton',
  'leeds',
  'sheffield',
  'bristol',
  'glasgow',
];

const nextConfig: NextConfig = {
  async rewrites() {
    // Serve London borough pages at /pest-control/[borough] without redirecting
    const londonBoroughRewrites = londonBoroughSlugs.map((slug) => ({
      source: `/pest-control/${slug}`,
      destination: `/pest-control/london/${slug}`,
    }));

    return {
      beforeFiles: londonBoroughRewrites,
    };
  },
  async redirects() {

    // Old provider URL pattern: /[city]/[website-domain]
    // Website domains contain dots, real routes (residential/commercial) do not
    const oldProviderRedirects = citySlugs.map((city) => ({
      source: `/${city}/:slug(.*\\..*)`,
      destination: `/pest-control/${city}`,
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
      {
        source: '/london/commercial',
        destination: '/commercial',
        permanent: true,
      },
      {
        source: '/london/residential',
        destination: '/residential',
        permanent: true,
      },
      {
        source: '/pest-control/leeds/bradford',
        destination: '/bradford',
        permanent: true,
      },
      // Old provider URLs for cities
      ...oldProviderRedirects,
      // One-off 404 fixes
      {
        source: '/guides/how-to-get-rid-of-wasps',
        destination: '/guides/natural-wasp-deterrents',
        permanent: true,
      },
      {
        source: '/pest/pigeons',
        destination: '/pest-control/london',
        permanent: true,
      },
      {
        source: '/southampton/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
