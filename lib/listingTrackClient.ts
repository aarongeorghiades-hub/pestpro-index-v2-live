import { analyticsConsentGranted } from '@/components/ConsentManager';

export type BeaconEventType = 'call' | 'email';

const GA_EVENT: Record<BeaconEventType | 'website', string> = {
  call: 'click_call',
  website: 'click_website',
  email: 'generate_lead',
};

export function beaconListingEvent(input: { slug: string; type: BeaconEventType }): void {
  if (typeof navigator === 'undefined') return;
  const payload = JSON.stringify({
    slug: input.slug,
    type: input.type,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
  const body = new Blob([payload], { type: 'application/json' });
  if (typeof navigator.sendBeacon === 'function' && navigator.sendBeacon('/api/track', body)) return;
  void fetch('/api/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true,
  }).catch(() => undefined);
}

/** GA4 only after the visitor has accepted analytics. No event is queued before that. */
export function fireListingGa(type: BeaconEventType | 'website', slug: string): void {
  if (typeof window === 'undefined') return;
  if (!analyticsConsentGranted()) return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', GA_EVENT[type], { provider_slug: slug });
}
