import { Metadata } from 'next'

// This is the HOME/consumer products page. Its title previously read
// "Commercial Pest Control Products", which was both factually wrong for this
// page and byte-identical to the title served by /commercial-products - two
// routes, one <title>. Both routes now describe themselves, using the same
// wording the home page already uses for the two product cards.
export const metadata: Metadata = {
  title: 'Pest Control Products for Your Home',
  description: 'Home pest control products organised by pest type, with a direct link to each item on Amazon UK. Chosen for UK households tackling pests themselves.',
  alternates: {
    canonical: 'https://pestproindex.com/products',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
