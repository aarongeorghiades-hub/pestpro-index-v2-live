import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brighton & Sussex Residential Pest Control | 76 Providers | PestPro Index',
  description: 'Find trusted residential pest control providers across Brighton, Hove, Worthing, Eastbourne and Sussex. Compare 76 verified providers — no lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/brighton/residential',
  },
  openGraph: {
    title: 'Brighton & Sussex Residential Pest Control | 76 Providers | PestPro Index',
    description: 'Find trusted residential pest control providers across Brighton, Hove, Worthing, Eastbourne and Sussex. Compare 76 verified providers — no lead fees, no commissions.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Pest Control in Brighton & Sussex',
    description: 'Compare 76+ residential pest control providers across Brighton, Hove, Worthing, Eastbourne and Sussex. Independent ratings, verified reviews, BPCA and NPTA certified companies.',
    serviceType: 'Pest Control',
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
    url: 'https://pestproindex.com/brighton/residential',
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
