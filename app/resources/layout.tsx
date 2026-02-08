import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pest Control Resources & Guides | PestPro Index',
  description: 'Expert pest control resources, guides, and compliance information. Government regulations, industry bodies, and professional development for pest control in the UK.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
