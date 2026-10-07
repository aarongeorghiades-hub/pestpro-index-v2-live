import { NextResponse } from 'next/server';
import { createAdminClient } from '@/utils/supabase-admin';
import { HONEYPOT_FIELD } from '@/lib/providerSubmissions';
import { getActiveProviderBySlug } from '@/lib/providerLookup';

// "Is this your business?" Manual review only. Nothing is emailed or approved
// from this route. Writes use the service-role key; claims has RLS and no
// public policies.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const GENERIC_ERROR =
  'Something went wrong sending your claim. Please try again, or email pestproindex@zohomail.eu.';

const METHODS = new Set(['manual']);

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
  const method = asString(body.method) || 'manual';
  const message = asString(body.message);

  const fieldErrors: Record<string, string> = {};

  if (!slug) fieldErrors.slug = 'Open the claim link from the listing you want to claim.';
  if (!email) fieldErrors.email = 'Please enter an email address so we can reply.';
  else if (!looksLikeEmail(email)) fieldErrors.email = 'That does not look like a valid email address.';
  if (!METHODS.has(method)) fieldErrors.method = 'Unrecognised claim method.';
  if (message.length > 1000) fieldErrors.message = 'Please keep your note to 1,000 characters or fewer.';

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
    const { error } = await supabase.from('claims').insert({
      provider_id: provider.canonical_id,
      email,
      method,
      status: 'pending',
      message: message || null,
    });
    if (error) {
      console.error('[claims] insert failed:', error);
      return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 });
    }
  } catch (err) {
    console.error('[claims] unexpected failure:', err);
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
