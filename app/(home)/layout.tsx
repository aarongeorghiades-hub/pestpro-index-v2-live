import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compare Pest Control Providers Across the UK',
  description: 'Compare pest control providers with transparent, provider-stated information. No lead fees, no commissions. Find trusted pest control in London, Birmingham and beyond.',
  alternates: {
    canonical: 'https://pestproindex.com',
  },
  openGraph: {
    title: 'PestPro Index | Compare Pest Control Providers Across the UK',
    description: 'Compare pest control providers with transparent, provider-stated information. No lead fees, no commissions. Find trusted pest control in London, Birmingham and beyond.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'PestPro Index | Compare Pest Control Providers Across the UK',
    description: 'Compare pest control providers with transparent, provider-stated information. No lead fees, no commissions. Find trusted pest control in London, Birmingham and beyond.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
