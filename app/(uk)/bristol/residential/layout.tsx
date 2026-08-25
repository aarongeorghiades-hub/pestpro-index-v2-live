import { createServerClient } from '@/utils/supabase-server'
import { formatCount } from '@/lib/formatCount'

export default async function Layout({ children }: { children: React.ReactNode }) {
  // Counts exactly the population this page lists: active providers flagged
  // business_residential inside the bristol region. Head-only, so the
  // 1,000-row PostgREST cap cannot silently truncate the figure.
  const supabase = createServerClient()
  const { count, error } = await supabase
    .from('Providers')
    .select('canonical_id', { count: 'exact', head: true })
    .eq('active', true)
    .eq('business_residential', true)
    .or('regions.cs.["bristol"]')

  // If the count fails or comes back null we describe the page without a
  // number. Never 0, never a hardcoded fallback: a wrong figure is worse
  // than no figure.
  const providerCount = error ? null : count
  const countLead =
    providerCount == null
      ? 'Compare residential pest control providers'
      : `Compare ${formatCount(providerCount)} residential pest control providers`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Pest Control in Bristol & South West',
    description: `${countLead} across Bristol, Bath, South Gloucestershire and the South West. Ratings, reviews, BPCA and NPTA certified companies.`,
    serviceType: 'Pest Control',
    areaServed: {
      '@type': 'City',
      name: 'Bristol',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'South West',
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'PestPro Index',
      url: 'https://pestproindex.com',
    },
    url: 'https://pestproindex.com/bristol/residential',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
