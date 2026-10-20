import type { ReactNode } from 'react';
import { TROPHY_LEGEND } from '@/lib/trophy';

// A ruled list of directory entries. Each row's top rule draws in as it
// scrolls into view (.dir-entry in globals.css); the last row closes with a
// static rule so the list ends like a printed column.
export function FirmList({ children, legend = true }: { children: ReactNode; legend?: boolean }) {
  return (
    <div>
      <ul className="border-b border-[var(--color-rule-strong)]">{children}</ul>
      {legend && <p className="mt-4 max-w-[70ch] text-xs leading-relaxed text-[var(--color-ink-mute)]">{TROPHY_LEGEND}</p>}
    </div>
  );
}

export function FirmListItem({ children }: { children: ReactNode }) {
  return <li className="dir-entry">{children}</li>;
}

// The designed empty state: a list with no entries still reads as a column of
// the directory, not as missing content.
export function FirmListEmpty({ children }: { children: ReactNode }) {
  return (
    <div className="border-y border-[var(--color-rule-strong)] py-10">
      <p className="max-w-[56ch] text-[var(--color-ink-soft)]">{children}</p>
    </div>
  );
}
