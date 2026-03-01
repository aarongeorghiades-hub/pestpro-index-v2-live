import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glasgow & Scotland Commercial Pest Control | PestPro Index',
  description: 'Commercial pest control services across Glasgow and Scotland. Compare verified providers for offices, restaurants, hotels, warehouses and more.',
  alternates: {
    canonical: 'https://pestproindex.com/glasgow/commercial',
  },
  openGraph: {
    title: 'Glasgow & Scotland Commercial Pest Control | PestPro Index',
    description: 'Commercial pest control services across Glasgow and Scotland. Compare verified providers for offices, restaurants, hotels, warehouses and more.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Pest Control in Glasgow & Scotland',
    description: 'Find commercial pest control providers across Glasgow and Scotland. Compare services for offices, restaurants, warehouses and retail. BPCA certified providers.',
    serviceType: 'Commercial Pest Control',
    areaServed: {
      '@type': 'City',
      name: 'Glasgow',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Scotland',
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'PestPro Index',
      url: 'https://pestproindex.com',
    },
    url: 'https://pestproindex.com/glasgow/commercial',
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
