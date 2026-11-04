'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Wordmark } from '@/components/Navigation';

// THE US HEADER — S77. The UK header's look on US links.
//
// The visual system is the UK one exactly: the sticky white 76px bar, the
// strong hairline under it, the Caslon wordmark with its green "Index" tag, and
// pill links that go solid green when active. Every class it uses is the one
// components/Navigation.tsx uses, so the two estates cannot drift apart in
// spacing or colour without one of them being edited on purpose.
//
// THE LINKS ARE THE US LINKS THAT WERE ALREADY HERE, AND NOTHING ELSE.
// UsPageLayout's old dark header rendered the wordmark to `homeHref` and one link
// per `clusterNav` entry. Both survive unchanged. The single addition is
// "All pest guides" to the bare `/us` hub. That is deliberate and measured:
// G7 (scripts/gates.mjs, INTERNAL_LINK_RE) counts only `/us/<slug>` hrefs and
// reads the WHOLE served document, header included. A site-wide header link to a
// content route would hand every route an outbound link and that route an
// inbound one from all sixty, and the orphan gate could never fail again
// (Law 75, Law 167). The bare hub is outside that pattern, so the link graph
// G7 measures is the same set before and after this header.
//
// The UK header is not reused because it carries ~80 UK links (S47 R9: UK
// chrome on /us is the defect that moved the UK footer into app/(uk)).

type NavLink = { title: string; href: string };

const US_HOME = '/us';

export default function UsHeader({ clusterNav }: { clusterNav: NavLink[] }) {
  const pathname = usePathname() || '';
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const links: NavLink[] = [{ title: 'All pest guides', href: US_HOME }, ...clusterNav];

  const pill = (active: boolean) =>
    `relative rounded-full px-4 py-2.5 text-base font-semibold transition-[background-color,color] duration-200 ${
      active
        ? 'bg-[var(--color-primary)] text-white'
        : 'text-[var(--color-ink)] hover:bg-[var(--color-paper-sunk)] hover:text-[var(--color-primary)]'
    }`;

  return (
    // A <header> (the banner landmark the old US header carried) holding the
    // <nav>, so assistive tech keeps both landmarks.
    <header
      ref={navRef}
      onClick={(event) => {
        if ((event.target as Element).closest('a')) setOpen(false);
      }}
      className="nav-header sticky top-0 z-50 border-b border-[var(--color-rule)] bg-[var(--color-stock)]"
    >
      <nav aria-label="Main">
      <div className="dir-wrap flex h-[76px] items-center justify-between gap-6">
        {/* The UK wordmark exactly, with nothing appended: the logo is one lockup
            across both estates. The US identity is carried by the footer name and
            the accessible label. */}
        {/* S78 PM ruling 2026-11-04: the wordmark goes to the US home, /us, on
            every /us page, as the UK wordmark goes to "/". It previously followed
            each cluster's homeHref (the Joro pages pointed at /us/joro-spider).
            /us is outside G7's /us/<slug> pattern, and /us/joro-spider stays
            linked from JORO_NAV, so the G7 link graph does not change. */}
        <Link href={US_HOME} aria-label="PestPro Index US home" className="shrink-0">
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-1.5 lg:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={pill(pathname === item.href)}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-[4px] text-[var(--color-ink)] hover:bg-[var(--color-paper-sunk)] lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="us-nav-mobile"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          id="us-nav-mobile"
          className="dir-panel max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-[var(--color-rule)] bg-[var(--color-stock)] lg:hidden"
        >
          <ul className="dir-wrap divide-y divide-[var(--color-rule)] py-2">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={`block py-3.5 text-lg font-semibold ${
                    pathname === item.href ? 'text-[var(--color-primary)]' : 'text-[var(--color-ink)]'
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      </nav>
    </header>
  );
}
