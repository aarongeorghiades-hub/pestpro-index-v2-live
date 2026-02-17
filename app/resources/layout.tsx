import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pest Control Resources & Guides | PestPro Index',
  description: 'Download professional pest control guides including our Commercial Provider Selection Guide and Compliance Workbook.',
  alternates: {
    canonical: 'https://pestproindex.com/resources',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
