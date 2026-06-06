import Link from 'next/link';

export interface AreaLink {
  name: string;
  slug: string;
}

// "Areas we cover in {City}" interlinking block — links a pest page to that
// city's own borough / sub-area pages. Renders nothing when no areas exist.
export default function CityAreaLinks({
  citySlug,
  cityName,
  areas,
}: {
  citySlug: string;
  cityName: string;
  areas: AreaLink[];
}) {
  if (!areas || areas.length === 0) return null;
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Areas We Cover in {cityName}</h2>
          <p className="text-gray-600">Browse pest control by area across {cityName}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={`/pest-control/${citySlug}/${a.slug}`}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-colors font-medium"
            >
              Pest Control {a.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
