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

82. A COMPONENT-ANCHORED INVENTORY IS BLIND TO A SURFACE THAT BUILDS
    ITS OWN URLS. A count of <ProductCard> occurrences is NOT a count
    of affiliate links. app/products/page.tsx carries 45 ASIN literals
    and ZERO ProductCards, building its Amazon URLs from a local helper
    — invisible to any sweep anchored on the component. Law 44 said a
    route-file extractor is blind to strings in a shared component.
    THIS IS THE MIRROR: A COMPONENT-ANCHORED EXTRACTOR IS BLIND TO A
    SURFACE THAT DOES NOT USE THE COMPONENT. STATE WHICH SURFACES A
    MATCHER CAN SEE BEFORE TRUSTING ITS ZERO.
83. A CANDIDATE POOL MUST BE SIZED FOR THE ESTATE'S OUT-OF-STOCK RATE.
    30 candidates were checked and 12 came back UNAVAILABLE and 2 DEAD
    — 40% unusable, against an expectation of 10-20%. A pool sized to
    the number of cards you intend to ship will always come up short.
    SOURCE ROUGHLY DOUBLE, AND CHECK BEFORE WRITING ANY CARD.
84. A SEARCH SNIPPET OF OUR OWN SITE CAN INVENT A DEFECT AS WELL AS
    HIDE ONE. A Google result appeared to show methodology copy
    breaching four settled compliance rulings; the repo was clean and
    carried the correct house pattern. Law 57 said such a snippet is a
    stale assertion. THIS EXTENDS IT: A STALE ASSERTION CAN BE
    FABRICATED IN EITHER DIRECTION. NEVER WRITE A FIX FROM ONE —
    SEND IT TO BE MEASURED IN THE REPO FIRST.
85. A PROMPT MUST NOT REQUIRE OUTPUT A FROZEN TOOL CANNOT EMIT. Session
    27 gated on the raw availability.type field; check.mjs emits a
    fixed reason sentence and is finished. WHERE A GATE IS
    UNSATISFIABLE, HALT AND REPORT — NEVER SPEND VENDOR API CALLS TO
    SATISFY A DEFECTIVE GATE. Law 55 said a gate can be unsatisfiable
    by construction; this names the remedy.
86. A DEAD ASIN CAN BE REASSIGNED TO AN UNRELATED PRODUCT. B003TU4YPA
    was our rank-1 "Best Overall" ultrasonic repeller; Amazon's own
    linked-product report titles it a black T-shirt. DEAD DOES NOT MEAN
    THE LINK 404s. It can resolve, transact, and sell the wrong thing
    under our strongest endorsement. CHECK WHAT A DEAD ASIN RESOLVES TO
    NOW BEFORE ASSUMING A BROKEN LINK IS MERELY INERT.
87. A CARD REPLACEMENT IS NOT A SECTION REPLACEMENT. Before scoping any
    product swap, ENUMERATE EVERY SURFACE THAT NAMES THE PRODUCT —
    heading, table of contents, ANCHOR ID, prose, comparison table,
    schema, alt text, title attribute — AND AUTHORISE ALL OF THEM OR
    NONE. A prose sentence can describe a product's features WITHOUT
    NAMING IT and will survive every name-based and numeral-based
    check. Session 27 halted on exactly this.
88. A BLOCKING CHECK THAT READS A LOCAL TRACKING REF IS NOT READING THE REMOTE. `git rev-parse origin/main` reads a cached local reference and does NOT update when a push is made via an explicit URL. USE `git ls-remote origin main`. Every prior session's push was verified against a local cache and happened to be correct. THAT IS LUCK, NOT A CHECK.
89. A METADATA SURFACE CAN BE INHERITED FROM A PARENT LAYOUT AND IS THEREFORE INVISIBLE TO A PAGE-FILE COUNT. /best/pigeon-spikes serves THREE description tags — description, og:description and twitter:description — but declares only two. The third comes from app/layout.tsx. A COUNT OF DESCRIPTION SURFACES DONE ON A PAGE FILE ALONE IS A CONFIDENT UNDERCOUNT. Law 24 said metadata can be inherited from layout.tsx; THIS IS THE MEASURED PROOF.
90. A PAGE SHELL COPIED FROM ANOTHER PAGE CARRIES THAT PAGE'S LINKS. /privacy and /cookies were built from the
    /about shell and arrived with a trailing link each that no instruction authorised. Harmless there. On a page
    where supplied copy is the whole point, a shell can introduce text that was never approved. ENUMERATE WHAT
    THE SHELL BRINGS, NOT ONLY WHAT THE COPY SAYS.
91. A TAG-STRIP MATCHER READS RENDERED BODY TEXT AND IS BLIND TO TEXT PASSED AS A COMPONENT PROP. The woodworm
    page's methodology sentence lives in a subtitle prop and survived a correct tag-strip as a false zero.
    Law 82 said a component-anchored inventory is blind to a surface that builds its own URLs; this is the
    mirror — a text-anchored sweep is blind to a surface that passes its own text. MATCH BOTH SURFACES OR
    REPORT NEITHER.
92. REACT EMITS <!-- --> TEXT-SEPARATOR COMMENTS DERIVED FROM JSX LINE BREAKS. Any source reformat changes them.
    A byte-identity gate on rendered HTML is therefore UNSATISFIABLE ACROSS A FORMATTING CHANGE — it tests a
    value the tooling cannot hold constant while performing the requested operation. Law 85 said do not require
    output a frozen tool cannot emit; this is the same failure in a gate rather than a report. BEFORE WRITING A
    GATE, ASK NOT ONLY WHAT WOULD CONSTITUTE FAILURE BUT WHETHER SUCCESS IS ACHIEVABLE AT ALL.
93. A NORMALISATION BUILT FOR ONE COMPARISON CAN INVALIDATE ANOTHER IN THE SAME ROUND. Round 5's N1 strips all
    non-ld+json script tags — correct for the formatting gate, and it would have forced the consent-gate script
    counts to zero regardless of live behaviour. A STRIP THAT GUARANTEES THE ANSWER YOU WANT IS NOT A TEST.
    State which normalisation each gate uses and confirm each can still fail.
94. A DEFECT CLASS CAN BE AN ARTEFACT OF THE QUESTION, NOT A PROPERTY OF THE ESTATE. C-AWARD's 204
    findings were ONE component fact; C-NUM's 12 were ZERO real defects. BEFORE REMEDIATING A
    LARGE CLASS, ASK WHETHER THE TEST THAT PRODUCED IT WAS MEASURING THE RIGHT THING.
95. NEVER SUPPLY A "FROM" STRING FROM MEMORY OR A CORRUPTED PASTE. Instruct CC to LOCATE THE
    TARGET BY ITS OWN MEASUREMENT using stable identifiers — section id, card, sentence position.
    Claude invented a FROM string in R5 and CC correctly refused to substitute against it.
96. A GATE THAT TESTS A VOCABULARY RATHER THAN A CLAIM IS UNSATISFIABLE. "Zero price implication"
    matched 659 strings, almost none a price. Law 92 said ask whether success is achievable; this
    is the same failure in the DEFINITION rather than the tooling. DEFINE THE CLAIM, NOT THE WORDS.
97. A SENTENCE IS NOT A PARAGRAPH IS NOT A BULLET. Claude conflated them THREE TIMES in one
    session. Each time CC halted and each time applying it literally would have destroyed adjacent
    true content. NAME THE CONTAINER EXACTLY AND HAVE CC CONFIRM ITS BOUNDARIES BEFORE EDITING.
98. WRITE BY FILE-AND-ASIN, NEVER GLOBALLY. Six of 32 target ASINs appear on other pages with
    different award labels. A global replace would have overwritten five protected labels.
    CC INFERRED THIS UNINSTRUCTED.
99. A CASE-SENSITIVE COUNT UNDER-REPORTS AND A SUBSTRING COUNT OVER-REPORTS. "trusted" was 5 by
    Claude's count and 68 by measurement. "pyrethroid" double-counted inside "cypermethrin".
    STATE CASE-SENSITIVITY AND WORD-BOUNDARY HANDLING ON EVERY COUNT.
100. A PROTECTION RULE CAN BLOCK A REMEDIATION, AND THAT IS THE PROTECTION WORKING. bestFor="Best
    Trusted Brand" makes a full "trusted" sweep impossible without lifting NEVER TOUCH. SURFACE
    THE CONFLICT TO AARON. DO NOT QUIETLY CARVE AN EXCEPTION.
101. A TEST HARNESS MUST PROVE IT IS TESTING THE BUILD IT CLAIMS TO TEST. R9's serve harness
     produced a FALSE PASS on a negative control by serving a STALE build. Verify BUILD_ID (or
     equivalent) inside every render-compare loop. A gate that passed on an unverified harness
     is NOT evidence, even if the conclusion later holds.
102. A CARRYOVER ITEM IS AN ASSERTION ABOUT THE REPO, NOT A FACT. Two of six carried price
     claims were false — one already fixed, one never existed. CC locates targets by its own
     measurement; a halt on "zero candidates" is the system working, not an error.
103. WHEN A GENERATION RULE FAILS, MEASURE THE ESTATE BEFORE CHOOSING A REMEDY. The pilot's
     G5 failure looked like a woodworm quirk; the census showed 49/50 routes diverge. Ruling on
     the sample of one would have produced either a mass rewrite or a wrong architecture.
104. PRESERVE DIVERGENCE AS PER-SURFACE FIELDS; NEVER COLLAPSE IDENTICAL VALUES INTO A SHARED
     FIELD. Collapsing reintroduces exactly the coupling C2 removes.
105. A PLATFORM INCIDENT IS DIAGNOSED BY ITS SIGNATURE: build succeeds + image pushes + deploy
     stage fails with zero logs + identical repeat = platform, not code. Two attempts, then wait.
106. A RULING THAT IS NOT WRITTEN INTO CLAUDE.md WILL BE SILENTLY REVERSED. The Session 26 bar
     on B000BQT5IG lived only in session carryover; a later selection rule inserted the barred
     award on 19 live routes. Any standing product bar, award prohibition or permanent ruling
     MUST be written into the repo, not carried in prose.
107. AN ARRAY ADDRESSED BY INDEX CANNOT HAVE MEMBERS REMOVED. products[0], products[1] in JSX
     makes every record undeletable — removing one shifts every later index and the last reads
     past the end. Address records BY IDENTITY (anchorId or asin). This is a prerequisite for
     any record deletion on a migrated route.
108. COUNTING FILES IS NOT COUNTING ROUTES. Round 5 reported 14 dead ASINs in 10 files; Round 6
     measured 48 live routes, because two data-file entries fan out across 19 cities x 2 pest
     slugs. Always follow a data file through its consuming component to the URLs a reader can
     actually reach.
109. A VERIFICATION THAT PASSES OVER AN EMPTY SET IS VACUOUS. R7's harness reported
     "verified: True" over zero captured files. Assert a NON-EMPTY capture set before reporting
     any pass. Related: a build-id matcher that reads only a leading HTML comment fails on
     dynamic routes, which carry the id inside the RSC flight payload — search the whole
     document in every spelling.
110. A NARROW LIFT IS NOT EXTENDED BY INFERENCE. A lift naming DEAD products does not authorise
     changing LIVE products' visible text, even when the two are structurally coupled. Surface
     the collision and ask; do not reason your way to the broader permission.
111. A COMMIT SUBJECT IS AN ASSERTION. Never fix its wording before the work it describes has
     been measured.
112. A CLASSIFICATION TAXONOMY WITH NO FALLBACK BUCKET FORCES A GUESS. Every occurrence must
     land in a named bucket or trip a stop. An item matching no bucket is a defect in the
     taxonomy, not a judgement call for the executor.
113. A SEQUENTIAL DIFF MIS-PAIRS AFTER A REMOVAL. Compare rendered surfaces AS A SET — exactly
     one removal per surface, zero additions — never by position.
114. A CLOSED CLASS IS CLOSED ONLY WHERE IT WAS MEASURED. Record the exact method that closed
     it; a later false negative overturns the closure, not the finding.
115. A STRING MATCHER IS NOT A CLASS TEST. A class defined by meaning must be searched by
     READING, with string matching used only to corroborate. "Lower-cost entry point than"
     contains no price vocabulary.
116. A CLASS DEFINITION CAN BE THE DEFECT. When a class closes at zero, test the DEFINITION
     against a known positive before trusting the result.
117. CALIBRATE AGAINST A KNOWN-POSITIVE BEFORE SWEEPING. A pre-fix baseline is a control
     document. A method that cannot rediscover a defect you know is there cannot be trusted.
118. MEASURE THE POPULATION, DO NOT INHERIT IT. 137 of 237 routes had never been captured by
     any sweep in this programme.
119. A CLASS AUTHORISATION DOES NOT PIERCE A NAMED PROTECTION. Any exception must name the
     file and the sentence.
120. A PRICE FOR A CATEGORY IS NOT A PRICE FOR A PRODUCT. Market cost ranges for product types
     are protected; prices attributed to Amazon or attached to a carded product are not.
121. A PER-ROUTE TWIN SEARCH IS BLIND TO INTRA-FILE TWINS. Count OCCURRENCES, not routes, and
     cover every surface including schema.
122. NEVER prettier --write ANY FILE MID-EDIT. The pre-commit hook gates only app/best/*.tsx;
     every other file will churn. Estate-wide, not just data/pest-products.ts.
123. A MATCHING COUNT IS NOT A MATCHING SET. Never adopt a list because its cardinality agrees
     with an expected figure. CC nearly deleted fourteen LIVE CONVERTERS this way.
124. A GATE IN A BRIEF INHERITS ANY CONTRADICTION IN THE BRIEF. When two figures in a brief
     disagree, they are BOTH suspect. CC MEASURES THE ACTUAL SET and reports which figure it
     supports and why.
125. AN AGGREGATE FROM A TOOL WITH A KNOWN FAULT MUST BE RE-DERIVED BEFORE A DECISION RESTS ON
     IT. Strip the known-bad days, re-measure, then rule. Raw GA4 "sessions" over a window that
     contains the late-July/early-August bot spike is a number, not a fact.
126. A TEMPORAL CLAIM ABOUT A FAST-MOVING THING IS NOT A CLAIM ABOUT THE PRESENT. A 2021
     research-summary line about a 2014 detection is not evidence about a 2026 page's
     competitive position. MEASURE THE CURRENT STATE.
127. MEASURE THE SET, NOT THE FILE. A route count is never a file count. A hard-coded list of
     routes is a bug. The sitemap enumerates routes by discovery against a measured include/
     exclude rule with a probe proof (add a route → appears; remove it → disappears).
128. A COMMISSIONED RESEARCH PRIORITY IS AN ASSERTION. Invert it where the defensibility of a
     page is the binding constraint. Weakest competitive defence first, termites last.
129. A PAGE MAY NOT CITE A CONTROLLING STATUTE UNLESS THE ROUND HAS FETCHED THE PRIMARY LEGAL
     TEXT. A subordinate clause elided from a statutory quotation changes its scope. When the
     clause is the narrowing condition, every sentence depending on it is an overstatement
     until the clause is restored verbatim.
130. A FOOTER OR OTHER SHARED CHROME IS A PAGE-LEVEL CLAIM ON EVERY ROUTE IT RENDERS ON. A UK
     Amazon disclosure on a /us/ page that earns no commission is a false statement on every
     US page, however truthful on the UK pages. SCOPE SHARED CHROME BY ROUTE, THEN PROVE THE
     UNSCOPED ROUTES ARE BYTE-IDENTICAL.
131. A "PROVIDED UNDER §X" READING IS NOT "PROVIDED UNDER §X WHEN Y". Read the section, then
     the subsection, then the qualifier. The qualifier is the law.
132. WHEN TWO PAGES ON THE SAME SITE DISAGREE ON A FACT, THE DISAGREEMENT IS THE DEFECT, NOT
     EITHER PAGE. Resolve to the primary source or render the disagreement openly with both
     citations. Never pick the more convenient one.
133. A PEER-WRITTEN PAGE IS NOT REVIEWED UNTIL IT HAS BEEN READ LINE BY LINE AGAINST ITS OWN
     SOURCE PACK. Gate scripts catch vocabulary; only a reading catches a qualifier omission.
134. "THIS SITE IS NOT LEGAL ADVICE" DOES NOT LICENCE A LEGAL CONCLUSION IN THE SITE'S OWN
     VOICE. Attribute every legal statement to its statute or agency. The site may report;
     it may not rule.
135. A GEOGRAPHIC CLAIM SOURCED FROM ONE STATE'S EXTENSION APPLIES TO THAT STATE. "In the
     western United States" is an overgeneralisation of a California source unless a second
     source covers the rest.
136. A SOURCE PACK FIGURE WITH NO SOURCE LINE IS NOT IN THE PACK. "80,000 times" and the
     body-temperature rabies explanation were dropped because no .edu or .gov line carried
     them. A figure that cannot be traced is not published, however widely repeated.
137. AN ANTI-BOT INTERSTITIAL IS A TERMINAL STATE FOR THE ROUND. One attempt, no header
     change, no retry. Record the status with a date. The next round may try once more.
138. A LAYOUT-INJECTED STRING ON A GATED ROUTE IS A KNOWN EXCEPTION, NOT A PASS. Name it,
     attribute it to its file, and carry it as a flag. A gate that reports PASS because the
     known exception was subtracted without naming it is hiding the exception.
139. A PRODUCT PAGE IS NOT BUILT UNTIL ITS RANKING CRITERION IS A SOURCED SPECIFICATION.
     "Enclosed and large enough" is a vocabulary. "At least X by Y inches per source Z" is a
     criterion. No criterion, no page.
140. A PARKED PAGE REOPENS ON A NEW SOURCED CRITERION, NOT ON A NEW PRODUCT SEARCH. If every
     candidate fails the criterion, the criterion is the block, not the pool.
141. A US-ONLY ASIN CHECKED BY THE UK AVAILABILITY JOB IS NOT DEAD. The job is hardcoded to
     amazon.co.uk. Its output never rules on a /us/ ASIN. Record the marketplace with every
     availability verdict.
142. DEPLOYMENT STATE IS READ FROM THE RAILWAY CLI, NEVER THE GRAPHQL API. The API returns
     "Not Authorized" under the project token. railway deployment list --json is the method.
143. A SOURCES BLOCK NEVER CARRIES A PRODUCT LINK. A source is a reference; a product link is
     a commercial call. The two never share an element.
144. A ROUTE COUNT IS TIED TO A NAMED MATCHER OR IT IS NOT A COUNT. Keys in
     .next/app-path-routes-manifest.json ending in /page, as a rule, not "the route count".
145. A SCIENTIFIC NAME IS CHECKED AGAINST ITS OWN SOURCE ROW BEFORE COMMIT. A genus mix-up
     between sibling species in the same pack is a sourcing error, not a typo.
146. A FACTUAL DISAGREEMENT BETWEEN TWO SOURCES IN THE SAME PACK IS RENDERED, NOT RESOLVED,
     UNLESS A PRIMARY SOURCE SETTLES IT. The reader sees both, with citations.
147. A SIZE SPECIFICATION FROM ONE SOURCE IS THE SOLE RANKING CRITERION UNTIL A SECOND SOURCE
     IS IN THE PACK. Do not blend a second criterion from memory.
148. A DATED OBSERVATION RECORD REPLACES A STANDING STATUS FOR ANY EXTERNAL SERVICE THAT
     BEHAVES INTERMITTENTLY. "Amazon fetch blocked" is a status; "Amazon fetch succeeded
     6/6 on 22 Aug, failed 0/4 on 21 Aug" is a record.
149. A CANONICAL TAG, A JSON-LD BLOCK AND A SITEMAP ENTRY ARE THREE SEPARATE SURFACES.
     Verify each by its own matcher on the live route. One passing does not imply the others.
150. A CARRYOVER STATES THE FILE A FIGURE WAS MEASURED FROM, OR THE FIGURE IS UNSIZED.
151. A FALSE-ZERO FROM A STRIPPER IS A STRIPPER BUG UNTIL A KNOWN POSITIVE RE-PROVES IT.
     S39 R1's RSC stripper returned zero on routes that carried hits; the PROTECTED string on
     /best/ant-killers was the control that exposed it. Every estate-wide sweep carries a
     named known-positive control.
152. A BRAND'S OWN MARKETING STRING ON A PRODUCT CARD IS PROTECTED CONTENT UNDER CLAUDE.md:315.
     A G3 hit inside a manufacturer's product name or feature string is not the site's voice.
     Deferred permanently; never edited.
153. AN OWN-VOICE VETTING CLAIM IS EDITED; A PROPER NOUN CONTAINING THE SAME STEM IS KEPT.
     "Trustpilot", "TrustMark" and "wildlife trust" are names. "Our trusted picks" is a claim.
154. A PRE-COMMIT HOOK IS NEVER BYPASSED. If prettier re-wraps a file, the diff is proven
     whitespace-only and committed as such. --no-verify is banned in every prompt.
155. AN AVAILABILITY RUN IN REPORT-ONLY MODE MAKES NO DATABASE WRITE. Group D was confirmed
     inactive by reading, not by writing. A run that writes is a different round with its own
     authorisation.
156. A PROTECTED STRING'S LOCATION IS MEASURED, NOT CARRIED. "Best Trusted Brand" was carried
     as /best/mouse-poison for three sessions; it lives on /best/rat-poison.

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
  R40-1 LIFT EXERCISED S43 R1c, ONCE, FOR ONE STRING ON ONE ROUTE, AND NOW SPENT.
  On app/best/rat-poison/page.tsx the award label was SUBSTITUTED, not deleted:
  "Best Trusted Brand" -> "Best Difenacoum Bait", applied to cardLabel, h2Label,
  tocLabel and tableCells, with anchorId best-brand -> best-difenacoum. THE
  PRODUCT WAS RETAINED: B07BFQ1V5L, Rentokil Rodine Grain Bait, still rank 4 of
  six, no renumbering. This follows the B000BQT5IG precedent above — an award
  label is removed by substitution because h2Label and tocLabel render against a
  hardcoded em-dash and cannot be emptied. A first attempt that DELETED the whole
  record was discarded unpushed; deleting a product is not how a claim is removed.
  Three further trust assertions about that same product were cleared in the same
  commit: a feature bullet, a Verdict-section sentence and a Pros item. The
  rank-1 "Trusted brand" bullet on the same page belongs to a DIFFERENT product
  and was left untouched, as were the 3 trusted strings on /products.
  SUCCESSOR G3 KNOWN-POSITIVE CONTROL: /products G3 = 3, measured 2026-08-23
  BEFORE the old control was altered. The string being removed WAS the control,
  so the successor had to be pinned first or the gate would have been left with
  nothing proving it still fires.
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

## S59 — RULE-SET INTEGRITY

NOTE 1 — OPERATING MANDATE AUTHORITY
The sole authoritative text of the operating mandate is
~/pestpro-operating-mandate.txt (3,626 bytes, sha256
1ee90f0cb8bca108347140df0222f6dc20432546a162dc8051f69331fd105858).
The labelled reconstruction at the foot of
~/pestpro-s59-opening-carryover.txt is SUPERSEDED and must not be
relied on. The carryover file itself is NOT to be edited — its
sha256 is its integrity anchor.

NOTE 2 — LETTERED PRECEDENTS
As of S59 R0, 75 of 102 lettered precedent labels have no definition
on disk. A lettered label is not a citable authority unless its rule
text is defined in a round report or in this file. Any round that
needs an undefined label must halt and refer it to the PM for a
ruling; it must not infer the rule from prior usage.

## S59 — RATIFIED PRECEDENTS

These definitions are RATIFIED by PM ruling at S59 R2 and are the
authoritative text of each label. Where a round report's usage of a
label conflicts with the text below, the text below governs.

S52-E — A property stated only in a product's name is not a claim.
A property may be asserted on a card only if it appears in the
listing's own feature text.

S45-C — A banked ASIN within its freshness window may be carded on a
further route without a new fetch, a new identity verification, or a
new register row.

S49-L — A matcher must be fired on a known positive AND a known
negative before any zero it produces is believed. Ratified in the
two-directional form: the positive limb proves the matcher can find,
the negative limb proves it can distinguish. A zero from a matcher
fired on only one limb is not believed.

S50-H — A search result title or snippet is not the listing's own
text. Only the fetched product-page title is authoritative.

S54-H — Route/hub-link parity is a standing closing gate. Three sets
must be set-equal — routes, hub links, and hasPart entries — with
zero UNLINKED and zero ORPHAN. The authoritative matcher is:
routes taken from .next/app-path-routes-manifest.json keys; hub links
taken from rendered anchors. The source-literal matcher
(app/us/*/page.tsx directory names, source href: literals) is
SUPERSEDED and must not be used for this gate.

S45-F — An lsof count below baseline is a closed window and is not
reportable. Only a count above baseline is reportable.

S45-D — Every URL attempted is recorded with its outcome, failures
included. A failure is recorded, never substituted.

S47-F — Manufacturer self-praise in a product's own title or listing
is never a ground for exclusion. It is trimmed from card copy and
never restated.

LAW 157 — A seed must be proven to change the artefact it is said to
govern. A seed asserted without that proof is not a seed. Ratified
prospectively from S59 R2; it does not retroactively validate any
earlier round. The matcher-repr() reporting duty carried under this
number in five references is NOT part of Law 157 and has no force.

## S59 R3 — CORRECTIONS AND STANDING RULES

S59-A — PRIMARY TEXT, ALTERNATE OFFICIAL PUBLISHER
Fetching a primary legal or regulatory text from a different official
publisher of that same text is NOT a substitution under S45-D. GPO
govinfo.gov and eCFR are both official publishers of the CFR; the
statute is the text, not the host. This permission is limited to
primary texts published by an official government publisher. It does
not extend to secondary summaries, mirrors, aggregators, or archives.
BINDING CONDITION: the citation on the page must name the host
actually read. A citation naming a host that was never successfully
fetched is a poisoned citation regardless of whether the text is
correct. Blocked attempts remain recorded under S45-D.

S59-B — NON-LATIN CHARACTER SCAN YIELDS CANDIDATES, NOT FINDINGS
A non-Latin or unexpected character on a page is a CANDIDATE defect
only. It becomes a finding only when the source body has been read
and the source is shown not to carry that character. No assertion may
be made about what a publisher "would" or "would not" set. The class
named at S58-I stands; its worked example is WITHDRAWN.

CORRECTION — S58 R8, U+00BA ON /us/imported-fire-ants
S58 R8 recorded a class-(vi) defect: the sequence "between 70º and
85º °F" (U+00BA twice, U+00B0 once) on /us/imported-fire-ants. That
finding is FALSE. Clemson publishes that sequence verbatim; our page
reproduces it exactly. There is no defect. The finding was made with
the source body unread. ~/pestpro-s59-opening-carryover.txt carries
the falsified statement and is under a no-edit rule anchored by its
sha256; this note is the correction of record and governs over it.

## S59 R6 — DISCLOSURE ATOMICITY

S59-C — AFFILIATE TAG AND DISCLOSURE ARE ONE CHANGE
The US estate currently renders, on every card-carrying route, the
statement "The link below is not a paid affiliate link." That
statement is TRUE only while affiliateTag is unset. The moment a tag
is passed to UsToolCard, that statement becomes false on every route
carrying it, and the estate simultaneously breaches Amazon's
requirement that pages carrying affiliate links display the associate
disclosure.
Therefore: passing an affiliate tag and replacing the disclosure text
are ONE change, in ONE commit. Neither may ship without the other.
A round that adds a tag without the disclosure swap, or the reverse,
must halt.
This rule applies to any new route built before a tag exists: a new
card-carrying route ships with the current no-affiliate disclosure,
and is swept by the same atomic change when the tag lands.

## S60 R5 — TIER 4 DENOMINATOR

LAW 158 — THE "SPIDERS (GENERAL)" HEAD IS PERMANENTLY DROPPED FROM
TIER 4. Six live spider routes already exist on the estate
(`/us/black-widow-spiders`, `/us/brown-recluse-spiders`, and the
four-page Joro cluster — `/us/are-joro-spiders-dangerous`,
`/us/joro-spider`, `/us/joro-spider-range`, `/us/joro-spider-webs`),
each carrying an own-voice commitment against being folded into a
general spiders grouping. A "spiders (general)" head would
cannibalise all six. This was ruled in S59 but never written to disk,
which is why S60 R4 surfaced it again as an open question. A count in
an old record does not overturn a reason. THIS RULE IS THE WRITTEN
RECORD: the head is dropped, permanently, not parked pending a
further ruling.

CONSEQUENCE: TIER 4 IS ELEVEN HEADS, NOT TWELVE. Any round that finds
"twelve" in an older record (e.g.
`~/pestpro-s52-r1-tier4-ascertainment.md`) must treat this rule as
controlling and must not re-refer the question to the PM.

Current tier state, as measured in S60 R4 (Bash against `app/us/`):
nine heads shipped — German cockroaches, ants, fleas, mice, moths,
wasps/hornets, flies, silverfish, carpet beetles. Two heads unbuilt —
bed bugs and rats.

## S60 R6 — GSC QUEUE IS A FILE, NOT A MEMORY

LAW 159 — THE GSC SUBMISSION QUEUE LIVES AT
`~/pestpro-gsc-queue.md` AND IS MAINTAINED BY CC, NEVER BY THE PM
FROM CHAT. The PM previously drove Search Console submissions from
memory and chat history, which produced wrong and duplicated
instructions. CC regenerates or updates this file at the end of any
round that ships a new route or materially changes an existing one,
listing full absolute URLs with each route's last-modified date, and
naming any route that is a deliberate control and must never be
submitted. A round that changes a route and does not update this file
is not finished. The PM's job is to read the file and act on it, not
to reconstruct it.

## S60 R7 — TIER 4 IS CLOSED

LAW 160 — TIER 4 IS CLOSED: ELEVEN HEADS, ALL SHIPPED. The eleventh
and final head, rats, shipped this round at `/us/rats`. Combined with
Law 158's ruling that the twelfth candidate head, "spiders (general),"
is permanently dropped, Tier 4's full and final roster is:

```
1  German cockroaches   5  mice     9  flies
2  bed bugs             6  rats    10  silverfish
3  ants                 7  moths   11  carpet beetles
4  fleas                8  wasps/hornets
```

Any round that finds an open "Tier 4" item in an older record —
including this file's own S60 R5/R4 entries recording bed bugs and
rats as unbuilt — must treat THIS rule as controlling. Tier 4 is not
reopened by a future round without a new PM ruling naming a twelfth
head and superseding Law 158.

## S61 R1 — /US/TICKS CONTROL RETIRED

LAW 161 — /US/TICKS IS A NORMAL ROUTE. ITS "NEVER SUBMIT" GSC CONTROL
DESIGNATION IS DEAD AND IS NOT RESTORED. This is a PM ruling made in
chat at S60 R8 and never written to disk, which is why it surfaced
again as an unresolved conflict at S60 R9 and was carried open into
S61 R0 (Law 41/100 — a flag is a request for a ruling, not a failure,
and it does not resolve itself). THIS RULE IS THE WRITTEN RECORD AND
CLOSES IT.

Reasons: the question the control existed to answer — whether manually
pushing a page through GSC submission moves anything — is moot now the
estate is confirmed fully indexed (S60 R6/R9); deliberately leaving one
live page carrying worse, pre-rewrite metadata in order to preserve a
defunct experiment costs real clicks on a real page for no offsetting
benefit; and restoring superseded metadata specifically to repair a
dead experiment is churn for its own sake, not a content improvement.

CONSEQUENCE: `/us/ticks` is submitted and treated exactly like every
other `/us` route from this round forward. No other route carries a
never-submit designation as a result of this rule — it retires the one
designation that existed, and does not establish a new class of
control routes.
