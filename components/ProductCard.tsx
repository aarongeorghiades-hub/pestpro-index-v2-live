import Link from 'next/link';

// Deliberately has no rating or price prop. Every figure the site previously
// showed for these was hand-typed rather than sourced from Amazon, so the
// component is structurally unable to display one. Price is left to Amazon via
// the affiliate link.
interface ProductCardProps {
  name: string;
  features: string[];
  asin: string;
  bestFor?: string;
  rank?: number;
}

export default function ProductCard({ name, features, asin, bestFor, rank }: ProductCardProps) {
  // Only a direct /dp/<ASIN> link is ever produced. There is deliberately no
  // fallback branch: a search-results link is not a link to the product being
  // described, so when the ASIN is missing the card renders no Amazon link and
  // no Amazon call to action at all rather than sending the reader somewhere
  // approximate. null is the whole of the else branch, so the component is
  // structurally unable to emit a search URL.
  const amazonUrl = asin && asin.startsWith('B0')
    ? `https://www.amazon.co.uk/dp/${asin}?tag=pestproindex2-21`
    : null;

  const badgeColors: Record<string, string> = {
    'Best Overall': 'bg-amber-100 text-amber-800 border-amber-300',
    'Best Budget': 'bg-green-100 text-green-800 border-green-300',
    'Best Humane': 'bg-emerald-100 text-emerald-800 border-emerald-300',
    'Best Humane Option': 'bg-emerald-100 text-emerald-800 border-emerald-300',
    'Best Budget Option': 'bg-green-100 text-green-800 border-green-300',
    'Best Professional-Grade': 'bg-purple-100 text-purple-800 border-purple-300',
  };
  const badgeClass = bestFor ? (badgeColors[bestFor] || 'bg-blue-50 text-blue-700 border-blue-200') : '';

  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white relative overflow-hidden">
      {rank && (
        <div className="absolute top-0 left-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center rounded-br-xl">
          <span className="text-white font-black text-sm">#{rank}</span>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Product icon */}
        <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>

        {/* Product details */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{name}</h3>
              {bestFor && (
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mt-1 ${badgeClass}`}>
                  {bestFor}
                </span>
              )}
            </div>
          </div>

          <ul className="mt-3 space-y-1">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
            {amazonUrl && (
              <a
                href={amazonUrl}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="inline-block text-center px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors text-sm"
              >
                Check price on Amazon
              </a>
            )}
            <p className="text-xs text-gray-400">
              As an Amazon Associate, PestPro Index earns from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
