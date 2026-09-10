// S69 R5 — WHERE AN AMAZON LINK ACTUALLY LANDS, AS A STANDING, RUNNABLE CHECK.
//
// WHY M34 IS NOT ENOUGH, AND THIS IS THE WHOLE REASON THIS FILE EXISTS.
// M34 classifies the URL PATTERN in our own markup and it is green: all 738 Amazon
// hrefs across both estates are /dp/<ASIN> product URLs, 0 search, 0 other. But the
// defect reported at S69 R4 was a reader landing on an Amazon SEARCH RESULTS page, and
// M34 could never have caught it, because the URL we emit was correct every time. The
// bounce happens at Amazon: a US ASIN with no counterpart on the reader's local
// marketplace is redirected to a local SEARCH for the product's keywords, or to a
// DIFFERENT ASIN via Amazon's own ar_mt=BEST_BET parameter.
//
// A GATE CANNOT DO THIS. Resolving a link needs a network fetch, and no runner can
// manufacture a fetched body — which is exactly why M15 and M23 are declared `external`
// scope and have no standing runner. So this is a SCRIPT that is run deliberately, not a
// matcher registered where nothing invokes it.
//
// IT RECORDS A DATED OBSERVATION, NEVER A STANDING STATUS (Law 148). "Amazon link
// broken" is a status; "B0H74XZQT5 landed on a .co.uk search page from a UK exit on
// 2026-09-10, and on a .com product page from a US locale the same minute" is a record.
// Every run appends to the report with its own date and the marketplace that answered.
//
// A VERDICT IS SCOPED TO THE MARKETPLACE THAT ANSWERED (Law 141). A response served by
// amazon.co.uk NEVER rules on a US ASIN. The script records the host on every row and
// refuses to call a US link dead on a UK answer.
//
// A 200 WITH A BLOCK BODY IS BLOCKED (Law 177). Amazon's interstitial is served as
// HTTP 200 at about 3,781 bytes. The check is on the body, not the status line.
//
// USE:
//   node scripts/amazon-destinations.mjs                 # every ASIN in the built estate
//   node scripts/amazon-destinations.mjs --locale uk     # simulate a UK reader
//   node scripts/amazon-destinations.mjs --asins B0..,B0..
//   node scripts/amazon-destinations.mjs --limit 20 --delay 6000
// Writes ~/pp-amazon-destinations/<ISO date>-<locale>.tsv and prints a summary.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const args = process.argv.slice(2);
const opt = (n, d) => {
  const i = args.indexOf(n);
  return i === -1 ? d : args[i + 1];
};
const LOCALE = (opt('--locale', 'us') || 'us').toLowerCase();
const DELAY = Number(opt('--delay', '5000'));
const LIMIT = Number(opt('--limit', '0'));
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

// THE POPULATION IS DERIVED FROM THE BUILT ESTATE, NEVER LISTED HERE (Law 178). A
// hand-maintained ASIN list is the exact drift Law 183 was written about.
const BUILT = '.next/server/app';
const PRODUCT_HREF = /https?:\/\/www\.amazon\.(com|co\.uk)\/dp\/([A-Z0-9]{10})/g;

function builtDocuments(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...builtDocuments(p));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

function population() {
  const explicit = opt('--asins', '');
  const seen = new Map(); // asin -> { host, routes:Set }
  if (explicit) {
    for (const a of explicit.split(',').map((s) => s.trim()).filter(Boolean)) {
      seen.set(a, { host: 'com', routes: new Set(['(--asins)']) });
    }
    return seen;
  }
  const docs = builtDocuments(BUILT);
  if (!docs.length) {
    console.error('NO BUILT DOCUMENTS AT ' + BUILT + ' — run `npm run build` first.');
    console.error('Refusing to report a zero over an empty set (Law 109).');
    process.exit(2);
  }
  for (const f of docs) {
    const raw = fs.readFileSync(f, 'utf8').replace(/<script\b[\s\S]*?<\/script>/gi, '');
    const route = '/' + path.relative(BUILT, f).replace(/\.html$/, '');
    for (const m of raw.matchAll(PRODUCT_HREF)) {
      const [, host, asin] = m;
      if (!seen.has(asin)) seen.set(asin, { host, routes: new Set() });
      seen.get(asin).routes.add(route);
    }
  }
  return seen;
}

const BLOCK_MAX = 200000; // an Amazon product page is ~1-3MB; the interstitial is ~3.8KB

function classify(asin, finalUrl, body) {
  const host = (finalUrl.match(/^https?:\/\/([^/]+)/) || [, '?'])[1];
  const isProductPage = /<span id="productTitle"/.test(body);
  const landedAsin = (finalUrl.match(/amazon\.[a-z.]+\/(?:[^/?]+\/)?dp\/([A-Z0-9]{10})/) || [])[1] || '';
  const isSearch = /\/s\/?\?|[?&]field-keywords=|[?&]k=/.test(finalUrl) && !isProductPage;
  let kind;
  if (body.length < BLOCK_MAX && !isProductPage) kind = 'BLOCKED';
  else if (isSearch) kind = 'SEARCH_RESULTS';
  else if (isProductPage && landedAsin && landedAsin !== asin) kind = 'PRODUCT_DIFFERENT_ASIN';
  else if (isProductPage) kind = 'PRODUCT_SAME_ASIN';
  else kind = 'OTHER';
  return { kind, host, landedAsin };
}

// THE CLASSIFIER PROVES ITSELF BEFORE IT IS TRUSTED (Law 166, S49-L). The network half
// of this script is at Amazon's mercy — a run can come back all BLOCKED and say nothing.
// The classification half must not depend on that. Every invocation fires these fixtures
// first, both ways, and refuses to run if any of them behaves wrongly: the positive limb
// proves the classifier can FIND each landing kind, the negative limb proves it can
// DISTINGUISH them. A zero from a matcher fired on only one limb is not believed.
const PRODUCT_BODY = 'x'.repeat(400000) + '<span id="productTitle" class="a-size-large">Thing</span>';
const PLAIN_BODY = 'x'.repeat(400000);
const BLOCK_BODY = 'x'.repeat(3781);
const PROBES = [
  // the exact shape reported at S69 R4: a US ASIN bounced to a .co.uk keyword search
  ['B0H74XZQT5', 'https://www.amazon.co.uk/s/?ie=UTF8&url=search-alias=aps&field-keywords=GUUTUCA+4+Foot+Kit', PLAIN_BODY, 'SEARCH_RESULTS'],
  // Amazon's own cross-marketplace BEST_BET redirect to a DIFFERENT product
  ['B0FX21JKKQ', 'https://www.amazon.co.uk/dp/B0F2JHFFQP?ar_mt=BEST_BET&tag=pestproindex2-20', PRODUCT_BODY, 'PRODUCT_DIFFERENT_ASIN'],
  // the correct outcome
  ['B0BMNPPN65', 'https://www.amazon.com/dp/B0BMNPPN65?tag=pestproindex2-20', PRODUCT_BODY, 'PRODUCT_SAME_ASIN'],
  // a 200 carrying the interstitial is BLOCKED, not dead (Law 177: the body is the check)
  ['B0D79GC3SM', 'https://www.amazon.com/dp/B0D79GC3SM?tag=pestproindex2-20', BLOCK_BODY, 'BLOCKED'],
  // a full-size page that is neither a product nor a search must not be guessed at
  ['B0000000AA', 'https://www.amazon.com/gp/help/customer/display.html', PLAIN_BODY, 'OTHER'],
  // A PRODUCT URL CARRYING A k= PARAMETER IS STILL A PRODUCT URL. Without product being
  // decided before search, this probe misclassifies a perfectly good link.
  ['B0BMNPPN65', 'https://www.amazon.com/dp/B0BMNPPN65?tag=pestproindex2-20&k=coyote', PRODUCT_BODY, 'PRODUCT_SAME_ASIN'],
];
function selfTest() {
  const bad = [];
  for (const [asin, url, body, expect] of PROBES) {
    const got = classify(asin, url, body).kind;
    if (got !== expect) bad.push(`${asin} ${url.slice(0, 60)} -> ${got}, expected ${expect}`);
  }
  if (bad.length) {
    console.error('CLASSIFIER SELF-TEST FAILED — refusing to run:');
    for (const b of bad) console.error('  ' + b);
    process.exit(2);
  }
  console.log(`CLASSIFIER SELF-TEST PASSED — ${PROBES.length} probes, all five landing kinds exercised.`);
}

async function main() {
  selfTest();
  const pop = population();
  let asins = [...pop.keys()].sort();
  if (LIMIT > 0) asins = asins.slice(0, LIMIT);
  const outDir = path.join(os.homedir(), 'pp-amazon-destinations');
  fs.mkdirSync(outDir, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const outFile = path.join(outDir, `${stamp}-${LOCALE}.tsv`);
  const rows = [];
  const acceptLang = LOCALE === 'uk' ? 'en-GB,en;q=0.9' : 'en-US,en;q=0.9';

  console.log(`AMAZON LINK DESTINATIONS — ${asins.length} distinct ASIN(s), locale ${LOCALE}`);
  console.log('  population derived from the built estate, not from a list in this file');
  console.log('');

  for (const [i, asin] of asins.entries()) {
    const marketHost = pop.get(asin)?.host === 'co.uk' ? 'www.amazon.co.uk' : 'www.amazon.com';
    const tag = marketHost.endsWith('co.uk') ? 'pestproindex2-21' : 'pestproindex2-20';
    const url = `https://${marketHost}/dp/${asin}?tag=${tag}`;
    let kind = 'FETCH_FAILED', host = '-', landed = '', size = 0, finalUrl = url;
    try {
      const headers = { 'User-Agent': UA, 'Accept-Language': acceptLang };
      if (LOCALE === 'us') headers.Cookie = 'lc-main=en_US';
      const res = await fetch(url, { headers, redirect: 'follow' });
      finalUrl = res.url || url;
      const body = await res.text();
      size = body.length;
      ({ kind, host, landedAsin: landed } = classify(asin, finalUrl, body));
    } catch (e) {
      host = 'error: ' + String(e).slice(0, 60);
    }
    rows.push([asin, kind, host, landed, String(size), [...(pop.get(asin)?.routes ?? [])].join(' ')]);
    process.stdout.write(`  ${String(i + 1).padStart(3)}/${asins.length}  ${asin}  ${kind.padEnd(23)} ${host}\n`);
    if (i < asins.length - 1 && DELAY) await new Promise((r) => setTimeout(r, DELAY));
  }

  fs.writeFileSync(
    outFile,
    'asin\tkind\thost_that_answered\tlanded_asin\tbytes\troutes\n' +
      rows.map((r) => r.join('\t')).join('\n') + '\n',
  );

  const tally = {};
  for (const r of rows) tally[r[1]] = (tally[r[1]] ?? 0) + 1;
  console.log('\n  RESULT, ' + stamp + ', locale ' + LOCALE);
  for (const k of Object.keys(tally).sort()) console.log(`    ${k.padEnd(24)} ${tally[k]}`);

  // A VERDICT IS SCOPED TO ITS MARKETPLACE (Law 141). A .co.uk answer never rules on a
  // US ASIN, so those rows are reported apart and are NEVER counted as broken links.
  const wrongMarket = rows.filter((r) => r[2] === 'www.amazon.co.uk');
  const realBad = rows.filter(
    (r) => r[2] === 'www.amazon.com' && (r[1] === 'SEARCH_RESULTS' || r[1] === 'PRODUCT_DIFFERENT_ASIN' || r[1] === 'OTHER'),
  );
  console.log('');
  console.log(`  answered by amazon.co.uk (NOT a verdict on a US ASIN, Law 141): ${wrongMarket.length}`);
  console.log(`  CONFIRMED BAD on the ASIN's own marketplace                   : ${realBad.length}`);
  for (const r of realBad) console.log(`    ${r[0]}  ${r[1]}  on ${r[5]}`);
  console.log(`\n  written to ${outFile}`);
  process.exit(realBad.length ? 1 : 0);
}

main();
