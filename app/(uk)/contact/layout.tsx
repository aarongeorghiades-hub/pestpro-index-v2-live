import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with PestPro Index. Report issues, provider enquiries, or general questions. We\'re here to help.',
  alternates: {
    canonical: 'https://pestproindex.com/contact',
  },
  openGraph: {
    title: 'Contact Us',
    description: 'Get in touch with PestPro Index. Report issues, provider enquiries, or general questions. We\'re here to help.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us',
    description: 'Get in touch with PestPro Index. Report issues, provider enquiries, or general questions. We\'re here to help.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
