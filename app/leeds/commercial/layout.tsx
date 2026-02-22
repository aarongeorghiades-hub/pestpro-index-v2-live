import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Pest Control Leeds | Business Pest Management | PestPro Index',
  description: 'Find commercial pest control providers in Leeds & West Yorkshire. Compare services for offices, restaurants, warehouses and retail. BPCA certified, contract options available.',
  alternates: {
    canonical: 'https://pestproindex.com/leeds/commercial',
  },
  openGraph: {
    title: 'Commercial Pest Control Leeds | Business Pest Management | PestPro Index',
    description: 'Find commercial pest control providers in Leeds & West Yorkshire. Compare services for offices, restaurants, warehouses and retail. BPCA certified, contract options available.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Pest Control in Leeds',
    description: 'Find commercial pest control providers in Leeds and West Yorkshire. Compare services for offices, restaurants, warehouses and retail. BPCA certified providers.',
    serviceType: 'Commercial Pest Control',
    areaServed: {
      '@type': 'City',
      name: 'Leeds',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'West Yorkshire',
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'PestPro Index',
      url: 'https://pestproindex.com',
    },
    url: 'https://pestproindex.com/leeds/commercial',
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
