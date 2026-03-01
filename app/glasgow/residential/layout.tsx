import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glasgow & Scotland Residential Pest Control | 60 Providers | PestPro Index',
  description: 'Find trusted residential pest control providers across Glasgow, the West End, Southside and Scotland. Compare 60 verified providers — no lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/glasgow/residential',
  },
  openGraph: {
    title: 'Glasgow & Scotland Residential Pest Control | 60 Providers | PestPro Index',
    description: 'Find trusted residential pest control providers across Glasgow, the West End, Southside and Scotland. Compare 60 verified providers — no lead fees, no commissions.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Pest Control in Glasgow & Scotland',
    description: 'Compare 60+ residential pest control providers across Glasgow, the West End, Southside and Scotland. Independent ratings, verified reviews, BPCA and NPTA certified companies.',
    serviceType: 'Pest Control',
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
    url: 'https://pestproindex.com/glasgow/residential',
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
