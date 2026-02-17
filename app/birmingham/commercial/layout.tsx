import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Pest Control Birmingham | Compare Providers | PestPro Index',
  description: 'Compare commercial pest control providers across Birmingham and the West Midlands. Filter by sector, certifications and contract types. No lead fees.',
  alternates: {
    canonical: 'https://pestproindex.com/birmingham/commercial',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
