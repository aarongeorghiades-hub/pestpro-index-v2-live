import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pest Control Liverpool | Compare 73+ Local Providers | PestPro Index',
  description: 'Compare 73+ pest control companies in Liverpool & Merseyside. Independent ratings, verified reviews, and BPCA/NPTA certified providers. No lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/liverpool/residential',
  },
  openGraph: {
    title: 'Pest Control Liverpool | Compare 73+ Local Providers | PestPro Index',
    description: 'Compare 73+ pest control companies in Liverpool & Merseyside. Independent ratings, verified reviews, and BPCA/NPTA certified providers. No lead fees, no commissions.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Pest Control in Liverpool',
    description: 'Compare 73+ residential pest control providers in Liverpool and Merseyside. Independent ratings, verified reviews, BPCA and NPTA certified companies.',
    serviceType: 'Pest Control',
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
    url: 'https://pestproindex.com/liverpool/residential',
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
