import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Pest Control in Nottingham | Business Services | PestPro Index',
  description: 'Find commercial pest control services in Nottingham and the East Midlands. BPCA-certified providers for offices, restaurants, hotels, warehouses, and more.',
  alternates: {
    canonical: 'https://pestproindex.com/nottingham/commercial',
  },
  openGraph: {
    title: 'Commercial Pest Control in Nottingham | Business Services | PestPro Index',
    description: 'Find commercial pest control services in Nottingham and the East Midlands. BPCA-certified providers for offices, restaurants, hotels, warehouses, and more.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Pest Control in Nottingham',
    description: 'Find commercial pest control providers in Nottingham and the East Midlands. Compare services for offices, restaurants, warehouses and retail. BPCA certified providers.',
    serviceType: 'Commercial Pest Control',
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
    url: 'https://pestproindex.com/nottingham/commercial',
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
