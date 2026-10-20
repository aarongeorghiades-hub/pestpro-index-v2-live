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
          {(tab || label) && (
            <div className="flex flex-wrap items-center gap-2">
              {tab && <span className="dir-tab">{tab}</span>}
              {label}
            </div>
          )}
          <h1 className="dir-display mt-4 max-w-[18ch] text-[clamp(2.75rem,9vw,6rem)] text-[var(--color-ink)]">{title}</h1>
          {standfirst && (
            <div className="mt-5 max-w-[60ch] text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-xl">{standfirst}</div>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </header>
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
