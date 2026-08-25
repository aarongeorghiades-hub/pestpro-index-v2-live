import Link from 'next/link';
import { PESTS } from '@/app/(uk)/pest-control/pest-city-config';

// "Pest control by type in {City}" interlinking block — links a borough/town
// page to that city's pest-specific pages. Mirrors the pest-type block the
// city-directory pages already render.
export default function CityPestLinks({
  citySlug,
  cityName,
}: {
  citySlug: string;
  cityName: string;
}) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white border-t-2 border-blue-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Pest Control by Type in {cityName}</h2>
          <p className="text-gray-600">Find {cityName} providers who specialise in a specific pest</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {PESTS.map((p) => (
            <Link
              key={p.slug}
              href={`/pest-control/${citySlug}/${p.slug}`}
              className="flex items-center justify-center text-center px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-sm text-gray-800"
            >
              {p.name} Control
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
