import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sheffield & South Yorkshire Residential Pest Control | 53 Providers | PestPro Index',
  description: 'Find trusted residential pest control providers across Sheffield, Rotherham, Doncaster, Barnsley and South Yorkshire. Compare 53 verified providers — no lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/sheffield/residential',
  },
  openGraph: {
    title: 'Sheffield & South Yorkshire Residential Pest Control | 53 Providers | PestPro Index',
    description: 'Find trusted residential pest control providers across Sheffield, Rotherham, Doncaster, Barnsley and South Yorkshire. Compare 53 verified providers — no lead fees, no commissions.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Pest Control in Sheffield & South Yorkshire',
    description: 'Compare 53+ residential pest control providers across Sheffield, Rotherham, Doncaster, Barnsley and South Yorkshire. Independent ratings, verified reviews, BPCA and NPTA certified companies.',
    serviceType: 'Pest Control',
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
    url: 'https://pestproindex.com/sheffield/residential',
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
