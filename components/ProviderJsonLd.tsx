import { generateProfileText } from '@/lib/generateProfileText';
import { externalHref } from '@/lib/externalUrl';
import { REGIONS } from '@/lib/providerSubmissions';

interface ProviderJsonLdProps {
  provider: {
    name?: string;
    profile_text?: string | null;
    phone?: string | null;
    email?: string | null;
    website?: string | null;
    postcode?: string | null;
    address?: string | null;
    regions?: string[] | null;
    google_rating?: number | null;
    google_review_count?: number | null;
  };
  slug: string;
}

export default function ProviderJsonLd({ provider, slug }: ProviderJsonLdProps) {
  const listingUrl = `https://pestproindex.com/provider/${slug}`;
  const regionSlug = provider.regions?.[0];
  const locality = REGIONS.find((region) => region.slug === regionSlug)?.label;
  const website = provider.website ? externalHref(provider.website) : '';

  const localBusiness: Record<string, unknown> = {
    '@type': 'LocalBusiness',
    name: provider.name,
    description: provider.profile_text || generateProfileText(provider),
    url: listingUrl,
    telephone: provider.phone || undefined,
    email: provider.email || undefined,
    sameAs: website || undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: provider.address || undefined,
      postalCode: provider.postcode || undefined,
      addressLocality: locality,
      addressCountry: 'GB',
    },
  };

  if (provider.google_rating) {
    localBusiness.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: provider.google_rating,
      reviewCount: provider.google_review_count || 1,
      bestRating: 5,
    };
  }

  const crumbs = [
    { name: 'Home', url: 'https://pestproindex.com' },
    ...(locality && regionSlug
      ? [{ name: locality, url: `https://pestproindex.com/${regionSlug}` }]
      : []),
    { name: provider.name || 'Provider', url: listingUrl },
  ];

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      localBusiness,
      {
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
