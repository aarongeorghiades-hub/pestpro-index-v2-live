import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pest Control Bradford | Compare 113+ Local Providers | PestPro Index',
  description: 'Compare 113+ pest control companies in Bradford & West Yorkshire. Independent ratings, verified reviews, and BPCA/NPTA certified providers. No lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/bradford/residential',
  },
  openGraph: {
    title: 'Pest Control Bradford | Compare 113+ Local Providers | PestPro Index',
    description: 'Compare 113+ pest control companies in Bradford & West Yorkshire. Independent ratings, verified reviews, and BPCA/NPTA certified providers. No lead fees, no commissions.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Pest Control in Bradford',
    description: 'Compare 113+ residential pest control providers in Bradford and West Yorkshire. Independent ratings, verified reviews, BPCA and NPTA certified companies.',
    serviceType: 'Pest Control',
    areaServed: {
      '@type': 'City',
      name: 'Bradford',
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
    url: 'https://pestproindex.com/bradford/residential',
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
