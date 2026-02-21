import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pest Control Manchester | Compare 134+ Local Providers | PestPro Index',
  description: 'Compare 134+ pest control companies in Manchester. Independent ratings, verified reviews, and BPCA/NPTA certified providers. No lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/manchester/residential',
  },
  openGraph: {
    title: 'Pest Control Manchester | Compare 134+ Local Providers | PestPro Index',
    description: 'Compare 134+ pest control companies in Manchester. Independent ratings, verified reviews, and BPCA/NPTA certified providers. No lead fees, no commissions.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Pest Control in Manchester',
    description: 'Compare 134+ residential pest control providers in Manchester and Greater Manchester. Independent ratings, verified reviews, BPCA and NPTA certified companies.',
    serviceType: 'Pest Control',
    areaServed: {
      '@type': 'City',
      name: 'Manchester',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Greater Manchester',
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'PestPro Index',
      url: 'https://pestproindex.com',
    },
    url: 'https://pestproindex.com/manchester/residential',
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
