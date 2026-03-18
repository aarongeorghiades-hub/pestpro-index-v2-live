import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTownBySlug, getAllTowns } from '../hampshire-towns';
import HampshireTownClient from './HampshireTownClient';
import { PESTS, getPestBySlug, getLocationBySlug } from '@/app/pest-control/pest-city-config';
import PestCityPageClient from '@/components/PestCityPageClient';

interface Props {
  params: Promise<{ town: string }>;
}

const cityConfig = getLocationBySlug('hampshire')!;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town } = await params;

  const pest = getPestBySlug(town);
  if (pest) {
    return {
      title: `${pest.name} Control ${cityConfig.name} — Find Verified ${pest.name} Specialists | PestPro Index`,
      description: `Find verified ${pest.namePlural.toLowerCase()} control specialists in ${cityConfig.name}. Compare providers with ratings, certifications, and service details. No lead fees, no commissions.`,
      alternates: {
        canonical: `https://pestproindex.com/pest-control/${cityConfig.slug}/${pest.slug}`,
      },
    };
  }

  const data = getTownBySlug(town);
  if (!data) return {};
  return {
    title: `Pest Control ${data.name} | Trusted Local Services | PestPro Index`,
    description: data.metaDescription,
    alternates: {
      canonical: `https://pestproindex.com/pest-control/hampshire/${data.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const townParams = getAllTowns().map(t => ({ town: t.slug }));
  const pestParams = PESTS.map(p => ({ town: p.slug }));
  return [...townParams, ...pestParams];
}

export default async function HampshireTownPage({ params }: Props) {
  const { town } = await params;

  const pest = getPestBySlug(town);
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

  const data = getTownBySlug(town);
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
        name: 'South East England',
      },
    },
    url: `https://pestproindex.com/pest-control/hampshire/${data.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HampshireTownClient town={data} />
    </>
  );
}
