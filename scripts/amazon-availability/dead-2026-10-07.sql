-- NOT RUN. Do not apply this from the app, from PostgREST, or from a migration runner
-- unless Aaron runs it himself in the Supabase SQL editor.
--
-- Date: 2026-10-07
-- Method: amazon.co.uk/dp/<ASIN> fetched with curl (browser user-agent and a
-- cookie jar). AMAZON_CREATORS_CLIENT_ID / SECRET were not available, and the
-- Railway log for the report-only job dropped the ASIN lists (5456 messages).
-- A product is treated as dead here only when amazon.co.uk returns HTTP 404
-- and the body is the Page Not Found page ("not a functioning page" / the
-- short dogs-of-amazon 404). "Currently unavailable" pages were left alone.
--
-- The job reported 12 database DEAD out of 159 amazon_products rows.
-- This file names 11. Those 11 returned that 404. A read of amazon_products
-- on 2026-10-07 showed is_active = false for every one of them already.
-- The twelfth job DEAD could not be named: every other row in the table still
-- has a product page, so it is not in this statement.
--
-- None of these ASINs appear in repo files. There is no replacement ASIN.

UPDATE public.amazon_products
SET is_active = false,
    updated_at = now()
WHERE asin IN (
  'B003K8JDPM',
  'B00GHHPWEE',
  'B0130R83TO',
  'B015Y1AKOY',
  'B079J75SVM',
  'B0D8P37SGX',
  'B0DJMRKJ35',
  'B0DZ1TNMBL',
  'B0F1D9ZBPC',
  'B0FWQJ92LZ',
  'B0FX4M2Q8Y'
);
