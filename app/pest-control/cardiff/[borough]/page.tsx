import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBoroughBySlug, getAllBoroughs } from '../cardiff-boroughs';
import CardiffBoroughClient from './CardiffBoroughClient';

interface Props {
  params: Promise<{ borough: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { borough } = await params;
  const data = getBoroughBySlug(borough);
  if (!data) return {};
  return {
    title: `Pest Control ${data.name} | Trusted Local Services | PestPro Index`,
    description: data.metaDescription,
    alternates: {
      canonical: `https://pestproindex.com/pest-control/cardiff/${data.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getAllBoroughs().map(b => ({ borough: b.slug }));
}

export default async function CardiffBoroughPage({ params }: Props) {
  const { borough } = await params;
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
        name: 'South Wales',
      },
    },
    url: `https://pestproindex.com/pest-control/cardiff/${data.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CardiffBoroughClient borough={data} />
    </>
  );
}
