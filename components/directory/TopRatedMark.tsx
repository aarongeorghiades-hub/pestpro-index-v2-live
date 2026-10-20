import { Star } from 'lucide-react';
import { TROPHY_ARIA_LABEL } from '@/lib/trophy';

// The Top rated mark. Same rule as the old trophy emoji (lib/trophy.ts), set
// as a small typographic label so it reads as a fact, not a prize.
export default function TopRatedMark() {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-[4px] border border-[var(--color-ink)]/70 px-1.5 py-[3px] text-[0.6875rem] font-bold leading-none text-[var(--color-ink)]"
      title={TROPHY_ARIA_LABEL}
    >
      <Star aria-hidden="true" className="h-3 w-3 fill-current" strokeWidth={0} />
      Top rated
      <span className="sr-only">: {TROPHY_ARIA_LABEL}</span>
    </span>
  );
}
