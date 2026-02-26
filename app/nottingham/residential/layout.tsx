import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pest Control in Nottingham | Residential Services | PestPro Index',
  description: 'Find trusted residential pest control services in Nottingham and the East Midlands. Compare BPCA-certified providers, read reviews, and get quotes — no lead fees.',
  alternates: {
    canonical: 'https://pestproindex.com/nottingham/residential',
  },
  openGraph: {
    title: 'Pest Control in Nottingham | Residential Services | PestPro Index',
    description: 'Find trusted residential pest control services in Nottingham and the East Midlands. Compare BPCA-certified providers, read reviews, and get quotes — no lead fees.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Pest Control in Nottingham',
    description: 'Compare 106+ residential pest control providers in Nottingham and the East Midlands. Independent ratings, verified reviews, BPCA and NPTA certified companies.',
    serviceType: 'Pest Control',
    areaServed: {
      '@type': 'City',
      name: 'Nottingham',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'East Midlands',
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'PestPro Index',
      url: 'https://pestproindex.com',
    },
    url: 'https://pestproindex.com/nottingham/residential',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
