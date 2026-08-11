# PestPro Index — Repo Standing Rules and Verification Laws

Law 27 check performed before writing: no `CLAUDE.md` existed at this repo
root, and no `AGENTS.md` exists either, so there was no import directive to
preserve and nothing to overwrite. This file was created. Every future change
to it is **APPEND ONLY**. If a line-one import directive (`@AGENTS.md` or
similar) is ever added, it must survive every subsequent edit.

## Deployment

- **Railway only.** Project `observant-celebration`, service
  `pestpro-index-v2-live`. Vercel is banned and must not appear in output.
- **Never push unless explicitly told to.** Committing is not permission to
  push.
- Poll Railway **scoped** to the project and service, and poll for the
  **specific new commit hash** — never for "a successful deployment". Confirm
  the deployed hash **equals** local HEAD before claiming a deploy landed.
- Verify on the **rendered live page** at https://pestproindex.com, never on
  localhost and never on source alone.
- Exit code 137 from your own cleanup (killing a dev server) is not a failure.

## Database

- The table is `"Providers"` — **capital P, double-quoted**. Its primary key
  is `canonical_id`. There is **no `id` column**.
- Pest capability columns carry the `pest_` prefix. Render `pest_birds`, never
  `pest_birds_general`. Render `pest_rats` and `pest_mice`, never
  `pest_rodents` or `pest_rodents_general`.
- **RLS write posture:** the anon key cannot write. Server-side writes need
  `SUPABASE_SERVICE_ROLE_KEY` via `createAdminClient()`. That key is set in
  Railway even when it is not visible locally — never report it missing.
- **Client split:** `utils/supabase.ts` (browser, anon), `utils/supabase-server.ts`
  (server components, anon), `utils/supabase-admin.ts` (`createAdminClient`,
  service role, RLS-bypassing). Never import the admin client into anything
  carrying `'use client'`.
- **PostgREST caps responses at 1,000 rows** and there are 1,507 active
  providers. Any count that could exceed 1,000 must use a head request:
  `.select('canonical_id', { count: 'exact', head: true })`. Never count by
  `len()` of a returned page.
- jsonb array membership uses the `.or()` contains syntax:
  `.or('regions.cs.["slug"]')`. **`.contains()` is banned** on this column.
- **Never trust HTTP 200 on a write.** Always re-read the row and confirm the
  value actually changed.

## Content honesty

- **Banned in our own voice: `verified`, `trusted`, `vetted`.**
- **Not banned: `approved`, `screened`, `independent`, `accredited`.** Do not
  widen the list beyond the three banned words.
- No hardcoded counts. Compute from the database or delete the numeral. A
  hand-typed rating or review count about a real business cannot stay in sync
  and is unverifiable to a reader.
- Amazon affiliate links must be direct `/dp/<ASIN>`. A `/s?k=` search link is
  never permitted.

## Measurement traps

- **React splits text nodes.** Strip `<script>` blocks and HTML comments
  before any rendered text count.
- **The RSC flight payload double-counts** every string on the page. Strip it.
- **Measure the affiliate tag on RENDERED HTML, not source.** A source-side
  `/dp/` count is zero on every `/best` page.
- **Match the reader to the surface.** A reader that strips `<head>` and
  `<script>` is blind to metadata and schema; read those from the meta tags
  and the `application/ld+json` payloads directly.
- 32 of 49 `/best` files are minified. Use string-anchored edits only.
- Tooling and backups live in a session-scoped directory outside the repo.
  Nothing goes to `/private/tmp`.
- **The overlap law:** when two surfaces render the same string, editing one
  and not the other desynchronises them. Find the twin before editing.

## Verification laws 1–46

1. Measure, never assume. Every figure is a hypothesis until re-measured.
2. Never adjust a measured figure to match a stated baseline. If the
   measurement disagrees with the brief, the measurement wins — report the
   difference and proceed on it.
3. Fix the class, not the example. Sweep the whole directory.
4. Read the rendered prose after any removal. Clause removal severs sentences
   and no count catches it.
5. State hashes yourself. Never confirm one supplied to you.
6. A partial job with named boundaries beats a rushed complete one.
7. Classify at token level with a bounded window. Never at sentence level.
8. Report what you measure, never what you were told to expect.
9. Stopping cleanly is correct.
10. Per-item gates and per-item commits. One failure must not block the rest.
11. Assert an exact occurrence count before every string replace.
12. Never global-replace a short common word.
13. In minified files, anchor on the full element including its className.
14. Never normalise an encoding. Entities, ampersands and degree signs differ
    by surface intentionally.
15. Check for entity twins of every edited string.
16. Back up before editing; keep the backups.
17. Forward-replay from backups, never reverse substitution.
18. Compare byte-for-byte, not by count.
19. Set-diff, not counts, for any surface that must be unchanged.
20. Zero severed or ungrammatical sentences.
21. Re-run the classifier post-edit and expect zero in class remaining.
22. Log what you deliberately did not edit, and why.
23. A flag is a request for a ruling, not a failure.
24. Do not gate a push on the absence of flags; gate it on the stated gates.
25. Confirm the branch you are fixing is actually reachable, and say so.
26. Report the consumer count before changing a shared component.
27. Check whether a file exists before writing it. Append, never overwrite.
28. One commit per logical item, with a subject that names the item.
29. A shared component change hits every consumer — enumerate them.
30. Distinguish first-party claims from third-party and statutory data.
31. Ranking and award labels in our own voice are editorial, not claims.
32. Presuppositions count: a negated claim can still assert a false practice.
33. Prove a dead string is dead before shipping the change as cosmetic.
34. Separate build churn from content change with an untouched control.
35. Name your matcher when you report a count from a regex.
36. Report false positives you discarded, so the discard is auditable.
37. Distinguish "unreachable today" from "impossible" — fix structurally.
38. Never let a type annotation stand in for a schema check.
39. Check both metadata declaration forms: `generateMetadata()` and
    `export const metadata`.
40. Enumerate every reference before calling something orphaned.
41. Two sources of truth that disagree are a defect, not a tie.
42. When a gate is unsatisfiable under the brief's own constraints, say so
    plainly rather than working around it silently.
43. Forward-replay containment proof from pre-edit backups, byte-for-byte.
44. Measure the blast radius before the edit, not after.
45. Read-only means read-only. No mutating SQL during recon.
46. Report the deliverable's hash, and count the characters before reporting.

## Law 47 (new)

47. **A framework-level normalisation redirect fires ahead of every custom
    rule and cannot be reordered around.** Next's trailing-slash
    normalisation runs before all custom redirects and emits a relative
    Location on the same host, so an exact-match custom rule for the same
    path still loses to it. **Measure the framework's own hops before writing
    any hop-count gate**, or the gate will be unsatisfiable by construction.

## Laws 48–52 (new)

Law 47 was already recorded above when this section was appended, so it is
not repeated here. Laws 48 to 52 are new.

48. A NEXT BUILD STAMPS A PER-BUILD ID AND DERIVED ASSET HASHES INTO EVERY
    ROUTE, IN MORE THAN ONE SPELLING (underscore in the HTML comment, hyphen
    in the flight payload). ANY BEFORE/AFTER HTML COMPARISON MUST NORMALISE
    BUILD CHURN AND MUST PROVE THE NORMALISATION AGAINST UNTOUCHED CONTROL
    ROUTES FIRST.

49. STATE WHETHER A GAP IS IN THE DATA OR IN THE ROUTES.

50. BEFORE CORRECTING A NUMERAL AGAINST A MEASURED FIGURE, PROVE THE NUMERAL
    AND THE FIGURE COUNT THE SAME POPULATION.

51. EVERY FIX PROMPT MUST TEST ITS OWN PREMISE BEFORE ACTING AND PROCEED ON
    WHAT IT FINDS.

52. A ROUTE INDEX PAGE IS A DIFFERENT FILE FROM ITS [slug] ROUTE. WHENEVER A
    SHARED MECHANISM CHANGES, CHECK BOTH.

## Laws 53–56 (new)

53. A FIGURE INHERITED FROM A CARRYOVER IS AN ASSERTION, NOT A MEASUREMENT.
    Re-measure before instructing against it.

54. A COORDINATE IS NOT A DIMENSION. A bottom y-position is not a height.
    State which you mean and how you measured it.

55. A GATE CAN BE UNSATISFIABLE BY CONSTRUCTION WHEN THE ROUND TOUCHES EVERY
    ROUTE. When no untouched control can exist, replace the control with a
    character-level diff of the stripped surface and state the expected delta
    in advance.

56. TWO ARRAYS IN ONE FILE ARE TWO POPULATIONS. app/guides/page.tsx holds both
    `guides` and `reviews`; a slug set-diff of one is blind to the other. Law
    52 applies WITHIN a file, not only across files.

## Laws 57–61 (new)

57. A SEARCH-ENGINE SNIPPET OF OUR OWN SITE IS A STALE ASSERTION, NOT A
    MEASUREMENT. Google's index lagged this site by several sessions and
    described products and methodology wording that no longer exist. Read the
    repo, never the index.

58. SCOPE A FACTUAL-CLAIM DEFECT BY THE CLAIM, NEVER BY THE AFFILIATE LINK. A
    page with no ASIN still misleads a reader, and an ASIN-anchored gate will
    report zero while the claim is live.

59. A TEMPLATED PROP MULTIPLIES ONE ASIN ACROSS EVERY GENERATED ROUTE.
    `asin={product.asin}` in a shared client component is invisible to any
    literal-ASIN search of route files. Count the generated routes, not the
    source occurrences.

60. ONE ASIN CAN CARRY MANY NAME SURFACES. A rename is not scoped by the ASIN
    count.

61. A PROTECTION GIVEN BY NAME IS NOT OVERRIDDEN BY A BROAD CLASS
    AUTHORISATION. Stop and escalate; the ruling must name the single
    sentence.

## NEVER TOUCH — PROTECTED FROM EVERY CHECK

- app/best/rat-traps/page.tsx line 164, the four-categories sentence.
- app/best/rat-traps/page.tsx, "most effective" x3, which are about BAIT.
- app/best/cockroach-killers, the sentence arguing AGAINST relying on the
  highest-rated product on Amazon.
- app/best/ultrasonic-pest-repellers: the mixed-reviews H3, its FAQ schema
  twin, and the "full evidence review" link label.
- app/guides/ultrasonic-pest-repellers-do-they-work: the 4.5-star rating
  discussion, which is the file's subject matter. This file has NO FAQ-schema
  rating twin. Line 370 was narrowly authorised and edited in Session 22; the
  rest stands.
- app/guides/professional-pest-control-vs-diy: ALL 73 PRICES. Two sentences
  were narrowly authorised in Session 22; the file otherwise remains NEVER
  TOUCH.
- app/guides/pest-control-costs: all prices. NEVER TOUCH. NO AUTHORISATION HAS
  EVER BEEN GIVEN FOR THIS FILE.
- drain-fly-killer, "The most effective drain fly killers".
- "10-time Best Flea Product award winner".
- the anchor id="best-seller" on commercial-rodent-bait-stations.
- the essential-oils Evidence scale.
- the 12 "rated for effectiveness" instances on natural-fox, natural-moth,
  natural-wasp and natural-rat.
- components/FindProviderCTA.tsx line 77, "Find Local Experts".
- components/ProviderDetails.tsx line 88, the google_review_count switch.
- brand and manufacturer marketing describing a product's maker.
- Amazon Verified Purchase references.
- ALL award labels and rank numerals site-wide.
- "Verdict:" — out of scope by ruling R3.
- The availability-on-Amazon-UK statements. Availability is EXPRESSLY
  PERMITTED; only a price or price ranking located at Amazon is banned.
- Everything shipped in Sessions 19, 20, 21 and 22.

A PROTECTION GIVEN BY NAME IS NOT OVERRIDDEN BY A BROAD CLASS AUTHORISATION.
If a task appears to require touching anything above, STOP AND ESCALATE.
Proceed only on a ruling that names the single sentence.
