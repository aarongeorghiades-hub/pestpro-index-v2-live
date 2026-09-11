'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FindProviderCTAProps {
  heading?: string;
  subtext?: string;
}

const cities = [
  { name: 'Belfast', href: '/belfast/residential' },
  { name: 'Birmingham', href: '/birmingham/residential' },
  { name: 'Bradford', href: '/bradford/residential' },
  { name: 'Brighton', href: '/brighton/residential' },
  { name: 'Bristol', href: '/bristol/residential' },
  { name: 'Cardiff', href: '/cardiff/residential' },
  { name: 'Coventry', href: '/coventry/residential' },
  { name: 'Derby', href: '/derby/residential' },
  { name: 'Edinburgh', href: '/edinburgh/residential' },
  { name: 'Glasgow', href: '/glasgow/residential' },
  { name: 'Hampshire', href: '/hampshire/residential' },
  { name: 'Leeds', href: '/leeds/residential' },
  { name: 'Leicester', href: '/leicester/residential' },
  { name: 'Liverpool', href: '/liverpool/residential' },
  { name: 'London', href: '/residential' },
  { name: 'Manchester', href: '/manchester/residential' },
  { name: 'Newcastle', href: '/newcastle/residential' },
  { name: 'Nottingham', href: '/nottingham/residential' },
  { name: 'Sheffield', href: '/sheffield/residential' },
];

export default function FindProviderCTA({
  heading = 'Rat Problem Too Big for DIY?',
  subtext = 'Find BPCA-certified pest control professionals near you',
}: FindProviderCTAProps) {
  const [selectedCity, setSelectedCity] = useState('');
  const router = useRouter();

  const handleFind = () => {
    if (selectedCity) {
      router.push(selectedCity);
    } else {
      router.push('/pest-control/regions');
    }
  };

  return (
    <div className="my-8 rounded-xl border border-[var(--color-teal-edge)] bg-[var(--color-teal-wash)] p-8 md:p-10">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-teal-edge)] bg-[var(--color-surface)]">
          <svg className="h-6 w-6 text-[var(--color-teal-deep)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div>
          <h3 className="mb-1 text-xl font-bold text-[var(--color-ink)]">{heading}</h3>
          <p className="text-[var(--color-ink-soft)]">{subtext}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="flex-1 cursor-pointer appearance-none rounded-lg border border-[var(--color-rule-strong)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]"
        >
          <option value="" className="text-[var(--color-ink)]">Select your city...</option>
          {cities.map((city) => (
            <option key={city.href} value={city.href} className="text-[var(--color-ink)]">
              {city.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleFind}
          className="whitespace-nowrap rounded-lg bg-[var(--color-ochre)] px-8 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-ochre-deep)]"
        >
          Find Local Experts →
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {cities.map((city) => (
          <a
            key={city.href}
            href={city.href}
            className="rounded-full border border-[var(--color-teal-edge)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-teal-deep)] transition-colors hover:border-[var(--color-teal)] hover:bg-[var(--color-teal-wash)]"
          >
            {city.name}
          </a>
        ))}
      </div>
    </div>
  );
}
