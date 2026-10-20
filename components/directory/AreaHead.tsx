import Link from 'next/link';
import type { ReactNode } from 'react';

export type Crumb = { label: string; href?: string };

// THE AREA RUNNING HEAD. A marigold thumb-tab names the region, the place name
// is set at directory-heading scale, and the count line says what is listed.
// Every area-level page (city, borough, town, directory) opens with this.
export default function AreaHead({
  crumbs,
  tab,
  title,
  standfirst,
  label,
  featured = false,
  children,
}: {
  crumbs: Crumb[];
  tab?: string;
  title: ReactNode;
  standfirst?: ReactNode;
  /** A second small label beside the tab, e.g. "Featured". */
  label?: ReactNode;
  featured?: boolean;
  children?: ReactNode;
}) {
  return (
    <>
    <header className={featured ? 'border-b border-[var(--color-marigold-edge)] bg-[var(--color-marigold-wash)]' : 'border-b border-[var(--color-ink)] bg-[var(--color-stock)]'}>
      <div className="dir-wrap pb-10 pt-6 md:pb-14 md:pt-8">
        <nav aria-label="Breadcrumb" className="text-[0.8125rem] text-[var(--color-ink-mute)]">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {crumbs.map((crumb, i) => (
              <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[var(--color-ink)] hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-[var(--color-ink-soft)]">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 md:mt-14">
          <h1 className="dir-display max-w-[18ch] text-[clamp(2.75rem,9vw,6.5rem)] text-[var(--color-ink)]">{title}</h1>
          {label && <div className="mt-5">{label}</div>}
          {standfirst && (
            <div className="mt-5 max-w-[60ch] text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-xl">{standfirst}</div>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </header>
    {tab && (
      // THE RUNNING HEAD. The directory's thumb-tab, pinned under the site
      // header so the place stays named all the way down a long list. It fades
      // in once the page head has scrolled away (scroll-driven, CSS only).
      <div className="dir-runhead sticky top-16 z-40 border-b border-[var(--color-rule-strong)] bg-[var(--color-stock)]">
        <div className="dir-wrap flex h-10 items-center gap-3">
          <span className="dir-tab !py-1">{tab}</span>
          {typeof title === 'string' && (
            <span className="truncate text-sm font-semibold text-[var(--color-ink)]">{title}</span>
          )}
        </div>
      </div>
    )}
    </>
  );
}

// The local-only statement. Pages pass their own approved wording as children;
// this only gives it a consistent, quiet setting beside the list.
export function LocalOnlyNote({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[68ch] border-l-0 text-[0.9375rem] leading-relaxed text-[var(--color-ink-soft)]">
      <span className="mr-2 inline-block h-2 w-2 translate-y-[-1px] rounded-full bg-[var(--color-marigold)] align-middle" aria-hidden="true" />
      {children}
    </p>
  );
}
