"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

// THE UK HEADER. White stock, one hairline, a set wordmark. Every link the old
// header carried is still here: regions and directories under "Find a firm",
// the full guides list under "Guides", products, professionals and contact.

const regions = [
  { name: 'Greater London', href: '/pest-control/greater-london' },
  { name: 'West Midlands', href: '/pest-control/west-midlands' },
  { name: 'North West', href: '/pest-control/north-west' },
  { name: 'Yorkshire & the Humber', href: '/pest-control/yorkshire-and-the-humber' },
  { name: 'East Midlands', href: '/pest-control/east-midlands' },
  { name: 'South East', href: '/pest-control/south-east' },
  { name: 'South West', href: '/pest-control/south-west' },
  { name: 'Scotland', href: '/pest-control/scotland' },
  { name: 'North East', href: '/pest-control/north-east' },
  { name: 'Wales', href: '/pest-control/wales' },
  { name: 'Northern Ireland', href: '/pest-control/northern-ireland' },
];

const directories = [
  { href: '/residential', label: 'Residential Directory' },
  { href: '/commercial', label: 'Commercial Directory' },
];

const pestProducts = [
  { label: 'Home Products', href: '/products' },
  { label: 'Commercial Products', href: '/commercial-products' },
];

const startHere = [
  { href: '/pest-library', label: 'Pest Guides' },
  { href: '/guides/pest-control-costs', label: 'Pest Control Costs' },
  { href: '/blog', label: 'Blog' },
  { href: '/frequently-asked-questions', label: 'Pest Control FAQ' },
  { href: '/useful-links', label: 'Useful Links' },
  { href: '/guides', label: 'All Guides' },
];

const pestGuides = [
  { href: '/guides/how-to-get-rid-of-rats', label: 'Rat Control Guide' },
  { href: '/best/rat-traps', label: 'Best Rat Traps' },
  { href: '/guides/how-to-get-rid-of-mice', label: 'Mouse Control Guide' },
  { href: '/best/mouse-traps', label: 'Best Mouse Traps' },
  { href: '/best/rodent-proofing', label: 'Best Rodent Proofing' },
  { href: '/guides/wasp-nest-removal', label: 'Wasp Nest Removal Guide' },
  { href: '/best/wasp-killers', label: 'Best Wasp Killers' },
  { href: '/guides/how-to-get-rid-of-bed-bugs', label: 'Bed Bug Guide' },
  { href: '/best/bed-bug-treatments', label: 'Best Bed Bug Treatments' },
  { href: '/guides/how-to-get-rid-of-cockroaches', label: 'Cockroach Guide' },
  { href: '/best/cockroach-killers', label: 'Best Cockroach Killers' },
  { href: '/guides/how-to-get-rid-of-fleas', label: 'Flea Control Guide' },
  { href: '/best/flea-treatments', label: 'Best Flea Treatments' },
  { href: '/guides/how-to-get-rid-of-ants', label: 'Ant Control Guide' },
  { href: '/best/ant-killers', label: 'Best Ant Killers' },
  { href: '/guides/how-to-get-rid-of-squirrels', label: 'Squirrel Control Guide' },
  { href: '/best/squirrel-deterrents', label: 'Best Squirrel Deterrents' },
  { href: '/guides/how-to-get-rid-of-foxes', label: 'Fox Control Guide' },
  { href: '/best/fox-deterrents', label: 'Best Fox Deterrents' },
  { href: '/best/cat-deterrents', label: 'Best Cat Deterrents' },
  { href: '/guides/how-to-get-rid-of-silverfish', label: 'Silverfish Control Guide' },
  { href: '/best/silverfish-treatments', label: 'Best Silverfish Treatments' },
  { href: '/guides/woodworm-treatment', label: 'Woodworm Treatment Guide' },
  { href: '/best/woodworm-treatments', label: 'Best Woodworm Treatments' },
  { href: '/guides/carpet-beetle-control', label: 'Carpet Beetle Control Guide' },
  { href: '/best/carpet-beetle-treatments', label: 'Best Carpet Beetle Treatments' },
  { href: '/best/spider-repellent', label: 'Best Spider Repellent' },
  { href: '/guides/pigeon-control', label: 'Pigeon Control Guide' },
  { href: '/best/bird-deterrents', label: 'Best Bird Deterrents' },
  { href: '/guides/how-to-get-rid-of-moths', label: 'Moth Control Guide' },
  { href: '/best/moth-killers', label: 'Best Moth Killers' },
];

const commercialGuides = [
  { href: '/guides/commercial-pest-control', label: 'Commercial Pest Control' },
  { href: '/guides/restaurant-pest-control', label: 'Restaurant Pest Control' },
  { href: '/guides/warehouse-pest-management', label: 'Warehouse Pest Management' },
  { href: '/best/commercial-fly-killers', label: 'Best Commercial Fly Killers' },
  { href: '/best/commercial-rodent-bait-stations', label: 'Best Commercial Bait Stations' },
  { href: '/guides/hotel-pest-control', label: 'Hotel Pest Control' },
  { href: '/guides/office-pest-control', label: 'Office Pest Control' },
  { href: '/guides/landlord-pest-control', label: 'Landlord Pest Control' },
  { href: '/best/commercial-insect-monitors', label: 'Best Commercial Insect Monitors' },
  { href: '/best/commercial-bird-proofing', label: 'Best Commercial Bird Proofing' },
];

const CITY_PREFIXES = ['/residential', '/commercial', '/birmingham', '/manchester', '/liverpool', '/leeds', '/nottingham', '/brighton', '/sheffield', '/bristol', '/glasgow', '/bradford', '/newcastle', '/cardiff', '/edinburgh', '/leicester', '/hampshire', '/coventry', '/belfast', '/derby', '/pest-control', '/provider'];
const RESOURCE_PREFIXES = ['/blog', '/resources', '/frequently-asked-questions', '/pest-library', '/pest/', '/useful-links', '/guides', '/best'];

export function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 text-[1.375rem] leading-none ${inverse ? 'text-white' : 'text-[var(--color-ink)]'}`}>
      <span className="dir-display text-[1.5rem] tracking-[-0.01em]">PestPro</span>
      <span className="rounded-[3px] bg-[var(--color-marigold)] px-1.5 py-[3px] text-[0.8125rem] font-bold leading-none text-[var(--color-ink)]">Index</span>
    </span>
  );
}

type Menu = 'find' | 'guides' | null;

export default function Navigation() {
  const pathname = usePathname() || '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState<Menu>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const isFindActive = CITY_PREFIXES.some((p) => pathname.startsWith(p));
  const isGuidesActive = RESOURCE_PREFIXES.some((p) => pathname.startsWith(p));

  useEffect(() => {
    const onDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setMenu(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);


  const topLink = (active: boolean) =>
    `relative px-3 py-2 text-[0.9375rem] font-semibold transition-colors duration-150 ${
      active ? 'text-[var(--color-ink)] after:absolute after:inset-x-3 after:-bottom-[17px] after:h-[3px] after:bg-[var(--color-marigold)]' : 'text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]'
    }`;

  const panelLink = 'block py-1.5 text-[0.9375rem] text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] hover:underline underline-offset-4';
  const panelHead = 'mb-2 text-[0.8125rem] font-bold text-[var(--color-ink)]';

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      onClick={(event) => {
        // Any link followed from the header closes whatever menu is open.
        if ((event.target as Element).closest('a')) {
          setMenu(null);
          setMobileOpen(false);
        }
      }}
      className="nav-header sticky top-0 z-50 border-b border-[var(--color-rule-strong)] bg-[var(--color-stock)]">
      <div className="dir-wrap flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="PestPro Index home" className="shrink-0">
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <button
            type="button"
            aria-expanded={menu === 'find'}
            aria-controls="nav-find"
            onClick={() => setMenu(menu === 'find' ? null : 'find')}
            className={`${topLink(isFindActive)} inline-flex items-center gap-1`}
          >
            Find a firm
            <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${menu === 'find' ? 'rotate-180' : ''}`} />
          </button>
          {pestProducts.map((product) => (
            <Link key={product.href} href={product.href} className={topLink(pathname === product.href)}>
              {product.label}
            </Link>
          ))}
          <button
            type="button"
            aria-expanded={menu === 'guides'}
            aria-controls="nav-guides"
            onClick={() => setMenu(menu === 'guides' ? null : 'guides')}
            className={`${topLink(isGuidesActive)} inline-flex items-center gap-1`}
          >
            Guides
            <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${menu === 'guides' ? 'rotate-180' : ''}`} />
          </button>
          <Link href="/contact" className={topLink(pathname === '/contact')}>
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/professionals" className="dir-btn dir-btn-ink hidden !min-h-10 !py-2 text-sm lg:inline-flex">
            For professionals
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-[4px] text-[var(--color-ink)] hover:bg-[var(--color-paper-sunk)] lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="nav-mobile"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop panels */}
      {menu === 'find' && (
        <div id="nav-find" className="absolute inset-x-0 top-full hidden border-b border-[var(--color-rule-strong)] bg-[var(--color-stock)] shadow-[0_18px_40px_-24px_rgba(19,36,29,0.35)] lg:block">
          <div className="dir-wrap grid grid-cols-[2fr_1fr] gap-12 py-8">
            <div>
              <p className={panelHead}>Browse by region</p>
              <ul className="columns-2 gap-10">
                {regions.map((region) => (
                  <li key={region.href} className="break-inside-avoid">
                    <Link href={region.href} className={panelLink}>{region.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l border-[var(--color-rule)] pl-10">
              <p className={panelHead}>Directories</p>
              <ul>
                {directories.map((d) => (
                  <li key={d.href}><Link href={d.href} className={panelLink}>{d.label}</Link></li>
                ))}
              </ul>
              <p className="mt-6 max-w-[30ch] text-sm leading-relaxed text-[var(--color-ink-mute)]">
                Independent local firms only. No national chains.
              </p>
            </div>
          </div>
        </div>
      )}
      {menu === 'guides' && (
        <div id="nav-guides" className="absolute inset-x-0 top-full hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-[var(--color-rule-strong)] bg-[var(--color-stock)] shadow-[0_18px_40px_-24px_rgba(19,36,29,0.35)] lg:block">
          <div className="dir-wrap grid grid-cols-[1fr_3fr_1.4fr] gap-10 py-8">
            <div>
              <p className={panelHead}>Start here</p>
              <ul>{startHere.map((l) => <li key={l.href}><Link href={l.href} className={panelLink}>{l.label}</Link></li>)}</ul>
            </div>
            <div>
              <p className={panelHead}>Pests</p>
              <ul className="columns-3 gap-8">{pestGuides.map((l) => <li key={l.href} className="break-inside-avoid"><Link href={l.href} className={panelLink}>{l.label}</Link></li>)}</ul>
            </div>
            <div className="border-l border-[var(--color-rule)] pl-10">
              <p className={panelHead}>Commercial</p>
              <ul>{commercialGuides.map((l) => <li key={l.href}><Link href={l.href} className={panelLink}>{l.label}</Link></li>)}</ul>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu: every group is a native <details>, so it works by touch and keyboard alike. */}
      {mobileOpen && (
        <div id="nav-mobile" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[var(--color-rule)] bg-[var(--color-stock)] lg:hidden">
          <div className="dir-wrap py-4">
            <ul className="divide-y divide-[var(--color-rule)] border-b border-[var(--color-rule)]">
              <li><Link href="/" className="block py-3.5 text-lg font-semibold text-[var(--color-ink)]">Home</Link></li>
              <li>
                <details className="group" open={isFindActive}>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-lg font-semibold text-[var(--color-ink)] [&::-webkit-details-marker]:hidden">
                    Find a firm <ChevronDown aria-hidden="true" className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="pb-3">
                    {regions.map((r) => <li key={r.href}><Link href={r.href} className={panelLink}>{r.name}</Link></li>)}
                    {directories.map((d) => <li key={d.href}><Link href={d.href} className={`${panelLink} font-semibold text-[var(--color-ink)]`}>{d.label}</Link></li>)}
                  </ul>
                </details>
              </li>
              {pestProducts.map((p) => (
                <li key={p.href}><Link href={p.href} className="block py-3.5 text-lg font-semibold text-[var(--color-ink)]">{p.label}</Link></li>
              ))}
              <li>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-lg font-semibold text-[var(--color-ink)] [&::-webkit-details-marker]:hidden">
                    Guides <ChevronDown aria-hidden="true" className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="pb-3">
                    {[...startHere, ...pestGuides, ...commercialGuides].map((l) => <li key={l.href}><Link href={l.href} className={panelLink}>{l.label}</Link></li>)}
                  </ul>
                </details>
              </li>
              <li><Link href="/contact" className="block py-3.5 text-lg font-semibold text-[var(--color-ink)]">Contact</Link></li>
            </ul>
            <Link href="/professionals" className="dir-btn dir-btn-ink mt-5 w-full">For professionals</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
