import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brighton & Sussex Commercial Pest Control | PestPro Index',
  description: 'Commercial pest control services across Brighton and Sussex. Compare verified providers for offices, restaurants, hotels, warehouses and more.',
  alternates: {
    canonical: 'https://pestproindex.com/brighton/commercial',
  },
  openGraph: {
    title: 'Brighton & Sussex Commercial Pest Control | PestPro Index',
    description: 'Commercial pest control services across Brighton and Sussex. Compare verified providers for offices, restaurants, hotels, warehouses and more.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Pest Control in Brighton & Sussex',
    description: 'Find commercial pest control providers across Brighton and Sussex. Compare services for offices, restaurants, warehouses and retail. BPCA certified providers.',
    serviceType: 'Commercial Pest Control',
    areaServed: {
      '@type': 'City',
      name: 'Brighton',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'South East',
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'PestPro Index',
      url: 'https://pestproindex.com',
    },
    url: 'https://pestproindex.com/brighton/commercial',
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
