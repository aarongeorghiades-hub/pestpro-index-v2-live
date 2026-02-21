import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Pest Control Liverpool | Business Pest Management | PestPro Index',
  description: 'Find commercial pest control providers in Liverpool & Merseyside. Compare services for offices, restaurants, warehouses and retail. BPCA certified, contract options available.',
  alternates: {
    canonical: 'https://pestproindex.com/liverpool/commercial',
  },
  openGraph: {
    title: 'Commercial Pest Control Liverpool | Business Pest Management | PestPro Index',
    description: 'Find commercial pest control providers in Liverpool & Merseyside. Compare services for offices, restaurants, warehouses and retail. BPCA certified, contract options available.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Pest Control in Liverpool',
    description: 'Find commercial pest control providers in Liverpool and Merseyside. Compare services for offices, restaurants, warehouses and retail. BPCA certified providers.',
    serviceType: 'Commercial Pest Control',
    areaServed: {
      '@type': 'City',
      name: 'Liverpool',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Merseyside',
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'PestPro Index',
      url: 'https://pestproindex.com',
    },
    url: 'https://pestproindex.com/liverpool/commercial',
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
