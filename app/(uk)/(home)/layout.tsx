import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "PestPro Index — The UK's Neutral Pest Control Directory",
  description: 'Find independent, local pest controllers near you, for domestic and commercial pest control. Only firms based in and serving your area. No national chains, no lead fees.',
  alternates: {
    canonical: 'https://pestproindex.com',
  },
  openGraph: {
    title: "PestPro Index — The UK's Neutral Pest Control Directory",
    description: 'Find independent, local pest controllers near you, for domestic and commercial pest control. Only firms based in and serving your area. No national chains, no lead fees.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "PestPro Index — The UK's Neutral Pest Control Directory",
    description: 'Find independent, local pest controllers near you, for domestic and commercial pest control. Only firms based in and serving your area. No national chains, no lead fees.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
