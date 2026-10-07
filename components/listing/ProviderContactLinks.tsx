'use client';

import { beaconListingEvent, fireListingGa } from '@/lib/listingTrackClient';

// Provider-page contact links. data-listing-tracked tells the directory click
// listener to leave these alone. Website clicks are a real /go/ link, so they
// are logged even when JavaScript does not run. tel: and mailto: beacon first.
export function ProviderPhoneLink({ slug, phone }: { slug: string; phone: string }) {
  return (
    <a
      href={`tel:${String(phone).replace(/\s+/g, '')}`}
      data-listing-tracked="call"
      className="text-lg text-blue-600 hover:underline"
      onClick={() => {
        beaconListingEvent({ slug, type: 'call' });
        fireListingGa('call', slug);
      }}
    >
      {phone}
    </a>
  );
}

export function ProviderEmailLink({ slug, email }: { slug: string; email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      data-listing-tracked="email"
      className="text-lg text-blue-600 hover:underline"
      onClick={() => {
        beaconListingEvent({ slug, type: 'email' });
        fireListingGa('email', slug);
      }}
    >
      {email}
    </a>
  );
}

export function ProviderWebsiteLink({ slug }: { slug: string }) {
  return (
    <a
      href={`/go/${slug}?from=${encodeURIComponent(`/provider/${slug}`)}`}
      data-listing-tracked="website"
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="text-lg text-blue-600 hover:underline"
      onClick={() => fireListingGa('website', slug)}
    >
      Visit Website →
    </a>
  );
}
