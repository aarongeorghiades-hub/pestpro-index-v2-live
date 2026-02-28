import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sheffield & South Yorkshire Commercial Pest Control | PestPro Index',
  description: 'Commercial pest control services across Sheffield and South Yorkshire. Compare verified providers for offices, restaurants, hotels, warehouses and more.',
  alternates: {
    canonical: 'https://pestproindex.com/sheffield/commercial',
  },
  openGraph: {
    title: 'Sheffield & South Yorkshire Commercial Pest Control | PestPro Index',
    description: 'Commercial pest control services across Sheffield and South Yorkshire. Compare verified providers for offices, restaurants, hotels, warehouses and more.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Pest Control in Sheffield & South Yorkshire',
    description: 'Find commercial pest control providers across Sheffield and South Yorkshire. Compare services for offices, restaurants, warehouses and retail. BPCA certified providers.',
    serviceType: 'Commercial Pest Control',
    areaServed: {
      '@type': 'City',
      name: 'Sheffield',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'South Yorkshire',
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'PestPro Index',
      url: 'https://pestproindex.com',
    },
    url: 'https://pestproindex.com/sheffield/commercial',
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
