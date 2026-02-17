import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Pest Control London | Compare Providers',
  description: 'Compare commercial pest control providers across London. Filter by sector, certifications, contract types and services. No lead fees.',
  alternates: {
    canonical: 'https://pestproindex.com/commercial',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
