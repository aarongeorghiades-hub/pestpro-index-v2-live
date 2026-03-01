import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bristol & South West Commercial Pest Control | PestPro Index',
  description: 'Commercial pest control services across Bristol and the South West. Compare verified providers for offices, restaurants, hotels, warehouses and more.',
  alternates: {
    canonical: 'https://pestproindex.com/bristol/commercial',
  },
  openGraph: {
    title: 'Bristol & South West Commercial Pest Control | PestPro Index',
    description: 'Commercial pest control services across Bristol and the South West. Compare verified providers for offices, restaurants, hotels, warehouses and more.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Pest Control in Bristol & South West',
    description: 'Find commercial pest control providers across Bristol and the South West. Compare services for offices, restaurants, warehouses and retail. BPCA certified providers.',
    serviceType: 'Commercial Pest Control',
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
    url: 'https://pestproindex.com/bristol/commercial',
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
