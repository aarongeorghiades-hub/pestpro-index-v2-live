import type { ReactNode } from 'react';

// Every factual claim in the US estate traces to a citable source. Each page
// renders its own source list, with the date the source itself carries or the
// date we accessed it. This is the convention later US clusters should inherit:
// if a claim cannot be sourced, it does not get written.

export interface Source {
  label: string;
  publisher: string;
  date: string;
  href: string;
}

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <ol>
      {sources.map((source) => (
        <li key={source.href + source.label}>
          {source.publisher}. <em>{source.label}</em>. {source.date}.{' '}
          <a href={source.href} target="_blank" rel="noopener noreferrer">
            {source.href}
          </a>
        </li>
      ))}
    </ol>
  );
}

// A dated inline marker for any claim whose truth changes with the calendar.
// Range and season statements must age honestly rather than silently rot.
export function AsOf({ date, children }: { date: string; children: ReactNode }) {
  return (
    <span className="inline-block bg-amber-50 border border-amber-200 rounded px-2 py-0.5 text-sm font-semibold text-amber-900">
      {children} <span className="font-normal">(as of {date})</span>
    </span>
  );
}
