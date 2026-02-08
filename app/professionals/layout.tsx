import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'List Your Pest Control Business | PestPro Index',
  description: 'Get listed on London\'s neutral pest control directory. Free listings available. No lead fees, no commissions. Enhanced visibility options from £15/month.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
