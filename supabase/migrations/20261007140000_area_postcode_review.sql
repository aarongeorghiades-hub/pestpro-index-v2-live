-- Area postcode review. RUN BY HAND in the Supabase SQL editor.
-- The website does not apply this file, and a deploy does not run it.
--
-- Section 1 is a read. It lists active firms whose postcode contradicts a
-- region tag (a London tag on an M, CF, EH or KW postcode, and the same
-- mismatch in every other city). It does not update or delete any row.
--
-- Section 2 is commented out. It would remove only the contradicted region
-- tag. It would not delete the firm. Leave it commented until section 1 has
-- been read. A postcode that cannot be read is left alone: the region tag is
-- the only evidence for those rows.
--
-- Area letters and exception districts match lib/serviceArea.ts
-- (TN16 is Bromley; WA14 and WA15 are Trafford; TN6 and TN22 are Brighton;
-- LS29 is Bradford). The website filter is the display source of truth even
-- before this file is run.

CREATE OR REPLACE FUNCTION pg_temp.ppi_postcode_district(raw text)
RETURNS text
LANGUAGE plpgsql
AS $$
DECLARE
  compact text;
  area text;
  rest text;
BEGIN
  compact := upper(regexp_replace(coalesce(raw, ''), '[^A-Za-z0-9]', '', 'g'));
  IF compact !~ '^[A-Z]{1,2}[0-9]' THEN
    RETURN NULL;
  END IF;
  area := substring(compact from '^([A-Z]{1,2})');
  rest := substring(compact from length(area) + 1);
  IF rest ~ '^[0-9]{1,2}[A-Z]?[0-9][A-Z]{2}$' THEN
    rest := substring(rest from 1 for length(rest) - 3);
  ELSIF rest !~ '^[0-9]{1,2}[A-Z]?$' THEN
    RETURN NULL;
  END IF;
  RETURN area || rest;
END;
$$;

CREATE OR REPLACE FUNCTION pg_temp.ppi_area_ok(city text, district text)
RETURNS boolean
LANGUAGE plpgsql
AS $$
DECLARE
  area text;
  exc text;
BEGIN
  IF district IS NULL OR district = '' THEN
    RETURN true;
  END IF;
  area := substring(district from '^([A-Z]{1,2})');

  IF city = 'london' AND area = ANY (ARRAY['E','EC','N','NW','SE','SW','W','WC','BR','CR','DA','EN','HA','IG','KT','RM','SM','TW','UB','WD']) THEN RETURN true; END IF;
  IF city = 'birmingham' AND area = ANY (ARRAY['B']) THEN RETURN true; END IF;
  IF city = 'manchester' AND area = ANY (ARRAY['M','BL','OL','SK','WN']) THEN RETURN true; END IF;
  IF city = 'liverpool' AND area = ANY (ARRAY['L','CH','WA','PR']) THEN RETURN true; END IF;
  IF city = 'leeds' AND area = ANY (ARRAY['LS','WF','HD','HX']) THEN RETURN true; END IF;
  IF city = 'sheffield' AND area = ANY (ARRAY['S','DN']) THEN RETURN true; END IF;
  IF city = 'nottingham' AND area = ANY (ARRAY['NG']) THEN RETURN true; END IF;
  IF city = 'bristol' AND area = ANY (ARRAY['BS','BA']) THEN RETURN true; END IF;
  IF city = 'brighton' AND area = ANY (ARRAY['BN','RH']) THEN RETURN true; END IF;
  IF city = 'glasgow' AND area = ANY (ARRAY['G']) THEN RETURN true; END IF;
  IF city = 'bradford' AND area = ANY (ARRAY['BD']) THEN RETURN true; END IF;
  IF city = 'newcastle' AND area = ANY (ARRAY['NE','SR','DH']) THEN RETURN true; END IF;
  IF city = 'cardiff' AND area = ANY (ARRAY['CF','NP']) THEN RETURN true; END IF;
  IF city = 'edinburgh' AND area = ANY (ARRAY['EH']) THEN RETURN true; END IF;
  IF city = 'leicester' AND area = ANY (ARRAY['LE']) THEN RETURN true; END IF;
  IF city = 'hampshire' AND area = ANY (ARRAY['SO','PO','RG','GU','SP','BH']) THEN RETURN true; END IF;
  IF city = 'coventry' AND area = ANY (ARRAY['CV']) THEN RETURN true; END IF;
  IF city = 'belfast' AND area = ANY (ARRAY['BT']) THEN RETURN true; END IF;
  IF city = 'derby' AND area = ANY (ARRAY['DE']) THEN RETURN true; END IF;

  FOREACH exc IN ARRAY (
    CASE city
      WHEN 'london' THEN ARRAY['TN16']
      WHEN 'manchester' THEN ARRAY['WA14','WA15']
      WHEN 'brighton' THEN ARRAY['TN22','TN6']
      WHEN 'bradford' THEN ARRAY['LS29']
      ELSE ARRAY[]::text[]
    END
  ) LOOP
    IF district = exc
       OR (
         length(district) = length(exc) + 1
         AND left(district, length(exc)) = exc
         AND right(district, 1) ~ '^[A-Z]$'
       ) THEN
      RETURN true;
    END IF;
  END LOOP;

  RETURN false;
END;
$$;

-- Section 1. Read only.
SELECT
  p.canonical_id,
  p.name,
  p.postcode,
  pg_temp.ppi_postcode_district(p.postcode) AS district,
  tag.region_tag,
  p.regions
FROM public."Providers" AS p
CROSS JOIN LATERAL jsonb_array_elements_text(p.regions) AS tag(region_tag)
WHERE p.active IS TRUE
  AND jsonb_typeof(p.regions) = 'array'
  AND pg_temp.ppi_postcode_district(p.postcode) IS NOT NULL
  AND NOT pg_temp.ppi_area_ok(tag.region_tag, pg_temp.ppi_postcode_district(p.postcode))
ORDER BY tag.region_tag, p.postcode, p.name;

-- Section 2. COMMENTED. Uncomment only after reading section 1.
-- It removes a region tag the postcode contradicts. It does not delete firms.
-- Rows with an unreadable postcode are not updated.
--
-- UPDATE public."Providers" AS p
-- SET regions = (
--   SELECT COALESCE(jsonb_agg(to_jsonb(tag.region_tag)), '[]'::jsonb)
--   FROM jsonb_array_elements_text(p.regions) AS tag(region_tag)
--   WHERE pg_temp.ppi_postcode_district(p.postcode) IS NULL
--      OR pg_temp.ppi_area_ok(tag.region_tag, pg_temp.ppi_postcode_district(p.postcode))
-- )
-- WHERE p.active IS TRUE
--   AND jsonb_typeof(p.regions) = 'array'
--   AND pg_temp.ppi_postcode_district(p.postcode) IS NOT NULL
--   AND EXISTS (
--     SELECT 1
--     FROM jsonb_array_elements_text(p.regions) AS tag(region_tag)
--     WHERE NOT pg_temp.ppi_area_ok(tag.region_tag, pg_temp.ppi_postcode_district(p.postcode))
--   );
