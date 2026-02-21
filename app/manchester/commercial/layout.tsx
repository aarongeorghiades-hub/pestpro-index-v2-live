import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Pest Control Manchester | Business Pest Management | PestPro Index',
  description: 'Find commercial pest control providers in Manchester. Compare services for offices, restaurants, warehouses and retail. BPCA certified, contract options available.',
  alternates: {
    canonical: 'https://pestproindex.com/manchester/commercial',
  },
  openGraph: {
    title: 'Commercial Pest Control Manchester | Business Pest Management | PestPro Index',
    description: 'Find commercial pest control providers in Manchester. Compare services for offices, restaurants, warehouses and retail. BPCA certified, contract options available.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Pest Control in Manchester',
    description: 'Find commercial pest control providers in Manchester and Greater Manchester. Compare services for offices, restaurants, warehouses and retail. BPCA certified providers.',
    serviceType: 'Commercial Pest Control',
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
    url: 'https://pestproindex.com/manchester/commercial',
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
