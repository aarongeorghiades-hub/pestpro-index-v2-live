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

## S61 R2 — LAW 120 CLOSED STRUCTURALLY; LAW 137 BLOCKED-LIST HANDOFF

LAW 162 — LAW 120 IS STRUCTURALLY SATISFIED, NOT MERELY MEASURED CLEAN.
S61 R1 established that no card-rendering surface on the estate carries a
price field at all: `UsToolCardProps`, `ProductCardProps`, the `PestProduct`
data interface, and `app/(uk)/products/page.tsx`'s inline product object
literals were each read at source and none declares a price. A component
with no price field cannot render a price adjacent to its own card by
construction — this is not a fact that can regress silently the way a
grep-clean estate can. A round need not re-sweep every rendered page for
Law 120; it need only confirm the structural fact still holds — i.e., that
no card component has gained a price field since the last confirmation. If
one ever does, Law 120 reopens as a live measurement question and the full
estate-wide sweep applies again from that point.

LAW 163 — A BLOCKED LIST IS A FIRST-CLASS HANDOFF, NOT A FOOTNOTE. Law 137
permits exactly one fresh retry per blocked URL, in a subsequent round —
S60 R9 proved the value of that retry concretely: 0 of 32 URLs succeeded on
first attempt, 31 of 32 succeeded on the permitted retry. The gap this rule
closes: a round's blocked list previously died inside that round's own
report, unread by name in the next round's brief. From this rule forward,
any round that closes with blocked product URLs MUST carry that list
forward as a named, first-class item in its report — not buried in prose —
and the NEXT round MUST exercise Law 137's permitted single retry on that
exact list before starting any new candidate sourcing. A round that sources
new candidates while a carried blocked list sits unretried has skipped a
step.

## S61 R5 — LAW 164

LAW 164 — MECHANICAL QUOTATION EXTRACTION. Every quotation on every page is
extracted mechanically from the fetched source text by copying the exact
byte range. It is never retyped, never reconstructed from reading, never
normalised for punctuation, capitalisation or spacing. Each quotation is
verified against the fetched source by exact string match BEFORE it enters
the draft, not after. A quotation failing exact match does not go in — it
is paraphrased and cited instead. The self-audit remains in force as a
backstop but is no longer the primary control.

EVIDENCE. Quotation faults reaching audit ran 18 (house-mice), 9
(bed-bugs), 21 (rats) under the old drafting step — retype-then-audit. Under
mechanical extraction at S61 R4, 3 faults were caught during drafting and 0
reached the shipped page. The control moved from the audit to the point of
entry, and the fault count at the point that matters — what ships — moved
from double digits to zero.

## S61 R6 — LAW 165

LAW 165 — SEASONAL BUILD ORDER. In-season topics are built first, for
immediate traffic. Out-of-season topics are built EARLY, never deferred to
their season. A new route needs months to index and climb; a page shipped
at the start of its season has no time to rank within it. THE S61 R4
RULING PARKING CARPENTER BEES TO FEBRUARY AND MOSQUITOES TO SPRING IS
REVERSED. Seasonality determines build ORDER, never build DELAY.

REASONING. The estate averages position 23.3, so ranking lead time exceeds
the length of most pest seasons — a page held back until its season opens
would still be climbing out of the position-20s range when that season
closes, having earned nothing from it. Building out-of-season candidates
early, so they have months in the index before demand arrives, is the only
sequencing that lets a new route actually catch its own season rather than
permanently trailing it by one year.

## S61 R10 — LAWS 166 TO 169 (SESSION CLOSE RATIFICATION)

LAW 166 — EVERY MATCHER IS CODIFIED. No matcher is retyped from memory in
a round. Every matcher lives in `scripts/gates.mjs` with a `probePos` and a
`probeNeg` that RUN ON EVERY INVOCATION, so a broken matcher fails loudly
instead of returning a silent zero. A round that needs a new matcher
CODIFIES IT BEFORE USING IT — it does not use it once and write it down
afterwards.

EVIDENCE. At S61 R8 an inventory found 15 matchers in use and only 8
codified: 7 lived nowhere but in prose inside round reports and were
retyped every round. That is precisely the drift by which the S60 R9
`hasPart` matcher — typed as `"@type":"ListItem"` against a hub whose
entries are `"@type":"WebPage"` — returned a false zero, was reported as a
clean parity pass, and survived undetected into S61 R8. All 15 were
codified at S61 R9. The wrong `ListItem` form is deliberately RETAINED in
the self-test as assertion B and asserted DEAD on a known positive on every
run, so it cannot be reintroduced by anyone retyping it out of the S60 R9
report.

LAW 167 — A CHECK THAT CANNOT FAIL IS NOT A GATE. A check that cannot fail
by construction is declared `kind: 'inventory'` and prints `INV(n)`. IT
NEVER PRINTS PASS. A structurally-passing check reported as PASS is a false
assurance, and a reader of the report cannot tell it apart from a gate that
was tested and held.

EVIDENCE. M13, the S59-B non-Latin codepoint scan, and M14, the ASIN
declaration extractor, were reclassified from gates to inventories at
S61 R9. The estate legitimately carries 23 distinct non-ASCII codepoints
and 144 declared ASINs; neither figure is a defect, and neither check has
any failing state. This law extends Law 75 — a gate that tests a derived
value against its source can only pass — from that one case to the general
rule, and names the remedy: declare the kind, do not dress it as a gate.

LAW 168 — G7 EXCLUSIONS. The cross-cluster link gate excludes THREE benign
classes, and only these three:
  (a) THE HUB LINKING TO ITS CHILDREN. Required by S54-H, which gates on
      route/hub-link/hasPart set-equality. A gate that fails the hub for
      satisfying another gate is two sources of truth in contradiction
      (Law 41).
  (b) A PAGE LINKING TO ITSELF. A normal in-page anchor.
  (c) INTRA-CLUSTER SIBLING LINKS. Legitimate topic-cluster structure. An
      intra-cluster link is not a CROSS-cluster link, which is the only
      thing the gate is named for.

(a) and (b) were ruled by the PM at S61 R9. (c) WAS APPLIED BY CC AT S61 R9
BEYOND THAT RULING, FLAGGED IN THE ROUND REPORT RATHER THAN FOLDED IN
SILENTLY, AND IS RATIFIED HERE. Implementing (a) and (b) requires giving the
matcher cluster membership, and once it has that, (c) follows from the same
fact; without (c) the gate would still have failed about eleven routes for
links its own name says are fine. Estate effect across the three
exclusions: 13 routes failing to 2.

STILL OPEN, NOT CLOSED BY THIS LAW: the two residual failures are
`/us/flies` and `/us/fruit-flies` linking to `/us/cluster-flies`.
`cluster-flies` sits in two natural groupings — the overwintering invaders,
and the fly family — and is currently held in `overwintering` only because
that is where the pre-R9 matcher put it. WHICH GROUPING OWNS
`cluster-flies` HAS NEVER BEEN RULED. Until it is, G7's zero is unavailable
on those two routes and must not be claimed.

LAW 169 — US ESTATE VOICE IS US ENGLISH. Every `/us` route uses US spelling
in OUR OWN VOICE.

EXEMPT WITHOUT EXCEPTION:
  - QUOTATIONS. Reproduced exactly as sourced under Law 164. A UK source's
    "licence" STAYS. This exemption is absolute and is never traded against
    consistency.
  - Proper nouns, organization names, publication titles, statute names.
  - Fetched product titles (S50-H) — `cardName` and `titleAsFetched`.
  - Any URL, slug, filename, id or code identifier.

THE UK ESTATE IS UNAFFECTED. This law binds `/us` routes only.

EVIDENCE. S61 R8 measured 67 UK spellings in the site's own voice across 19
of 52 US routes — licence x25, colour x15, behaviour x13, centre x4,
neighbour x3, mould x3, emphasise, defence, organisation, organising. The
worst case, `/us/choosing-a-pest-control-service`, served "Check the Licence
First" as an H2 while its own `<title>` already read "Check the License".
Swept at S61 R9: 71 source occurrences, 69 converted, rendered G4 67 to 0.

HOW THE EXEMPTIONS WERE PROVEN RATHER THAN ASSERTED, and the standard any
future sweep must meet: 876 genuine quotation spans were compared before and
after and ZERO were altered; 39 US spellings inside quotations were left
exactly as sourced. The decisive case is the `/us/formosan-termites` FAQ,
where a quoted "This behavior and defensive secretion differentiate
Coptotermes soldiers" and our own "gives a behavioural one that needs no
ruler" sit in THE SAME STRING and only the second changed. The two
`check-the-licence` identifiers — a TOC entry and an `<h2 id>` — were held
out of the substitution and restored byte-identically, so no fragment link
broke; only the visible heading text changed. Token counts were identical
before and after in all 19 files, and every one of the 69 differing tokens
matched one of 18 declared UK-to-US pairs, with zero unexpected changes.

A QUOTATION-SPAN MATCHER USED FOR THIS PURPOSE MUST USE GENUINE QUOTATION
DELIMITERS ONLY — the HTML entities and the curly quotes. In a `.tsx` file
the straight ASCII double quote is a JS STRING DELIMITER, not a quotation
mark, and a matcher that treats it as one produces false positives. That
happened at S61 R9 and is recorded under Law 166 as an uncodified matcher
awaiting codification.

## S62 R1 — LAW 159 EXTENDED: THE `pushed:` FIELD

LAW 159 STANDS AS WRITTEN. This section records an addition to the file it
governs, `~/pestpro-gsc-queue.md`, not a change to the law.

EVERY QUEUE ENTRY CARRIES A `pushed:` LINE. It holds the ISO date the URL was
actually submitted in Search Console, or nothing.

AN EMPTY `pushed:` MEANS "NOT KNOWN TO HAVE BEEN PUSHED", AND THE URL IS
THEREFORE OUTSTANDING. It does NOT mean "definitely not pushed" — it means the
file holds no record. The distinction matters because the remedy differs: an
unknown is resolved by asking or by checking Search Console, a known-not-pushed
is resolved by pushing.

CC MAINTAINS THE FIELD BUT NEVER FILLS IN A DATE ON INFERENCE. The PM enters a
date after actually submitting. A round that ships or changes a route adds its
entry with an EMPTY `pushed:` line.

WHY THE FIELD EXISTS. The queue recorded changes and not submissions, so it
could not say what had already been pushed. With 54 distinct URLs outstanding
across a multi-day submission schedule, that is a list a person loses their
place in. Recording the change without recording the action leaves the file
authoritative about half the question.

WHAT WAS DELIBERATELY NOT BACKFILLED. All 84 entries carried into S62 R1 were
left empty, without exception. S62 R1 was expressly authorised to mark
`/us/squirrels-in-attic`, `/us/fruit-flies`, `/us/carpenter-bees` and
`/us/mosquitoes` as pushed on 2026-09-01 IF the queue or a round report
evidenced it. Both were searched and NEITHER carries any submission record for
any URL. All four were therefore left empty and remain outstanding. A guessed
date is worse than no date: it silently retires a URL from the outstanding list
on no evidence, which is the exact failure Law 159 was written to end.

FORMAT CHANGE PROOF. The extension is purely additive and was proven so, not
asserted: removing every inserted `pushed:` line from the new file returns the
previous file BYTE-FOR-BYTE. 84 entries before, 84 after, 84 fields added; the
round's own three new entries brought the file to 87.

## S62 R2 — LAW 170: A MATCHER IS DEFINED BY ITS CLASSES, NOT ITS EXAMPLES

LAW 170 — A MATCHER WHOSE NAME STATES A CONCEPT MUST BE BUILT FROM THAT
CONCEPT'S CLASSES, NEVER FROM AN ENUMERATED LIST OF EXAMPLES. A list is a
record of what somebody happened to think of. The next instance nobody
thought of passes, and the gate reports a clean zero it did not earn.

EVIDENCE. G4 was named "no UK spellings on a US route" and implemented as
eighteen literal words. At S62 R1 CC wrote "harbourage" twice on a new
route and G4 passed, because "harbour" was not on the list. Rebuilt at
S62 R2 from nine morphological classes — -our/-or, -ise/-isation,
-yse/-yze, -re/-er, -ce/-se, -ogue/-og, doubled consonant, -ae-/-oe-
digraph, and miscellaneous British-only forms — it immediately found 91
rendered occurrences on 36 of 53 routes that the list form could not see.
The same failure had already been recorded once as the M8b false zero
(Law 166): a matcher whose name is broader than its body.

INFLECTIONS ARE DERIVED, NOT ENUMERATED. A class that catches `harbour`
must catch harbours, harboured, harbouring and harbourage.

EVERY CLASS CARRIES ITS OWN probePos AND probeNeg, AND BOTH RUN ON EVERY
INVOCATION. An aggregate probe hides a dead class: G4's single old
positive probe passed on every run while the gate could not see
"harbour". The classes live in `scripts/ukspelling.mjs`.

A STATED FALSE NEGATIVE BEATS AN UNSTATED FALSE POSITIVE. Where a class
cannot be made precise, it is narrowed and the narrowing is written down.
`analyses` is both the US plural of "analysis" and the British verb, so
the -yse class excludes the -es suffix and says so. `burnt` and `spelt`
have ordinary US uses and are omitted. `practice` is both noun and verb
in US English and is NOT matched; only `practise` is. `-ogue` forms are
matched but flagged REPORTING ONLY, because catalogue and dialogue are
acceptable US variants. A false positive licenses an edit to correct
prose; a false negative leaves a word for the next reader to find.

COROLLARY, PROVEN THE SAME ROUND. The mirror matcher written to measure
American spellings on the UK estate returned 141 hits on its first run.
ALL 141 WERE FALSE POSITIVES: `labor`+\w* caught "laboratory", `rigor`
caught "rigorous", `liter` caught "literally", and `luster` caught
"cluster" 115 times — every one spelled identically in both dialects.
Corrected with explicit suffixes and with those four wired in as negative
probes, the true count is ZERO. Reporting the 141 would have manufactured
a defect class out of a matcher fault (Law 94). A CLASS-BASED MATCHER IS
NOT AUTOMATICALLY A CORRECT ONE — IT IS SWEPT FOR FALSE POSITIVES AGAINST
THE REAL ESTATE BEFORE ANY COUNT IT PRODUCES IS BELIEVED.

## S62 R2 — LAW 171: THE UK ESTATE IS BRITISH, AND THAT IS NOT A DEFECT

LAW 171 — LAW 169 BINDS `/us` ROUTES ONLY. The UK estate is written in
British English by design. A UK spelling on a UK page is correct and is
never a finding.

MEASURED S62 R2: the non-US estate carries 2,653 British spellings across
177 of 179 pages — that is the estate working — and ZERO American
spellings in its own voice, measured with the corrected mirror matcher
described under Law 170.

ANY FUTURE SWEEP STATES WHICH ESTATE IT IS SWEEPING AND IN WHICH
DIRECTION BEFORE IT REPORTS A NUMBER. A count of British spellings that
does not name its estate is meaningless: the same matcher returns 0 on
`/us` and 2,653 on `/uk`, and both are correct.

## S62 R2 — RULING RECORDED, NOT YET ACTED ON

EARWIGS AND FUNGUS GNATS ARE NOT BLOCKED TOPICS; THEY WERE MIS-SOURCED.
UMN (0 of 4 attempts across 2026-09-01 and 2026-09-03) and Oklahoma State
(0 of 2) are not the only extension services in the United States. Law
137's "never construct a URL by analogy" forbids inventing an address; it
does not forbid finding a different publisher, and S59-A expressly permits
an alternate official publisher provided the citation names the host
actually read. BOTH TOPICS RETURN TO THE TIER 5 CANDIDATE POOL. No third
retry is to be made against those two publishers.

## S62 R3 — LAW 170 RATIFIED

LAW 170 — A MATCHER'S NAME IS NOT ITS IMPLEMENTATION. A gate claiming to
detect a CONCEPT must be built from the rule that defines the concept,
never from an enumerated list of instances. A list-based gate passes on
incomplete evidence and reports a false zero for everything outside the
list.

EVERY CLASS WITHIN SUCH A GATE CARRIES ITS OWN probePos AND probeNeg,
RUNNING ON EVERY INVOCATION. An aggregate probe is insufficient, because
a dead class hides behind a live one: G4's single old positive probe
passed on every run while the gate could not see "harbour".

EVIDENCE. G4 was named "no UK spellings on a US route" and implemented as
eighteen literal words. It reported clean while "harbourage" sat twice in
our own prose on /us/camel-crickets (S62 R1). Rebuilt at S62 R2 into
morphological classes in scripts/ukspelling.mjs, it immediately found 91
rendered occurrences the list form could not see, on 36 of 53 routes;
105 source occurrences across 42 files were classified and converted.
This is the same failure class as the M8b false zero that survived from
S60 R9 into S61 R8 (Law 166).

FIGURE CORRECTED ON RATIFICATION, PER LAW 2. The ruling that ordered this
ratification described "10 morphological classes". THE MEASURED NUMBER IS
NINE — our, ise, yse, re, ce, ogue, double, ae, misc — carrying 9 positive
and 22 negative probes, counted from UK_CLASSES on the day of
ratification. The count of negative probes (22), of conversions (105) and
of routes (36) in that ruling are all confirmed correct. A law is not
ratified with a figure its own evidence contradicts, and a future round
that finds "ten" in an older record must treat NINE as controlling until
a class is actually added.

COROLLARY (S62 R2, and it is part of this law): A CLASS-BASED MATCHER IS
NOT AUTOMATICALLY A CORRECT ONE. The mirror matcher built the same round
to measure American spellings on the UK estate returned 141 hits on its
first run and all 141 were false positives — `luster` inside "cluster"
115 times, `labor` inside "laboratory", `rigor` inside "rigorous",
`liter` inside "literally". Its own calibration probes had passed. ONLY
THE SWEEP AGAINST THE REAL ESTATE EXPOSED IT. Sweep for false positives
against real content before believing any count a new matcher produces.

## S62 R4 — LAW 171 IS OCCUPIED; THIS IS LAW 172

LAW 172 — CLUSTER MEMBERSHIP IS A SET, AND THE FLY CLUSTER IS RULED.
PM RULING, S62 R4: `/us/flies`, `/us/cluster-flies` and `/us/fruit-flies` ARE
ONE TOPIC CLUSTER. `/us/flies` is the general head; the other two are the
specific children a reader reaches having identified the wrong fly.
Intra-cluster sibling links between them are legitimate under Law 168(c) and
G7 must not flag them. THIS CLOSES THE ITEM LAW 168 LEFT EXPRESSLY OPEN.

THE MECHANISM IS SET MEMBERSHIP, NOT AN EXCEPTION. `clusterOf()` returned one
cluster per slug; it is now `clustersOf()` returning all of them, and two pages
are siblings when their cluster sets INTERSECT. `cluster-flies` is listed in
BOTH `overwintering` and `flies`, which is what it has always been. Any future
bridge page is defined the same way — by being listed twice. There is no
two-route exception anywhere in the matcher.

WHY MOVING THE SLUG WOULD HAVE BEEN WRONG, MEASURED BEFORE EDITING (Law 44).
`/us/cluster-flies` links to ALL FIVE overwintering siblings AND to both fly
pages, and all five overwintering pages link back to it. Moving it into the fly
cluster converts 2 failing routes into 6 — trading two fly leaks for ten
overwintering ones. Only set membership closes it. G7: 6 hits / 2 failing -> 0 / 0.

BOTH LIMBS FIRED (S49-L). The positive limb was STRENGTHENED rather than left
as it was: `/us/flies -> /us/stink-bugs-in-house` must STILL be caught, because
those two share no membership. Had the ruling been implemented as a blanket
exception, that probe would have gone dead and said so on every run. Nine
negative probes, all silent, including both fly directions and the bridge
page's OTHER membership (`cluster-flies -> boxelder-bugs`).

## S62 R4 — THE WOOD-DAMAGE GROUPING IS REFERRED, NOT DECLARED

`/us/termites`, `/us/formosan-termites`, `/us/carpenter-bees` and the new
`/us/powderpost-beetles` read as one wood-damage cluster for a reader. THEY ARE
DELIBERATELY NOT DECLARED IN `scripts/gates.mjs`, AND A FUTURE ROUND MUST NOT
DECLARE THEM WITHOUT FIRST RESOLVING THIS.

G7 treats a link FROM AN UNCLUSTERED PAGE INTO A CLUSTERED ONE as a leak. Two
such links exist today:
    /us/choosing-a-pest-control-service -> /us/termites
    /us/social-wasps                    -> /us/carpenter-bees
Declaring the group would newly fail both. This was PROVEN against the matcher
before the decision, not predicted from reading it.

THE UNDERLYING GAP: a general utility page (choosing-a-pest-control-service)
legitimately links into topic pages it is not a sibling of. The S62 R4 fly
ruling did not reach that case and CC did not invent a rule for it. THE
QUESTION FOR THE PM IS WHETHER AN UNCLUSTERED SOURCE PAGE SHOULD BE EXEMPT
FROM G7 ENTIRELY, or whether utility pages need a cluster of their own.

## S62 R4 — LAW 173: A COUNT IN A REPORT IS NOT A COUNT IN THE ARTEFACTS

LAW 173 — WHEN A ROUND REPORT'S FIGURE AND ITS CARRIED LIST DISAGREE,
RECONCILE AGAINST THE ROUND'S OWN ARTEFACTS, NEVER AGAINST EITHER NUMBER.
S62 R3 reported "nine attempted, eight blocked" and carried a SEVEN-item
once-blocked list. The reconciliation was not a matter of finding a missing
eighth ASIN: `~/pp-s62r3/products/` holds sixteen fetch bodies in two batches
separated by mtime — eight Law 163 retries at 08:16 and EIGHT new candidates at
08:17, of which one succeeded and SEVEN returned the 3,781-byte interstitial.
THE SEVEN-ITEM LIST WAS COMPLETE AND CORRECT ALL ALONG; THE PROSE FIGURE WAS
THE DEFECT. Had the round trusted the report's "eight" it would have gone
hunting for an ASIN that never existed.

COROLLARY, AND IT IS THE REASON THIS IS A LAW. The wrong figure had ALREADY
REACHED A LIVE PAGE, on two surfaces — the rendered products box on
/us/groundhogs and its JSX comment twin. A report figure that is never
reconciled becomes page copy.

SECOND COROLLARY (Law 148). Correcting nine to seven was not enough. The Law
163 retry read six of those seven listings LATER THE SAME DAY, so "every one
returned an anti-bot interstitial" was accurate about an attempt and misleading
about the estate. A standing status on a page becomes a DATED OBSERVATION
RECORD the moment a second observation exists.

## S62 R5 — LAW 172 AMENDED: G7 IS DIRECTIONAL

PM RULING, S62 R5. CLUSTER MEMBERSHIP GOVERNS SIBLING LINKS, NOT INBOUND
LINKS. This AMENDS Law 172 and governs over it where they differ. Law 172's
set-membership mechanism stands unchanged; what changes is the direction in
which membership is allowed to matter.

  A link WITHIN a cluster                       LEGITIMATE (Law 168c, Law 172)
  A link INTO a cluster from an UNCLUSTERED page LEGITIMATE — ordinary internal
                                                 linking; utility pages exist to
                                                 link into topic pages
  A link INTO a cluster from a DIFFERENT cluster LEGITIMATE

THE EVIDENCE THIS AMENDMENT RESTS ON. At S62 R4 the wood-damage grouping —
`/us/termites`, `/us/formosan-termites`, `/us/carpenter-bees`,
`/us/powderpost-beetles` — was measured against the matcher and DELIBERATELY NOT
DECLARED, because declaring it under the old rule would have newly failed two
plainly legitimate links:

    /us/choosing-a-pest-control-service -> /us/termites
    /us/social-wasps                    -> /us/carpenter-bees

A gate that punishes a service-selection page for linking to the pest it
discusses is the gate being wrong, not the pages. THE WOOD CLUSTER IS DECLARED
AT S62 R5, under the amended rule, using the same set mechanism as the fly
cluster and with no special case of any kind. Both links now pass; G7 reads 0.

### LAW 174 — G7 IS AN INVENTORY, NOT A GATE, AND MUST NOT PRINT PASS

Enumerating every case the amended ruling leaves:

    A unclustered -> B unclustered      never in scope
    A unclustered -> B clustered        LEGITIMATE (this amendment)
    A clustered   -> B same cluster     LEGITIMATE (Law 168c)
    A clustered   -> B other cluster    LEGITIMATE (this amendment)
    A clustered   -> B unclustered      ordinary outbound linking

EVERY CASE IS LEGITIMATE. THE CROSS-CLUSTER-LINK DEFECT CLASS IS NOW EMPTY BY
CONSTRUCTION. Under Law 167 a check that cannot fail is declared `inventory` and
never prints PASS, because a reader of the report cannot otherwise tell it apart
from a gate that was tested and held. G7 was reclassified accordingly at S62 R5
and renamed, because its old name described a defect that no longer exists
(Law 170: a matcher's name must describe what it does).

THE PROBES STILL RUN ON EVERY INVOCATION and still prove the matcher can FIND
and can DISTINGUISH — including, as named negative probes, the two links above,
so that a future round cannot silently reintroduce the old rule.

### S62 R5 — THE ORPHAN DEFINITION IS REFERRED, NOT RULED

The ruling said what G7 exists to catch is "orphans: a page nothing links to, or
a page linking nowhere", and asked for a positive probe on a real orphan.
CC COULD NOT SUPPLY ONE HONESTLY, AND HALTED RATHER THAN MANUFACTURE A ZERO.
Measured at S62 R5 over 54 content routes, `runLinkGraph()` in scripts/gates.mjs:

    "nothing links to it", COUNTING the hub          0 routes
    "nothing links to it", EXCLUDING the hub        10 routes
    "links nowhere" (no outbound /us route link)    11 routes
    "no /us href of any kind on the page"            0 routes

THE TWO READINGS THAT RETURN ZERO CANNOT FAIL: S54-H already gates every route
into the hub, and the header nav always emits at least one /us href. Both are
theatre under Law 75 and Law 167. THE TWO READINGS THAT CAN FAIL, FAIL ON TEN
AND ELEVEN LIVE ROUTES TODAY — about a fifth of the estate — on a definition
nobody has ruled.

So orphan detection is CODIFIED (Law 166) and DECLARED INVENTORY. It measures,
names every route in both failing readings, and makes no judgement.
THE QUESTION FOR THE PM: does an inbound link from the hub alone satisfy "a page
nothing links to"? If yes, that reading is theatre and the outbound reading is
the real gate. If no, ten routes need inbound links written before the gate can
be armed. Either answer is actionable; the gate must not be armed before one is
given.

THE TEN, BY NAME (no non-hub inbound link): arizona-bark-scorpions, bed-bugs,
black-widow-spiders, brown-recluse-spiders, chipmunks, coyotes, house-mice,
mole-and-vole-control, rats, skunks.

THE ELEVEN, BY NAME (no outbound /us route link): arizona-bark-scorpions,
bed-bugs, black-widow-spiders, brown-recluse-spiders, california-trapping-rules,
chipmunks, house-mice, mole-and-vole-control, rats, snakes, ticks.

## S62 R6 — LAW 164 AMENDED: THE CONTROL MOVES TO THE PAGE

PM RULING, S62 R6. THE PRIMARY LAW 164 CONTROL IS THE SHIPPED-PAGE AUDIT.
Every quotation span is extracted FROM THE DRAFTED PAGE and verified against
its fetched source. Any pre-draft list is ADVISORY ONLY. A quotation present on
the page and absent from every verified source is a FAILURE, never a silent
pass.

EVIDENCE. Five quotations reached live pages without ever entering the drafting
list — two on /us/groundhogs (found at S62 R4), one on /us/earwigs and two on
/us/fungus-gnats (both found at S62 R5, in the round that had just been told to
reconcile the first two). All five happened to pass when audited afterwards.
THE CONTROL WAS VERIFYING A HAND-MAINTAINED LIST THAT THE DRAFT THEN DIVERGED
FROM, which is a control on the wrong artefact, not a drafting slip.

M16 IS THE CODIFIED IMPLEMENTATION (Law 166), in scripts/gates.mjs, with
`node scripts/gates.mjs --quotations` as the estate runner. Its POSITIVE probe
is a page carrying a quotation that is in no source — the exact case that
escaped five times and that M15 cannot see, because M15 only ever answers a
question about a quotation it has already been handed. M15 IS RETAINED: it
still catches an altered quotation that IS on the list, which is a different
fault.

TWO EXTRACTOR FACTS THAT ARE PART OF THE CONTROL, NOT DETAILS:
  - Each &ldquo; pairs with the LAST &rdquo; BEFORE THE NEXT &ldquo;. A source's
    own inches mark inside a quotation ("the top 12&rdquo; left loose" on
    /us/groundhogs) makes a non-greedy match split the span in the wrong place.
  - NESTED JSX TAGS ARE STRIPPED. Before that step the calibration run produced
    false positives on four routes, all of them quotations carrying an <em>
    around a binomial. Law 151: a false result from a stripper is a stripper bug
    until a known positive re-proves it.

A SCARE-QUOTED PHRASE IN OUR OWN VOICE IS NOT A QUOTATION. "top picks" on
/us/joro-spider-webs describes a thing the site deliberately did NOT build.
These are held out BY THE CALLER, named one by one, never by loosening the
matcher — and the hold-out is itself probed on every run.

## S62 R6 — LAW 175: A QUOTATION IS ONLY AUDITABLE WHILE ITS SOURCE BODY SURVIVES

LAW 175 — THE FETCHED SOURCE BODY IS PART OF THE EVIDENCE, NOT SCRATCH. Law 164
verification is reproducible only for as long as the fetched body is on disk.
The corpora live in per-round working directories that were never treated as an
archive, and most of the estate's have not survived.

MEASURED AT S62 R6, the first estate-wide run of M16 over all 56 route files:

    quotation spans on the estate            1,764
    spans matching a reachable source          586
    spans matching nothing                   1,178

    ADJUDICATED CLEAN, every span matched       13 routes
    NOT ADJUDICABLE, no corpus at all            5 routes
    PARTIAL, some corpora present               30 routes
    carrying no quotation at all                 8 routes

THE 1,178 ARE NOT 1,178 DEFECTS AND MUST NEVER BE REPORTED AS SUCH. Every route
whose sources are still on disk verifies at 100% — including all four built this
session, and california-trapping-rules at 45/45 and palmetto-bugs at 71/89.
The unmatched spans track CORPUS AVAILABILITY, not correctness. Reporting them
as findings would manufacture a defect class out of a retention gap, which is
exactly Law 94.

CONSEQUENCE, AND IT IS A DUTY ON EVERY FUTURE ROUND: a round that fetches source
bodies KEEPS THEM, and names the directory in its report so a later round can
find them. A round that cannot verify a page's quotations says the page is NOT
ADJUDICABLE rather than reporting either a pass or a failure it has not earned.

WHAT IS STILL OPEN: whether to re-fetch the missing corpora for the 35 partial
and unadjudicable routes. That is a large fetch against many publishers, several
of which are blocked, and it was NOT undertaken this round. Referred.

## S62 R6 — G7 IS ARMED, AND ITS SUBJECT CHANGED

PM RULING (a), S62 R6. A HUB LINK ALONE DOES NOT SATISFY "NOTHING LINKS TO IT".
Two readings are RETIRED because neither can fail: "nothing links to it"
COUNTING the hub, since S54-H already gates every route into the hub, and "no
/us href of any kind", since the header nav always emits one. Law 75 and
Law 167: a check that can only pass is theatre.

THE TWO REAL READINGS, and they are now G7:
    inbound links EXCLUDING the hub
    outbound links to another content route

G7'S SUBJECT HAS THEREFORE CHANGED, AND THIS SUPERSEDES LAW 174 ON ITS KIND.
Law 174 declared G7 an inventory because the CROSS-CLUSTER LINK class was empty
by construction after the S62 R5 directionality ruling. That remains true and
the cross-cluster count survives as an informational line in runLinkGraph()
that is never reported as a gate. What G7 now TESTS is the orphan question the
S62 R5 ruling said it existed for, which CAN fail — so it is a GATE again.
Law 172's directionality and set-membership mechanism are untouched.

IT WAS NOT ARMED WHILE IT FAILED. At S62 R5 these readings returned 8 and 8 and
the gate was left as an inventory rather than shipped red. It was armed only
after S62 R6 Task 2 took both to zero.

PROBED ON A FIXTURE, NOT ON A BROKEN ROUTE. The positive limb is three
CONSTRUCTED graph rows — no inbound, no outbound, and isolated — so the gate is
proved able to fail without leaving a real route broken to prove it. The
negative limb is a properly linked row AND THE HUB, which is exempt by name
because it legitimately has no non-hub inbound link.

## S62 R6 — LAW 176: A LINK MATCHER MUST TAKE EVERY URL FORM THE ESTATE USES

LAW 176 — THE S62 R5 ORPHAN FIGURES WERE WRONG AND THIS IS HOW. runLinkGraph()
counted only `href="/us/..."`. The estate also carries EIGHT internal links
written ABSOLUTE, as `href="https://pestproindex.com/us/..."` — two on
/us/black-widow-spiders, one on /us/chipmunks, four on /us/ground-squirrels and
one on /us/mole-and-vole-control.

    REPORTED AT S62 R5    10 routes with no inbound, 11 with no outbound
    ACTUALLY               8 routes with no inbound,  8 with no outbound

FIVE ROUTE CLASSIFICATIONS WERE WRONG, EVERY ONE A FALSE POSITIVE.
brown-recluse-spiders and chipmunks were never inbound-orphans;
black-widow-spiders, chipmunks and mole-and-vole-control were never
outbound-orphans. HAD THE FIX BEEN WRITTEN FROM THE R5 LIST, five links would
have been manufactured into pages that already had them.

IT WAS FOUND BY OPENING /us/black-widow-spiders TO SITE A LINK AND FINDING THE
LINK ALREADY THERE — that is, by the instruction not to manufacture a link to
satisfy a gate. A gate's own output is not evidence that the defect is real;
the page is.

THIS IS LAW 82 IN A NEW PLACE. Law 82 said a component-anchored extractor is
blind to a surface that does not use the component. THIS EXTENDS IT: A MATCHER
ANCHORED ON ONE URL FORM IS BLIND TO THE SAME FACT EXPRESSED ANOTHER WAY.
Before believing any link count, state which URL forms the matcher can see.
The matcher now uses a single named INTERNAL_LINK_RE covering both forms.

STILL OPEN, NOT FIXED THIS ROUND: whether those eight absolute-form internal
links should be rewritten site-relative for consistency. They work, they are
now visible to the matcher, and rewriting them is a separate content decision.

## S63 R2 — LAWS 177 AND 178

LAW 177 — AN HTTP 200 IS NOT A FETCH. A response carrying a bot-block or
interstitial body is TERMINAL UNDER LAW 137 REGARDLESS OF STATUS CODE. It is
recorded as BLOCKED, never as fetched-and-unusable, and IT CONSUMES THE ROUND'S
SINGLE ATTEMPT exactly as a 403 does.

EVIDENCE. At S63 R1 `https://www.canr.msu.edu/resources/house-centipede`
returned HTTP 200 with a 959-byte body reading "Request unsuccessful. Incapsula
incident ID". The status line said success and the body said otherwise. Its
permitted retry at S63 R2 returned the same thing at 961 bytes, so the URL is
now twice-blocked. Had the 200 been taken at face value the round would have
recorded a source it never read.

THE CHECK IS ON THE BODY, NOT THE STATUS. A block is identified by its content
and its size, and the round's fetch log records the outcome that was MEASURED,
not the code that was returned. Law 78 said check the live response rather than
the documentation; THIS EXTENDS IT ONE STEP FURTHER — check the live BODY rather
than the live STATUS LINE.

A BLOCK DETECTOR IS ITSELF A MATCHER AND IS SWEPT FOR FALSE POSITIVES BEFORE ITS
OUTPUT IS BELIEVED. At S63 R2 an ad-hoc detector keyed partly on the word
"captcha" flagged the University of Arkansas drain-fly fact sheet — a complete,
readable 53,939-byte page whose only offence was carrying a contact form. The
reliable signature is the block vendor's own string TOGETHER WITH an
implausibly small body. Law 151 applies to this matcher like any other.

A TWICE-BLOCKED URL IS NOT A TWICE-BLOCKED PUBLISHER. At S63 R2
`content.ces.ncsu.edu/controlling-millipedes-in-and-around-homes` reached its
second 403 while OTHER URLs on the same host had been fetched successfully in
S62 R4 and S62 R5. The block is recorded against the URL. A publisher is
twice-blocked only when every attempt against that publisher has failed, which
is the basis on which UMN and Oklahoma State are barred.

LAW 178 — A COUNT A GATE REPORTS MUST BE DERIVED AT RUNTIME FROM THE THING IT
COUNTS. A hardcoded literal, a hand-maintained header figure, or any number a
self-test prints without measuring is NOT A RESULT. Where such a figure is
found, the gate is REPORTING A FALSE ZERO BY CONSTRUCTION and is treated as a
DEFECT, not as a pass.

EVIDENCE. `scripts/gates.mjs` prints "N matchers codified and usable, 0
uncodified" on every successful self-test. The matcher count is derived from
`MATCHERS.length` and is real; THE ZERO IS A STRING LITERAL and measures
nothing. It will print zero however many matchers are being retyped in prose
that round — which is precisely the drift Law 166 exists to stop, announcing
its own absence as a pass. A header comment in the same file still reads
"Fifteen matchers, zero uncodified" against sixteen matchers, which is the same
fault in a second place: a figure maintained by hand rather than measured.

THIS IS LAW 75 AND LAW 167 IN THE REPORTING LAYER. Those laws govern a CHECK
that cannot fail; this one governs a NUMBER that cannot be wrong because nothing
computed it. Both are theatre and both are read by a person who cannot tell
them from a measurement.

DEFERRED, NOT FIXED. Both figures were found at S63 R1, reported, and left
alone under an explicit no-matcher-edits instruction at S63 R2. They are carried
to a dedicated machinery round together with the four uncodified ad-hoc matchers
named in the S63 R1 report and the false positives recorded there and here.
Recording the defect is not closing it.

## S63 R3 — LAW 179: ONE TASK, ONE PUSH, ONE CONFIRMATION

LAW 179 — A TASK'S PUSH IS CONFIRMED AGAINST ITS OWN COMMIT HASH ON RAILWAY
BEFORE THE NEXT TASK PUSHES. Deployment confirmation is PER TASK and is NEVER
inferred from a later green build.

A LATER PUSH THAT SUPERSEDES A BUILD IN FLIGHT DESTROYS THE EARLIER TASK'S
CONFIRMATION, EVEN WHERE THE CONTENT SHIPS CORRECTLY. Railway marks the
superseded deployment REMOVED. The commit is then an ancestor of something that
did go green, so the content is live and verifiable — but no deployment ever
succeeded on that hash, and "its content is in a later successful build" is a
different and weaker claim than "it deployed".

EVIDENCE. At S63 R2 commit `2283200`, the route /us/sowbugs-pillbugs, was pushed
and then superseded by the Task 3 push while still building. Its own poll
recorded the whole life: BUILDING x5, DEPLOYING x3, then REMOVED for the
remaining thirty checks. The page is live and passes every matcher on the live
URL, and the round still could not report SUCCESS on that hash, because there
was none. The failure was ordering, not content.

THE PRACTICE, DEMONSTRATED THE SAME SESSION. S63 R3 pushed four times and waited
for SUCCESS on each hash before the next push: `6a618a6` (9 polls), `6198cfb`
(10 polls), `df70775` (15 polls), and this commit. Waiting cost about twelve
minutes across the round and bought four confirmations instead of one.

THIS BINDS THE REPORT AS WELL AS THE PUSH. A round reports, per task, the hash
and the status that hash actually reached. Where a task's hash reached REMOVED,
the round says REMOVED and says why, and does not launder it into the round's
final green build. Law 5 already forbids confirming a hash supplied to you;
this forbids confirming a deployment that belongs to a different commit.

## S63 R6 — LAW 180: THE PRECEDENCE RULE

LAW 180 — A CARD NEVER PRECEDES CONTENT A READER NEEDS IN ORDER TO IDENTIFY THE
PEST, TO AVOID HARM, TO AVOID BEING MISLED ABOUT WHAT A PRODUCT CAN DO, OR TO
AVOID BREAKING THE LAW.

THE THRESHOLD YIELDS TO THIS RULE. Where obeying precedence pushes a first card
past the 28% placement threshold derived at S63 R5 from the UK /best/* maximum,
THE CARD GOES LATE. A page whose safety, legal or identification content runs
long is allowed a late card, and that is a correct outcome rather than a
regression. At S63 R6 the threshold yielded on all twelve routes moved.

THE DISCRIMINATOR, because the rule is otherwise too broad to apply. A section
is precedence-bearing FOR A GIVEN PAGE'S CARDS if, without it, a reader could be
HARMED BY USING THE CARDED PRODUCT, BUY THE WRONG PRODUCT FOR THEIR PEST, or
BREAK THE LAW BY USING IT. Escalation advice, and statements about a class the
page does NOT card, are NOT precedence-bearing for the cards it does card.
Worked examples, all measured at S63 R6:
  - "When to Call a Professional" is escalation. Excluded on six routes.
  - "Insecticides, and Why Nothing Is Named Here" qualifies a class the page
    does not card. Excluded on three routes.
  - A harm section describing what the PEST does to you, beside a PASSIVE
    product — caulk, a container, screening, a fence roller — is not a safety
    precondition for that product. Excluded on six routes.
  - "Handling a bee, or reaching directly into an active hole" IS a precondition
    for a hole repair kit. /us/carpenter-bees, included.

### LAW 180 IS ADJUDICATED BY READING. THE CODIFIED PART IS THE COMPARISON ONLY.

M28 IS A GATE and checks the comparison: given a route's first-card offset and
the offset of the earliest precedence-bearing content, the card must not come
first. It has a real failing state in both directions and a page carrying no
such content cannot violate it.

M29 IS AN INVENTORY UNDER LAW 167 and reports CANDIDATES, NEVER FINDINGS. A
class defined by MEANING cannot be settled by a string matcher (Law 115): the
distinguishing signal is what a sentence is ABOUT, and "House Flies Cannot Bite"
and "What Consumer Products Cannot Do" ARE THE SAME CONSTRUCTION IN DIFFERENT
CATEGORIES. Measured over all 415 h2 headings on the 40 carding routes before
the kind was chosen: identification 26, harm 18, efficacy 38, legal 6 — and the
efficacy class carried at least five demonstrable false positives, four of which
are now its negative probes. THE SCAN SURFACES WHAT TO READ; IT DOES NOT RULE.

EVIDENCE THAT READING IS NOT OPTIONAL: at S63 R6 the candidate scan flagged 26
routes and reading reduced that to 13 real violations. Half the flagged set was
noise.

### S63 R6 — /us/chipmunks IS REFERRED, NOT FIXED

LAW 180 AND LAW 120 CANNOT BOTH BE SATISFIED ON /us/chipmunks AS IT STANDS.
Precedence puts its cards after "The Legal Position", which is its LAST content
section; doing so placed the final card 753 served bytes from the FAQ's sourced
"minimal economic loss, under $200" and M12 fired. No section exists between the
two. The route was reverted BYTE-IDENTICAL to its pre-move state and M12
returned to 0/0. Two rules in contradiction is a defect, not a tie (Law 41), and
no sourced prose was edited to make a gate pass. THE RULING NEEDED IS WHICH RULE
GIVES WAY, or whether the FAQ's damage figure should move.

## S63 R7 — LAW 181: THE CHIPMUNKS RULING, AND COMPLIANCE OVER QUALITY

LAW 181 — WHERE AN AFFILIATE-PROGRAMME COMPLIANCE RULE AND AN INTERNAL QUALITY
RULE CANNOT BOTH BE SATISFIED, THE COMPLIANCE RULE WINS. Law 120 is a condition
of participation in a third party's programme and its breach is a breach on a
live page. Law 180 is a rule this project wrote for itself about where a card
sits on that page. A contradiction between the two is resolved in favour of the
one whose breach is not ours to forgive.

PM RULING, S63 R7. THIS CLOSES THE ITEM S63 R6 EXPRESSLY REFERRED. That section
above stands as the record of the measurement; it is not re-litigated here, and
under this file's append-only rule it is not edited.

/us/chipmunks IS A STANDING LAW 180 EXCEPTION. Its cards stay exactly where they
are — above "The Legal Position" — and the route remains byte-identical to its
pre-S63-R6 state. THE SOURCED FAQ FIGURE IS NOT MOVED, RE-WORDED OR RELOCATED.
Sourced content is never edited to make a gate pass; that principle is not
traded against a placement preference.

THE EXCEPTION IS NAMED, NOT INFERRED (Law 119, Law 61). It covers ONE route,
/us/chipmunks, and one contradiction, Law 180 against Law 120. It does not
license a late card, an early card, or a moved figure anywhere else, and no
other route acquires an exception by resembling this one. A second route hitting
the same contradiction is a fresh referral to the PM.

CONSEQUENCE FOR THE GATES. M28 is expected to report /us/chipmunks as a
precedence violation, and that report is CORRECT — the violation is real and is
knowingly held. It is a NAMED KNOWN EXCEPTION under Law 138: it is named, it is
attributed to this rule, and it is carried as a flag. A round that subtracts it
silently and prints a clean M28 is hiding it, which Law 138 forbids. M12 remains
at 0/0 on that route and that is the reason the exception exists.

## S64 R1 — RATIFYING THE S63 R8 MATCHER WORK (LAW 106)

Law 106: a ruling that is not written into this file will be silently reversed.
The M24 retirement and the M25 repair were shipped at S63 R8 and recorded ONLY in
a code comment and a commit message. S63 R8's own report said so and asked for
ratification. This section is that ratification. Both were re-measured this round
against the live registry rather than inherited (Law 102).

**M24 IS RETIRED AND MUST NOT BE RE-REGISTERED.** It wrapped `visibleBody()` in a
registry entry and returned the extracted text as a ONE-ELEMENT ARRAY. It declared
surface `visible-body`, which `runDocument()` never builds, so `views[m.surface]`
was `undefined` on all 62 of its invocations and it printed INV(0) on every route
from the day it was codified. Measured dead in BOTH directions: as shipped INV(0)
everywhere; as repaired INV(1) on all 61 built routes, with no live negative
possible because every route carries prose. A check that cannot fail (Law 167)
reporting a number nothing computed against (Law 178), whose INV(0) read as a clean
result for two rounds.

**AN EXTRACTOR IS NOT A MATCHER.** `visibleBody()` stays as the single shared
implementation under Law 166 and M25 calls it for both limbs of its percentage so
numerator and denominator cannot drift. It is NOT a duplicate of `SURFACES.prose`
— measured before the retirement, not assumed: the two disagree on all 61 routes,
by 28 to 2,456 characters.

**M25 IS REPAIRED.** It declared `card-offset`, another surface `runDocument()`
never builds. Corrected to `full`, because `CARD_HREF_RE` matches an href
attribute which does not survive into the prose surface; the visible-character
conversion happens inside `test()`. Its estate count moved 0 to 41 and it is
silent on 20 routes, both limbs proven on real routes rather than on fixtures
alone. ASSERTION E guards it: M25's fixture places a 5,000-byte script ahead of
the card so a raw-byte measure and a visible-character measure cannot agree, and E
derives both at runtime and fails loudly if they do.

## S64 R1 — THE COUNTING SURFACE DOUBLE-COUNTED EVERY ROUTE

**A NEXT ROUTE SHIPS EVERY STRING TWICE** — once in the rendered HTML a reader
sees, once restated inside a `<script>` block as the RSC flight payload. The card
and disclosure counts were taken over the RAW FILE and were therefore doubled.

**THE SUSPICION UNDER TEST WAS THAT `/us/products`, BEING DERIVED, WAS THE
DOUBLE-COUNTER. IT IS NOT, AND IT IS NOT SPECIAL.** Proven by probe, not inferred:
four unique strings were inserted, one each into an authored `/us` route's prose,
an authored `/us` route's card name, `/us/products`' own prose, and an authored UK
route's prose; the estate was built; each was counted on both surfaces; the probes
were removed and all three files restored byte-identically from backups (Law 43).

    probe                             raw   rendered
    /us/products own prose              2          1
    /us/ants own prose                  2          1
    /us/ants card name                  4          2   two routes, ants + products
    /(uk)/best/mole-traps prose         2          1

The whole estate doubles, and so does the UK side.

**THE DOUBLING IS NOT UNIFORM, SO NO CORRECTION FACTOR EXISTS AND THE NUMBER
COULD NOT HAVE BEEN HALVED BY HAND:**

    US card links     752 raw = 2 x 376                      uniform
    US disclosures    783 raw = 407 rendered + 376 restated   NOT uniform — the
                      layout footer's disclosure is never restated
    UK card links     711 raw = 2 x 333 + 45                  NOT uniform — the UK
                      /products page builds hrefs from a local helper, so the URL
                      literal never enters the payload

**THE MOVEMENT IS ACCOUNTED FOR, AND IT IS A LAW 62 TRAP WORTH REMEMBERING.**
S63 R1 to R6 reported "376 card links, 407 disclosures"; S63 R8 reported 752 and
783. Measured this round: the estate MINUS `/us/products` carries 188 rendered
cards / 376 raw and 219 rendered disclosures / 407 raw. **376 and 407 were the
DOUBLED pre-products figures, and they are ALSO the TRUE rendered post-products
figures.** The same two numerals carry two entirely different meanings in
consecutive rounds. Nothing in any report could have separated them, because no
count named its surface.

**THE FIX IS THE SURFACE, NOT THE NUMBER. NO FIGURE WAS ADJUSTED BY HAND.**
`SURFACES.rendered` is added (scripts stripped, nothing else, so href attributes
survive). `surfaceOf()` is now the single place a declared surface is applied, and
`selfTest()` uses it — probes previously went straight to `test()`, bypassing the
lookup `runDocument()` performs. M30, M31 and M32 codify the three counts, which
had existed as SIX inline expressions, three in `runEstate()` and three retyped in
`runMachinery()`, inside the very file written to stop matchers being retyped.

    FIGURE                    BEFORE (raw)   AFTER (rendered)
    US card links                      752    376  (143 distinct ASINs)
    US current disclosures             783    407
    UK card links                      711    378  (292 distinct, unchanged)
    G3 reported count                   38     15  now reported both ways
    M13 reported count               15286   7154  now reported both ways

**GATES WERE NOT NARROWED AND MUST NOT BE.** A gate asks whether a string is
SERVED, and a tag or a price inside the flight payload IS served. Only counts
moved. Law 19 set-diff: all 14 pre-existing matchers' verdicts identical before
and after, id for id.

### PROPOSED LAW 182 — NOT RATIFIED, AWAITING A PM RULING

Proposed, not declared, because this file's own rule is that a law is the PM's to
make. It binds nothing until ratified.

> **LAW 182 — A GATE READS THE SERVED BYTES; A COUNT READS THE RENDERED SURFACE.**
> A gate asks whether a string is served at all, and a string restated in the RSC
> flight payload is served — narrowing a gate to the rendered surface weakens it.
> A count asks how many times a reader meets the thing, and the flight payload
> answers that question more than once. THE TWO QUESTIONS TAKE TWO SURFACES, AND
> EVERY REPORTED FIGURE NAMES WHICH ONE PRODUCED IT. Where a matcher's own surface
> is the served bytes, the rendered count is derived alongside and printed beside
> it; the two are never reconciled into one number (Law 62).

## S64 R1 — G3 IS NEGATION-AWARE; THE MATCHER WAS INVERTED, THE PROSE WAS NOT

**STANDING PM RULING, CARRIED FROM S63 R8 AND IMPLEMENTED THIS ROUND.** On the G3
hits as they stood the prose was correct and the matcher was backwards: the
flagged sentences exist to WITHHOLD a claim — "this page cannot independently
verify the manufacturer's effectiveness claims", "an unverifiable
population-reduction percentage attributed to an unnamed 2025 survey". A gate that
flags a refusal to make a claim is inverted. **NO PROSE WAS EDITED.**

**BUILT FROM THE DEFINITION, NOT FROM THE HITS (Law 170).** What is banned is an
ASSERTION, in this site's own voice, that something is verified, vetted or
trusted. Three things are definitionally not that:

    NEGATED    a negator within a BOUNDED, SENTENCE-STOPPED window before the stem
    PRIVATIVE  un- / non- / dis- / mis- carried on the token itself
    PROPER     a proper noun carrying the stem — Law 153, already ratified

**A NEGATOR LIST IS NOT LAW 170's FAILURE.** Law 170 forbids enumerating INSTANCES
OF THE THING DETECTED — G4's eighteen UK words could never enumerate English.
Negation is a CLOSED grammatical class of function words, and so are the privative
prefixes. The PROPER-NOUN set is the one genuine list and is therefore named and
attributed entry by entry, not folded in silently (Law 138). Its entries today are
`Vetter`/`Vetters` — R. S. Vetter, the UC Riverside entomologist cited by name on
`/us/black-widow-spiders` and `/us/brown-recluse-spiders` — plus `Trustpilot` and
`TrustMark` from Law 153.

**THE WINDOW STOPS AT THE SENTENCE (Law 7).** Without that stop, "We do not sell
services. Every provider is verified." would exempt itself. That sentence is a
positive probe, as is a negator placed further away than the window.

    G3            BEFORE   AFTER
    served hits       38       6
    rendered hits     15       2
    failing routes     8       1

**EVERY DROPPED HIT IS NAMED, AND THE ESTATE RUN PRINTS THEM (Law 138).** 32
exclusions plus 6 asserted equals the old 38, with no unexplained residue:
`PROPER:Vetter` 12 on black-widow-spiders and brown-recluse-spiders;
`NEGATED(not):verify` 8 on house-mice and rats; `NEGATED(cannot):verify` 6 on
fruit-flies and products; `PRIVATIVE:unverifiable` 6 on products and
squirrels-in-attic.

**CALIBRATED AGAINST THE ESTATE'S OWN NAMED KNOWN POSITIVE (Law 117, S49-L).** The
successor control recorded in this file is "/products G3 = 3". The new rule returns
exactly 3 on `/products`. The control holds.

**FALSE-POSITIVE SWEPT AGAINST REAL CONTENT, BOTH ESTATES.** New runner
`node scripts/gates.mjs --g3` sweeps all 240 built documents and prints every
exclusion with its route. 165 asserted hits survive estate-wide across 39 UK
documents; total exclusions are 38, and reading all 38 finds no suppressed claim.
**THE 165 ARE NOT A NEW DEFECT CLASS (Law 94)** — G3 gates `/us` and `runEstate()`
walks `/us`; the UK figures are informational.

**HOW THE PROBE PATH WAS PROVED, AND WHERE THE PROOF DOES NOT REACH.** Routing
probes through `surfaceOf()` proves nothing for G3: G3 declares surface `full`,
`SURFACES.full` is the identity function, and citing that routing as proof for G3
would be citing a no-op. G3's load-bearing transform is INTERNAL — it strips the
markup that sits between a negator and the stem in served HTML. ASSERTION G
asserts exactly that, on a PRODUCTION-SHAPED negative probe whose anchor
attributes alone outnumber the window, classifying ASSERTED with the strip off and
NEGATED with it on.

### REFERRED, NOT FIXED — /us/ticks

The one surviving route, 6 served / 2 rendered hits:

    page.tsx:565  "quoted from Cornell, which is where this page can verify them"
    page.tsx:66   "This page quotes Cornell, which it can open and verify"

Both are ASSERTED verification statements by the letter of the rule, and both are
about THIS PAGE'S OWN SOURCING rather than about a provider or a product. The
prose is untouched pending a ruling.

## S64 R1 — THE LAST HAND-TYPED FIGURE IN THE SELF-TEST IS CLOSED

S63 R8 found `"0 unusable"` standing as a STRING LITERAL in the passing branch of
the self-test line, proved it branch-guaranteed correct, and left it because that
round's remit was elsewhere. It is closed. **BRANCH-GUARANTEED IS NOT DERIVED: a
reader cannot tell a typed figure from a measured one, and that is the whole of
Law 178.** `unusable` is now the length of the list `selfTest()` builds from the
probe loop, printed in BOTH branches by one expression so the passing branch
cannot drift from the failing one.

**AND THE FIGURE BESIDE IT WAS ACTUALLY WRONG, WHICH THE LITERAL HID.** `usable`
was `registered - bad`, but `bad` also counts CLASS-probe failures and ASSERTION
failures, neither of which makes a matcher unusable. Under the old expression one
broken morphological class inside G4 would have printed ONE FEWER USABLE MATCHER —
a false statement about the registry. Probe failures, class failures and assertion
failures are now counted apart, each derived from what it counts, each reported as
itself. Every `bad++` site in the file is attributed to one of the three.

**PROVED BY THREE NEGATIVE CONTROLS, EACH RUN IN A SHADOW COPY SO THE REPOSITORY
WAS NEVER LEFT BROKEN:**

    break one matcher's negative probe   30 usable, 1 unusable (M31 named), 0 class, 0 assertion
    break one morphological class probe  31 usable, 0 unusable, 1 class,     0 assertion
    break one runtime assertion          31 usable, 0 unusable, 0 class,     1 assertion

The second and third are the proof that the old expression was wrong: both would
have printed "30 usable" under it.

## S64 R1 — M11 WAS REPORTING A FALSE ZERO OVER A LIVE S59-C BREACH

**THIS IS A FINDING, NOT A RULING, AND THE CONTENT REMEDY IS REFERRED.**

M11 is named "S59-C: no superseded no-affiliate disclosure on a page carrying a
tagged link" and was implemented as `t.includes(DISCLOSURE_SUPERSEDED)` — ONE
LITERAL SENTENCE, "The link below is not a paid affiliate link." **THE ESTATE
SERVES A SECOND, DIFFERENT DENIAL** from `app/us/components/UsFooterCommissionNotice.tsx`:
"We earn nothing if you buy through the links on this site." The literal form
could not see it, and M11 printed a clean zero for as long as it has existed.
Law 170 exactly: a matcher whose NAME states a concept, implemented as an
enumerated instance.

**MEASURED, ON THE BUILT ESTATE, AT S64 R1: TEN ROUTES CARRY TAGGED AFFILIATE CARD
LINKS AND ALSO TELL THE READER THE SITE EARNS NOTHING.**

    /us/bed-bugs               3      /us/mosquitoes            3
    /us/carpenter-bees         3      /us/powderpost-beetles    3
    /us/fruit-flies            2      /us/products            188
    /us/fungus-gnats           2      /us/rats                  4
    /us/groundhogs             1      /us/squirrels-in-attic    3

212 of the estate's 376 rendered tagged card links — 56% of them — sit on a page
carrying that denial.

**THE MECHANISM IS A HAND-MAINTAINED LIST, AND ITS OWN COMMENT PREDICTED THIS.**
`UsFooterCommissionNotice.tsx` holds `CARD_CARRYING_ROUTES`, a set of 31 slugs
measured at S60 R1, and its comment calls the set "the mechanism and also the
maintenance obligation". The estate now renders cards on 41 routes. **Zero stale
entries; ten missing.** A list maintained by hand is not a measurement (Law 178),
and `/us/products` — which is itself derived from the card estate — could never
have been on a list written before it existed.

**THE MATCHER IS REPAIRED THIS ROUND; THE PROSE AND THE ROUTE SET ARE NOT.** M11 is
rebuilt from the concept — a DENIAL THAT THE PAGE EARNS — over four grammatical
shapes, each with its own probes. The decisive negative probe is the UK
disclosure, "we may earn a small commission at no extra cost to you", which
carries "earn", "commission" and a negator within four tokens and is NOT a denial
because the negation attaches to the cost. M11 now reports FAIL on exactly those
ten routes, and that report is CORRECT.

**M11 IS THEREFORE EXPECTED RED UNTIL THE REMEDY IS RULED.** Under Law 24 a push
is not gated on the absence of flags, and under Law 138 a round that subtracts
this silently and prints a clean M11 is hiding it.

**THE RULING NEEDED**, and CC did not choose between these:
  (a) add the ten slugs to `CARD_CARRYING_ROUTES` — smallest change, and it
      reinstates exactly the drift that caused this;
  (b) derive the set at build time from the same extractor `/us/products` uses, so
      it cannot drift again. `app/us/lib/cardIndex.ts` reads the route sources with
      `node:fs`, so it cannot be imported by a `'use client'` component; the set
      would have to be computed in the server layout and passed as a prop;
  (c) something else.
The brief for this round said NO BUILDS, and every one of these is a content
change requiring a build. Referred.

## S64 R1 — OPEN, MEASURED, AND NOT RULED

Recorded here so they cannot die inside a round report (Law 163 generalised).
Each was re-measured this round rather than inherited (Law 102).

**SIX REGISTERED MATCHERS ARE NEVER INVOKED BY ANY RUNNER.** Measured by
instrumenting the registry in a shadow copy and counting calls with the probe
phase excluded, across all five runner modes:

    M28  gate       estate   card-precedence   NEVER CALLED
    M14  inventory  source   source            NEVER CALLED
    M21  inventory  source   quotation-delims  NEVER CALLED
    M29  inventory  source   headings          NEVER CALLED
    M15  gate       external fetched-body      NEVER CALLED — needs a fetch
    M23  gate       external fetched-body      NEVER CALLED — needs a fetch

M15 and M23 are `external` and legitimately have no standing runner, since no
runner can manufacture a fetched source body. The other four could have one.

**M28 IS THE SERIOUS ONE, AND IT PUTS TWO SOURCES OF TRUTH IN CONTRADICTION
(Law 41).** This file, at S63 R7, states: "M28 is expected to report /us/chipmunks
as a precedence violation, and that report is CORRECT... A round that subtracts it
silently and prints a clean M28 is hiding it." **M28 reports nothing, about any
route, because no runner constructs the row its `test()` consumes.** Its probes
pass against fixtures on every run, so it reads as usable. The named known
exception is carried by this file's text alone, not by the gate. First reported at
S63 R8; still true at S64 R1.

**M14's EXPRESSION SURVIVES VIA M18**, which shares it and does run. M21 and M29
have no such backstop and should either gain a runner or be retired on the M24
reasoning.

**THE M25 `+9` OFFSET ARTEFACT** was named in the code at S63 R8 and NOT corrected,
and was NOT re-measured this round — it is recorded here as S63 R8's assertion,
not as a fact of this round's measurement.

**UNCHANGED CARRYOVER, not touched at S64 R1:** drain flies referred; 35 routes
unadjudicable under Law 175 for want of a source corpus; eight absolute-form
internal links not rewritten site-relative; Tier 5 exhausted and needing a fresh
ascertainment; `-ogue` REPORTING ONLY in G4; `ground-squirrels` and `skunks`
parked on a PM ruling outstanding since S60 R2.

## S64 R1 — M20 REPORTED A LAW NUMBER 783, AND CAUGHT ITSELF DOING IT

While this very section's sibling was being appended, M20 — the law enumeration
inventory — reported **183 laws declared, highest 783, six hundred gaps.** It was
found by running the matcher after the append, not by reading the text.

**THE CAUSE, FP-4: A DIGIT-DOT-SPACE AT LINE START IS NOT A LIST ITEM.** A
paragraph above wraps so that the figure 783 lands at the start of a line followed
by a full stop and a space — "783. Measured this round: the estate MINUS
`/us/products` carries 188 rendered..." — and M20's form-1 matcher read it as a
numbered-list law declaration. **Markdown does not render it as one:** a numbered
line becomes a list item only after a blank line, another item, or an item's own
indented continuation. Anywhere else it is part of the running paragraph.

**THE DISCRIMINATOR IS MARKDOWN'S OWN SEMANTICS, NOT AN ARBITRARY NARROWING, AND
IT WAS MEASURED BEFORE IT WAS WRITTEN (Law 44).** Over all 157 form-1 matches in
this file: 96 follow an indented continuation, 43 follow another item, 17 follow a
blank line, and exactly ONE follows an unindented paragraph line — the false
positive. 156 kept, 1 rejected, no judgement call anywhere in it.

**FP-5: A PROPOSAL IS NOT A DECLARATION.** M20 also counted the proposed Law 182
from a heading reading "PROPOSED LAW 182 — NOT RATIFIED". Counting a proposal
inflates the enumeration and silently closes a number the PM has not yet ruled on.
A line announcing PROPOSED or NOT RATIFIED is now excluded.

**BOTH GUARDS ARE PROVEN LOAD-BEARING, EACH INDEPENDENTLY.** The false-positive
lines are now negative probes. Reverting either guard on its own makes M20's
negative probe FIRE and the self-test report M20 UNUSABLE — demonstrated by
reverting each in a shadow copy. The false zero cannot come back quietly, in the
same way assertion B keeps the S60 R9 `ListItem` form dead.

**AFTER THE REPAIR: 181 laws declared, highest 181, no gaps** — which is what
every round before this one reported, and which was correct.

**THE GENERAL POINT, AND IT IS WHY THIS IS WRITTEN DOWN.** M20 had been reporting
"181, no gaps" for rounds, and that clean result was not evidence the matcher was
sound — it was evidence that nobody had yet written a sentence shaped like a list
item. A matcher over PROSE is exposed to whatever prose a future round writes.
Law 170's corollary said a class-based matcher must be swept against real content
before its count is believed; this adds that THE REAL CONTENT KEEPS ARRIVING, so
a matcher's clean history is not a proof of its rule.

## S64 R2/R3 — LAW 183: AN EARNINGS STATEMENT IS DERIVED, NEVER LISTED

LAW 183 — AN AFFILIATE OR EARNINGS STATEMENT IS DERIVED AT BUILD TIME FROM
WHETHER THE DOCUMENT ACTUALLY RENDERS A CARD. A HAND-MAINTAINED ROUTE LIST IS
NEVER THE SOURCE OF TRUTH FOR IT, ON EITHER ESTATE. This is the PM ruling made at
S64 R2 for `/us` and extended to the UK estate at S64 R3. Where such a list is
found it is REMOVED, not extended: extending it is what produced the defect both
times.

A document that renders one or more cards states the affiliate relationship. A
document that renders none does not claim one — on `/us` that means the
earns-nothing sentence, on the UK estate it means SILENCE, because the UK estate
carries no earns-nothing sentence anywhere and never has.

WORDING IS REUSED, NEVER DRAFTED. Before any such change, the correctly-stating
documents are checked for agreement. If they disagree the round STOPS and refers
it to the PM rather than choosing. Both rounds checked and both found unanimity
in the population being derived — one US affirm string, one US deny string, one
UK footer string.

### THE EVIDENCE, BOTH ESTATES

US, S64 R2. `CARD_CARRYING_ROUTES` in
`app/us/components/UsFooterCommissionNotice.tsx` held 31 slugs measured by hand at
S60 R1, and its own comment called the set "the mechanism and also the maintenance
obligation". The estate carded on 41 routes. Zero stale entries, TEN MISSING:
bed-bugs, carpenter-bees, fruit-flies, fungus-gnats, groundhogs, mosquitoes,
powderpost-beetles, products, rats, squirrels-in-attic. **212 of 376 rendered card
links — 56% — sat on a page serving affiliate links under a footer saying the site
earns nothing.** A live S59-C breach.

UK, S64 R3. `NO_AFFILIATE_LINKS_ROUTES` in `components/FooterAssociatesNotice.tsx`
held TWO exact paths, `/professionals` and `/resources`, added at S61 R2. Measured:
179 documents, 76 carding, 176 carrying "All links are Amazon affiliate links."
**100 DOCUMENTS CLAIMED THE RELATIONSHIP WHILE RENDERING NO CARD.** The list named
two of them.

### THE TWO DEFECTS ARE MIRRORS AND MUST NOT BE CONFLATED

The US one is a page carrying affiliate links under a DENIAL: an Amazon programme
breach on a page a reader can buy from. The UK one is a page claiming a
relationship it does not have: no programme term is breached and no reader is
misled about a purchase, because there is nothing on the page to buy. It is a
false statement in the site's own voice on a hundred routes (Law 130), which is
reason enough to fix but is a different severity, and a round that reports them as
the same thing is reporting wrongly.

### WHY THE LIST KEEPS COMING BACK, WHICH IS THE POINT OF THIS LAW

`FooterAssociatesNotice.tsx`'s own comment records the `/us/opossums` bug, then
records THE SAME BUG RECURRING one level down at S61 R2 — and fixes it by naming
two routes. Each time the remedy was another entry rather than a measurement, so
the defect returned larger. A list is a record of what somebody happened to
remember on the day they wrote it (Law 170, Law 178).

### THE MECHANISM, AND THE SEAM THAT FORCES IT

Deciding the statement needs the PATHNAME, which only a client component can read.
Deriving the set needs the filesystem, which only a server component can read.
NEITHER CAN DO BOTH. The set is therefore measured in the server component and
crosses that seam as a prop — `cardCarryingSlugs()` in `app/us/lib/cardIndex.ts`
into `UsFooterCommissionNotice`, and `ukCardCarryingRoutes()` in
`lib/ukCardRoutes.ts` into `FooterAssociatesNotice` via `components/Footer.tsx`.

A DERIVED INDEX PAGE IS DERIVED, NOT SPECIAL-CASED. `/us/products` is excluded
from extraction by name because it renders the index it is building; it therefore
carries cards exactly when that index is non-empty, which is computed rather than
listed.

## S64 R2/R3 — LAW 184: SOURCE DECLARATION IS NOT RENDER, AND M33 IS WHY

LAW 184 — A BUILD-TIME DERIVATION READS SOURCE DECLARATIONS AND CANNOT SEE A CARD
THAT RENDER SUPPRESSES. A BUILD CANNOT READ HTML IT HAS NOT YET PRODUCED. Any rule
whose correctness depends on what a page RENDERS must therefore be closed by a
POST-BUILD GATE over the built document, and the derivation must never be reported
as though it measured rendering.

M33 IS THAT GATE, ON BOTH ESTATES. It reads the built document and fails when the
footer statement disagrees with the RENDERED card count, in both directions, plus
the self-contradiction case.

### IT WAS MEASURED, NOT SUPPOSED

At S64 R2 a control wrapped `/us/groundhogs`' only card in `{false && ...}`. The
rendered card count went to zero; the extractor still read the declaration; the
footer went on claiming the affiliate relationship on a page with no affiliate
link. THE CONTROL FAILED TO FLIP AND WAS REPORTED AS A FAILURE, not filed as a
pass. At S64 R3 the same control on `/guides/carpet-beetle-control` produced the
same result on the UK side. Both routes were reverted BYTE-IDENTICAL afterwards.

### THE KNOWN POSITIVE IS A REAL ROUTE, NOT A FIXTURE

M33's positive limb was proven on those two live routes and only then on fixtures
(Law 117, S49-L): US 1/groundhogs then 0 after revert; UK FAIL 1
"affiliate footer on a page rendering no card link" then PASS 0 over 240
documents. A gate proven only against constructed fixtures has not been shown to
fire on the estate it guards.

### WHAT IS GUARDED ELSEWHERE, STATED SO THE GATE IS NOT OVERSOLD

The failing direction that matters most — RENDERS CARDS, FOOTER DENIES, the S59-C
breach itself — cannot arise from an extractor miss on `/us`, because a card the
extractor cannot read HALTS THE BUILD in `cardIndex` rather than dropping its
route and taking the disclosure with it. What M33 adds is the Law 130 over-claim
direction and the contradiction case.

### TWO ESTATES, TWO CORRECT STATES, AND THE GATE MUST NOT CONFLATE THEM

    US   renders no card  ->  the earns-nothing sentence. SILENCE WOULD BE A DEFECT.
    UK   renders no card  ->  SILENCE. There is no UK earns-nothing sentence.

Each limb tests its own estate's rule and is silent on the other.

### IT IS ANCHORED ON THE FOOTER PARAGRAPH, NEVER ON THE SENTENCE

The card-level disclosure is THE SAME SENTENCE in a different element, and
counting it as the footer's is exactly what made the S64 R1 breach invisible:
every one of the ten breaching routes carried that sentence, once per card, while
the footer denied it. On the UK side the equivalent trap is a page-level authored
disclosure — there are FOUR distinct wordings of those on the estate, they are
hand-written rather than derived, and one must not stand in for the derived
statement. Both are named negative probes.

### A MATCHER WITH NO RUNNER THAT REACHES ITS SUBJECT IS UNTESTED

`runEstate()` walks `/us` only. M33's UK limb would have been codified and never
fired on real content — the Law 167/178 failure in a new place. `runMachinery()`
now runs M33 over all 240 built documents, both estates. BEFORE ADDING A LIMB TO A
MATCHER, CHECK THAT SOME RUNNER ACTUALLY REACHES WHAT IT IS FOR.

### THE SOURCE SCAN IS JUSTIFIED PER ESTATE, BEFORE IT IS WRITTEN (Law 44)

Measured at S64 R3 over the UK estate: every Amazon URL is one shape,
`www.amazon.co.uk/dp`, 378 of them in exactly 76 documents — no short links, no
`/gp/product`, no other host — so "renders no card" cannot be a false negative;
all 76 carding documents are static routes with their own `page.tsx`; zero of the
68 dynamic routes card; and across all 111 static routes source declaration and
rendered output agree on every one, with the derived set and the rendered set
IDENTICAL in both directions. A future estate whose links take a second shape
invalidates that argument and must re-measure it rather than inherit it.

## S64 R4 — LAW 185: A CHANGE THAT MOVES NO INDEXABLE CONTENT SPENDS NO QUOTA

LAW 185 — A CHANGE THAT ALTERS NO INDEXABLE CONTENT DOES NOT CONSUME GSC QUOTA.
IT IS RECORDED IN THE QUEUE AND MARKED NOT-FOR-PUSH, WITH THE REASON RECORDED
AGAINST IT. PM ruling, S64 R4.

THE QUEUE RECORDS EVERY CHANGE; IT DOES NOT OBLIGE EVERY CHANGE. Law 159 made
`~/pestpro-gsc-queue.md` the authoritative record of what changed on the estate,
and that duty is unaltered — a round that changes a route still adds its entry.
What this law separates out is the SUBMISSION obligation, which is a different
question with a different answer and a real cost attached.

THE COST IS THE REASON THIS IS A LAW. Submission is rate-limited and finite.
Spending it on a page whose indexable content did not move buys nothing and
displaces a page where it would.

THE WORKED CASE, AND THE FIGURES THAT PROVOKED THE RULING. S64 R3 removed the
shared-footer affiliate sentence from 100 UK documents that render no card. No
title, no meta description, no heading, no body copy and no schema moved on any of
them; two sentences of footer chrome left pages that should never have carried
them. S64 R3 recorded all 100 in the queue, FLAGGED THE CRAWL-BUDGET TENSION FOR
THE PM AND MADE NO DECISION — which is the correct division: CC records and
measures, the PM rules on spend. S64 R4 is that ruling. The 100 are marked
not-for-push; the TEN US routes from S64 R2 remain outstanding and pushable,
because those changed a page-level commercial claim in indexed body text.

CC NEVER APPLIES THIS ON ITS OWN JUDGEMENT OF MATERIALITY. "Alters no indexable
content" is a finding CC may MEASURE and REPORT; whether it justifies withholding
a submission is a PM ruling, entry by entry or section by section. A round that
marks entries not-for-push without a ruling has decided the PM's question for
them.

THE MECHANISM IS A SEPARATE FIELD, NOT A REUSED ONE. The queue gained
`not-for-push:`, carrying the reason and the ruling date. `pushed:` STAYS EMPTY
BESIDE IT, because `pushed:` means "the date this URL was actually submitted" and
none of them was; writing a date there to retire it from the outstanding list
would be exactly the false record Law 159 and its S62 R1 extension exist to
prevent. Two questions, two fields, neither overloaded to do the other's job. The
entry itself is never deleted: the queue must still be able to answer when a
document last changed.

QUEUE COMPOSITION AFTER THE RULING, derived at runtime: 276 entries, 176
outstanding and pushable, 100 recorded not-for-push, 0 carrying a submission date.

## S64 R6 — LAW 186: A LIMIT IS DERIVED FROM A RULE, NEVER FROM ITS OWN POPULATION

LAW 186 — A THRESHOLD OR LIMIT IS DERIVED FROM A RULE ABOUT WHAT IS CORRECT,
NEVER FROM THE OBSERVED DISTRIBUTION OF THE THING IT MEASURES. A LIMIT READ OFF
ITS OWN POPULATION CANNOT FAIL AND IS NOT A GATE.

Where such a limit is found it is RETIRED, not re-based on a different number.
Choosing a new constant off the same distribution repeats the defect.

THE PROPERTY IS WORSE THAN UNFALSIFIABILITY, AND THIS IS THE PART TO REMEMBER.
A maximum-of-population limit does not merely fail to catch regressions — IT
ABSORBS THEM. When a member of the population gets worse, the limit rises to meet
it, and every other member is silently exonerated.

PROVEN BY EXERCISING IT ON A REAL DOCUMENT AT S64 R6, not argued from the
definition. Suppressing the first four cards on `/best/wasp-nest-foam` pushed its
first card from about 21% to 47%, a genuinely worse page:

    the threshold FOLLOWED IT                     28%  ->  47%
    the degraded page was still not "over"        it WAS the maximum
    documents reported over the threshold          25  ->  20

Five documents were exonerated by degrading a sixth, none of them touched:
`guides/moving-house-pest-checklist`, `guides/natural-wasp-deterrents`,
`guides/spring-pest-prevention`, `guides/student-house-pest-guide`,
`guides/wasp-season-preparation`. The page was then reverted BYTE-IDENTICAL and
the figures returned to 25.

WHY NO REPLACEMENT NUMBER WAS FOUND, MEASURED RATHER THAN ASSERTED. Every
structural proxy for "where a card belongs" collapses the same way, because THE
LAYOUT WRAPS THE CONTENT and fixes the card's position relative to every landmark
the page does not own:

    "a card must follow the page's <h1>"   UsPageLayout and GuideLayout both emit
        the h1 before {children}. 0 of 60 US pages and 1 of 44 UK guides declare
        their own h1. UNFAILABLE.
    "a card must follow some <h2>"         UsPageLayout emits TWO h2s before
        {children} — Contents and Related Pages. UNFAILABLE on all 61 US
        documents, failable on UK guides. HALF-DEAD, which is worse than dead
        because it reads as live.

AND NO RATIFIED LAW SAYS A CARD CAN BE TOO LATE. Law 180 governs too EARLY. A
percentage-through-a-document is a summary statistic, not a rule about where a
card belongs. THE GENUINE RULE ALREADY EXISTS AND IS ALREADY CODIFIED: Law 180 as
M28, comparing the first-card offset against adjudicated precedence-bearing
content, which has a real failing state in both directions. What M28 lacks is a
runner, which is referral R8-1 and remains the PM's to rule on.

CONSEQUENCE. `node scripts/gates.mjs --placement` is an INVENTORY (Law 167). It
prints a distribution — min, quartiles, median, max, per population — and issues
no verdict and no "over" list. A distribution describes the estate; it does not
rule on it.

## S64 R6 — THE PLACEMENT THRESHOLD DOES NOT GOVERN /guides/*, AND THE 25 ARE CLOSED

PM RULING, S64 R6. THE PLACEMENT THRESHOLD DOES NOT APPLY TO `/guides/*`. It was
derived from the `/best/*` population and does not govern a different content
type. LAW 180 DOES NOT YIELD: its own ratified text already settles this — where
precedence and the threshold conflict, precedence wins.

THE 25 REFERRED DOCUMENTS ARE CLOSED AS CORRECT-AS-BUILT, NOT AS EXCEPTIONS. No
card moves on any of them. They are not a standing exception list, they acquire no
flag, and no future round is to re-open them on the threshold. A guide that
teaches first and names products last is the correct shape for a guide.

THE DISTRIBUTION SHOWS THE TWO POPULATIONS DO NOT OVERLAP AT ALL, measured at
S64 R6 after the threshold was retired:

    UK /best/*     50 docs   min 14   p25 17   median 19   p75 21   max 28
    UK /guides/*   25 docs   min 36   p25 49   median 55   p75 61   max 74

There is no value between 28 and 36 that both populations occupy. Treating the
maximum of one as a target for the other was Law 50 — the numeral and the figure
did not count the same population.

PRECEDENCE CONTENT SITS AHEAD OF THE CARDS ON AT LEAST EIGHT OF THE 25, BY NAME,
established by reading as Law 180 requires: `natural-fox-deterrents` ("Legal
Context: Foxes Are Protected"), `how-to-get-rid-of-foxes` ("Legal Position: Foxes
in the UK", "When to Call a Professional"), `rat-poison-vs-rat-traps` ("Safety:
Pets, Children, and Wildlife", "UK Legal Considerations"),
`essential-oils-for-pest-control` ("Safety Warnings"), `landlord-pest-control`
("Legal Framework for Landlords"), `how-to-get-rid-of-silverfish` ("When to Call a
Professional"), `carpet-beetle-control`, and
`electric-fly-killers-vs-sticky-traps` ("Hygiene and Food Safety Compliance").
Moving those cards earlier would have put a product ahead of the safety or legal
content — the exact thing Law 180 forbids.

FOUR OF THE 25 ARE ALSO NEVER TOUCH BY NAME — `natural-fox-deterrents`,
`natural-moth-repellents`, `natural-wasp-deterrents` and
`essential-oils-for-pest-control` — and Law 61/119 means a broad class
authorisation never reaches them.

## S64 R7 — LAW 187: DETECTION NEVER DEPENDS ON AN OPTIONAL ATTRIBUTE

LAW 187 — DETECTION OF A THING NEVER DEPENDS ON AN OPTIONAL ATTRIBUTE OF THAT
THING. An affiliate card is DETECTED as an Amazon product link; its tag is
VERIFIED separately; and an untagged card FAILS VISIBLY rather than vanishing.

THE GENERAL FORM, WHICH IS WHY THIS IS A LAW AND NOT A NOTE. A defect that
consists of a MISSING ATTRIBUTE will erase the thing from any detector built on
that attribute — and once the thing is invisible, every check downstream of the
detector goes silent at once. The absence propagates as a clean pass.

MEASURED AT S64 R7, NOT ARGUED. `affiliateTag=""` is a supported prop on
UsToolCard, so a real untagged card was rendered on `/us/groundhogs` and every
consumer of the tag-requiring pattern was run:

    G6   PASS     the price-proximity mark was never placed
    M10  PASS     THE TAG GATE ITSELF SAW NO CARD TO CHECK
    M11  PASS     the page read as non-carding, so the S59-C denial gate went
                  silent — the R2/R3 breach rebuilt as an automatic trap
    M12  PASS     price-proximity blind
    M25  INV(0)   the placement measure lost the page
    M30  INV(0)   the card vanished; estate 376 -> 375
    M33  FAIL     with the WRONG MESSAGE — "affiliate footer on a page rendering
                  no card link". The footer was correct and the matcher was
                  wrong, and ACTING ON THAT MESSAGE REMOVES A REQUIRED DISCLOSURE
                  FROM A PAGE CARRYING A LIVE AMAZON LINK.

Five matchers silent, one undercounting, and the one that did fire pointed at the
innocent party. AFTER THE SPLIT, on the same card: M30 back to 376, M25 measures
the page again, M33 PASS, and M10 FAILS with "UNTAGGED amazon.com card".

THE VERIFYING GATE COVERS BOTH ESTATES BY RULE, NOT BY LIST — one host, one
correct tag, a third marketplace covered by adding a row (Law 170). Measured
across all 240 built documents: 375 US links carrying `pestproindex2-20`, 378 UK
links carrying `pestproindex2-21`, ZERO wrong-estate tags, ZERO wrong hosts. The
UK pattern had never captured a tag at all, so nothing had ever verified the UK
tag on 378 rendered links.

A PREDICATE MAY STILL BE ABOUT THE ATTRIBUTE, AND THAT IS NOT A RELAPSE. M11 asks
whether the page EARNS, which is a question about the tag, so its predicate is "a
card carrying a tag". The first attempt at this round moved M11 to tag-independent
detection and it FAILED ON THE CONTROL — because UsToolCard correctly switches to
its no-affiliate branch when the tag is empty, so the page truthfully said it
earns nothing. That was a FALSE POSITIVE ON AN HONEST PAGE. DETECTION IS
TAG-INDEPENDENT; A RULE MAY STILL BE TAG-DEPENDENT WHEN THE RULE IS ABOUT THE TAG.

ASSERTION I holds the three facts together on one untagged fixture — the US
pattern detects it, the either-estate pattern detects it, and M10 fails on it — so
reinstating a tag-requiring pattern drops all three at once and says so.

## S64 R7 — M28'S ADJUDICATION DESIGN, AND ITS SEEDING GROUND

PM RULING, S64 R7. THIS CLOSES REFERRAL R8-1, OPEN SINCE S63 R8.

M28's SUBJECT IS THE ADJUDICATION, NOT THE MEANING. Each route carries a recorded
adjudication of its card ordering: THE JUDGEMENT, THE DATE IT WAS MADE, AND A
FINGERPRINT OF THE ORDERING AS IT STOOD WHEN JUDGED. M28 FAILS when a route's
current ordering does not match the fingerprint it was last adjudicated against.

THE MACHINE DETECTS THAT THE ORDERING MOVED. IT NEVER JUDGES MEANING. That is the
whole purpose of the S63 split that made M29 the inventory and M28 the gate: a
string matcher cannot decide precedence (Law 115), so it is not asked to. What it
can do honestly is notice that the arrangement a human ruled on is no longer the
arrangement being served, and ask for re-adjudication. IT DOES NOT ACCUSE.

WHY THE OLD FORM COULD NEVER RUN. It compared a card offset against "the offset of
the earliest precedence-bearing content" — a figure no runner can produce without
a machine deciding what counts as precedence-bearing. That is why M28 sat at ZERO
INVOCATIONS from S63 R5 to S64 R6 while this file asserted it reported
`/us/chipmunks`.

THE FINGERPRINT IS THE HEADING/CARD SEQUENCE, NOT THE OFFSET. A percentage moves
whenever ANY prose on the page is edited, so a fingerprint built on it would fail
on every innocent typo fix and train its readers to ignore it. The h2/CARD
sequence moves only when a card moves relative to a section, or a section is
added, removed or renamed — exactly the changes that alter what a reader meets
before a product. A heading rename counts, deliberately.

KNOWN CONSEQUENCE, RECORDED RATHER THAN LEFT TO BE DISCOVERED: the layout's own
h2s are part of the sequence, so a change to `UsPageLayout` or `GuideLayout` moves
EVERY fingerprint on that estate at once and calls for a re-seed. The arrangement
really did change on every route, so that is honest; it is a one-round job, not a
per-route defect.

THE SEEDING GROUND. `scripts/adjudications.json` was seeded on 2026-09-05 across
117 carding documents on both estates. Its recorded ground is the S64 R5 and
S64 R6 measurement and the PM ruling that followed it: the placement threshold
does not govern `/guides/*`, Law 180 does not yield, and the 25 referred documents
are closed as CORRECT-AS-BUILT rather than as exceptions.

SEEDING IS A SEPARATE, EXPLICIT COMMAND, `--seed-adjudications`, so it can never
happen as a side effect of running the gate. A SEED WRITES THE CURRENT ORDERING AS
THE ADJUDICATED ONE, WHICH IS ONLY HONEST WHEN A HUMAN HAS JUST RULED ON IT. A
round that re-seeds to make M28 green has erased the ruling rather than met it.

TWO REAL FAILING STATES, BOTH EXERCISED ON REAL ROUTES:
  UNADJUDICATED   before seeding, M28 failed on all 117 carding documents.
  ORDERING MOVED  lifting the UsToolCard on `/us/groundhogs` above its "Trapping"
                  heading — an ordering move with no text edited — produced
                  exactly one failure and exit code 1. Reverted byte-identical;
                  PASS, exit code 0.

M29 IS NOW INVOKED, CLOSING ITS HALF OF R8-2. The runner runs it over each route's
own headings and prints the tally as CONTEXT for whoever re-adjudicates —
CANDIDATES, NEVER FINDINGS, and M28 does not read them. Estate-wide at seeding:
54 of 117 documents carry a heading in a precedence class — identification 27,
efficacy 22, harm 17, legal 12.

INVOCATION COVERAGE AFTER THIS ROUND: only `M15` and `M23` are unreached by any
runner, both `external` scope, both needing a fetched source body no runner can
manufacture. That is structural and is printed on every `--machinery` run.

## S65 R2 — LAW 182 RATIFIED

Ratified by PM ruling at S65 R2, dated 2026-09-05. The text below is the text of
the declaration as it was put, VERBATIM AND WITH NO WORDING CHANGE. Only two
markup characters were dropped — the blockquote marker that made it a quotation
of something not yet law, and the emphasis on its first line. Word-for-word
identity against the earlier block was asserted mechanically before this section
was written, not checked by reading (Law 164's principle applied to our own text).

LAW 182 — A GATE READS THE SERVED BYTES; A COUNT READS THE RENDERED SURFACE.
A gate asks whether a string is served at all, and a string restated in the RSC
flight payload is served — narrowing a gate to the rendered surface weakens it.
A count asks how many times a reader meets the thing, and the flight payload
answers that question more than once. THE TWO QUESTIONS TAKE TWO SURFACES, AND
EVERY REPORTED FIGURE NAMES WHICH ONE PRODUCED IT. Where a matcher's own surface
is the served bytes, the rendered count is derived alongside and printed beside
it; the two are never reconciled into one number (Law 62).

### WHAT THIS SUPERSEDES, AND WHAT IS DELIBERATELY LEFT STANDING

The block headed `### PROPOSED LAW 182 — NOT RATIFIED, AWAITING A PM RULING`,
appended at S64 R1 by commit 99394fc and sitting at lines 1679 to 1690 of this
file, IS SUPERSEDED BY THIS SECTION. Its text is NOT edited and NOT removed. This
file is APPEND ONLY by its own standing rule, and that rule is not set aside to
tidy a heading; the earlier block is the record of what was put and when, and this
section is the record of the ruling on it. A reader arriving at the earlier block
is directed here. WHERE THE TWO DIFFER IN STATUS, THIS SECTION GOVERNS — the words
themselves do not differ at all.

THE PROPOSAL STOOD UNRULED FROM S64 R1 THROUGH S64 R7, and was carried as an open
item by S64 R2, R3, R4, R6 and R7 and again at S65 R1. That is the cost this
ratification closes.

### THE ENUMERATION CLOSES BY DECLARATION, NOT BY ADJUSTING THE MATCHER

M20 read 186 laws declared, highest 187, with a single gap at 182, because its
FP-5 guard correctly refuses to count a line announcing PROPOSED or NOT RATIFIED.
NOTHING IN scripts/gates.mjs WAS CHANGED TO CLOSE THAT GAP, and nothing should
have been: the gap list is derived at runtime from the laws actually found, and a
matcher edited to expect a particular answer is the defect Law 178 names. The gap
closed because the law is now declared. Measured after this append: 187 declared,
highest 187, zero gaps.

FP-5 IS STILL LOAD-BEARING AND IS NOT WEAKENED BY THIS RATIFICATION. The heading
of the superseded block still reads PROPOSED and still must not be counted, and
the synthetic `PROPOSED LAW 999: NOT RATIFIED` negative probe in
scripts/fixtures.mjs still fires. Both were re-run on this file after the append.

## S65 R6 — LAW 188: THE H2 WINS

LAW 188 — A CARD LABEL AND THE h2 LABEL ABOVE IT ARE TWO CLAIMS ABOUT THE SAME
PRODUCT, AND WHEN THEY DISAGREE THE PAGE CONTRADICTS ITSELF IN FRONT OF THE
READER. THE h2 WINS. The card label is corrected to match the heading, never the
heading to match the card.

Ratified by PM ruling at S65 R6, dated 2026-09-06.

WHY THE h2 AND NOT THE CARD, AND IT IS NOT A PREFERENCE. The h2 carries the
heading id that the contents list and every in-page anchor resolve to, and its
text is what `orderingFingerprint()` reads to build M28's ordering sequence. The
card label carries neither: it renders inside the card body, it is in no `h2` and
in no Amazon URL, so it is not in the sequence at all. Correcting the card is
therefore the smaller edit AND the only one of the two that does not move a
fingerprint a human has already adjudicated. Correcting the heading instead would
have moved fourteen fingerprints at S65 R5 and demanded a re-adjudication to fix
a defect the card could fix on its own.

### THIS IS A STANDING EXCEPTION TO THE NEVER TOUCH PROTECTION ON AWARD LABELS, AND IT IS THE ONLY ONE

The NEVER TOUCH section of this file protects ALL award labels and rank numerals
site-wide. That protection stands, unedited, and this law does not weaken it
anywhere except in the single case it names. It cannot be cross-referenced from
inside that section because this file is APPEND ONLY and the section sits ahead of
this append point, so the cross-reference is made HERE and the two are read
together.

OUTSIDE THIS LAW A LABEL IS NEVER CHANGED. In particular, A LABEL IS NEVER CHANGED
TO MAKE A GATE PASS. The only thing that licenses touching one is a measured
disagreement with its own h2, and the correction is then FULLY DETERMINED by that
h2 rather than chosen — there is no judgement left in it, which is precisely what
makes the exception safe to grant.

A RANK NUMERAL IS NOT AN AWARD LABEL AND IS NOT REACHED BY THIS LAW AT ALL.

### AN h2Label THAT IS NOT A CLEAN AWARD DOES NOT TRIGGER THIS LAW

Where `h2Label` holds a product name, a rank numeral or a descriptive sentence
rather than an award, the two fields are not both labels and nothing contradicts
anything. Such a record is MISCLASSIFIED. It is left exactly as it stands and
referred for a ruling; it is never forced into agreement, and its `h2Label` is
never copied onto a card. Measured at S65 R4 across all 255 `page.tsx` files, 31
of the 66 raw `cardLabel != h2Label` records were this case, on seven routes —
nearly half. A sweep that skipped this test would have written product names and
rank numerals onto cards as if they were awards.

### TWO CARDS ON ONE ROUTE CLAIMING THE SAME AWARD IS A DIFFERENT DEFECT AND IS NOT SETTLED HERE

This law makes a card agree with its own heading. It says nothing about whether
two DIFFERENT products on the same route end up claiming the same award as each
other, which is a separate defect with its own remedy and its own ruling.

BUT EVERY APPLICATION OF THIS LAW MUST PROVE IT DID NOT CREATE ONE. Copying an h2
label onto a card can collide with another card on the same page. After any
correction under this law the route is re-measured on BOTH label surfaces and the
absence of a duplicate is reported as a measurement, never assumed. S65 R5 did
this across all 61 records on the eleven routes it touched and found zero.

### WHAT THIS RETROSPECTIVELY AUTHORISES, BY ROUTE AND ASIN

Fifteen corrections were made at S65 R4 and S65 R5 on PM rulings that lived only
in round briefs. Law 106 means nothing in this file authorised them until now.
They are named here, in full, so the authorisation is auditable rather than
implied:

```
S65 R4, one correction
  /best/commercial-insect-monitors        B098XMZM6M  Best Overall             -> Best Professional Treatment Kit

S65 R5, fourteen corrections
  /best/bed-bug-mattress-encasement       B00MRH58V0  Best Budget              -> Best Value
  /best/carpet-beetle-treatments          B011UTS3VW  Best Professional-Grade  -> Best Powder
  /best/cat-deterrents                    B00THGEB5S  Best Scent Deterrent     -> Best Scent Crystals
  /best/cat-deterrents                    B0002B7OT2  Best Natural Deterrent   -> Best Natural Scent
  /best/commercial-bird-proofing          B01MQSRJQ6  Best Discreet Option     -> Best Discreet Deterrent
  /best/commercial-rodent-bait-stations   B0CD7QDM1L  Best Overall             -> Best Professional Grade
  /best/flea-spray-for-home               B0CMPY8ZXP  Best Budget              -> Best Value
  /best/fox-deterrents                    B0153BJ7NQ  Best Overall Deterrent   -> Best Motion Sprinkler
  /best/fox-deterrents                    B08MWB89CB  Best for Chicken Runs    -> Best Mesh
  /best/moth-traps                        B0B21S966L  Best Overall             -> Best Clothes Moth Trap
  /best/moth-traps                        B07SS5DDWH  Best Budget              -> Best Value
  /best/rat-bait-stations                 B00XL382T4  Best Budget              -> Best Value
  /best/silverfish-treatments             B013EIB87I  Best Insecticidal Dust   -> Best Powder
  /best/woodworm-treatments               B003ASOBG8  Best Diagnostic Tool     -> Best Moisture Meter
```

STILL HELD, NOT AUTHORISED, AND NOT CORRECTED. Five records remain in
disagreement and every one sits on an R9 snippet-experiment document under a
standing hold until 19 September: three on `/best/commercial-fly-killers` —
B07CKP6XL5, B07RPT58C3, B08P5X6T1P — and two on `/best/rat-poison` — B010E2GCIM
and B071K8WQZB. The `/best/rat-poison` pair was NOT named as out of scope by the
S65 R5 brief; CC held them anyway because the route is one of the seven, and a
narrow exclusion is not narrowed further by inference (Law 110). This law does not
reach them and no future round may apply it to them before the hold lifts.

## S67 R6 — LAW 156 CORRECTIONS OF RECORD, AND THE REAL PATHS

This file is APPEND ONLY, so the entries corrected below are NOT edited in place.
They stand where they are as the record of what was written and when, and THIS
SECTION GOVERNS OVER THEM where the two differ. That is the same mechanism used for
the S58 R8 correction at S59 R3 and for the Law 182 ratification at S65 R2.

### (a) THE FOUR-CATEGORIES SENTENCE IS NOT ON rat-traps

The NEVER TOUCH list records:

    - app/best/rat-traps/page.tsx line 164, the four-categories sentence.

MEASURED AT S67 R1 AND RE-MEASURED AT S67 R6, both times against the working tree:

    grep -c "four categories" app/(uk)/best/rat-traps/page.tsx          -> 0
    grep -c "four categories" app/(uk)/best/cockroach-killers/page.tsx  -> 2, lines 287 and 295

THE PROTECTED SENTENCE LIVES ON /best/cockroach-killers, at lines 287 and 295. It is
the sentence dividing cockroach control into four categories and then naming gel bait
as the most effective of them. It is protected exactly as written, wherever its line
number drifts to: A PROTECTION BINDS BY TEXT, NOT BY LINE NUMBER, and a line number in
this file is a convenience that decays with every edit above it.

rat-traps's OTHER protection is real and stays: "most effective" x3, which are about
BAIT, measured at 3 occurrences on app/(uk)/best/rat-traps/page.tsx at S67 R6.

THIS IS THE SECOND TIME LAW 156 HAS FIRED ON THIS FILE'S OWN CONTENTS. Law 156 was
written because "Best Trusted Brand" was carried as living on /best/mouse-poison for
three sessions when it lives on /best/rat-poison. The same class of error was sitting
four lines below it.

### (b) EVERY `app/best/...` PATH IN THIS FILE IS REALLY `app/(uk)/best/...`

`app/best` DOES NOT EXIST. Measured at S67 R6: the directory is absent, and the real
location is `app/(uk)/best`, holding 50 route directories.

SEVEN LINES IN THIS FILE NAME THE WRONG PATH — the NEVER TOUCH entries for
rat-traps, cockroach-killers and ultrasonic-pest-repellers, the B000BQT5IG bar's
reference to ant-killers, the R40-1 lift's reference to rat-poison, and Law 122's
reference to the pre-commit hook's glob. EVERY ONE OF THEM MEANS `app/(uk)/best/...`.

WHY THIS MATTERS MORE THAN A TYPO. A round that scripts against the recorded paths
finds nothing and may read that silence as "already clean" — a false zero produced by
the rule set rather than by the estate (Law 151 in the governance layer). S67 R4's
brief had to carry the correction inline to stop exactly that.

THE PROTECTIONS THEMSELVES ARE UNAFFECTED AND UNDIMINISHED. They bind by the text
they name, on the route they name, at whatever path that route actually occupies.

## S67 R6 — LAW 189 AND LAW 190 COULD NOT BE RATIFIED

S67 R6 was instructed to ratify LAW 189 and LAW 190 "verbatim from the S66 carryover
text". THAT TEXT DOES NOT EXIST ANYWHERE ON DISK, and the instruction was not carried
out rather than being satisfied with invented wording.

MEASURED, not assumed:

    "LAW 189" / "Law 189" in CLAUDE.md                     0
    "LAW 190" / "Law 190" in CLAUDE.md                     0
    in ~/pestpro-s59-opening-carryover.txt                 0
    in any ~/pestpro-s66-r*.md report (R1 through R8)      0
    any file on disk carrying the text                     none
      (the only hits anywhere are this round's own brief and the S67 R1 and R4
       reports, each of which says the laws are ABSENT)

There is no S66 carryover file; the S66 reports end at R8 and S66 R9 never ran.

CONSEQUENCE, STATED PLAINLY RATHER THAN WORKED AROUND (Law 42). Laws 191 and 192
below are declared at the numbers the ruling gave them, because a ruling that is not
written into this file will be silently reversed (Law 106) and these two are the
governing rules of the round that produced them. THE ENUMERATION THEREFORE CARRIES
GAPS AT 189 AND 190, and M20 reports them. That is a true report of a real hole, not
a defect in M20, and it closes the moment either the missing text is supplied or the
PM rules that these two be renumbered. RENUMBERING IS NOT CC's CALL and was not made.

## S67 R6 — LAW 191: NO EFFICACY CLAIM IN OUR OWN VOICE FOR REPELLENT, DETERRENT OR SCENT PRODUCTS

LAW 191 — NO EFFICACY CLAIM IN OUR OWN VOICE FOR REPELLENT, DETERRENT OR SCENT
PRODUCTS. The ASA/CAP position is that no efficacy claim for this class has been
accepted and marketers without UK-based trial evidence must not state or imply
efficacy. On any such route: no our-voice claim that a product works, repels, deters,
protects or is effective; no superlative or ranking award labels; no rank numerals;
no species-efficacy labels. Card labels are neutral factual descriptors from the
listing. Maker claims appear only framed as the maker's own and listing-traceable.
Caveats and evidence-is-weak passages are kept. The ASA position is reported, never
restated as a finding that the products do not work.

THE SOURCE, FETCHED AND BYTE-VERIFIED AT S67 R2 (Law 164), is the ASA/CAP AdviceOnline
entry "Pest repellents", https://www.asa.org.uk/advice-online/pest-repellents.html:

    "In past years, the ASA, together with independent experts, has closely examined
    the evidence for claims for those devices, which can range from cat-shaped metal
    sheets with glowing eyes to ultrasonic and electromagnetic equipment. It has yet
    to accept any claim of efficacy."

    "Marketers who do not hold evidence in the form of UK-based trials should not
    state or imply efficacy for the products, through either claims, visuals or
    product names."

THE LAST SENTENCE OF THE LAW IS THE ONE MOST EASILY GOT WRONG. "No claim of efficacy
has been accepted" and "these products do not work" are different statements, and the
second is not ours to make. A page that reports the first is accurate; a page that
slides into the second has replaced one unevidenced claim with its mirror image.

## S67 R6 — LAW 192: A PROTECTED STRING PROTECTS THE STRING, NOT THE CLAIM ATTACHED TO IT

LAW 192 — A PROTECTED STRING PROTECTS THE STRING, NOT THE CLAIM ATTACHED TO IT. Where
a NEVER TOUCH label such as "Verdict:" introduces claim content, the label survives
byte-unchanged and its content may be replaced with a neutral factual line. The label
is never deleted; the claim is never preserved on the label's authority.

WHAT THIS COST BEFORE IT EXISTED. At S67 R4 three routes — /best/fox-deterrents,
/best/squirrel-deterrents and /best/bird-deterrents — were STOPPED UNTOUCHED because
fourteen "Verdict:" paragraphs consisted entirely of ranking and efficacy claims, so
deleting the claim meant deleting a NEVER TOUCH string. That was the correct call
under the rules as they stood, and it left fourteen award labels and fourteen verdicts
live for a further round. This law is what makes the same collision resolvable in
place: the label is furniture, the sentence after it is content, and only the content
was ever the compliance problem.

## S67 R6 — THE S67 R4/R5 REPELLENT SWEEP, RECORDED

The S67 R4 and S67 R5 sweep of /best/spider-repellent, /best/cat-deterrents,
/best/ultrasonic-pest-repellers, /best/fox-deterrents, /best/squirrel-deterrents and
/best/bird-deterrents WAS A PM-RULED SCOPED SWEEP ON LIVE ADVERTISING-STANDARDS
EXPOSURE. It was NOT a Law 189 label sweep, it did not amend Law 189, and — as
recorded above — there is no Law 189 for it to have amended.

WHAT IT DID, so a later round does not re-open it as an open question: on all six
routes every award label was replaced with a neutral factual descriptor drawn from
the product's own banked listing, the same string on card, h2, contents and comparison
table; every rank numeral was removed, field and props; every efficacy claim made in
this site's own voice was deleted rather than softened; every caveat, Cons bullet and
evidence-is-weak passage was kept. Titles and H1s are byte-unchanged throughout.
B0072H60MG was removed from /best/mouse-repellent at S67 R3 and B0153BJ7NQ from
/best/cat-deterrents at S67 R5, each because the product's own listing named a
different target species; both remain carded on the route their listing fits.
