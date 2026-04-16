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
    // Website domains contain dots, real routes (residential/commercial) do not.
    // Destination is the city homepage (/brighton, /manchester, etc.) — the
    // pest-control/{city} routes do not exist as standalone pages and would
    // land on the [slug] "Not Found" branch (soft 404).
    const oldProviderRedirects = citySlugs.map((city) => ({
      source: `/${city}/:slug(.*\\..*)`,
      destination: `/${city}`,
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
      // Catch-all: old city/website-domain pattern → city page
      // Matches any second path segment that looks like a domain (contains a dot).
      // Covers the 37 indexed /:city/:website-domain 404s regardless of city.
      {
        source: '/:city/:domain((?:www\\.)?[a-zA-Z0-9][a-zA-Z0-9\\-]*\\.[a-zA-Z0-9\\./\\-?=&_%+]*)',
        destination: '/:city',
        permanent: true,
      },
      // Old provider URLs for cities (narrow fallback for the 9 citySlugs
      // → pest-control city page; kept after the broader catch-all)
      ...oldProviderRedirects,
      // Edge cases that contain additional path segments or trailing slashes
      { source: '/brighton/www.pest-force.co.uk/Heathfield', destination: '/brighton', permanent: true },
      { source: '/manchester/www.azpestcontrol.co.uk', destination: '/manchester', permanent: true },
      { source: '/brighton/www.peststopboys.co.uk', destination: '/brighton', permanent: true },
      { source: '/liverpool/rentokil.co.uk/pest-control/liverpool', destination: '/liverpool', permanent: true },
      // One-off 404 fixes
      {
        source: '/guides/how-to-get-rid-of-wasps',
        destination: '/guides/natural-wasp-deterrents',
        permanent: true,
      },
      {
        source: '/pest/pigeons',
        destination: '/pest-control',
        permanent: true,
      },
      {
        source: '/southampton/residential',
        destination: '/residential',
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
