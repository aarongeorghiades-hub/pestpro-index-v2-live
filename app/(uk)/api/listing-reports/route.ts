import { NextResponse } from 'next/server';
import { createAdminClient } from '@/utils/supabase-admin';
import { HONEYPOT_FIELD } from '@/lib/providerSubmissions';
import { safePagePath } from '@/lib/listingEvents';
import { REPORT_REASON_VALUES } from '@/lib/listingReports';
import { getActiveProviderBySlug } from '@/lib/providerLookup';

// "Report or remove this listing." Stored for manual review. No IP is stored.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const GENERIC_ERROR =
  'Something went wrong sending your report. Please try again, or email pestproindex@zohomail.eu.';

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
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

  if (asString(body[HONEYPOT_FIELD])) {
    return NextResponse.json({ ok: true });
  }

  const slug = asString(body.slug);
  const email = asString(body.email).toLowerCase();
  const reason = asString(body.reason);
  const message = asString(body.message);

  const fieldErrors: Record<string, string> = {};

  if (!slug) fieldErrors.slug = 'Open the report link from the listing.';
  if (email && !looksLikeEmail(email)) fieldErrors.email = 'That does not look like a valid email address.';
  if (!reason) fieldErrors.reason = 'Please choose a reason.';
  else if (!REPORT_REASON_VALUES.has(reason)) fieldErrors.reason = 'Unrecognised reason.';
  if (!message) fieldErrors.message = 'Please tell us what to look at.';
  else if (message.length > 2000) fieldErrors.message = 'Please keep your message to 2,000 characters or fewer.';

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ ok: false, fieldErrors }, { status: 400 });
  }

  const provider = await getActiveProviderBySlug(slug);
  if (!provider) {
    return NextResponse.json(
      { ok: false, fieldErrors: { slug: 'That listing could not be found.' } },
      { status: 400 }
    );
  }

  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from('listing_reports').insert({
      provider_id: provider.canonical_id,
      email: email || null,
      reason,
      message,
      status: 'pending',
      page_path: safePagePath(asString(body.page_path), `/provider/${provider.slug}`),
    });
    if (error) {
      console.error('[listing-reports] insert failed:', error);
      return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 });
    }
  } catch (err) {
    console.error('[listing-reports] unexpected failure:', err);
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
