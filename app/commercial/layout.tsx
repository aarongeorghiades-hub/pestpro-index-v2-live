import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Pest Control London | 240+ Verified Providers',
  description: 'Compare commercial pest control providers for hospitality, healthcare, retail, education, and more across Greater London. Contract options, certifications, and honest reviews.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
