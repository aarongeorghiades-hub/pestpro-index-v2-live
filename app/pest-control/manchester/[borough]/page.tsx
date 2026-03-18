import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBoroughBySlug, getAllBoroughs } from '../manchester-boroughs';
import ManchesterBoroughClient from './ManchesterBoroughClient';
import { PESTS, getPestBySlug, getLocationBySlug } from '@/app/pest-control/pest-city-config';
import PestCityPageClient from '@/components/PestCityPageClient';

interface Props {
  params: Promise<{ borough: string }>;
}

const cityConfig = getLocationBySlug('manchester')!;

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
      canonical: `https://pestproindex.com/pest-control/manchester/${data.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const boroughParams = getAllBoroughs().map(b => ({ borough: b.slug }));
  const pestParams = PESTS.map(p => ({ borough: p.slug }));
  return [...boroughParams, ...pestParams];
}

export default async function ManchesterBoroughPage({ params }: Props) {
  const { borough } = await params;

  const pest = getPestBySlug(borough);
  if (pest) {
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
        <PestCityPageClient city={cityConfig} pest={pest} />
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
        name: 'Greater Manchester',
      },
    },
    url: `https://pestproindex.com/pest-control/manchester/${data.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ManchesterBoroughClient borough={data} />
    </>
  );
}
