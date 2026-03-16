import Link from 'next/link';

interface ProductCardProps {
  name: string;
  rating?: number;
  features: string[];
  price: string;
  asin: string;
  bestFor?: string;
  rank?: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= Math.floor(rating) ? 'text-amber-400' : star - 0.5 <= rating ? 'text-amber-300' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ProductCard({ name, rating, features, price, asin, bestFor, rank }: ProductCardProps) {
  const amazonUrl = `https://www.amazon.co.uk/dp/${asin}?tag=pestproindex-21`;

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
            <span className="text-lg font-bold text-gray-900 whitespace-nowrap">From {price}</span>
          </div>

          {rating !== undefined && <StarRating rating={rating} />}

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
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block text-center px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors text-sm"
            >
              View on Amazon
            </a>
            <p className="text-xs text-gray-400">
              As an Amazon Associate, PestPro Index earns from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
