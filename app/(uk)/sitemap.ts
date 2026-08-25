import { MetadataRoute } from 'next';
import { createServerClient } from '@/utils/supabase-server';
import { isProviderThin } from '@/lib/provider';
import { getAllRegions } from './pest-control/data/regions';
import { getAllBoroughs } from './pest-control/london/london-boroughs';
import { getAllBoroughs as getAllManchesterBoroughs } from './pest-control/manchester/manchester-boroughs';
import { getAllBoroughs as getAllLiverpoolBoroughs } from './pest-control/liverpool/liverpool-boroughs';
import { getAllBoroughs as getAllLeedsBoroughs } from './pest-control/leeds/leeds-boroughs';
import { getAllBoroughs as getAllNottinghamBoroughs } from './pest-control/nottingham/nottingham-boroughs';
import { getAllBoroughs as getAllBrightonBoroughs } from './pest-control/brighton/brighton-boroughs';
import { getAllBoroughs as getAllSheffieldBoroughs } from './pest-control/sheffield/sheffield-boroughs';
import { getAllBoroughs as getAllBristolBoroughs } from './pest-control/bristol/bristol-boroughs';
import { getAllBoroughs as getAllGlasgowBoroughs } from './pest-control/glasgow/glasgow-boroughs';
import { getAllBoroughs as getAllBradfordBoroughs } from './pest-control/bradford/bradford-boroughs';
import { getAllBoroughs as getAllNewcastleBoroughs } from './pest-control/newcastle/newcastle-boroughs';
import { getAllBoroughs as getAllCardiffBoroughs } from './pest-control/cardiff/cardiff-boroughs';
import { getAllBoroughs as getAllEdinburghBoroughs } from './pest-control/edinburgh/edinburgh-boroughs';
import { getAllBoroughs as getAllLeicesterBoroughs } from './pest-control/leicester/leicester-boroughs';
import { getAllTowns as getAllHampshireTowns } from './pest-control/hampshire/hampshire-towns';
import { getAllBoroughs as getAllCoventryBoroughs } from './pest-control/coventry/coventry-boroughs';
import { getAllBoroughs as getAllBelfastBoroughs } from './pest-control/belfast/belfast-boroughs';
import { getAllBoroughs as getAllDerbyBoroughs } from './pest-control/derby/derby-boroughs';
import { posts } from './blog/data/posts';
import { pestGuides } from '@/data/pest-guides';
import { LOCATIONS, PESTS } from './pest-control/pest-city-config';
import fs from 'node:fs';
import path from 'node:path';

// Query providers at request time so the sitemap reflects the live table.
export const dynamic = 'force-dynamic';

// ---------------------------------------------------------------------------
// ROUTE DISCOVERY
// ---------------------------------------------------------------------------
// Static routes are DISCOVERED, never listed. Before this file was rewritten
// it carried 156 hand-typed URL literals, and four live pages — /london,
// /frequently-asked-questions, /resources and /get-help — had simply never
// been added to that list. A list cannot notice what is missing from it.
//
// Two independent discovery sources are tried in order:
//
//   1. .next/app-path-routes-manifest.json — the App Router's own enumeration,
//      emitted by `next build` and shipped inside .next. Route groups such as
//      (home) are already resolved to their URL form, and page routes are
//      distinguishable from route handlers by the `/page` vs `/route` suffix
//      on the key. This is the authoritative source.
//
//   2. a walk of the app/ source tree, used only if the manifest is absent or
//      unreadable — during `next dev`, or if a future Next release renames it.
//
// A new segment, for example app/us/anything/page.tsx, is therefore picked up
// by the next build with NO change to this file.

const APP_DIR = path.join(process.cwd(), 'app');
const ROUTES_MANIFEST = path.join(process.cwd(), '.next', 'app-path-routes-manifest.json');

// Discovery must never silently degrade. If both sources fail, or return an
// implausibly small set, emitting a truncated sitemap would tell Google that
// the missing URLs are gone. Throwing instead leaves the last good sitemap in
// place. The floor is set well below the real figure (171 at the time of
// writing) and well above zero.
const MIN_EXPECTED_STATIC_ROUTES = 100;

// ---- the deny rule -------------------------------------------------------
// Nothing is excluded by omission. Everything excluded is excluded here.

// Any URL segment equal to one of these makes the whole path unpublishable.
const DENY_SEGMENTS = new Set([
  'api', 'admin', 'auth', 'login', 'logout', 'signin', 'signup',
  'dashboard', 'account', 'preview', 'draft',
]);

// Exact paths that render and return 200 but must not be advertised. Each
// carries the measured reason it is here.
const DENY_PATHS = new Map<string, string>([
  // 'use client' form with no metadata of its own, so it inherits
  // alternates.canonical = https://pestproindex.com/professionals from
  // app/professionals/layout.tsx. Listing a URL that canonicalises elsewhere
  // asks Google to crawl a page that then points it somewhere else.
  ['/professionals/submit', 'canonicalises to /professionals'],
]);

function isPublishable(urlPath: string): boolean {
  if (DENY_PATHS.has(urlPath)) return false;
  // Dynamic segments are supplied by their own data sources further down.
  if (urlPath.includes('[')) return false;
  for (const segment of urlPath.split('/')) {
    if (!segment) continue;
    // Private/internal conventions: /_not-found, /_global-error, @slots.
    if (segment.startsWith('_') || segment.startsWith('@')) return false;
    if (DENY_SEGMENTS.has(segment)) return false;
  }
  return true;
}

// ---- source 1: the build's own route manifest -----------------------------
function discoverFromManifest(): string[] {
  const raw = fs.readFileSync(ROUTES_MANIFEST, 'utf8');
  const manifest = JSON.parse(raw) as Record<string, string>;
  return Object.entries(manifest)
    .filter(([key]) => key.endsWith('/page'))
    .map(([, urlPath]) => urlPath);
}

// ---- source 2: the app/ source tree ---------------------------------------
function discoverFromFilesystem(): string[] {
  const found: string[] = [];
  const walk = (dir: string, segments: string[]) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const name = entry.name;
        // A (group) directory contributes no URL segment.
        const next =
          name.startsWith('(') && name.endsWith(')') ? segments : [...segments, name];
        walk(path.join(dir, name), next);
      } else if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
        found.push('/' + segments.join('/'));
      }
    }
  };
  walk(APP_DIR, []);
  return found.map((p) => (p === '/' ? '/' : p));
}

function discoverStaticRoutes(): string[] {
  let discovered: string[] = [];
  let source = 'manifest';
  try {
    discovered = discoverFromManifest();
  } catch {
    source = 'filesystem';
    discovered = discoverFromFilesystem();
  }
  if (discovered.filter(isPublishable).length < MIN_EXPECTED_STATIC_ROUTES && source === 'manifest') {
    source = 'filesystem';
    discovered = discoverFromFilesystem();
  }
  const publishable = Array.from(new Set(discovered.filter(isPublishable))).sort();
  if (publishable.length < MIN_EXPECTED_STATIC_ROUTES) {
    throw new Error(
      `[sitemap] route discovery returned ${publishable.length} static routes via ${source}, ` +
        `below the floor of ${MIN_EXPECTED_STATIC_ROUTES}. Refusing to emit a truncated sitemap.`
    );
  }
  return publishable;
}

// ---- crawl hints ----------------------------------------------------------
// Routes are discovered; changefreq and priority are editorial and cannot be.
// The rules below reproduce every one of the 166 static entries the previous
// hand-maintained array carried, verified by simulation before this file was
// written. Six URLs were tuned individually there and are preserved verbatim.

type CrawlHint = {
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

const HINT_OVERRIDES: Record<string, CrawlHint> = {
  '/best/awaabs-law-damp-mould-equipment': { changeFrequency: 'daily', priority: 0.9 },
  '/best/damp-proof-paint-mould-treatment': { changeFrequency: 'monthly', priority: 0.8 },
  '/best/rodent-proofing': { changeFrequency: 'monthly', priority: 0.8 },
  '/guides/commercial-pest-control': { changeFrequency: 'weekly', priority: 0.9 },
  '/guides/landlord-pest-control-responsibilities': { changeFrequency: 'monthly', priority: 0.8 },
  '/guides/pest-control-costs': { changeFrequency: 'weekly', priority: 0.9 },
};

const HINT_RULES: Array<[RegExp, CrawlHint]> = [
  [/^\/$/, { changeFrequency: 'daily', priority: 1 }],
  [/^\/(residential|commercial)$/, { changeFrequency: 'daily', priority: 0.9 }],
  [/^\/best$/, { changeFrequency: 'weekly', priority: 0.8 }],
  [/^\/best\//, { changeFrequency: 'weekly', priority: 0.8 }],
  [/^\/guides$/, { changeFrequency: 'weekly', priority: 0.9 }],
  [/^\/guides\//, { changeFrequency: 'weekly', priority: 0.8 }],
  [/^\/blog$/, { changeFrequency: 'weekly', priority: 0.6 }],
  [/^\/pest-control$/, { changeFrequency: 'weekly', priority: 0.8 }],
  [/^\/pest-control\/london$/, { changeFrequency: 'weekly', priority: 0.9 }],
  [/^\/pest-control\//, { changeFrequency: 'weekly', priority: 0.8 }],
  [/^\/pest-library$/, { changeFrequency: 'monthly', priority: 0.7 }],
  [/^\/(products|commercial-products)$/, { changeFrequency: 'weekly', priority: 0.7 }],
  [/^\/professionals$/, { changeFrequency: 'weekly', priority: 0.4 }],
  [/^\/(about|contact|privacy|cookies)$/, { changeFrequency: 'monthly', priority: 0.4 }],
  [/^\/useful-links$/, { changeFrequency: 'monthly', priority: 0.5 }],
  [/^\/[^/]+\/(residential|commercial)$/, { changeFrequency: 'daily', priority: 0.9 }],
];

const DEFAULT_HINT: CrawlHint = { changeFrequency: 'monthly', priority: 0.5 };

// City hub slugs come from the same LOCATIONS data the pest-city URLs use, so
// a new city is a data change, not a change to this file.
const CITY_HUB_SLUGS = new Set(LOCATIONS.map((location) => location.slug));

function hintFor(urlPath: string): CrawlHint {
  const override = HINT_OVERRIDES[urlPath];
  if (override) return override;
  for (const [pattern, hint] of HINT_RULES) {
    if (pattern.test(urlPath)) return hint;
  }
  const single = urlPath.match(/^\/([^/]+)$/);
  if (single && CITY_HUB_SLUGS.has(single[1])) {
    return { changeFrequency: 'daily', priority: 0.9 };
  }
  return DEFAULT_HINT;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pestproindex.com';

  // Provider listing pages. Only active providers with a slug, deduplicated
  // (65 slugs are shared by 2 rows — same business cross-listed by region, or
  // exact Cardiff duplicates), and excluding thin listings that the provider
  // page marks noindex — so the sitemap lists only indexable, 200-status URLs.
  const supabase = createServerClient();
  const { data: providerRows, error: providerError } = await supabase
    .from('Providers')
    .select('slug, phone, website, email, google_rating, google_review_count, profile_text')
    .eq('active', true);
  if (providerError) console.error('[sitemap] providers:', providerError.message);

  const seenSlugs = new Set<string>();
  const providerUrls = (providerRows || [])
    .filter((p) => p.slug && !isProviderThin(p) && !seenSlugs.has(p.slug) && seenSlugs.add(p.slug))
    .map((p) => ({
      url: `${baseUrl}/provider/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  // Get all regions
  const regions = getAllRegions();
  const regionUrls = regions.map((region) => ({
    url: `${baseUrl}/pest-control/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: region.status === 'live' ? 0.8 : 0.7,
  }));

  // Get all London boroughs (short-URL form — matches the canonical
  // rendered by the [borough] route and the rewrite in next.config.ts)
  const boroughs = getAllBoroughs();
  const boroughUrls = boroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Manchester boroughs
  const manchesterBoroughs = getAllManchesterBoroughs();
  const manchesterBoroughUrls = manchesterBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/manchester/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Liverpool boroughs
  const liverpoolBoroughs = getAllLiverpoolBoroughs();
  const liverpoolBoroughUrls = liverpoolBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/liverpool/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Leeds boroughs
  const leedsBoroughs = getAllLeedsBoroughs();
  const leedsBoroughUrls = leedsBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/leeds/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Nottingham boroughs
  const nottinghamBoroughs = getAllNottinghamBoroughs();
  const nottinghamBoroughUrls = nottinghamBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/nottingham/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Brighton boroughs
  const brightonBoroughs = getAllBrightonBoroughs();
  const brightonBoroughUrls = brightonBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/brighton/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Sheffield boroughs
  const sheffieldBoroughs = getAllSheffieldBoroughs();
  const sheffieldBoroughUrls = sheffieldBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/sheffield/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Bristol boroughs
  const bristolBoroughs = getAllBristolBoroughs();
  const bristolBoroughUrls = bristolBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/bristol/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Glasgow boroughs
  const glasgowBoroughs = getAllGlasgowBoroughs();
  const glasgowBoroughUrls = glasgowBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/glasgow/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Bradford boroughs
  const bradfordBoroughs = getAllBradfordBoroughs();
  const bradfordBoroughUrls = bradfordBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/bradford/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Newcastle boroughs
  const newcastleBoroughs = getAllNewcastleBoroughs();
  const newcastleBoroughUrls = newcastleBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/newcastle/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Cardiff boroughs
  const cardiffBoroughs = getAllCardiffBoroughs();
  const cardiffBoroughUrls = cardiffBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/cardiff/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Edinburgh boroughs
  const edinburghBoroughs = getAllEdinburghBoroughs();
  const edinburghBoroughUrls = edinburghBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/edinburgh/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Leicester boroughs
  const leicesterBoroughs = getAllLeicesterBoroughs();
  const leicesterBoroughUrls = leicesterBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/leicester/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Coventry boroughs
  const coventryBoroughs = getAllCoventryBoroughs();
  const coventryBoroughUrls = coventryBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/coventry/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Belfast boroughs
  const belfastBoroughs = getAllBelfastBoroughs();
  const belfastBoroughUrls = belfastBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/belfast/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Derby boroughs
  const derbyBoroughs = getAllDerbyBoroughs();
  const derbyBoroughUrls = derbyBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/derby/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Hampshire towns
  const hampshireTowns = getAllHampshireTowns();
  const hampshireTownUrls = hampshireTowns.map((town) => ({
    url: `${baseUrl}/pest-control/hampshire/${town.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Pest-specific city pages (180 = 18 locations × 10 pests)
  const pestCityUrls = LOCATIONS.flatMap((location) =>
    PESTS.map((pest) => ({
      url: `${baseUrl}/pest-control/${location.slug}/${pest.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // Blog posts
  const blogPostUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));
  // Static routes, discovered. The root is emitted as the bare origin with no
  // trailing slash, matching the sitemap this replaces and the site's
  // trailingSlash:false normalisation.
  const staticUrls = discoverStaticRoutes().map((urlPath) => ({
    url: urlPath === '/' ? baseUrl : `${baseUrl}${urlPath}`,
    lastModified: new Date(),
    ...hintFor(urlPath),
  }));

  const entries: MetadataRoute.Sitemap = [
    ...staticUrls,
    ...pestGuides.map((pest) => ({
      url: `${baseUrl}/pest/${pest.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...providerUrls,
    ...blogPostUrls,
    ...regionUrls,
    ...boroughUrls,
    ...manchesterBoroughUrls,
    ...liverpoolBoroughUrls,
    ...leedsBoroughUrls,
    ...nottinghamBoroughUrls,
    ...brightonBoroughUrls,
    ...sheffieldBoroughUrls,
    ...bristolBoroughUrls,
    ...glasgowBoroughUrls,
    ...bradfordBoroughUrls,
    ...newcastleBoroughUrls,
    ...cardiffBoroughUrls,
    ...edinburghBoroughUrls,
    ...leicesterBoroughUrls,
    ...hampshireTownUrls,
    ...coventryBoroughUrls,
    ...belfastBoroughUrls,
    ...derbyBoroughUrls,
    ...pestCityUrls,
  ];

  // One URL, one entry. Discovery and the data-driven arrays are independent
  // sources and could in principle name the same URL; first occurrence wins.
  const seenUrls = new Set<string>();
  return entries.filter((entry) => {
    if (seenUrls.has(entry.url)) return false;
    seenUrls.add(entry.url);
    return true;
  });
}
