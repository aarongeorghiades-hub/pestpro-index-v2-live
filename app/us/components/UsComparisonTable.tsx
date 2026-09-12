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
      <div className="overflow-x-auto rounded-xl border border-[var(--color-rule)]">
        <table className="w-full text-sm border-collapse">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-[var(--color-paper-sunk)] text-left">
              <th scope="col" className="px-4 py-3 font-bold text-[var(--color-ink)] border-b border-[var(--color-rule)]">
                Trap type
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-[var(--color-ink)] border-b border-[var(--color-rule)]">
                How it works
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-[var(--color-ink)] border-b border-[var(--color-rule)]">
                Where
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-[var(--color-ink)] border-b border-[var(--color-rule)]">
                What the evidence says
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.mechanism} className="align-top border-b border-[var(--color-rule)] last:border-0">
                <th scope="row" className="px-4 py-3 font-semibold text-[var(--color-ink)] text-left">
                  {row.mechanism}
                </th>
                <td className="px-4 py-3 text-[var(--color-ink-soft)]">{row.howItWorks}</td>
                <td className="px-4 py-3 text-[var(--color-ink-soft)]">{row.indoorOutdoor}</td>
                <td className="px-4 py-3 text-[var(--color-ink-soft)]">{row.evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-[var(--color-ink-mute)]">{caption}</p>
    </div>
  );
}
