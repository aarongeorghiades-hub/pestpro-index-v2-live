import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBoroughBySlug } from '../brighton-boroughs';
import BrightonBoroughClient from './BrightonBoroughClient';
import { getPestBySlug, getLocationBySlug } from '@/app/pest-control/pest-city-config';
import PestCityPageClient from '@/components/PestCityPageClient';
import { createServerClient } from '@/utils/supabase-server';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ borough: string }>;
}

const cityConfig = getLocationBySlug('brighton')!;

const extractPostcode = (address: string | null): string | null => {
  if (!address) return null;
  const postcodeRegex = /[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}/i;
  const match = address.match(postcodeRegex);
  return match ? match[0] : null;
};

// Postcode-fill from address then sort by rating (then review count) —
// mirrors the processing PestCityPageClient previously did client-side.
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
    title: `Pest Control ${data.name} | Brighton & Sussex | PestPro Index`,
    description: data.metaDescription,
    alternates: {
      canonical: `https://pestproindex.com/pest-control/brighton/${data.slug}`,
    },
  };
}

export default async function BrightonBoroughPage({ params }: Props) {
  const { borough } = await params;

  const pest = getPestBySlug(borough);
  if (pest) {
    const supabase = createServerClient();
    const { data: pestData, error: pestError } = await supabase
      .from('Providers')
      .select('*')
      .eq('active', true)
      .eq('business_residential', true)
      .eq(pest.filterColumn, true)
      .or(`regions.cs.["${cityConfig.region}"]`);
    if (pestError) console.error(`[SSR fetch] ${cityConfig.slug}-pest-primary:`, pestError.message);

    let providers = processProviders(pestData);
    let isFallback = false;

    if (providers.length === 0) {
      const { data: fallbackData, error: fallbackError } = await supabase
        .from('Providers')
        .select('*')
        .eq('active', true)
        .eq('business_residential', true)
        .or(`regions.cs.["${cityConfig.region}"]`);
      if (fallbackError) console.error(`[SSR fetch] ${cityConfig.slug}-pest-fallback:`, fallbackError.message);
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
        name: 'South East',
      },
    },
    url: `https://pestproindex.com/pest-control/brighton/${data.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrightonBoroughClient borough={data} />
    </>
  );
}
