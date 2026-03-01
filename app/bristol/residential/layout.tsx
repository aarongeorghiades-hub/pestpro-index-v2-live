import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bristol & South West Residential Pest Control | 43 Providers | PestPro Index',
  description: 'Find trusted residential pest control providers across Bristol, Bath, South Gloucestershire and the South West. Compare 43 verified providers — no lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/bristol/residential',
  },
  openGraph: {
    title: 'Bristol & South West Residential Pest Control | 43 Providers | PestPro Index',
    description: 'Find trusted residential pest control providers across Bristol, Bath, South Gloucestershire and the South West. Compare 43 verified providers — no lead fees, no commissions.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Pest Control in Bristol & South West',
    description: 'Compare 43+ residential pest control providers across Bristol, Bath, South Gloucestershire and the South West. Independent ratings, verified reviews, BPCA and NPTA certified companies.',
    serviceType: 'Pest Control',
    areaServed: {
      '@type': 'City',
      name: 'Bristol',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'South West',
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'PestPro Index',
      url: 'https://pestproindex.com',
    },
    url: 'https://pestproindex.com/bristol/residential',
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
