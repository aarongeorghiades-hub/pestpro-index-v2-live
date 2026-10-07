'use client';

import { useEffect } from 'react';
import { beaconListingEvent, fireListingGa } from '@/lib/listingTrackClient';

const SLUG_RE = /^\/provider\/([a-z0-9-]{1,120})\/?$/;

function slugInCard(anchor: Element): string | null {
  let node: Element | null = anchor.parentElement;
  for (let depth = 0; depth < 12 && node; depth++) {
    const links = node.querySelectorAll('a[href^="/provider/"]');
    if (links.length > 1) return null;
    if (links.length === 1) {
      const match = (links[0].getAttribute('href') || '').match(SLUG_RE);
      return match ? match[1] : null;
    }
    node = node.parentElement;
  }
  return null;
}

function isAmazonHost(hostname: string): boolean {
  return hostname === 'amazon.co.uk' || hostname === 'www.amazon.co.uk' || hostname === 'amazon.com' || hostname === 'www.amazon.com' || hostname.endsWith('.amazon.co.uk') || hostname.endsWith('.amazon.com');
}

// Directory cards keep their tel: and website hrefs. This listener logs the
// click when the card also contains exactly one /provider/[slug] link.
// Provider pages mark their own links with data-listing-tracked and are skipped,
// so a click is not recorded twice. Amazon links are never rewritten.
export default function ListingClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a');
      if (!anchor || anchor.hasAttribute('data-listing-tracked')) return;

      const href = anchor.getAttribute('href') || '';
      if (!href || href.startsWith('/provider/')) return;
      if (href.startsWith('/go/')) {
        const goSlug = href.match(/^\/go\/([a-z0-9-]{1,120})/);
        if (goSlug) fireListingGa('website', goSlug[1]);
        return;
      }

      const slug = slugInCard(anchor);
      if (!slug) return;

      if (href.startsWith('tel:')) {
        beaconListingEvent({ slug, type: 'call' });
        fireListingGa('call', slug);
        return;
      }

      if (href.startsWith('mailto:')) {
        beaconListingEvent({ slug, type: 'email' });
        fireListingGa('email', slug);
        return;
      }

      let url: URL;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }
      if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
      if (url.hostname === window.location.hostname || url.hostname === 'pestproindex.com' || url.hostname === 'www.pestproindex.com') {
        return;
      }
      if (isAmazonHost(url.hostname)) return;

      event.preventDefault();
      fireListingGa('website', slug);
      const go = `/go/${slug}?from=${encodeURIComponent(window.location.pathname)}`;
      if (anchor.getAttribute('target') === '_blank' || event.metaKey || event.ctrlKey || event.shiftKey) {
        window.open(go, '_blank', 'noopener,noreferrer');
      } else {
        window.location.assign(go);
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
