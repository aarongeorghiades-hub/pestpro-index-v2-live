'use client';

import type { ReactNode } from 'react';
import { beaconListingEvent, fireListingGa } from '@/lib/listingTrackClient';

// Provider-page contact links. data-listing-tracked tells the directory click
// listener to leave these alone. Website clicks are a real /go/ link, so they
// are logged even when JavaScript does not run. tel: and mailto: beacon first.
export function ProviderPhoneLink({ slug, phone, className = 'text-lg text-blue-600 hover:underline', children }: { slug: string; phone: string; className?: string; children?: ReactNode }) {
  return (
    <a
      href={`tel:${String(phone).replace(/\s+/g, '')}`}
      data-listing-tracked="call"
      className={className}
      onClick={() => {
        beaconListingEvent({ slug, type: 'call' });
        fireListingGa('call', slug);
      }}
    >
      {children ?? phone}
    </a>
  );
}

export function ProviderEmailLink({ slug, email, className = 'text-lg text-blue-600 hover:underline' }: { slug: string; email: string; className?: string }) {
  return (
    <a
      href={`mailto:${email}`}
      data-listing-tracked="email"
      className={className}
      onClick={() => {
        beaconListingEvent({ slug, type: 'email' });
        fireListingGa('email', slug);
      }}
    >
      {email}
    </a>
  );
}

export function ProviderWebsiteLink({ slug, className = 'text-lg text-blue-600 hover:underline', children }: { slug: string; className?: string; children?: ReactNode }) {
  return (
    <a
      href={`/go/${slug}?from=${encodeURIComponent(`/provider/${slug}`)}`}
      data-listing-tracked="website"
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={className}
      onClick={() => fireListingGa('website', slug)}
    >
      {children ?? 'Visit Website →'}
    </a>
  );
}
