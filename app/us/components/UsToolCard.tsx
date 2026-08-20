// A single tool, described mechanically, with its disclosure bound to its link.
//
// TWO CONVENTIONS ARE SET HERE, DELIBERATELY, FOR EVERY LATER US CLUSTER.
//
// 1. THE DISCLOSURE IS DERIVED FROM THE LINK, NEVER WRITTEN ALONGSIDE IT.
//    `affiliateTag` is the single input that decides three things at once: the
//    URL, the rel attribute, and the wording of the disclosure. It is therefore
//    structurally impossible for this card to claim a commission it does not
//    earn, or to earn one it does not disclose. The UK ProductCard prints "As an
//    Amazon Associate, PestPro Index earns from qualifying purchases" as fixed
//    text regardless of the link; that is a sentence that can go stale.
//
// 2. THE DISCLOSURE SITS ABOVE THE LINK, IN THE READER'S PATH.
//    The FTC requires disclosure that is clear and conspicuous and close to the
//    link, not buried in a footer and not set in small gray type below the fold.
//    It is rendered here as a bordered block immediately before the button.
//
// NOTE ON THE CURRENT STATE: no US Amazon Associates tag exists anywhere in this
// repository. The only tag present, pestproindex2-21, is an amazon.co.uk tag and
// Associates tracking IDs are marketplace-specific, so it attributes nothing on
// amazon.com. `affiliateTag` is therefore intentionally left unset here and the
// link is a plain product link. When a US tag exists, passing it is the whole
// change: the URL, the rel, and the disclosure all follow from it.

interface UsToolCardProps {
  name: string;
  // What the tool physically does. Mechanical description only.
  whatItDoes: string[];
  // Amazon US ASIN. Only a direct /dp/<ASIN> link is ever produced; there is no
  // search-URL fallback branch, matching the estate rule.
  asin: string;
  // Absent = plain link, no commission, disclosure says so.
  affiliateTag?: string;
}

export default function UsToolCard({
  name,
  whatItDoes,
  asin,
  affiliateTag,
}: UsToolCardProps) {
  const url =
    asin && asin.startsWith('B0')
      ? `https://www.amazon.com/dp/${asin}${affiliateTag ? `?tag=${affiliateTag}` : ''}`
      : null;

  if (!url) return null;

  const isAffiliate = Boolean(affiliateTag);

  return (
    <div className="not-prose border-2 border-gray-200 rounded-xl p-6 bg-white my-8">
      <h3 className="text-lg font-bold text-gray-900 mt-0">{name}</h3>

      <ul className="mt-3 mb-0 space-y-1">
        {whatItDoes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
            <span aria-hidden="true" className="text-blue-600 font-bold">&bull;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Disclosure. Immediately above the link, bordered, full contrast. */}
      <div className="mt-5 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
        <p className="m-0 text-sm font-bold text-amber-900">Disclosure</p>
        <p className="m-0 mt-1 text-sm text-amber-900">
          {isAffiliate ? (
            <>
              The link below is a paid affiliate link. If you buy through it, PestPro Index
              earns a commission from Amazon at no additional cost to you. That commission
              does not affect what we write about this tool.
            </>
          ) : (
            <>
              The link below is <strong>not</strong> a paid affiliate link. PestPro Index
              earns nothing if you buy this tool, and we have no commercial relationship
              with its manufacturer or seller. It is named because it is a specific,
              identifiable example of the type of tool described above.
            </>
          )}
        </p>
      </div>

      <a
        href={url}
        target="_blank"
        rel={
          isAffiliate
            ? 'sponsored nofollow noopener noreferrer'
            : 'nofollow noopener noreferrer'
        }
        className="mt-4 inline-block text-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
      >
        View this tool on Amazon
      </a>
    </div>
  );
}
