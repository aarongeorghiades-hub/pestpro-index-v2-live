-- NOT RUN. There is no check, trigger, or function that caps Featured firms at 3.
-- The only database text that stated the old cap is the comment on
-- "Providers".featured_areas, from
-- supabase/migrations/20261007120000_paid_listing_groundwork.sql.
-- The live cap is in the app (lib/featuredCap.ts): 25% of the firms shown on
-- that area page, rounded up, minimum 2.
--
-- Apply this in the Supabase SQL editor if the column comment should match.

COMMENT ON COLUMN public."Providers".featured_areas IS
  'Area slugs (london, manchester, ...) where a featured firm may appear. How many are shown is decided in the app from the firms on that page, not in the database.';
