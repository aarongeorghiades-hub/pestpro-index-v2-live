import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Pest Control Products',
  description: 'Browse curated commercial pest control products including traps, repellents, monitoring equipment and PPE. Trusted brands at competitive prices.',
  alternates: {
    canonical: 'https://pestproindex.com/commercial-products',
  },
  openGraph: {
    title: 'Commercial Pest Control Products',
    description: 'Browse curated commercial pest control products including traps, repellents, monitoring equipment and PPE. Trusted brands at competitive prices.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Commercial Pest Control Products',
    description: 'Browse curated commercial pest control products including traps, repellents, monitoring equipment and PPE. Trusted brands at competitive prices.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
