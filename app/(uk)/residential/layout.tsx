import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential Pest Control London | Compare Providers',
  description: 'Compare residential pest control providers across London. Filter by pest type, certifications, and services. No lead fees or commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/residential',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
