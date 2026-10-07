'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FeaturedBlock from '@/components/listing/FeaturedBlock';
import type { FeaturedCard } from '@/lib/featuredProviders';
import { REGIONS } from '@/lib/providerSubmissions';
import { cityListHref, matchPostcode } from '@/lib/serviceArea';

// Sits on product, guide and pest pages. The affiliate content stays above it.
// Featured firms, when any exist for the chosen area, reuse the same labelled box
// the directory uses. Organic ranking is not involved here.
export default function FindProfessional() {
  const pathname = usePathname() || '/';
  const [postcode, setPostcode] = useState('');
  const [area, setArea] = useState('');
  const [href, setHref] = useState<string | null>(null);
  const [label, setLabel] = useState('');
  const [note, setNote] = useState('');
  const [featured, setFeatured] = useState<FeaturedCard[]>([]);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const match = matchPostcode(postcode);
    let nextHref: string | null = null;
    let nextLabel = '';
    let nextArea = '';

    if (match) {
      nextHref = match.href;
      nextArea = match.city;
      nextLabel = match.placeName ? `${match.placeName}, ${match.cityName}` : match.cityName;
    } else if (area) {
      nextHref = cityListHref(area);
      nextArea = area;
      nextLabel = REGIONS.find((region) => region.slug === area)?.label || area;
    }

    setHref(nextHref);
    setLabel(nextLabel);
    setFeatured([]);
    setNote(
      nextHref
        ? postcode.trim() && !match
          ? 'That postcode was not recognised, so this uses the area you chose.'
          : ''
        : 'Enter a UK postcode, or choose an area.',
    );

    if (!nextArea) return;
    try {
      const response = await fetch(`/api/featured?area=${encodeURIComponent(nextArea)}`);
      const json = await response.json().catch(() => null);
      setFeatured(Array.isArray(json?.providers) ? json.providers : []);
    } catch {
      setFeatured([]);
    }
  }

  return (
    <section id="find-a-professional" className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
        Rather call a professional? Find pest control near you
      </h2>
      <p className="mt-2 max-w-2xl text-gray-600">
        Enter a postcode or choose an area. The directory is sorted by rating. A Featured firm, when one is listed, sits in a separate box labelled Featured (paid).
      </p>
      <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="block flex-1 text-sm font-semibold text-gray-900">
          Postcode
          <input
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
            placeholder="e.g. EN5 4AB"
            autoComplete="postal-code"
            className="mt-1 w-full rounded-lg border-2 border-gray-300 px-3 py-2 font-normal text-gray-900 focus:border-blue-600 focus:outline-none"
          />
        </label>
        <label className="block flex-1 text-sm font-semibold text-gray-900">
          Area
          <select
            value={area}
            onChange={(event) => setArea(event.target.value)}
            className="mt-1 w-full rounded-lg border-2 border-gray-300 px-3 py-2 font-normal text-gray-900 focus:border-blue-600 focus:outline-none"
          >
            <option value="">Choose an area</option>
            {REGIONS.map((region) => (
              <option key={region.slug} value={region.slug}>
                {region.label}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-bold text-white hover:bg-blue-700"
        >
          Find firms
        </button>
      </form>
      {note && <p className="mt-3 text-sm text-gray-600">{note}</p>}
      {href && (
        <p className="mt-4">
          <Link href={href} className="font-bold text-blue-700 hover:underline">
            See pest control in {label}
          </Link>
        </p>
      )}
      {featured.length > 0 && (
        <div className="mt-6">
          <FeaturedBlock providers={featured} fromPath={pathname} context="finder" />
        </div>
      )}
      <nav aria-label="Pest control by area" className="mt-6">
        <p className="mb-2 text-sm font-semibold text-gray-900">Or open an area directory</p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1">
          {REGIONS.map((region) => (
            <li key={region.slug}>
              <Link href={cityListHref(region.slug)} className="text-sm text-blue-700 hover:underline">
                {region.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
