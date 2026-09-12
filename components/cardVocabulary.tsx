// SHARED CATEGORY PICTOGRAMS AND SPEC-FIGURE FORMATTING — S74.
//
// EXTRACTED SO THE TWO ESTATES SHARE ONE IMPLEMENTATION RATHER THAN TWO COPIES.
// The US pilot needed the same category marks the UK cards use, and duplicating
// a thirteen-entry keyword map into app/us/components would have guaranteed the
// two drift apart the first time either gains a category. Neither card imports
// the other; both import this.
//
// Nothing about the marks themselves changed in the extraction. The UK render is
// asserted byte-identical before and after.

// ── S72 PILOT — CATEGORY PICTOGRAMS ──────────────────────────────────────────
//
// WHAT THIS REPLACES. Every card previously rendered the SAME 96x96 grey box
// holding one grey outline cube. On a page with nine products the reader met
// nine identical grey squares, which reads as nine failed image loads rather
// than as a design. It was the single most damaging thing on the card.
//
// WHY A PICTOGRAM AND NOT A PHOTOGRAPH. Amazon's terms require product imagery
// to come through live sales-linked API access, which this project does not
// have. A drawn category mark is honest about being a category mark; a stock
// photo of "a mousetrap" would imply it is the product on the card.
//
// THE FAMILY LIST FOLLOWS THE EXISTING badgeFamilies PRECEDENT in this file:
// ordered, first match wins, matched on WORD BOUNDARIES rather than as bare
// substrings, with a deliberate documented fallback. It reads the product name
// and the award label; IT NEVER EDITS EITHER.
const PICTOGRAMS: { test: RegExp; label: string; path: React.ReactNode }[] = [
  {
    test: /\b(snap trap|trap|traps|trapping)\b/i,
    label: "Trap",
    // a sprung bar over a base
    path: (
      <>
        <rect x="4" y="15" width="16" height="5" rx="1" />
        <path d="M6 15V7a2 2 0 0 1 2-2h8" />
        <circle cx="6" cy="15" r="1.4" />
      </>
    ),
  },
  {
    test: /\b(bait station|station|stations|bait box)\b/i,
    label: "Bait station",
    // a closed box with an entry port
    path: (
      <>
        <rect x="3" y="8" width="18" height="11" rx="2" />
        <circle cx="8" cy="15" r="1.8" />
        <path d="M3 11h18" />
      </>
    ),
  },
  {
    test: /\b(spray|aerosol|fogger|ulv)\b/i,
    label: "Spray",
    // a canister with a plume
    path: (
      <>
        <rect x="8" y="8" width="8" height="12" rx="2" />
        <path d="M10 8V5h4v3" />
        <path d="M18 5h2M18 8h3M18 11h2" />
      </>
    ),
  },
  {
    test: /\b(powder|dust|granule|granules)\b/i,
    label: "Powder",
    // a scatter
    path: (
      <>
        <path d="M5 19h14" />
        <circle cx="8" cy="15" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="16" cy="15" r="1" />
        <circle cx="12" cy="17" r="1" />
      </>
    ),
  },
  {
    test: /\b(gel|paste|bait gel)\b/i,
    label: "Gel bait",
    // a syringe
    path: (
      <>
        <path d="M14 5l5 5" />
        <path d="M8.5 10.5l5 5" />
        <rect
          x="6"
          y="10"
          width="10"
          height="5"
          rx="1"
          transform="rotate(45 11 12.5)"
        />
        <path d="M5 19l2-2" />
      </>
    ),
  },
  {
    test: /\b(foam)\b/i,
    label: "Foam",
    path: (
      <>
        <rect x="8" y="10" width="8" height="10" rx="2" />
        <path d="M10 10V6h4v4" />
        <circle cx="18" cy="6" r="1.4" />
        <circle cx="20.5" cy="9" r="1" />
      </>
    ),
  },
  {
    test: /\b(net|netting|mesh)\b/i,
    label: "Netting",
    path: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M4 9h16M4 14h16M9 4v16M14 4v16" />
      </>
    ),
  },
  {
    test: /\b(spike|spikes)\b/i,
    label: "Spikes",
    path: (
      <>
        <path d="M4 19h16" />
        <path d="M7 19V8M12 19V5M17 19V9" />
      </>
    ),
  },
  {
    test: /\b(encasement|encasements|cover|protector|mattress)\b/i,
    label: "Encasement",
    path: (
      <>
        <rect x="3" y="9" width="18" height="9" rx="3" />
        <path d="M3 13h18" />
      </>
    ),
  },
  {
    test: /\b(steamer|steam|heater|heat)\b/i,
    label: "Steam",
    path: (
      <>
        <rect x="6" y="12" width="12" height="8" rx="2" />
        <path d="M9 12V9a3 3 0 0 1 6 0v3" />
        <path d="M10 6c0-1 1-1 1-2M14 6c0-1 1-1 1-2" />
      </>
    ),
  },
  {
    test: /\b(monitor|monitors|detector|indicator)\b/i,
    label: "Monitor",
    path: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 14l3-4 3 3 4-5" />
      </>
    ),
  },
  {
    test: /\b(light trap|lamp|uv|electric|electronic|ultrasonic|repeller)\b/i,
    label: "Electrical",
    path: (
      <>
        <path d="M13 3l-7 10h5l-1 8 7-10h-5z" />
      </>
    ),
  },
  // ── US TOOL CATEGORIES — S74 ─────────────────────────────────────────────
  //
  // ADDED BECAUSE THE FALLBACK RATE WAS MEASURED, NOT GUESSED. The thirteen
  // families above were derived from the UK estate, which cards pest PRODUCTS.
  // The US estate cards TOOLS — spreaders, gloves, caulk, hardware cloth, drain
  // treatments. Run against all 73 US card names, the UK-only map fell back to
  // the generic mark on 38 of them, 52%, which reproduces the very problem the
  // pictograms were introduced to solve: half the cards showing one identical
  // square. These families are read off those 38 names, not invented.
  //
  // They sit BELOW the UK families so nothing above them changes behaviour —
  // first match still wins, and the UK render is asserted byte-identical.
  {
    test: /\b(hardware cloth|wire|fencing|screen|screening|excluder)\b/i,
    label: "Exclusion",
    path: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <path d="M3 9h18M3 14h18M8 4v16M13 4v16M18 4v16" />
      </>
    ),
  },
  {
    test: /\b(caulk|sealant|silicone|plug|repair kit|filler)\b/i,
    label: "Sealant",
    path: (
      <>
        <path d="M4 16l8-8 3 3-8 8H4z" />
        <path d="M14 6l3-3 4 4-3 3z" />
      </>
    ),
  },
  {
    test: /\b(glove|gloves|respirator|goggles|mask|coverall)\b/i,
    label: "Protection",
    path: (
      <>
        <path d="M7 20v-7a1.5 1.5 0 0 1 3 0V6a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1 3 0v4a5 5 0 0 1-5 5z" />
      </>
    ),
  },
  {
    test: /\b(spreader|applicator|hose[- ]end)\b/i,
    label: "Spreader",
    path: (
      <>
        <path d="M6 5h9l2 6H8z" />
        <circle cx="11" cy="17" r="3.5" />
        <path d="M17 11v3" />
      </>
    ),
  },
  {
    test: /\b(tweezers|tongs|forceps|remover)\b/i,
    label: "Tool",
    path: (
      <>
        <path d="M9 3l2 11M15 3l-2 11" />
        <path d="M11 14a2 2 0 0 0 2 0" />
        <path d="M12 16v5" />
      </>
    ),
  },
  {
    test: /\b(flashlight|torch|black light|lantern)\b/i,
    label: "Light",
    path: (
      <>
        <rect x="9" y="9" width="6" height="12" rx="1" />
        <path d="M9 9l-2-5h10l-2 5" />
        <path d="M12 1v2" />
      </>
    ),
  },
  {
    test: /\b(drain treatment|drain|concentrate|lotion|cream|ointment|dunks|bits)\b/i,
    label: "Treatment",
    path: (
      <>
        <path d="M12 3s6 6.5 6 10.5A6 6 0 0 1 6 13.5C6 9.5 12 3 12 3z" />
      </>
    ),
  },
  {
    test: /\b(stake|stakes|tube|tubes)\b/i,
    label: "Stakes",
    path: (
      <>
        <path d="M5 20h14" />
        <path d="M9 20V7l3-3 3 3v13" />
        <path d="M9 11h6" />
      </>
    ),
  },
  {
    test: /\b(meter|gauge|probe)\b/i,
    label: "Meter",
    path: (
      <>
        <rect x="6" y="3" width="12" height="14" rx="2" />
        <path d="M9 7h6M9 11h3" />
        <path d="M12 17v4" />
      </>
    ),
  },
  {
    test: /\b(duster|pole|brush|broom)\b/i,
    label: "Duster",
    path: (
      <>
        <path d="M6 20L15 11" />
        <path d="M14 6l4 4-3 3-4-4z" />
        <path d="M18 3l3 3" />
      </>
    ),
  },
  // A BULK WEIGHT IN THE NAME MEANS A BAG, NOT A BOTTLE. "Ortho BugClear Lawn
  // Insect Killer, 20 lb" carries no container noun and would otherwise fall to
  // the spray bottle below on the words "Insect Killer" — and its own first line
  // calls it "A granular lawn product". Twenty pounds does not come in a trigger
  // spray. This guard sits immediately above the spray bottle and below every
  // other family, so it can only ever intercept something heading for a bottle.
  {
    test: /\b\d+(?:\.\d+)?\s?(?:lb|lbs|pound|pounds)\b/i,
    label: "Granules",
    path: (
      <>
        <path d="M7 21h10l1-9H6z" />
        <path d="M8 12V7a4 4 0 0 1 8 0v5" />
        <circle cx="10" cy="16" r="1" />
        <circle cx="14" cy="17" r="1" />
        <circle cx="12" cy="14" r="1" />
      </>
    ),
  },
  // ── S75 — THE LAST THREE FALLBACKS ───────────────────────────────────────
  //
  // A trigger spray bottle, for liquid pesticides and fabric repellents whose
  // NAMES carry no container or applicator noun — "Ortho Home Defense Insect
  // Killer", "Sawyer Premium Permethrin Insect Repellent". Those three were the
  // entire remaining fallback set after S74.
  //
  // IT IDENTIFIES A CONTAINER, NOT AN OUTCOME. The mark is a bottle; it says
  // what the thing physically is and claims nothing about whether it works. That
  // matters on an estate that deliberately makes no efficacy claims: an icon of
  // a dead insect, or a tick with a line through it, would be an efficacy claim
  // drawn rather than written, and is exactly what this must not be.
  //
  // "killer" IS IN THE MATCHER BECAUSE IT IS IN THE PRODUCT'S OWN NAME, and the
  // matcher reads names verbatim and never edits them. It is a container test,
  // not an endorsement of the word.
  {
    // "repellent" WAS IN THIS TEST AND WAS TAKEN OUT, ON MEASUREMENT. It moved
    // eight UK assignments and six of them were wrong: "Cedarwood Moth Repellent
    // Balls", "Cat Repellent Pellets", "Peppermint Oil Sachets", a prickle strip
    // and a battery-operated sonic unit all became spray bottles. A repellent is
    // a purpose, not a container, and this matcher classifies containers.
    //
    // A NARROWER CANDIDATE SCORED ZERO ON BOTH ESTATES AND WAS REJECTED ANYWAY:
    // requiring "insect killer" plus a gallon or fluid-ounce volume produced 0 US
    // fallbacks and 0 UK movement, but only because it omitted millilitres while
    // admitting gallons. That is choosing the regex to produce the wanted answer,
    // not measuring. This form is used instead, and the one UK card it moves is
    // reported rather than engineered away.
    test: /\b(insect killer|insecticide|permethrin)\b/i,
    label: "Spray bottle",
    path: (
      <>
        <path d="M9 21h6a1 1 0 0 0 1-1v-7a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v7a1 1 0 0 0 1 1z" />
        <path d="M10 10V7h4v3" />
        <path d="M14 5h-4V3h4z" />
        <path d="M14 4h3l2 2" />
      </>
    ),
  },
  {
    test: /\b(poison|rodenticide|bait|block|blocks|sachet|sachets|grain)\b/i,
    label: "Bait",
    path: (
      <>
        <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
        <path d="M9 10h.01M15 10h.01" />
        <path d="M9 15c1.5 1.2 4.5 1.2 6 0" />
      </>
    ),
  },
];

// THE FALLBACK IS A DOCUMENT, NOT A BOX. When nothing matches, the card shows a
// spec-sheet mark — which is what the tile is actually standing in for. It reads
// as "here are the stated details", never as a missing photograph.
const FALLBACK_PICTOGRAM = {
  label: "Product",
  path: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
};

// THE MATCHER READS THE NAME AND THE UK CARD'S AWARD LABEL. IT DOES NOT READ THE
// LONGER DESCRIPTIVE PROSE, AND THAT WAS TESTED RATHER THAN ASSUMED.
//
// S75 tried feeding the US card's `whatItDoes` lines in as a second haystack, so
// that a product stating its own physical form in prose would be classified by
// it. MEASURED ACROSS ALL 73 US CARD NAMES, THAT MOVED 18 ASSIGNMENTS AND MOST
// OF THE MOVES WERE WRONG: a fabric repellent became a Bait station, a granular
// fire-ant bait became a Spray bottle, a tick tube became a Bait station. The
// cause is that first-match-wins over several sentences of prose latches onto
// whatever category word appears incidentally, not onto the product's form.
// The name is short and is about the product; the prose is long and is about the
// advice. Only the name is a reliable signal. (Law 170's corollary: a class-based
// matcher is not automatically a correct one — sweep it against real content.)
export function pictogramFor(name: string, bestFor?: string) {
  const haystack = `${name} ${bestFor ?? ""}`;
  return (
    PICTOGRAMS.find((p) => p.test.test(haystack)) ?? {
      ...FALLBACK_PICTOGRAM,
      test: /(?:)/,
    }
  );
}

// ── SPEC FIGURES ─────────────────────────────────────────────────────────────
//
// Geist Mono's ONLY job on this site is a genuine measured quantity. This
// matcher requires A NUMBER FOLLOWED BY A UNIT, so a bare year or a bare count
// is left in Geist Sans.
//
// CALIBRATED AGAINST THE REAL ESTATE BEFORE USE, not against invented examples:
// over all 1,150 feature strings on the 50 /best routes it matches 229 (20%),
// picking up "300ml", "1 litre", "11g", "20 x 100g"; and its false-positive
// probe — "rebuilt in 2026 by the team" — is SILENT, because 2026 carries no
// unit. A stated false negative beats an unstated false positive (Law 170).
const SPEC_FIGURE =
  /\b\d+(?:[.,]\d+)?\s?(?:g|kg|ml|l|litres?|mm|cm|m|%|W|V)\b|\b\d+(?:[.,]\d+)?\s?[x×]\s?\d+(?:[.,]\d+)?(?:\s?[x×]\s?\d+(?:[.,]\d+)?)?\s?(?:g|kg|ml|mm|cm|m)?\b/gi;

export function withSpecFigures(text: string): React.ReactNode {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(SPEC_FIGURE)) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    out.push(
      <span key={`${i}-${m[0]}`} className="spec-figure">
        {m[0]}
      </span>,
    );
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length ? out : text;
}

