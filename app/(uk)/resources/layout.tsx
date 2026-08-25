import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pest Control Resources & Guides',
  description: 'Curated pest control publications, regulatory guidance, compliance resources, and reference material for professionals and commercial businesses across the UK.',
  alternates: {
    canonical: 'https://pestproindex.com/resources',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
