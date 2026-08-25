import { NextResponse } from 'next/server';
import { createAdminClient } from '@/utils/supabase-admin';
import {
  REGION_SLUGS,
  PEST_KEYS,
  TIER_VALUES,
  DEFAULT_TIER,
  HONEYPOT_FIELD,
  PROFILE_TEXT_MAX,
} from '@/lib/providerSubmissions';

// Writes go through the service-role client: provider_submissions has RLS
// enabled with no anon policies, so a browser-side insert would be rejected.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const GENERIC_ERROR =
  'Something went wrong submitting your listing. Please try again, or email pestproindex@zohomail.eu.';

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === 'string').map((v) => v.trim());
}

/** Accepts "example.co.uk" as well as a full URL; returns null when empty. */
function normaliseWebsite(raw: string): string | null {
  if (!raw) return null;
  const trimmed = raw.trim().replace(/\s+/g, '');
  if (!trimmed) return null;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed.replace(/^\/+/, '')}`;
}

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot: respond exactly as a success would, but store nothing at all.
  // Returning a normal 200 keeps bots from learning they have been detected.
  if (asString(body[HONEYPOT_FIELD])) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name);
  const email = asString(body.email).toLowerCase();
  const phone = asString(body.phone);
  const website = asString(body.website);
  const address = asString(body.address);
  const postcode = asString(body.postcode).toUpperCase();
  const profileText = asString(body.profile_text);
  const tierInterest = asString(body.tier_interest).toLowerCase();
  const regions = asStringArray(body.regions);
  const pests = asStringArray(body.pests);

  const fieldErrors: Record<string, string> = {};

  if (!name) {
    fieldErrors.name = 'Please enter your business name.';
  } else if (name.length < 2 || name.length > 120) {
    fieldErrors.name = 'Business name must be between 2 and 120 characters.';
  }

  if (!email && !phone) {
    fieldErrors.email = 'Please give us either an email address or a phone number.';
  }

  if (email && !looksLikeEmail(email)) {
    fieldErrors.email = 'That does not look like a valid email address.';
  }

  if (regions.some((r) => !REGION_SLUGS.includes(r))) {
    fieldErrors.regions = 'One or more selected areas were not recognised.';
  }

  if (pests.some((p) => !PEST_KEYS.includes(p))) {
    fieldErrors.pests = 'One or more selected pests were not recognised.';
  }

  if (profileText.length > PROFILE_TEXT_MAX) {
    fieldErrors.profile_text = `Please keep your description to ${PROFILE_TEXT_MAX} characters or fewer.`;
  }

  // A tier is only rejected when the client sends one that is not on offer.
  // Sending nothing is normal — the form hides the chooser while a single tier
  // exists — and is recorded as DEFAULT_TIER below.
  if (tierInterest && !TIER_VALUES.includes(tierInterest)) {
    fieldErrors.tier_interest = 'Unrecognised listing type.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ ok: false, fieldErrors }, { status: 400 });
  }

  const payload = {
    name,
    email: email || null,
    phone: phone || null,
    website: normaliseWebsite(website),
    address: address || null,
    postcode: postcode || null,
    regions,
    pests,
    accreditations: [] as string[], // not captured by the public form yet
    business_residential: body.business_residential === true,
    commercial: body.commercial === true,
    profile_text: profileText || null,
    tier_interest: tierInterest || DEFAULT_TIER,
    source: 'site_form',
    user_agent: request.headers.get('user-agent'),
  };

  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from('provider_submissions').insert(payload);

    if (error) {
      // Log the real cause server-side; never return it to the browser.
      console.error('[provider-submissions] insert failed:', error);
      return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 });
    }
  } catch (err) {
    console.error('[provider-submissions] unexpected failure:', err);
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
