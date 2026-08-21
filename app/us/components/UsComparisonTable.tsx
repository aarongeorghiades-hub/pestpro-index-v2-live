// A comparison table for the US estate.
//
// WHAT THIS COMPARES, AND WHY IT MATTERS: rows are TRAP MECHANISMS, not brands.
// The estate's rule is that no product carries an award or superlative label
// without stated evidence, and for stink bug traps the only controlled test we
// could source compared trap TYPES, not models. A brand ranking would therefore
// be an invented hierarchy. Comparing mechanisms is what the evidence supports.
//
// The `evidence` column is deliberately mandatory. Every row has to say what is
// known about it, including "no controlled test found", so a reader can see
// where the ground is firm and where it is not.

export interface ComparisonRow {
  mechanism: string;
  howItWorks: string;
  indoorOutdoor: string;
  evidence: string;
}

export default function UsComparisonTable({
  caption,
  rows,
}: {
  caption: string;
  rows: ComparisonRow[];
}) {
  return (
    <div className="not-prose my-8">
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm border-collapse">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-gray-50 text-left">
              <th scope="col" className="px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                Trap type
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                How it works
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                Where
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                What the evidence says
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.mechanism} className="align-top border-b border-gray-100 last:border-0">
                <th scope="row" className="px-4 py-3 font-semibold text-gray-900 text-left">
                  {row.mechanism}
                </th>
                <td className="px-4 py-3 text-gray-700">{row.howItWorks}</td>
                <td className="px-4 py-3 text-gray-700">{row.indoorOutdoor}</td>
                <td className="px-4 py-3 text-gray-700">{row.evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-500">{caption}</p>
    </div>
  );
}
