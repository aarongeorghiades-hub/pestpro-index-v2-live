'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FindProviderCTAProps {
  heading?: string;
  subtext?: string;
}

const cities = [
  { name: 'London', href: '/residential' },
  { name: 'Belfast', href: '/belfast/residential' },
  { name: 'Birmingham', href: '/birmingham/residential' },
  { name: 'Bradford', href: '/bradford/residential' },
  { name: 'Brighton', href: '/brighton/residential' },
  { name: 'Bristol', href: '/bristol/residential' },
  { name: 'Cardiff', href: '/cardiff/residential' },
  { name: 'Coventry', href: '/coventry/residential' },
  { name: 'Edinburgh', href: '/edinburgh/residential' },
  { name: 'Glasgow', href: '/glasgow/residential' },
  { name: 'Hampshire', href: '/hampshire/residential' },
  { name: 'Leeds', href: '/leeds/residential' },
  { name: 'Leicester', href: '/leicester/residential' },
  { name: 'Liverpool', href: '/liverpool/residential' },
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
    <div className="rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] p-8 my-8">
      <h3 className="text-2xl font-bold text-white mb-2">{heading}</h3>
      <p className="text-blue-200 mb-6">{subtext}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="" className="text-gray-900">Select your city...</option>
          {cities.map((city) => (
            <option key={city.href} value={city.href} className="text-gray-900">
              {city.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleFind}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors whitespace-nowrap"
        >
          Find Local Experts →
        </button>
      </div>
    </div>
  );
}
