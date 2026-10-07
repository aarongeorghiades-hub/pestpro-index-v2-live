-- Paid listing groundwork (Phase 1).
--
-- RUN THIS ONCE, by hand, in the Supabase SQL editor for the production
-- project, BEFORE merging the pull request that adds the app code.
-- The app does not run this file. Nothing here is applied by a deploy.
--
-- What it does:
--   * Adds tier columns to "Providers" (every existing row stays tier 'free').
--   * Creates listing_events, claims, quote_requests and listing_reports.
--   * Turns on row level security and grants no public access. The site writes
--     these tables only through the service-role key, the same way
--     /api/provider-submissions writes provider_submissions.
--
-- Safe to re-run: new columns use IF NOT EXISTS, and the tables are created
-- only when missing. It does not update or delete any provider row.

-- ---------------------------------------------------------------------------
-- 1. Provider tier columns. Organic sorting does not read these.
-- ---------------------------------------------------------------------------

ALTER TABLE public."Providers"
  ADD COLUMN IF NOT EXISTS tier text NOT NULL DEFAULT 'free',
  ADD COLUMN IF NOT EXISTS claimed_by_email text,
  ADD COLUMN IF NOT EXISTS verified_at timestamptz,
  ADD COLUMN IF NOT EXISTS stripe_customer_id text,
  ADD COLUMN IF NOT EXISTS stripe_subscription_id text,
  ADD COLUMN IF NOT EXISTS subscription_status text,
  ADD COLUMN IF NOT EXISTS featured_areas text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS service_postcode_districts text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS logo_url text,
  ADD COLUMN IF NOT EXISTS photos jsonb,
  ADD COLUMN IF NOT EXISTS hours jsonb;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'providers_tier_check'
  ) THEN
    ALTER TABLE public."Providers"
      ADD CONSTRAINT providers_tier_check
      CHECK (tier IN ('free', 'verified', 'featured'));
  END IF;
END $$;

COMMENT ON COLUMN public."Providers".tier IS
  'free | verified | featured. Display only. Never an input to rating sort.';
COMMENT ON COLUMN public."Providers".featured_areas IS
  'Area slugs (london, manchester, ...) where a featured firm may appear. Max 3 shown per area, in the app, not here.';
COMMENT ON COLUMN public."Providers".stripe_customer_id IS
  'Reserved for a later Stripe step. Unused until then.';
COMMENT ON COLUMN public."Providers".stripe_subscription_id IS
  'Reserved for a later Stripe step. Unused until then.';

CREATE INDEX IF NOT EXISTS providers_tier_featured_idx
  ON public."Providers" (tier)
  WHERE tier = 'featured';

CREATE INDEX IF NOT EXISTS providers_featured_areas_idx
  ON public."Providers" USING GIN (featured_areas);

-- ---------------------------------------------------------------------------
-- 2. New tables. provider_id matches "Providers".canonical_id, whatever type
--    that primary key already has (the script reads it; it does not guess).
-- ---------------------------------------------------------------------------

DO $$
DECLARE
  pk_type text;
BEGIN
  SELECT pg_catalog.format_type(a.atttypid, a.atttypmod)
    INTO pk_type
  FROM pg_catalog.pg_attribute a
  JOIN pg_catalog.pg_class c ON c.oid = a.attrelid
  JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
  WHERE n.nspname = 'public'
    AND c.relname = 'Providers'
    AND a.attname = 'canonical_id'
    AND NOT a.attisdropped;

  IF pk_type IS NULL THEN
    RAISE EXCEPTION 'public."Providers".canonical_id was not found. Nothing was created.';
  END IF;

  -- Page views and call / website / email clicks. No IP column, on purpose.
  EXECUTE format($sql$
    CREATE TABLE IF NOT EXISTS public.listing_events (
      id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      provider_id %s NOT NULL REFERENCES public."Providers"(canonical_id) ON DELETE CASCADE,
      type text NOT NULL CHECK (type IN ('view', 'call', 'website', 'email', 'quote')),
      page_path text,
      area text,
      created_at timestamptz NOT NULL DEFAULT now()
    )
  $sql$, pk_type);

  -- "Is this your business?" Manual review. status starts at pending.
  EXECUTE format($sql$
    CREATE TABLE IF NOT EXISTS public.claims (
      id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      provider_id %s NOT NULL REFERENCES public."Providers"(canonical_id) ON DELETE CASCADE,
      email text NOT NULL,
      method text NOT NULL CHECK (method IN ('email_domain', 'sms', 'manual')),
      status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
      message text,
      created_at timestamptz NOT NULL DEFAULT now()
    )
  $sql$, pk_type);

  -- Quote form is not built yet. The table is here so the later form has a home.
  EXECUTE format($sql$
    CREATE TABLE IF NOT EXISTS public.quote_requests (
      id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      provider_id %s NOT NULL REFERENCES public."Providers"(canonical_id) ON DELETE CASCADE,
      name text NOT NULL,
      email text NOT NULL,
      phone text,
      postcode text,
      pest text,
      message text,
      created_at timestamptz NOT NULL DEFAULT now()
    )
  $sql$, pk_type);

  -- "Report or remove this listing."
  EXECUTE format($sql$
    CREATE TABLE IF NOT EXISTS public.listing_reports (
      id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      provider_id %s NOT NULL REFERENCES public."Providers"(canonical_id) ON DELETE CASCADE,
      email text,
      reason text NOT NULL CHECK (reason IN ('incorrect', 'remove', 'not_a_pest_controller', 'other')),
      message text NOT NULL,
      status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'actioned')),
      page_path text,
      created_at timestamptz NOT NULL DEFAULT now()
    )
  $sql$, pk_type);
END $$;

CREATE INDEX IF NOT EXISTS listing_events_provider_created_idx
  ON public.listing_events (provider_id, created_at DESC);

CREATE INDEX IF NOT EXISTS listing_events_type_created_idx
  ON public.listing_events (type, created_at DESC);

CREATE INDEX IF NOT EXISTS claims_provider_status_idx
  ON public.claims (provider_id, status, created_at DESC);

CREATE INDEX IF NOT EXISTS quote_requests_provider_created_idx
  ON public.quote_requests (provider_id, created_at DESC);

CREATE INDEX IF NOT EXISTS listing_reports_status_created_idx
  ON public.listing_reports (status, created_at DESC);

-- ---------------------------------------------------------------------------
-- 3. RLS on, and no policies. anon and authenticated cannot read or write.
--    The service role bypasses RLS and is the only writer the app uses.
-- ---------------------------------------------------------------------------

ALTER TABLE public.listing_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.claims ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.listing_reports ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.listing_events FROM PUBLIC, anon, authenticated;
REVOKE ALL ON TABLE public.claims FROM PUBLIC, anon, authenticated;
REVOKE ALL ON TABLE public.quote_requests FROM PUBLIC, anon, authenticated;
REVOKE ALL ON TABLE public.listing_reports FROM PUBLIC, anon, authenticated;

GRANT ALL ON TABLE public.listing_events TO service_role;
GRANT ALL ON TABLE public.claims TO service_role;
GRANT ALL ON TABLE public.quote_requests TO service_role;
GRANT ALL ON TABLE public.listing_reports TO service_role;

-- Identity columns insert through a sequence. Table grants do not cover it.
GRANT USAGE, SELECT ON SEQUENCE public.listing_events_id_seq TO service_role;
GRANT USAGE, SELECT ON SEQUENCE public.claims_id_seq TO service_role;
GRANT USAGE, SELECT ON SEQUENCE public.quote_requests_id_seq TO service_role;
GRANT USAGE, SELECT ON SEQUENCE public.listing_reports_id_seq TO service_role;
