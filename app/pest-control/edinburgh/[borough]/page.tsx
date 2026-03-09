import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBoroughBySlug, getAllBoroughs } from '../edinburgh-boroughs';
import EdinburghBoroughClient from './EdinburghBoroughClient';

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
      canonical: `https://pestproindex.com/pest-control/edinburgh/${data.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getAllBoroughs().map(b => ({ borough: b.slug }));
}

export default async function EdinburghBoroughPage({ params }: Props) {
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
        name: 'Scotland',
      },
    },
    url: `https://pestproindex.com/pest-control/edinburgh/${data.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EdinburghBoroughClient borough={data} />
    </>
  );
}
