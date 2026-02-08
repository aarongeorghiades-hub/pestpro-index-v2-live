import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Pest Control Products | PestPro Index',
  description: 'Professional pest control products for commercial properties. Industrial-grade solutions for hospitality, retail, healthcare, and more.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
