import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Pest Control Professionals',
  description: 'Join PestPro Index. No lead fees, no commissions. Get listed, get found, grow your pest control business.',
  alternates: {
    canonical: 'https://pestproindex.com/professionals',
  },
  openGraph: {
    title: 'For Pest Control Professionals',
    description: 'Join PestPro Index. No lead fees, no commissions. Get listed, get found, grow your pest control business.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'For Pest Control Professionals',
    description: 'Join PestPro Index. No lead fees, no commissions. Get listed, get found, grow your pest control business.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
