import type { ReactNode } from 'react';
import { TROPHY_LEGEND } from '@/lib/trophy';

// The list is one card (hairline border, soft shadow, 12px radius) holding
// ruled rows, so it reads as a continuous directory column. Only the Featured
// entry gets a card of its own, which is what keeps it special.
export function FirmList({ children, legend = true }: { children: ReactNode; legend?: boolean }) {
  return (
    <div>
      <ul className="dir-card divide-y divide-[var(--color-rule)] overflow-hidden">{children}</ul>
      {legend && <p className="mt-4 max-w-[70ch] text-xs leading-relaxed text-[var(--color-ink-mute)]">{TROPHY_LEGEND}</p>}
    </div>
  );
}

export function FirmListItem({ children }: { children: ReactNode }) {
  return <li className="dir-reveal transition-colors duration-300 hover:bg-[var(--color-paper)]/70">{children}</li>;
}

// The designed empty state: a list with no entries still reads as a column of
// the directory, not as missing content.
export function FirmListEmpty({ children }: { children: ReactNode }) {
  return (
    <div className="dir-card px-6 py-10 md:px-8">
      <p className="max-w-[56ch] text-[var(--color-ink-soft)]">{children}</p>
    </div>
  );
}
