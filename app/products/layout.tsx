import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Pest Control Products | PestPro Index',
  description: 'Browse curated commercial pest control products including traps, repellents, monitoring equipment and PPE. Trusted brands at competitive prices.',
  alternates: {
    canonical: 'https://pestproindex.com/products',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
