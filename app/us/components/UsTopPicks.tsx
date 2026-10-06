import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import TopPicks from '@/components/TopPicks';
import { extractRoute } from '@/app/us/lib/cardIndex';
import { US_TOP_PICKS } from '@/app/us/lib/topPicksData';

// S70 R5 — THE US TOP-PICKS BOX (Law 195, extended to /us by PM ruling S70 R5).
//
// THE PRODUCTS ARE DERIVED, NEVER LISTED. The box reads the route's own cards with
// the same extractor /us/products and the footer use, so its names and ASINs are the
// cards' own and cannot drift from them. topPicksData.ts holds ONLY the words a card
// does not carry: a neutral label, a one-line who-it-suits reason, and the optional
// safety/law note.
//
// IT HALTS RATHER THAN DRIFTING. A card with no entry, an entry with no card, or an
// ASIN both picked and excluded fails the build with the route named. A card added
// to a route therefore cannot ship without its box line, and a card removed cannot
// leave a dead pick behind.
export default function UsTopPicks({ slug }: { slug: string }) {
  const src = readFileSync(join(process.cwd(), 'app/us', slug, 'page.tsx'), 'utf8');
  const cards = extractRoute(slug, src);
  const data = US_TOP_PICKS[slug];
  if (!data) throw new Error(`UsTopPicks: no box data for /us/${slug}`);
  const picked = new Map(data.picks.map((p) => [p.asin, p]));
  const excluded = new Set(data.excluded.map((e) => e.asin));
  const onPage = new Set(cards.map((c) => c.asin));
  for (const c of cards) {
    if (picked.has(c.asin) === excluded.has(c.asin))
      throw new Error(`UsTopPicks: /us/${slug} card ${c.asin} must be picked or excluded, exactly once`);
  }
  for (const a of [...picked.keys(), ...excluded])
    if (!onPage.has(a)) throw new Error(`UsTopPicks: /us/${slug} box names ${a}, which the route does not card`);
  const picks = cards
    .filter((c) => picked.has(c.asin))
    .map((c) => ({ label: picked.get(c.asin)!.label, name: c.name, reason: picked.get(c.asin)!.reason, asin: c.asin }));
  if (!picks.length) return null;
  return <TopPicks market="us" note={data.note ?? undefined} picks={picks} />;
}
