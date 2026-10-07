'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import FeaturedBlock from '@/components/listing/FeaturedBlock';
import type { FeaturedCard } from '@/lib/featuredProviders';
import { pathMightListProviders } from '@/lib/directoryPath';

const EMPTY_PROVIDERS: FeaturedCard[] = [];

// Looks for <div data-featured-slot /> on directory pages and, only when the
// API returns featured firms, draws the box there. An empty response leaves
// the slot blank, so the page looks the same until someone is featured.
export default function FeaturedSlot() {
  const pathname = usePathname() || '/';
  const [loaded, setLoaded] = useState<{ path: string; providers: FeaturedCard[] } | null>(null);
  const [slot, setSlot] = useState<HTMLElement | null>(null);

  const providers =
    loaded && loaded.path === pathname && pathMightListProviders(pathname)
      ? loaded.providers
      : EMPTY_PROVIDERS;

  useEffect(() => {
    if (!pathMightListProviders(pathname)) return;

    const controller = new AbortController();
    const path = pathname;
    fetch(`/api/featured?path=${encodeURIComponent(path)}`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : { providers: [] }))
      .then((body: { providers?: FeaturedCard[] }) => {
        setLoaded({
          path,
          providers: Array.isArray(body.providers) ? body.providers : [],
        });
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setLoaded({ path, providers: [] });
      });

    return () => controller.abort();
  }, [pathname]);

  useEffect(() => {
    // The slot node belongs to the page, so it exists only after that page
    // has committed. Reading it here is the subscription; the state holds the
    // node the portal needs.
    const frame = requestAnimationFrame(() => {
      if (providers.length === 0) {
        setSlot(null);
        return;
      }
      setSlot(document.querySelector<HTMLElement>('[data-featured-slot]'));
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, providers]);

  if (!slot || providers.length === 0) return null;
  return createPortal(<FeaturedBlock providers={providers} fromPath={pathname} />, slot);
}
