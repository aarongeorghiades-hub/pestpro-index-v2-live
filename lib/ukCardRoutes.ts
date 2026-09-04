// THE SET OF UK PATHNAMES THAT ACTUALLY RENDER AN AFFILIATE CARD — S64 R3.
//
// PM RULING, S64 R2, EXTENDED TO THE UK ESTATE AT S64 R3: an affiliate or
// earnings statement is DERIVED AT BUILD TIME from whether the document renders
// a card. A hand-maintained route list is never the source of truth for it.
//
// WHAT IT REPLACES. components/FooterAssociatesNotice.tsx carried
// NO_AFFILIATE_LINKS_ROUTES, a two-entry exact-path exclusion list added at
// S61 R2 for /professionals and /resources. That list was the same mechanism the
// US side removed at S64 R2, and it had the same failure: MEASURED AT S64 R3,
// 100 UK DOCUMENTS RENDERED NO CARD AND STILL TOLD THE READER "All links are
// Amazon affiliate links." The list named two of them. This is the /us/opossums
// bug that FooterAssociatesNotice's own comment records twice, and it recurred
// because the remedy each time was another entry rather than a measurement
// (Law 178 — a list maintained by hand is not a measurement).
//
// THE DIRECTION OF THIS DEFECT IS THE MIRROR OF THE US ONE, AND IS NAMED HERE SO
// NOBODY LATER CONFLATES THEM. The US breach was a page carrying affiliate links
// under a denial — a live S59-C compliance breach. This one is a page carrying
// NO affiliate link while claiming the relationship. No Amazon programme term is
// breached by it and no reader is misled about a purchase they can make on the
// page. It is a false statement in the site's own voice on a hundred routes,
// which is reason enough (Law 130 — shared chrome is a page-level claim on every
// route it renders on).
//
// WHY A SOURCE SCAN IS SOUND HERE, MEASURED BEFORE IT WAS WRITTEN (Law 44).
// Over all 179 built UK documents at S64 R3:
//   - EVERY Amazon URL on the estate is one shape, www.amazon.co.uk/dp, 378 of
//     them across exactly 76 documents. There are no short links, no /gp/product
//     form and no other host, so "renders no card" cannot be a false negative.
//   - All 76 carding documents are STATIC routes with their own page.tsx.
//   - Zero of the 68 dynamic/generated routes (blog, pest-control regions, pest)
//     render a card.
//   - Across the 111 static routes, source declaration and rendered output agree
//     on ALL of them: ZERO disagreements.
//
// SOURCE DECLARATION IS STILL NOT RENDER (S64 R2), AND THAT GAP IS NOT CLOSED
// HERE. A card this scan sees but render suppresses would leave the statement on
// a page with no link; a card added to a generated route would leave a carding
// page with no statement. M33 reads the BUILT document and gates both directions
// on both estates. This module is the derivation; M33 is the proof.
//
// THE MATCHER IS DELIBERATELY BROAD, because the failing direction that matters
// most is dropping a disclosure from a page that has links. It fires on the
// component, on a rendered amazon.co.uk/dp URL, and on an ASIN declaration; any
// one is enough.

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const UK_DIR = join(process.cwd(), 'app/(uk)');

const DECLARES_CARD = /<ProductCard\b|amazon\.co\.uk\/dp\/|asin[=:]\s*['"][A-Z0-9]{10}['"]/;

// Directories that are route groups or dynamic segments rather than a literal
// path segment. A `[slug]` directory has no fixed pathname, so it cannot be a
// member of a pathname set; its generated routes are covered by M33 instead.
const isLiteralSegment = (name: string) => !name.startsWith('[') && !name.startsWith('(') && !name.startsWith('_');

function walk(dir: string, prefix: string, out: Set<string>): void {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    if (!e.isDirectory() || !isLiteralSegment(e.name)) continue;
    const path = `${prefix}/${e.name}`;
    const page = join(dir, e.name, 'page.tsx');
    if (existsSync(page) && DECLARES_CARD.test(readFileSync(page, 'utf8'))) out.add(path);
    walk(join(dir, e.name), path, out);
  }
}

export function ukCardCarryingRoutes(): string[] {
  const out = new Set<string>();
  walk(UK_DIR, '', out);
  return [...out].sort();
}
