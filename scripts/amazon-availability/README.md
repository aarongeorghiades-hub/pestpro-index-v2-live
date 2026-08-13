# Amazon availability check

An internal job. It displays nothing, ships no rendered surface, and is not
imported by any page, component or route.

## What it does

Asks the Amazon Creators API whether each ASIN we reference still exists and can
still be bought, and classifies each one as `ALIVE`, `DEAD`, `UNAVAILABLE` or
`UNDETERMINED`.

Two populations are checked and **reported separately, never merged into one
figure**:

- **P1 database** — every ASIN in `amazon_products`.
- **P2 repo** — every ASIN hand-written as an `asin="..."` prop or `asin: "..."`
  literal under `app/`, `components/` and `data/`.

## What it stores

The ASIN, the classification, and a timestamp. **Nothing else.** No title, no
description, no image, no image URL, and no price.

Amazon's licence lets us keep ASINs indefinitely, caps other product
advertising content at 24 hours, and forbids caching images at all. Staying at
ASIN-plus-classification keeps this job clear of that rule rather than trying to
comply with it. The price sub-resource is never requested, so a price never
enters the process.

## Running it

Credentials live in Railway and nowhere else. They are deliberately absent from
`.env.local`.

```bash
railway run node scripts/amazon-availability/check.mjs           # full run
railway run node scripts/amazon-availability/check.mjs --probe   # batch probe
railway run node scripts/amazon-availability/check.mjs --limit 20
railway run node scripts/amazon-availability/check.mjs --asins B0CSK61L94,B002Q0ZB9M
```

`--asins` takes a comma-separated list and checks exactly and only those,
in the order given. It wins over `--limit`. Anything that is not exactly ten
characters of `[A-Z0-9]` is rejected loudly and the job exits non-zero — it
never constructs, infers or silently drops an ASIN. Both populations are still
loaded, because the report has to say which one each ASIN belongs to and where
it appears; an ASIN in neither is checked anyway and flagged as such.

It writes nothing to disk. `node:fs` is imported read-only — `readFileSync`,
`readdirSync`, `statSync` — and the report goes to stdout. The only non-GET
requests it ever makes are the OAuth `POST`, the `getItems` `POST`, and the
interlock's `PATCH`, which is unreachable unless the interlock is armed.

Run without credentials and it exits non-zero, naming which one is missing,
having called nothing and written nothing.

## Batch size is 1, deliberately

The documented maximum is 10 identifiers per `getItems` call. This job sends
one.

Step A probed whether a bad ASIN spoils the result for good ASINs sharing its
call. An out-of-stock ASIN does not — all three came back correctly together.
But no genuinely non-existent ASIN was ever tested, because constructing an
ASIN to test with is banned in this project, so the not-found case is
**unproven**. Unproven means one ASIN per call. 418 requests once a week is
trivially small, and a misclassification is far more expensive than the extra
HTTP calls.

## Pacing

Amazon publishes **no** requests-per-second figure. Do not cite one. What the
documentation publishes is the failure mode: `429 ThrottleException` with an
optional `retryAfterSeconds`. The 1,100 ms delay in this job is our own
conservative choice, not Amazon's number. No rate-limit headers appeared on any
observed response.

## The safety interlock

Selected by `AMAZON_AVAILABILITY_AUTODEACTIVATE`:

- absent, or anything other than the exact string `true` → **report only**. No
  database write of any kind.
- exactly `true` → **act**. Every ASIN classified `DEAD` that exists in
  `amazon_products` with `is_active = true` is set to `is_active = false`,
  scoped by primary key, one column, one row at a time. Each row is recorded in
  full before the write, and each write is confirmed by re-reading the row —
  a `200` is never trusted on its own, because an RLS-blocked update returns
  `200` with `content-range: */0` while a landed one returns `0-0/1`.

Hard ceiling: if more than **10** rows would be deactivated in one run, the job
does nothing, writes the report and exits loudly. A run proposing mass
deactivation is a bug until proven otherwise.

Repo-population ASINs are **never** auto-acted on. A code change is never
automatic; they are reported for a human ruling.

This variable is set nowhere — not in Railway, not in any file, not as a
default. Arm it only after inspecting a clean report-only run.

## Scheduling — needs one dashboard action

Weekly is the agreed cadence. Railway's CLI exposes no cron command, and this
repo has no GitHub Actions workflows, so the schedule cannot be wired from here
without guessing at infrastructure. The job is fully invokable; the schedule is
one dashboard action:

1. Open the Railway dashboard, project **observant-celebration**.
2. **New** → **GitHub Repo** → this repository. This creates a second service
   alongside `pestpro-index-v2-live`; the website service is untouched.
3. Name it something like `availability-check`.
4. **Settings** → **Deploy** → **Custom Start Command**:
   `node scripts/amazon-availability/check.mjs`
5. **Settings** → **Deploy** → **Cron Schedule**: `0 4 * * 1`
   (04:00 UTC every Monday).
6. **Variables** → add `AMAZON_CREATORS_CLIENT_ID`,
   `AMAZON_CREATORS_CLIENT_SECRET`, `NEXT_PUBLIC_SUPABASE_URL` and
   `SUPABASE_SERVICE_ROLE_KEY`. Reference the existing service's variables
   rather than pasting the secret again.
7. Do **not** add `AMAZON_AVAILABILITY_AUTODEACTIVATE`.

A cron service on Railway runs the command and exits; it does not serve traffic.

### Why not an API route

An HTTP trigger would have to live under `app/`, and an unauthenticated route
that hits a rate-limited vendor API is a defect. If one is wanted later it must
require a secret header — name the env var, do not set it — and that is a
separate decision rather than something to slip in here.
