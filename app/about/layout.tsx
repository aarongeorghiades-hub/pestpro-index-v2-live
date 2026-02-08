import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About PestPro Index | Built Out of Frustration, Designed for Clarity',
  description: 'PestPro Index is a neutral pest control directory for Greater London. No lead fees, no commissions, no pay-per-enquiry. Just honest, transparent data.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
