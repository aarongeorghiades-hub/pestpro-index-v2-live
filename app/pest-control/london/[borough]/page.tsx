import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBoroughBySlug, getAllBoroughs } from '../london-boroughs';
import LondonBoroughClient from './LondonBoroughClient';
import { PESTS, getPestBySlug, getLocationBySlug } from '@/app/pest-control/pest-city-config';
import PestCityPageClient from '@/components/PestCityPageClient';
import { createServerClient } from '@/utils/supabase-server';

export const revalidate = 3600;

interface Props {
  params: Promise<{ borough: string }>;
}

const cityConfig = getLocationBySlug('london')!;

const extractPostcode = (address: string | null): string | null => {
  if (!address) return null;
  const postcodeRegex = /[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}/i;
  const match = address.match(postcodeRegex);
  return match ? match[0] : null;
};

// Postcode-fill from address then sort by rating (then review count) —
// mirrors the processing the client components previously did.
function processProviders(data: any[] | null) {
  return (data || [])
    .map((p) => ({ ...p, postcode: p.postcode || extractPostcode(p.address) }))
    .sort((a: any, b: any) => {
      const ratingA = a.google_rating || 0;
      const ratingB = b.google_rating || 0;
      if (ratingB !== ratingA) return ratingB - ratingA;
      return (b.google_review_count || 0) - (a.google_review_count || 0);
    });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { borough } = await params;

  const pest = getPestBySlug(borough);
  if (pest) {
    return {
      title: `${pest.name} Control ${cityConfig.name} — Find Verified ${pest.name} Specialists | PestPro Index`,
      description: `Find verified ${pest.namePlural.toLowerCase()} control specialists in ${cityConfig.name}. Compare providers with ratings, certifications, and service details. No lead fees, no commissions.`,
      alternates: {
        canonical: `https://pestproindex.com/pest-control/${cityConfig.slug}/${pest.slug}`,
      },
    };
  }

  const data = getBoroughBySlug(borough);
  if (!data) return {};
  return {
    title: `Pest Control ${data.name} | Trusted Local Services | PestPro Index`,
    description: data.metaDescription,
    alternates: {
      canonical: `https://pestproindex.com/pest-control/${data.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const boroughParams = getAllBoroughs().map(b => ({ borough: b.slug }));
  const pestParams = PESTS.map(p => ({ borough: p.slug }));
  return [...boroughParams, ...pestParams];
}

export default async function LondonBoroughPage({ params }: Props) {
  const { borough } = await params;
  const supabase = createServerClient();

  const pest = getPestBySlug(borough);
  if (pest) {
    // First try: providers matching the pest type in this region.
    const { data: pestData } = await supabase
      .from('Providers')
      .select('*')
      .eq('active', true)
      .eq('business_residential', true)
      .eq(pest.filterColumn, true)
      .or(`regions.cs.["${cityConfig.region}"]`);

    let providers = processProviders(pestData);
    let isFallback = false;

    // Fallback: all residential providers for the region.
    if (providers.length === 0) {
      const { data: fallbackData } = await supabase
        .from('Providers')
        .select('*')
        .eq('active', true)
        .eq('business_residential', true)
        .or(`regions.cs.["${cityConfig.region}"]`);
      providers = processProviders(fallbackData);
      isFallback = true;
    }

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: `${pest.name} Control`,
      areaServed: { '@type': 'City', name: cityConfig.name },
      provider: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
    };
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <PestCityPageClient city={cityConfig} pest={pest} initialProviders={providers} initialIsFallback={isFallback} />
      </>
    );
  }

  const data = getBoroughBySlug(borough);
  if (!data) notFound();

  // Borough page: all residential providers serving London.
  const { data: boroughData } = await supabase
    .from('Providers')
    .select('*')
    .eq('active', true)
    .eq('business_residential', true)
    .or('regions.cs.["london"]');
  const providers = processProviders(boroughData);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Pest Control Services in ${data.name}`,
    description: data.metaDescription,
    areaServed: {
      '@type': 'City',
      name: data.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Greater London',
      },
    },
    url: `https://pestproindex.com/pest-control/${data.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LondonBoroughClient borough={data} initialProviders={providers} />
    </>
  );
}
