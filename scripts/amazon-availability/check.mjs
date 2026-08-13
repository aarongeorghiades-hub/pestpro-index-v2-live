#!/usr/bin/env node
/**
 * Amazon Creators API availability check.
 *
 * WHAT THIS STORES: the ASIN, a classification, and a timestamp. Nothing else.
 * No title, no description, no image, no image URL, and no price — ever.
 * Amazon's licence permits ASINs to be retained indefinitely but caps non-image
 * product advertising content at 24 hours and forbids caching images at all.
 * Staying at ASIN-plus-classification keeps this job clear of that rule
 * entirely rather than trying to comply with it.
 *
 * PRICE POSTURE: the price sub-resource is never requested, so a price never
 * enters this process. If a price appears in a response anyway it is neither
 * read, stored nor logged.
 *
 * CREDENTIALS: read from the environment only. Never printed, never logged,
 * never written. The bearer token lives in one local variable for the duration
 * of a run and goes nowhere else.
 *
 * Usage:
 *   node scripts/amazon-availability/check.mjs            full run, report only
 *   node scripts/amazon-availability/check.mjs --probe    Step A batch probe
 *   node scripts/amazon-availability/check.mjs --limit 20 check the first N
 *
 * Run it with Railway's variables injected:
 *   railway run node scripts/amazon-availability/check.mjs
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

// ---------------------------------------------------------------------------
// Constants established from Amazon's current Creators API documentation.
// Read 2026-08-12. PA-API was retired in May 2026 and nothing here comes
// from it.
//   https://affiliate-program.amazon.com/creatorsapi/docs/en-us/get-started/using-curl
//   https://affiliate-program.amazon.com/creatorsapi/docs/en-us/api-reference/operations/get-items
//   https://affiliate-program.amazon.com/creatorsapi/docs/en-us/troubleshooting/error-codes-and-messages
// ---------------------------------------------------------------------------
const TOKEN_ENDPOINT = 'https://api.amazon.co.uk/auth/o2/token'; // EU region — we are amazon.co.uk
const TOKEN_SCOPE = 'creatorsapi::default';
const GET_ITEMS_ENDPOINT = 'https://creatorsapi.amazon/catalog/v1/getItems';
const MARKETPLACE = 'www.amazon.co.uk';
const PARTNER_TAG = 'pestproindex2-21';

// Documented maximum is 10 identifiers per getItems call. We deliberately use 1.
// Step A could not prove that a bad ASIN leaves its batch-mates unharmed, and a
// wrong classification is far more expensive than 418 extra HTTP requests once
// a week. Safety over speed.
const BATCH_SIZE = 1;

// Amazon publishes NO requests-per-second figure. Do not cite one. What the
// documentation does publish is the failure mode: 429 ThrottleException, with
// an optional retryAfterSeconds. This delay is our own conservative choice.
const DELAY_MS = 1100;
const MAX_RETRIES = 2;

// Only what is needed to answer "does it exist" and "can it be bought".
// itemInfo.title is deliberately NOT requested: we would not be allowed to
// store it, so there is no reason to fetch it. No price resource is requested.
const RESOURCES = ['offersV2.listings.availability', 'offersV2.listings.isBuyBoxWinner'];

const CLASSIFICATIONS = ['ALIVE', 'DEAD', 'UNAVAILABLE', 'UNDETERMINED'];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------------------------------------------------------------------------
// Credentials. Absent means exit non-zero, naming which. There is deliberately
// no fallback, no default and no hardcoded value anywhere in this file.
// ---------------------------------------------------------------------------
function requireCredentials() {
  const missing = [];
  if (!process.env.AMAZON_CREATORS_CLIENT_ID) missing.push('AMAZON_CREATORS_CLIENT_ID');
  if (!process.env.AMAZON_CREATORS_CLIENT_SECRET) missing.push('AMAZON_CREATORS_CLIENT_SECRET');
  if (missing.length) {
    console.error(`[availability] MISSING CREDENTIALS: ${missing.join(', ')}`);
    console.error('[availability] These are set in Railway. Run this via `railway run` or');
    console.error('[availability] deploy it. Nothing was called and nothing was written.');
    process.exit(1);
  }
  return {
    clientId: process.env.AMAZON_CREATORS_CLIENT_ID,
    clientSecret: process.env.AMAZON_CREATORS_CLIENT_SECRET,
  };
}

// ---------------------------------------------------------------------------
// OAuth 2.0 client credentials grant. The token is held in one local variable
// for the run and is never written, logged or returned to any caller outside
// this module.
// ---------------------------------------------------------------------------
async function getToken({ clientId, clientSecret }) {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      scope: TOKEN_SCOPE,
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    // The body of a token error can echo the client_id but never the secret.
    // We still redact anything that looks like a credential before printing.
    console.error(`[availability] TOKEN REQUEST FAILED: HTTP ${res.status}`);
    console.error(`[availability] body: ${redact(text)}`);
    return { ok: false, status: res.status, body: redact(text) };
  }
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, status: res.status, body: 'unparseable token response' };
  }
  return {
    ok: true,
    status: res.status,
    token: parsed.access_token,
    tokenType: parsed.token_type,
    expiresIn: parsed.expires_in,
    tokenLength: typeof parsed.access_token === 'string' ? parsed.access_token.length : 0,
  };
}

// Belt and braces: strip anything credential-shaped out of any string we print.
function redact(s) {
  if (typeof s !== 'string') return s;
  return s
    .replace(/amzn1\.oa2-cs\.v1\.[A-Za-z0-9]+/g, '[REDACTED-SECRET]')
    .replace(/amzn1\.application-oa2-client\.[A-Za-z0-9]+/g, '[REDACTED-CLIENT-ID]')
    .replace(/"access_token"\s*:\s*"[^"]*"/g, '"access_token":"[REDACTED]"')
    .replace(/Bearer\s+[A-Za-z0-9._\-|]+/g, 'Bearer [REDACTED]');
}

// ---------------------------------------------------------------------------
// One getItems call. Returns the raw body so a caller can record it verbatim.
// Honours 429 by waiting retryAfterSeconds when the API supplies it.
// ---------------------------------------------------------------------------
async function getItems(token, itemIds) {
  const body = {
    itemIds,
    itemIdType: 'ASIN',
    marketplace: MARKETPLACE,
    partnerTag: PARTNER_TAG,
    resources: RESOURCES,
  };
  const res = await fetch(GET_ITEMS_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'x-marketplace': MARKETPLACE,
    },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  const headers = {};
  for (const [k, v] of res.headers.entries()) headers[k] = v;
  return { status: res.status, headers, body: text, requestBody: body };
}

async function getItemsWithRetry(token, itemIds) {
  let attempt = 0;
  let last = null;
  while (attempt <= MAX_RETRIES) {
    const r = await getItems(token, itemIds);
    last = r;
    if (r.status === 429) {
      let wait = 5;
      try {
        const parsed = JSON.parse(r.body);
        if (typeof parsed.retryAfterSeconds === 'number') wait = parsed.retryAfterSeconds;
      } catch { /* fall through to the default wait */ }
      console.error(`[availability] 429 throttled, waiting ${wait}s (attempt ${attempt + 1})`);
      await sleep(wait * 1000);
      attempt += 1;
      continue;
    }
    if (r.status >= 500) {
      const backoff = 2000 * Math.pow(2, attempt);
      console.error(`[availability] HTTP ${r.status}, backing off ${backoff}ms (attempt ${attempt + 1})`);
      await sleep(backoff);
      attempt += 1;
      continue;
    }
    return r;
  }
  return last; // exhausted retries — the caller records UNDETERMINED
}

// ---------------------------------------------------------------------------
// Classification. Every ASIN lands in exactly one bucket.
//
// The field paths below were checked against real responses, not taken from the
// documentation alone. If a response shape appears that this function does not
// recognise, it returns UNDETERMINED rather than guessing — an unrecognised
// shape must never be read as DEAD, because DEAD is the only class the
// interlock can act on.
// ---------------------------------------------------------------------------
function classify(asin, result) {
  if (!result || result.status === undefined) return { klass: 'UNDETERMINED', why: 'no response' };
  if (result.status === 401 || result.status === 403) {
    return { klass: 'UNDETERMINED', why: `auth/eligibility HTTP ${result.status}` };
  }
  let parsed;
  try {
    parsed = JSON.parse(result.body);
  } catch {
    return { klass: 'UNDETERMINED', why: `unparseable body, HTTP ${result.status}` };
  }

  // Absence. The documented signal is ResourceNotFoundException carrying
  // resourceType "Item" and resourceId set to the ASIN.
  const errs = Array.isArray(parsed.errors) ? parsed.errors : [];
  const notFound = errs.find(
    (e) =>
      (e && (e.code === 'ResourceNotFoundException' || e.type === 'ResourceNotFoundException')) &&
      (!e.resourceId || e.resourceId === asin)
  );
  if (notFound) return { klass: 'DEAD', why: 'ResourceNotFoundException' };
  if (result.status === 404) return { klass: 'DEAD', why: 'HTTP 404 ResourceNotFoundException' };

  // THE DOCUMENTED ROOT KEY IS WRONG. The get-items reference documents the
  // response as { errors, itemResults: { items } }. The live API returns
  // itemsResult (singular "Result", plural "items" inside). Verified against
  // three real Step A responses on 2026-08-12. Both spellings are accepted
  // here so a future correction on Amazon's side does not silently break this.
  const container = parsed?.itemsResult ?? parsed?.itemResults;
  const items = container?.items;
  if (!Array.isArray(items)) {
    return { klass: 'UNDETERMINED', why: `no itemsResult.items, HTTP ${result.status}` };
  }
  const item = items.find((i) => i && i.asin === asin);
  if (!item) {
    // Asked for it, got a well-formed answer, and it is not in it.
    return { klass: 'DEAD', why: 'absent from itemsResult.items' };
  }

  const listings = item?.offersV2?.listings;
  if (!Array.isArray(listings) || listings.length === 0) {
    return { klass: 'UNAVAILABLE', why: 'item exists, no offersV2 listings' };
  }
  // Observed availability.type values: IN_STOCK, IN_STOCK_SCARCE, OUT_OF_STOCK.
  // A listing counts as buyable only on an affirmative in-stock signal. An
  // unrecognised type is treated as NOT buyable, which lands the ASIN in
  // UNAVAILABLE rather than DEAD — the conservative direction, since DEAD is
  // the only class the interlock can ever act on.
  const buyable = listings.some((l) => {
    const a = l && l.availability;
    if (!a || typeof a !== 'object') return false;
    if (typeof a.type === 'string') return /^IN_STOCK/i.test(a.type);
    if (typeof a.maxOrderQuantity === 'number') return a.maxOrderQuantity > 0;
    return false;
  });
  return buyable
    ? { klass: 'ALIVE', why: 'offersV2 listing with availability.type IN_STOCK' }
    : { klass: 'UNAVAILABLE', why: 'listings present, none in stock' };
}

// ---------------------------------------------------------------------------
// Populations. Two of them, and they are never merged into one figure.
// ---------------------------------------------------------------------------
const ASIN_RX = /asin=["']([A-Z0-9]{10})["']|asin:\s*["']([A-Z0-9]{10})["']/g;

function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = join(dir, e);
    let st;
    try {
      st = statSync(p);
    } catch {
      continue;
    }
    if (st.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(e)) out.push(p);
  }
  return out;
}

function repoPopulation() {
  const roots = ['app', 'components', 'data'].map((d) => join(REPO_ROOT, d));
  const files = roots.flatMap((r) => walk(r));
  const map = new Map();
  for (const f of files) {
    let src;
    try {
      src = readFileSync(f, 'utf8');
    } catch {
      continue;
    }
    ASIN_RX.lastIndex = 0;
    let m;
    while ((m = ASIN_RX.exec(src)) !== null) {
      const asin = m[1] || m[2];
      const rel = f.slice(REPO_ROOT.length + 1);
      if (!map.has(asin)) map.set(asin, new Set());
      map.get(asin).add(rel);
    }
  }
  return { map, fileCount: files.length };
}

function supabaseEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? { url, key } : null;
}

async function dbPopulation() {
  const sb = supabaseEnv();
  if (!sb) return { rows: [], available: false };
  const res = await fetch(
    `${sb.url}/rest/v1/amazon_products?select=id,asin,product_name,is_active,product_context&order=asin.asc&limit=1000`,
    { headers: { apikey: sb.key, Authorization: `Bearer ${sb.key}`, Prefer: 'count=exact' } }
  );
  if (!res.ok) return { rows: [], available: false, status: res.status };
  const rows = await res.json();
  return { rows, available: true, contentRange: res.headers.get('content-range') };
}

// ---------------------------------------------------------------------------
// The safety interlock.
//
// Armed only by AMAZON_AVAILABILITY_AUTODEACTIVATE === 'true', exactly that
// string. This file READS that variable and never sets it. Anything else,
// including absent, is report-only and writes nothing at all.
// ---------------------------------------------------------------------------
const AUTODEACTIVATE_CEILING = 10;

function autodeactivateArmed() {
  return process.env.AMAZON_AVAILABILITY_AUTODEACTIVATE === 'true';
}

async function deactivate(rowsToDeactivate) {
  const sb = supabaseEnv();
  if (!sb) {
    console.error('[availability] ACT MODE: Supabase credentials absent. Doing nothing.');
    return { attempted: 0, landed: 0, records: [] };
  }
  const records = [];
  let landed = 0;
  for (const row of rowsToDeactivate) {
    // Record the row IN FULL before writing. This is the rollback record.
    const before = await fetch(`${sb.url}/rest/v1/amazon_products?id=eq.${row.id}&select=*`, {
      headers: { apikey: sb.key, Authorization: `Bearer ${sb.key}` },
    });
    const beforeRow = before.ok ? (await before.json())[0] : null;

    const res = await fetch(`${sb.url}/rest/v1/amazon_products?id=eq.${row.id}`, {
      method: 'PATCH',
      headers: {
        apikey: sb.key,
        Authorization: `Bearer ${sb.key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal,count=exact',
      },
      body: JSON.stringify({ is_active: false }),
    });
    const contentRange = res.headers.get('content-range');

    // NEVER TRUST A 200 ON A WRITE. A landed write shows 0-0/1. An
    // RLS-blocked one shows */0 with the same HTTP 200.
    const claimed = contentRange === '0-0/1';

    // Re-read regardless of what the write claimed.
    const after = await fetch(`${sb.url}/rest/v1/amazon_products?id=eq.${row.id}&select=*`, {
      headers: { apikey: sb.key, Authorization: `Bearer ${sb.key}` },
    });
    const afterRow = after.ok ? (await after.json())[0] : null;
    const confirmed = afterRow ? afterRow.is_active === false : false;
    if (claimed && confirmed) landed += 1;

    records.push({
      id: row.id,
      asin: row.asin,
      httpStatus: res.status,
      contentRange,
      claimedLanded: claimed,
      confirmedByReRead: confirmed,
      before: beforeRow,
      after: afterRow,
    });
  }
  return { attempted: rowsToDeactivate.length, landed, records };
}

// ---------------------------------------------------------------------------
// Step A — the batch-poisoning probe.
// ---------------------------------------------------------------------------
async function probe(token) {
  const GOOD = 'B07GWNN623'; // rank 1 on /best/rodent-proofing
  const SUSPECT = 'B00KRCJB8I'; // the Flymatic, is_active=false in our database
  const GOOD2 = 'B000BQT5IG'; // Combat Ant Killing Gel

  const out = {};
  console.log('=== STEP A1: one known-good ASIN alone ===');
  out.a1 = await getItemsWithRetry(token, [GOOD]);
  console.log(`  itemIds: ["${GOOD}"]`);
  console.log(`  HTTP ${out.a1.status}`);
  console.log('  RAW BODY:');
  console.log(redact(out.a1.body));
  console.log('  RESPONSE HEADERS:');
  console.log(JSON.stringify(out.a1.headers, null, 2));
  await sleep(DELAY_MS);

  console.log('\n=== STEP A2: one suspected-dead ASIN alone ===');
  out.a2 = await getItemsWithRetry(token, [SUSPECT]);
  console.log(`  itemIds: ["${SUSPECT}"]`);
  console.log(`  HTTP ${out.a2.status}`);
  console.log('  RAW BODY:');
  console.log(redact(out.a2.body));
  console.log('  RESPONSE HEADERS:');
  console.log(JSON.stringify(out.a2.headers, null, 2));
  await sleep(DELAY_MS);

  console.log('\n=== STEP A3: both together plus a third known-good ===');
  out.a3 = await getItemsWithRetry(token, [GOOD, SUSPECT, GOOD2]);
  console.log(`  itemIds: ["${GOOD}","${SUSPECT}","${GOOD2}"]`);
  console.log(`  HTTP ${out.a3.status}`);
  console.log('  RAW BODY:');
  console.log(redact(out.a3.body));
  console.log('  RESPONSE HEADERS:');
  console.log(JSON.stringify(out.a3.headers, null, 2));

  console.log('\n=== STEP A VERDICT, from the responses and not the docs ===');
  const c1 = classify(GOOD, out.a1);
  const c3good = classify(GOOD, out.a3);
  const c3good2 = classify(GOOD2, out.a3);
  console.log(`  ${GOOD} alone         : ${c1.klass} (${c1.why})`);
  console.log(`  ${GOOD} in mixed batch: ${c3good.klass} (${c3good.why})`);
  console.log(`  ${GOOD2} in mixed batch: ${c3good2.klass} (${c3good2.why})`);
  const poisoned = c1.klass !== c3good.klass;
  console.log(`  Does a bad ASIN change the result for a good one? ${poisoned ? 'YES' : 'NO'}`);
  console.log(`  BATCH SIZE ADOPTED BY THIS JOB: ${BATCH_SIZE}`);
  return out;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const args = process.argv.slice(2);
  const isProbe = args.includes('--probe');
  const limitArg = args.indexOf('--limit');
  const limit = limitArg >= 0 ? parseInt(args[limitArg + 1], 10) : null;

  // --asins B0XXXXXXXX,B0YYYYYYYY checks exactly and only the ASINs named,
  // in the order given. It does NOT construct or infer an ASIN: anything that
  // is not exactly ten characters of [A-Z0-9] is rejected loudly rather than
  // silently dropped or corrected.
  const asinsArg = args.indexOf('--asins');
  let namedAsins = null;
  if (asinsArg >= 0) {
    const raw = (args[asinsArg + 1] || '')
      .split(',')
      .map((a) => a.trim())
      .filter(Boolean);
    const bad = raw.filter((a) => !/^[A-Z0-9]{10}$/.test(a));
    if (!raw.length || bad.length) {
      console.error(`[availability] --asins needs a comma-separated list of 10-character ASINs.`);
      if (bad.length) console.error(`[availability] rejected: ${bad.join(', ')}`);
      process.exit(1);
    }
    namedAsins = [...new Set(raw)];
  }

  const creds = requireCredentials();

  const tok = await getToken(creds);
  if (!tok.ok) {
    console.error('[availability] No token. Nothing was checked and nothing was written.');
    process.exit(2);
  }
  console.log(
    `[availability] token obtained: type=${tok.tokenType} expires_in=${tok.expiresIn}s length=${tok.tokenLength} chars`
  );

  if (isProbe) {
    await probe(tok.token);
    return;
  }

  const db = await dbPopulation();
  const repo = repoPopulation();
  const dbAsins = db.rows.map((r) => r.asin);
  const repoAsins = [...repo.map.keys()];
  const all = [...new Set([...dbAsins, ...repoAsins])].sort();
  // --asins wins over --limit. The populations are still loaded, because the
  // report has to say which one each ASIN belongs to and where it appears.
  const target = namedAsins ?? (limit ? all.slice(0, limit) : all);

  console.log(`[availability] P1 database distinct ASINs: ${new Set(dbAsins).size} (available=${db.available})`);
  console.log(`[availability] P2 repo distinct ASINs: ${repoAsins.length} across ${repo.fileCount} files`);
  if (namedAsins) {
    console.log(`[availability] --asins: checking exactly and only these ${target.length}: ${target.join(', ')}`);
    const unknown = target.filter((a) => !dbAsins.includes(a) && !repo.map.has(a));
    if (unknown.length) {
      console.log(`[availability] NOTE: not in either population, checked anyway: ${unknown.join(', ')}`);
    }
  }
  console.log(`[availability] combined distinct: ${all.length}; checking ${target.length}`);
  console.log(`[availability] batch size ${BATCH_SIZE}, delay ${DELAY_MS}ms between calls`);

  const results = new Map();
  for (let i = 0; i < target.length; i += BATCH_SIZE) {
    const batch = target.slice(i, i + BATCH_SIZE);
    const r = await getItemsWithRetry(tok.token, batch);
    for (const asin of batch) results.set(asin, classify(asin, r));
    if (i + BATCH_SIZE < target.length) await sleep(DELAY_MS);
  }

  const stamp = new Date().toISOString();
  const dbByAsin = new Map(db.rows.map((r) => [r.asin, r]));

  // The report. ASIN, classification, timestamp, and where it appears —
  // the last of which comes from our own repository and database, not Amazon.
  const report = target.map((asin) => ({
    asin,
    classification: results.get(asin)?.klass ?? 'UNDETERMINED',
    reason: results.get(asin)?.why ?? 'not checked',
    checkedAt: stamp,
    inDatabase: dbByAsin.has(asin),
    inRepo: repo.map.has(asin),
    repoFiles: repo.map.has(asin) ? [...repo.map.get(asin)] : [],
  }));

  const tally = (pred) =>
    Object.fromEntries(CLASSIFICATIONS.map((k) => [k, report.filter((r) => pred(r) && r.classification === k).length]));

  console.log('\n=== CLASSIFICATION BY POPULATION — reported separately, never merged ===');
  console.log('P1 DATABASE:', JSON.stringify(tally((r) => r.inDatabase)));
  console.log('P2 REPO    :', JSON.stringify(tally((r) => r.inRepo)));
  console.log('\n=== FULL REPORT ===');
  console.log(JSON.stringify(report, null, 1));

  const dead = report.filter((r) => r.classification === 'DEAD');
  const deadInDb = dead.filter((r) => r.inDatabase && dbByAsin.get(r.asin)?.is_active === true);
  const deadRepoOnly = dead.filter((r) => r.inRepo);

  console.log(`\n[availability] DEAD total: ${dead.length}`);
  console.log(`[availability] DEAD and active in the database: ${deadInDb.length}`);
  console.log(`[availability] DEAD appearing in repo source: ${deadRepoOnly.length} — NEVER auto-acted on.`);
  if (deadRepoOnly.length) {
    console.log('[availability] The following need a HUMAN RULING, not an automatic change:');
    for (const r of deadRepoOnly) console.log(`    ${r.asin}  ${r.repoFiles.join(', ')}`);
  }

  if (!autodeactivateArmed()) {
    console.log('\n[availability] MODE: REPORT ONLY. AMAZON_AVAILABILITY_AUTODEACTIVATE is not');
    console.log('[availability] exactly "true". No database row was touched.');
    return;
  }

  console.log('\n[availability] MODE: ACT. AMAZON_AVAILABILITY_AUTODEACTIVATE === "true".');
  if (deadInDb.length > AUTODEACTIVATE_CEILING) {
    console.error(`[availability] ################################################`);
    console.error(`[availability] REFUSING TO ACT: ${deadInDb.length} rows would be deactivated,`);
    console.error(`[availability] ceiling is ${AUTODEACTIVATE_CEILING}. A run proposing mass deactivation is a`);
    console.error(`[availability] bug until proven otherwise. NOTHING WAS WRITTEN.`);
    console.error(`[availability] ################################################`);
    process.exit(3);
  }
  const rows = deadInDb.map((r) => dbByAsin.get(r.asin)).filter(Boolean);
  const outcome = await deactivate(rows);
  console.log(`[availability] attempted ${outcome.attempted}, landed and confirmed ${outcome.landed}`);
  console.log(JSON.stringify(outcome.records, null, 1));
}

main().catch((err) => {
  console.error('[availability] UNEXPECTED FAILURE:', redact(String(err && err.message ? err.message : err)));
  console.error('[availability] Failure posture: nothing was written. No fallback, no zero,');
  console.error('[availability] no stale figure presented as live.');
  process.exit(4);
});
