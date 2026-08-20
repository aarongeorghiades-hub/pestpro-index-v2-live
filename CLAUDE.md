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

## Laws 57 onwards - appended after the original block

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
62. A COUNT IS BOUND TO ITS MATCHER AND ITS SURFACE. 473 rendered
    anchors and 342 source-side anchors are BOTH CORRECT and count
    different populations. State the matcher and the surface with
    every count, or the number is meaningless. Never reconcile two
    populations; report the difference.
63. A ROUTE-FILE COUNT AND A RENDERED-URL COUNT ARE TWO POPULATIONS.
    191 source route files, 185 rendered URLs. Neither is wrong.
64. A SUPERLATIVE CAN ASSERT A LEGAL CEILING AS WELL AS A MARKET ONE.
    A sweep for "strongest available to consumers" is blind to
    "maximum legal strength". Sweep both shapes.
65. A REGULATORY FACT MUST BE ESTABLISHED FROM THE REGULATOR'S OWN
    REGISTER - never from the product listing, the repo, or the
    database. HSE publishes both registers free.
66. INFORMATION PRESENT BUT PLACED AFTER THE DECISION POINT IS
    FUNCTIONALLY ABSENT. Measure position as a percentage through the
    file against the first ProductCard. Fired three times: B0DL2SLHTM,
    the gardens page, and the bait-station gap.
67. A SUBSTANCE-NAME MATCHER MUST USE THE SOURCE'S OWN SPELLING. HSE
    spells brodifacoum's IUPAC name "napthyl". A matcher on the
    correct spelling returned a confident, completely wrong verdict.
68. A CODE REMOVAL IS NOT A DATABASE REMOVAL. Session 23 removed the
    Flymatic from the repo, proved zero occurrences, and closed the arc. The
    row survived in amazon_products and the dead affiliate link stayed live
    in production for two sessions. WHEN A SURFACE READS FROM A TABLE, THE
    TABLE IS PART OF THE SURFACE. Sweep both.
69. VERIFY A VENDOR CAPABILITY AGAINST THE VENDOR'S CURRENT DOCUMENTATION
    BEFORE RECOMMENDING IT. Claude recommended PA-API repeatedly; Amazon had
    retired it three months earlier and was refusing new customers. A
    capability named in a carryover is an ASSERTION with an expiry date,
    exactly like a figure.
70. CHAT IS A LOSSY TRANSPORT. Three CC reports in one session arrived
    corrupted mid-word, one of them under an explicit sub-100-character
    rule, destroying a deployed hash and a sha256. ALL DETAIL GOES TO A
    FILE, IS UPLOADED TO CLAUDE, AND IS VERIFIED BY sha256. CHAT CARRIES
    ONLY A SHORT ENUMERATED RESULT LIST.
71. NEW SOURCING CAN DUPLICATE WHAT THE SITE ALREADY SELLS. Before sourcing
    any product class, ENUMERATE THE EXISTING ProductCard ASINs AND NAME
    PROPS IN THAT CLASS FIRST. Session 24 sourced two products already on
    the site under different ASINs.
72. AN UNRENDERED COLUMN CAN STILL BE WRONG. amazon_products.amazon_url
    carries a malformed affiliate tag on at least one row. It renders
    nothing today because the page rebuilds the URL from the asin. A column
    that is currently unused is a defect waiting for the code path that uses
    it.
73. A GENERATED COLUMN CANNOT BE CORRECTED ROW BY ROW.
    amazon_products.amazon_url was generated from asin by a stored
    expression carrying the wrong affiliate tag. It presented as 152
    defective rows; it was ONE defective expression rendered 152 times.
    PostgreSQL refuses a per-row UPDATE outright. ESTABLISH WHETHER A COLUMN
    IS GENERATED BEFORE AUTHORISING ANY WRITE AGAINST IT, AND FIX THE
    EXPRESSION, NOT THE ROWS.
74. POSTGREST IS A DATA API, NOT A DATABASE CLIENT. CC reaches Supabase
    through PostgREST, which can read and write rows but CANNOT read a
    column definition, issue DDL, or control transactions. Schema work goes
    to the Supabase SQL Editor and is executed by Aaron. Do not attempt DDL
    from CC and do not conclude a schema fact is unknowable merely because
    PostgREST cannot see it.
75. A GATE THAT TESTS A DERIVED VALUE AGAINST ITS SOURCE CAN ONLY PASS. A
    gate requiring that a generated URL's /dp/ segment match the asin column
    it is generated FROM is unsatisfiable in the failing direction and
    proves nothing. Before writing a gate, ask what result would constitute
    a failure. If none can exist, the gate is theatre.
76. A LAW NUMBER CARRIED IN A CARRYOVER IS AN ASSERTION, EXACTLY LIKE A
    FIGURE. Claude's inherited summary of laws 1-67 had drifted from the
    repository's own CLAUDE.md and cited the flag rule under the wrong
    number. THE REPO COPY IS AUTHORITATIVE. Cite a rule by its text, never
    by its number alone.
77. A CREDENTIAL THAT HAS LEFT ITS INTENDED CHANNEL IS BURNED. A live client
    secret was captured in a screenshot pasted into chat. It was rotated and
    deleted within minutes and no harm followed. NEVER SCREENSHOT A
    CREDENTIAL DIALOG. NEVER SEND A SECRET TO CLAUDE IN ANY FORM. Secrets go
    from the vendor's download straight into Railway and nowhere else.
78. A VENDOR'S CURRENT DOCUMENTATION CAN STILL BE WRONG. Amazon's Creators
    API docs name the response root itemResults; the live API returns
    itemsResult. Three healthy ASINs were silently classified UNDETERMINED
    before a real call caught it. Law 69 said check the documentation before
    recommending a capability. THIS EXTENDS IT: CHECK THE LIVE RESPONSE
    BEFORE TRUSTING THE DOCUMENTATION. The running system is the register.
79. A DEAD LINK AND AN OUT-OF-STOCK LINK ARE DIFFERENT DEFECTS WITH
    DIFFERENT REMEDIES. DEAD needs re-sourcing. UNAVAILABLE needs waiting.
    NEVER DEACTIVATE, RE-SOURCE OR REMOVE ON AN UNAVAILABLE. And whatever
    deactivates on DEAD must have a counterpart that reactivates on ALIVE,
    or the estate decays in one direction only.
80. A SAFETY CEILING THAT FIRES IS WORKING. When the interlock refused to
    act on 14 rows against a ceiling of 10, the answer was to inspect all 14
    by name, not to raise the ceiling. A limit relaxed because it triggered
    is not a limit. Do the inspection the ceiling was protecting, then act
    by name.
81. A CAP AND ITS REASONING ARE TWO DIFFERENT THINGS. What creates
    link-scheme risk is a SITEWIDE link rendering on every route, not the
    number four. BEFORE HOLDING OR MOVING A LIMIT, RESTATE WHAT IT WAS
    PROTECTING AGAINST AND CHECK THE NUMBER STILL SERVES IT.

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

## STANDING PRODUCT BARS — PERMANENT, SURVIVE EVERY SESSION

A standing bar is a permanent restriction on a specific product. It is not a defect
awaiting a fix and it is never "closed". It binds every future round on every route.

### B000BQT5IG — Combat Ant Killing Gel 27g

STATUS: PERMANENTLY BARRED FROM CARRYING ANY AWARD ANYWHERE ON THE ESTATE.

Origin: the Session 26 bar. Reason: US import.

WHAT IS BARRED: any label conferring rank, endorsement or superlative, on any surface,
on any route. This includes any string beginning "Best". It applies to cardLabel,
h2Label, tocLabel, any tableCells entry, prose, headings, JSON-LD and JSX comments alike.

WHAT IS PERMITTED: a neutral descriptor naming the product format and claiming no
ranking. The current compliant value is "Gel Bait" on app/best/ant-killers/page.tsx.

MECHANISM, AND WHY IT IS A SUBSTITUTION AND NOT A DELETION: h2Label and tocLabel cannot
be emptied. Both render sites hardcode an em-dash separator, so an empty label yields a
dangling em-dash. Removing the award therefore means replacing it with a neutral
descriptor, never blanking the field. cardLabel alone can be emptied.

BREACH HISTORY: live and unrecorded through Sessions 33 and 34. Corrected in Session 35
Round 1 across cardLabel, h2Label, tocLabel, tableCells[2] and the JSX comment.
Commit 18a4fbbe1f1049557c6f901b0396cb5c22baaa41. Verified live on pestproindex.com,
zero occurrences in both visible HTML and flight payload, with a control route passing.

WHY THIS ENTRY EXISTS: the bar was ruled in Session 26 and written down nowhere. That
omission alone caused a live compliance breach to survive two consecutive sessions. A
ruling that is not in this file does not exist.
