import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential Pest Control London | 400+ Verified Providers',
  description: 'Find and compare residential pest control providers in Greater London. Filter by pest type, certifications, ratings, and location. No lead fees or commissions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
