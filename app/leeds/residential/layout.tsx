import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pest Control Leeds | Compare 61+ Local Providers | PestPro Index',
  description: 'Compare 61+ pest control companies in Leeds & West Yorkshire. Independent ratings, verified reviews, and BPCA/NPTA certified providers. No lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/leeds/residential',
  },
  openGraph: {
    title: 'Pest Control Leeds | Compare 61+ Local Providers | PestPro Index',
    description: 'Compare 61+ pest control companies in Leeds & West Yorkshire. Independent ratings, verified reviews, and BPCA/NPTA certified providers. No lead fees, no commissions.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Pest Control in Leeds',
    description: 'Compare 61+ residential pest control providers in Leeds and West Yorkshire. Independent ratings, verified reviews, BPCA and NPTA certified companies.',
    serviceType: 'Pest Control',
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
    url: 'https://pestproindex.com/leeds/residential',
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
