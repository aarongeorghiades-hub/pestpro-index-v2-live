import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PestPro Index | Compare Pest Control Providers in London',
  description: 'Compare 400+ verified pest control providers across Greater London. No lead fees, no commissions. Honest ratings, real reviews, transparent data.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
