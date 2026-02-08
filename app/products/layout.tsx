import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Pest Control Products | Recommended by PestPro Index',
  description: 'Browse recommended pest control products for your home. Traps, repellents, and professional-grade solutions from trusted UK suppliers.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
