import { Metadata } from 'next'

// See app/products/layout.tsx: these two routes served an identical <title>
// and an identical description. This one is narrowed to the commercial
// audience the page actually serves. The openGraph and twitter blocks carry
// their own copies of both strings and are kept in step - the overlap law.
export const metadata: Metadata = {
  title: 'Pest Control Products for Business',
  description: 'Professional-grade pest control products for commercial premises, organised by pest type, with a direct link to each item on Amazon UK.',
  alternates: {
    canonical: 'https://pestproindex.com/commercial-products',
  },
  openGraph: {
    title: 'Pest Control Products for Business',
    description: 'Professional-grade pest control products for commercial premises, organised by pest type, with a direct link to each item on Amazon UK.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Pest Control Products for Business',
    description: 'Professional-grade pest control products for commercial premises, organised by pest type, with a direct link to each item on Amazon UK.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
