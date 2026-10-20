---
version: 1
slug: "app-uk-home-homeclient-tsx"
primary_target: "app/(uk)/(home)/HomeClient.tsx"
related_targets: ["app/(uk)/pest-control","app/(uk)/provider","app/(uk)/professionals","components/Navigation.tsx","components/Footer.tsx"]
---

# Surface brief: UK directory estate (home, area pages, firm cards, profile, For Professionals, chrome)

Scope: homepage (Persuade), area/borough pages and firm profiles (Operate), For Professionals (Persuade). Header and footer shared.
Audience/job: a householder or business with a pest problem, mostly on a phone, wants a local independent firm to call now. Firms want a listing / Featured spot.
Constraints: URLs, Supabase data, SEO meta, local-only wording, no-national-chains disclaimer, Stripe links, Featured set unchanged (North West Pest Away UK Ltd only).

## Direction contract
THESIS: The estate is a modern printed local directory. Area name set huge as a running head, firms as ruled entries with the phone number as the loudest thing on the line. Refuses the blue gradient hero, floating search box, and grid of shadowed rounded cards.
OWN-WORLD: White stock, deep ink-green type (#12241d family), hairline ink rules, one marigold accent (#f2b705 family) that owns the area tab, the active state and the Featured wash. Archivo variable: condensed heavy for display and phone numbers, normal width for text. Tabular numerals. Square-ish 4px corners. No emoji, no icon tiles.
STORY: Visitor sees their area, understands every firm is local and independent, calls one in one tap. Pros see an honest paid slot and a clear price.
FIRST VIEWPORT: Home: "Local pest control, from local people" set large left; beneath, an A–Z area index (ruled list, counts right-aligned) begins inside the viewport; domestic/commercial split as two ruled lines. Area: marigold tab with region, area name at display scale, count line, disclaimer; Featured entry then ruled list starts above the fold on desktop. Primary action: Call button on each entry.
FORM: Local directory, rebuilt; position 4 of 7 on the ordered list; seed key c54cec95. Raises: one level legend (Top rated) on every list page; empty states designed; strict equal-rhythm entry rows. Signature motion: rules draw in left-to-right as entries enter; area running head pins as a slim tab on scroll.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
