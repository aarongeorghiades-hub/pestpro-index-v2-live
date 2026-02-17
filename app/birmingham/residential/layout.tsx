import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential Pest Control Birmingham | Compare Providers | PestPro Index',
  description: 'Compare residential pest control providers across Birmingham and the West Midlands. Filter by pest type, certifications and services. No lead fees.',
  alternates: {
    canonical: 'https://pestproindex.com/birmingham/residential',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
