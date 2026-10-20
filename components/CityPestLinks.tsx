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
    <section className="border-t border-[var(--color-rule)] bg-[var(--color-stock)]">
      <div className="dir-wrap py-20 md:py-28">
        <h2 className="dir-h2 text-[var(--color-ink)]">Pest Control by Type in {cityName}</h2>
        <p className="mt-2 text-[var(--color-ink-soft)]">Find {cityName} providers who specialise in a specific pest</p>
        <ul className="mt-6 grid grid-cols-1 gap-x-8 border-t border-[var(--color-ink)] sm:grid-cols-2 lg:grid-cols-4">
          {PESTS.map((p) => (
            <li key={p.slug} className="border-b border-[var(--color-rule)]">
              <Link
                href={`/pest-control/${citySlug}/${p.slug}`}
                className="block py-3 text-base font-semibold text-[var(--color-ink)] underline-offset-4 hover:underline"
              >
                {p.name} Control
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
