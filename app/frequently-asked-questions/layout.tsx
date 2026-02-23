import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pest Control FAQ | Frequently Asked Questions | PestPro Index',
  description: 'Common questions about finding pest control in the UK. Learn how PestPro Index works, what areas we cover, how providers are selected, and how we differ from lead-generation platforms.',
  alternates: {
    canonical: 'https://pestproindex.com/frequently-asked-questions',
  },
  openGraph: {
    title: 'Pest Control FAQ | Frequently Asked Questions | PestPro Index',
    description: 'Common questions about finding pest control in the UK. Learn how PestPro Index works, what areas we cover, and how we differ from lead-generation platforms.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is PestPro Index?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': "PestPro Index is the UK's neutral pest control directory. We don't charge providers lead fees or commissions, and we don't accept sponsored rankings. Our goal is to help you find a trusted, qualified pest controller near you."
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I find a pest controller?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Use our Find a Provider menu to browse by region, or go directly to the residential or commercial directory for your city. You can filter by pest type, certifications, services offered, and more.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is PestPro Index free to use?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, searching and browsing the directory is completely free for homeowners and businesses.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How are providers selected?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We research and verify providers using Google Maps data, BPCA and NPTA membership databases, company websites, and public reviews. We aim to include every legitimate pest control provider in each area we cover.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What areas do you cover?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We currently cover London, Birmingham, Manchester, Liverpool, and Leeds, with more cities launching throughout 2026.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How is PestPro different from Checkatrade or Bark?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': "Unlike lead-generation platforms, PestPro doesn't charge providers per lead or take commissions. Providers aren't ranked by how much they pay. We're a neutral directory focused on helping you compare providers based on qualifications, reviews, and services."
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I list my pest control company?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes! Visit our For Professionals page to learn about listing options.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How much does pest control cost?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Costs vary by pest type, property size, and treatment method. Typical residential treatments in the UK range from \u00a380\u2013\u00a3300 for a one-off visit. Commercial contracts are usually quoted individually.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
