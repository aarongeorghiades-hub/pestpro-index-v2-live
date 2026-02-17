import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pest Control Provider | PestPro Index',
  description: 'View pest control provider details, ratings, certifications, and contact information on PestPro Index.',
}

export default function ProviderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
