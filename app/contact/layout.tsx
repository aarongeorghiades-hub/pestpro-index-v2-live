import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact PestPro Index',
  description: 'Get in touch with PestPro Index. Questions about listings, enhanced profiles, or general enquiries.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
