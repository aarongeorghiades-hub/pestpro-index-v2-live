import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTownBySlug, getAllTowns } from '../hampshire-towns';
import HampshireTownClient from './HampshireTownClient';

interface Props {
  params: Promise<{ town: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town } = await params;
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
  return getAllTowns().map(t => ({ town: t.slug }));
}

export default async function HampshireTownPage({ params }: Props) {
  const { town } = await params;
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
