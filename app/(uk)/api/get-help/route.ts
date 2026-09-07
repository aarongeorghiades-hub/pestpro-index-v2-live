import { NextResponse } from 'next/server';
import { createAdminClient } from '@/utils/supabase-admin';

// S68 R6 — THE COUNCIL TAX ENQUIRY FORM NOW POSTS HERE INSTEAD OF TO SUPABASE.
//
// WHY THIS ROUTE EXISTS. app/(uk)/get-help/page.tsx inserted into `leads` from the
// browser with the anon client, from the day the page was created (4d3650e, 2026-02-22)
// until this round. The table does not exist, so every submission failed; and had it
// existed, a browser-side insert would have required an anon INSERT policy on a table of
// names, addresses and phone numbers. Writes go through the service-role client here, so
// `leads` can carry RLS with NO policies at all and remain unreadable and unwritable by
// anything holding the public key.
//
// THE SHAPE MIRRORS /api/provider-submissions DELIBERATELY: same runtime declarations,
// same generic-error-to-the-browser and real-cause-to-the-server-log split, same
// { ok } / { ok, fieldErrors } / { ok, error } response contract.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const GENERIC_ERROR =
  'We could not save your request. Please try again, or email pestproindex@zohomail.eu and we will pick it up from there.';

// The reason list the form offers. A value outside it did not come from the form.
const REASON_OPTIONS = [
  'The checker flagged my band as potentially too high',
  "I've compared with similar properties nearby",
  'I was advised by someone else',
  'I just want to check',
];

const MAX_DESCRIPTION = 2000;

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

  const name = asString(body.name);
  const email = asString(body.email).toLowerCase();
  const phone = asString(body.phone);
  const propertyAddress = asString(body.property_address);
  const postcode = asString(body.postcode).toUpperCase();
  const reason = asString(body.reason);
  const description = asString(body.description);
  const checkedBand = asString(body.checked_band);

  const fieldErrors: Record<string, string> = {};

  if (!name) {
    fieldErrors.name = 'Please enter your name.';
  } else if (name.length > 120) {
    fieldErrors.name = 'Please keep your name to 120 characters or fewer.';
  }

  if (!email) {
    fieldErrors.email = 'Please enter an email address so we can reply.';
  } else if (!looksLikeEmail(email)) {
    fieldErrors.email = 'That does not look like a valid email address.';
  }

  if (!postcode) {
    fieldErrors.postcode = 'Please enter the property postcode.';
  }

  if (!propertyAddress) {
    fieldErrors.property_address = 'Please enter the property address.';
  }

  if (!reason) {
    fieldErrors.reason = 'Please choose a reason.';
  } else if (!REASON_OPTIONS.includes(reason)) {
    fieldErrors.reason = 'Unrecognised reason.';
  }

  if (description.length > MAX_DESCRIPTION) {
    fieldErrors.description = `Please keep your description to ${MAX_DESCRIPTION} characters or fewer.`;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ ok: false, fieldErrors }, { status: 400 });
  }

  const payload = {
    name,
    email,
    phone: phone || null,
    property_address: propertyAddress,
    postcode,
    reason,
    description: description || null,
    checked_band: checkedBand || null,
    anomaly_flagged: body.anomaly_flagged === true,
  };

  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from('leads').insert(payload);

    if (error) {
      // Log the real cause server-side; never return it to the browser.
      console.error('[get-help] insert failed:', error);
      return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 });
    }
  } catch (err) {
    console.error('[get-help] unexpected failure:', err);
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
