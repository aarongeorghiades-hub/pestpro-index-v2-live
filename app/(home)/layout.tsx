import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "PestPro Index — The UK's Neutral Pest Control Directory",
  description: 'Find trusted pest controllers across the UK. Compare 1,037+ vetted providers in London, Birmingham, Manchester, Liverpool, Leeds, Nottingham, Brighton, Sheffield, Bristol and Glasgow. No lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com',
  },
  openGraph: {
    title: "PestPro Index — The UK's Neutral Pest Control Directory",
    description: 'Find trusted pest controllers across the UK. Compare 1,037+ vetted providers in London, Birmingham, Manchester, Liverpool, Leeds, Nottingham, Brighton, Sheffield, Bristol and Glasgow. No lead fees, no commissions.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "PestPro Index — The UK's Neutral Pest Control Directory",
    description: 'Find trusted pest controllers across the UK. Compare 1,037+ vetted providers in London, Birmingham, Manchester, Liverpool, Leeds, Nottingham, Brighton, Sheffield, Bristol and Glasgow. No lead fees, no commissions.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
