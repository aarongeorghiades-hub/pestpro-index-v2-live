import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBoroughBySlug, getAllBoroughs } from '../sheffield-boroughs';
import SheffieldBoroughClient from './SheffieldBoroughClient';

interface Props {
  params: Promise<{ borough: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { borough } = await params;
  const data = getBoroughBySlug(borough);
  if (!data) return {};
  return {
    title: `Pest Control ${data.name} | Sheffield & South Yorkshire | PestPro Index`,
    description: data.metaDescription,
    alternates: {
      canonical: `https://pestproindex.com/pest-control/sheffield/${data.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getAllBoroughs().map(b => ({ borough: b.slug }));
}

export default async function SheffieldBoroughPage({ params }: Props) {
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
        name: 'South Yorkshire',
      },
    },
    url: `https://pestproindex.com/pest-control/sheffield/${data.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SheffieldBoroughClient borough={data} />
    </>
  );
}
