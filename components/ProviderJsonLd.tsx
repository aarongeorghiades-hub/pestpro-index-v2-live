import { generateProfileText } from '@/lib/generateProfileText';
import { externalHref } from '@/lib/externalUrl';

interface ProviderJsonLdProps {
  provider: any;
}

export default function ProviderJsonLd({ provider }: ProviderJsonLdProps) {
  const jsonLdData: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: provider.name,
    description: provider.profile_text || generateProfileText(provider),
    url: provider.website ? externalHref(provider.website) : undefined,
    telephone: provider.phone || undefined,
    email: provider.email || undefined,
    priceRange: '££',
    image: 'https://pestproindex.com/logo-header.png',
    address: {
      '@type': 'PostalAddress',
      postalCode: provider.postcode || undefined,
      addressLocality: provider.regions?.includes('birmingham') ? 'Birmingham' : 'London',
      addressCountry: 'GB',
    },
  };

  if (provider.google_rating) {
    jsonLdData.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: provider.google_rating,
      reviewCount: provider.google_review_count || 1,
      bestRating: 5,
    };
  }

  // Remove undefined values
  Object.keys(jsonLdData).forEach(key => {
    if (jsonLdData[key] === undefined) delete jsonLdData[key];
  });
  if (jsonLdData.address) {
    Object.keys(jsonLdData.address).forEach(key => {
      if (jsonLdData.address[key] === undefined) delete jsonLdData.address[key];
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
