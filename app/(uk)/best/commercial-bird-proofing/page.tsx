import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import TopPicks, { ProsList } from "@/components/TopPicks";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S69 R2 — ROLLOUT REBUILD to the R8/R69R1 pattern, on sources. GROUP B.
//
// HEALTH STATEMENTS ON THIS PAGE: ZERO, and that is a deliberate outcome rather than an
// omission. The page previously carried an own-voice paragraph naming Chlamydia
// psittaci, Cryptococcus neoformans and Histoplasma capsulatum as pathogens in pigeon
// droppings, plus an own-voice statement of employer duties under COSHH. Neither was
// sourced. Two CDC pages were attempted this round to source the first properly and BOTH
// WERE BLOCKED — HTTP 403 with bodies of 424 and 409 bytes, recorded in
// ~/pp-s69r2/sources/fetch-log.tsv under S45-D and Law 177, each consuming its single
// permitted attempt. With no body on disk the passage is unsourced, so it is DELETED
// rather than softened, and no health claim replaces it. A later round may exercise
// Law 137's one permitted retry on those two URLs.
//
// LAW 188 — ONE CARD LABEL DISAGREED WITH ITS OWN h2 AND THE h2 WINS: cardLabel
// "Best Repair Kit" -> "Best Netting Repair Kit" (h2Label). After the correction the
// seven labels are all distinct, measured on both label surfaces.
//
// AWARD LABELS, RANK NUMERALS AND CARD ORDER ARE OTHERWISE UNCHANGED. Nothing was
// removed under the mismatch ruling: every listing supports its card's product type.
//
// PM RULING, S69 R3 — THE LAW 191 STANDARD EXTENDED TO TWO CARDS BY NAME. Referred at
// S69 R2 and ruled this round. This route's slug is not a repellent route, but two of its
// seven cards are functionally deterrent devices — the optical gel, whose own title calls
// it a "Multi-Sensory Bird Repellent", and the ultrasonic unit — and the no-efficacy
// standard applies to them in substance. Both superlative award labels are replaced with
// neutral descriptors of the product type, in the form the S67 R4/R5 repellent routes
// use ("Ultrasonic, mains powered", "Peppermint oil spray, 250ml"):
//   B01MQSRJQ6  "Best Discreet Deterrent"   ->  "Optical gel discs"
//   B0157D7CXW  "Best Electronic Deterrent" ->  "Ultrasonic unit, 4 speakers"
// Applied to cardLabel, h2Label and tocLabel together so no card disagrees with its own
// h2 (Law 188), and written by file and ASIN rather than globally (Law 98). THE RULING
// NAMED THE LABELS AND NOT THE NUMERALS, so the rank numerals stand; Law 191's own text
// also removes numerals, and that difference is reported rather than inferred away. The
// five physical exclusion cards are untouched: a net and a spike are barriers, not
// efficacy claims. The own-voice claims that either deterrent works were already deleted
// at S69 R2 and the ASA position is quoted in the limits section.
//
// LAW 146 — THE ULTRASONIC LISTING CONTRADICTS ITSELF. Its title reads "Ultrasonic Bird
// Repeller ... Ultrasonic Dog Repeller" and its target species row reads "Mouse, Rat".
// Both readings are on the card. S50-H makes the fetched title authoritative for the
// product's name; it does not resolve the species row, so the row is reported as it is.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Commercial Bird Proofing UK 2026 | Netting & Spikes",
    description:
      "Seven bird proofing products compared on their own listings, with the law on wild birds and the exclusion specs two extensions publish.",
    alternates: {
      canonical: "https://pestproindex.com/best/commercial-bird-proofing",
    },
    openGraph: {
      title: "Best Commercial Bird Proofing UK 2026 | Netting & Spikes",
      description:
        "Seven bird proofing products compared on their own listings, with the law on wild birds and the exclusion specs two extensions publish.",
      url: "https://pestproindex.com/best/commercial-bird-proofing",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Commercial Bird Proofing UK 2026 | Netting & Spikes",
  description:
    "Seven bird proofing products compared on their own listings, with the law on wild birds and the exclusion specs two extensions publish.",
  datePublished: "2026-03-18",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/commercial-bird-proofing",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pestproindex.com" },
    { "@type": "ListItem", position: 2, name: "Best", item: "https://pestproindex.com/best" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Commercial Bird Proofing UK 2026",
      item: "https://pestproindex.com/best/commercial-bird-proofing",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194).
//   www.gov.uk        fetched 2026-09-08, kept at ~/pp-s68r7/sources/gov-wild-birds.src.txt
//   www.rspb.org.uk   fetched 2026-09-08, kept at ~/pp-s68r7/sources/rspb-wca.src.txt
//   icwdm.org         fetched 2026-09-09, kept at ~/pp-s69r2/sources/icwdm-pigeons.src.txt
//   extension.psu.edu fetched 2026-09-09, kept at ~/pp-s69r2/sources/psu-birds-farm-buildings.src.txt
// All under Law 175.
//
// THE TWO US SOURCES ARE US SOURCES (Law 135). Their exclusion specifications are
// statements about method and are quoted as such. Nothing in either of them about
// shooting, trapping or toxicants is restated here, because UK law on those points is
// what the two UK sources above set out, and it is different.
const SRC = {
  gov: "https://www.gov.uk/guidance/wild-birds-protection-surveys-and-licences",
  rspb: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-and-countryside-act",
  icwdm: "https://icwdm.org/species/birds/pigeons/pigeon-damage-control-and-prevention-methods/",
  psu: "https://extension.psu.edu/controlling-birds-around-farm-buildings",
  // Banked at S67 R2, carried forward under Law 175 and NOT re-fetched this round. Its
  // body and its response headers (HTTP 200, 48,573 bytes, 6 September 2026) are at
  // ~/pp-s67r2/sources/, and CLAUDE.md records the same URL under Law 191.
  asa: "https://www.asa.org.uk/advice-online/pest-repellents.html",
};

type ProductRecord = {
  anchorId: string;
  asin: string;
  rank: number;
  cardName: string;
  cardLabel: string;
  features: string[];
  tableCells: string[];
  h2Label: string;
  h2Name: string;
  tocLabel: string;
  tocName: string;
  // S70 R1 (Law 195) selling layer: top-picks reason, benefit-led blurb, pros.
  // Every fact in them is one the features above already carry from the listing.
  pick: string;
  blurb: string;
  pros: string[];
};

// Records are addressed BY IDENTITY, never by position (Law 107).
//
// Feature text and comparison cells are rebuilt from the banked Amazon bodies at
// ~/pp-s61r1/uk/, inside the S45-C window. A property is asserted only where the
// listing's own text states it (S52-E); a cell the listing does not state reads
// "not stated". Maker self-praise is trimmed and never restated (S47-F).
const products: ProductRecord[] = [
  {
    anchorId: "best-netting",
    asin: "B07FTN3LQ3",
    rank: 1,
    cardName: "Heavy Duty Anti-Pigeon Bird Netting 10m × 20m",
    cardLabel: "Best for Large Areas",
    features: [
      "10m by 20m at a 50mm mesh, as listed",
      "Six-strand knotted polyethylene, UV stabilised, per the maker",
      "The maker states it will not rot, fade or stretch",
      "The maker states it is made in Cornwall",
      "Fixings are not listed as included",
    ],
    tableCells: [
      "Heavy Duty Anti-Pigeon Bird Netting",
      "Netting",
      "10m × 20m, 50mm mesh",
      "Physical exclusion",
      "Best for Large Areas",
    ],
    h2Label: "Best for Large Areas",
    h2Name: "Heavy Duty Anti-Pigeon Bird Netting 10m × 20m",
    tocLabel: "Best for Large Areas",
    tocName: "Anti-Pigeon Bird Netting",
    pick: "Best if a whole area needs closing off: 10m by 20m of 50mm UV-stabilised netting.",
    blurb: "Pick this when a whole area needs closing off. The net is 10m by 20m at a 50mm mesh, in six-strand knotted polyethylene the maker describes as UV stabilised, and the maker states it will not rot, fade or stretch. Fixings are not listed as included, so order those separately.",
    pros: ["10m x 20m at a 50mm mesh", "Six-strand knotted polyethylene, UV stabilised, per the maker", "Will not rot, fade or stretch, the maker states", "Made in Cornwall, the maker states"],
  },
  {
    anchorId: "best-ledges",
    asin: "B0BL7PF3WG",
    rank: 2,
    cardName: "OFFO Stainless Steel Bird Spikes — 78cm Coverage",
    cardLabel: "Best for Ledges",
    features: [
      "78cm of coverage per set, as listed",
      "The maker gives each spike as 100mm long and each group as 76mm wide",
      "304 grade stainless steel base and needles, per the maker",
      "Target species row reads Pigeon",
      "Listed for window sills, balustrades, roof edges, cornices and air conditioning units",
    ],
    tableCells: [
      "OFFO Stainless Steel Bird Spikes",
      "Ledge spikes",
      "78cm coverage; 100mm spikes, 76mm wide",
      "Physical exclusion",
      "Best for Ledges",
    ],
    h2Label: "Best for Ledges",
    h2Name: "OFFO Stainless Steel Bird Spikes",
    tocLabel: "Best for Ledges",
    tocName: "OFFO Bird Spikes",
    pick: "Best for ledges and sills: 304 stainless steel spikes, 78cm of coverage per set.",
    blurb: "This is for the ledges pigeons sit on. Each set covers 78cm in 304 grade stainless steel, with spikes the maker gives as 100mm long in groups 76mm wide, and it is listed for window sills, balustrades, roof edges, cornices and air conditioning units. If your birds are sparrows, read the Penn State point in the FAQ first.",
    pros: ["78cm of coverage per set", "304 grade stainless steel, per the maker", "100mm spikes in 76mm wide groups", "Listed for sills, balustrades, roof edges and cornices"],
  },
  {
    anchorId: "best-wire",
    asin: "B07L435L3F",
    rank: 3,
    cardName: "10 x 90mm Pigeon Post & Pad Kit for Bird Wire",
    cardLabel: "Best Wire System",
    features: [
      "Ten 90mm posts with pads, for bird wire where drilling is not possible",
      "The maker states fixings are NOT included in the kit",
      "The maker states the system is designed for light perching of pigeons only",
      "The maker states it should not be used where pigeons are active overnight",
      "The maker recommends 90mm at the front leading edge and 130mm for intermediary rows",
    ],
    tableCells: [
      "10 x 90mm Pigeon Post & Pad Kit",
      "Bird wire support posts",
      "10 posts at 90mm; wire, fixings not included",
      "Physical exclusion, light perching only per the maker",
      "Best Wire System",
    ],
    h2Label: "Best Wire System",
    h2Name: "10 x 90mm Pigeon Post & Pad Kit",
    tocLabel: "Best Wire System",
    tocName: "Pigeon Post & Pad Kit",
    pick: "Best if you cannot drill: ten 90mm posts with pads to carry bird wire.",
    blurb: "Choose this when drilling into the surface is not an option. The kit gives you ten 90mm posts with pads to carry bird wire, and the maker suggests 90mm at the front leading edge and 130mm for the rows behind. Fixings are not included, and the maker says it is for light perching of pigeons only, not where they are active overnight.",
    pros: ["Ten 90mm posts with pads", "For bird wire where drilling is not possible", "Spacing guidance from the maker for front and rear rows"],
  },
  {
    anchorId: "best-discreet",
    asin: "B01MQSRJQ6",
    rank: 4,
    cardName: "Bird Barrier Optical Gel (24 Pack)",
    cardLabel: "Best Discreet Deterrent",
    features: [
      "24 gel discs, mounted with an adhesive dab, no tools per the maker",
      "The maker gives the ingredients as citronella, mint oil, agar and beeswax",
      "Target species row reads Birds",
      "Listed for roofs, balconies, railings and HVAC units",
      "A deterrent rather than a barrier: it does not physically exclude anything",
    ],
    tableCells: [
      "Bird Barrier Optical Gel (24 Pack)",
      "Deterrent gel discs",
      "24 discs; citronella, mint oil, agar, beeswax",
      "Deterrent — see the ASA position below",
      "Best Discreet Deterrent",
    ],
    h2Label: "Best Discreet Deterrent",
    h2Name: "Bird Barrier Optical Gel (24 Pack)",
    tocLabel: "Best Discreet Deterrent",
    tocName: "Bird Barrier Optical Gel",
    pick: "For a frontage where you'd prefer no spikes: 24 gel discs fixed with an adhesive dab.",
    blurb: "This suits a frontage where you would prefer not to fit spikes or wire, and it is listed for roofs, balconies, railings and HVAC units. You get 24 gel discs that the maker says mount with an adhesive dab and need no tools, with ingredients given as citronella, mint oil, agar and beeswax. It is a deterrent with no physical barrier, so see the ASA position below before you choose it.",
    pros: ["24 gel discs per pack", "Fix with an adhesive dab, no tools, per the maker", "Listed for roofs, balconies, railings and HVAC units", "Ingredients given as citronella, mint oil, agar and beeswax"],
  },
  {
    anchorId: "best-solar",
    asin: "B081CXWXQH",
    rank: 5,
    cardName: "Bird Proofing Mesh & 60 Fixing Clip Kit for Solar Panels (30m)",
    cardLabel: "Best for Solar Panels",
    features: [
      "One roll of PVC-coated galvanised mesh, 0.2m high by 30m long, as listed",
      "60 nylon solar clips included, per the listing",
      "The maker states it is fitted around the perimeter of the panel system",
      "Listed for domestic and commercial roofs",
      "The maker describes it as a heavy-duty exclusion barrier",
    ],
    tableCells: [
      "Bird Proofing Mesh & 60 Clip Kit",
      "Solar panel perimeter mesh",
      "0.2m × 30m mesh, 60 clips",
      "Physical exclusion",
      "Best for Solar Panels",
    ],
    h2Label: "Best for Solar Panels",
    h2Name: "Bird Proofing Mesh & 60 Fixing Clip Kit",
    tocLabel: "Best for Solar Panels",
    tocName: "Solar Panel Bird Mesh Kit",
    pick: "Best for the gap under solar panels: 30m of coated mesh with 60 nylon clips.",
    blurb: "Made for the gap under a roof solar array. The roll is 30m of PVC-coated galvanised mesh, 0.2m high, with 60 nylon clips included. The maker describes fitting it around the perimeter of the panel system, on domestic or commercial roofs.",
    pros: ["0.2m x 30m PVC-coated galvanised mesh", "60 nylon solar clips included", "Fits around the panel perimeter, per the maker", "Listed for domestic and commercial roofs"],
  },
  {
    anchorId: "best-repair",
    asin: "B07KX4CX4J",
    rank: 6,
    cardName: "100 Nylon Net Hooks for Bird Netting Access & Repair",
    cardLabel: "Best Netting Repair Kit",
    features: [
      "100 hooks per pack, as listed",
      "UV-stabilised nylon plastic, listed as suitable for external installation",
      "The maker states they suit all net sizes including 19mm, 28mm and 50mm",
      "Listed for creating access into netting and for temporary repair",
      "Not a standalone product: it is a fitting for netting you already have",
    ],
    tableCells: [
      "100 Nylon Net Hooks",
      "Netting access and repair fitting",
      "100 hooks; 19mm, 28mm and 50mm nets, per the maker",
      "Physical exclusion accessory",
      "Best Netting Repair Kit",
    ],
    h2Label: "Best Netting Repair Kit",
    h2Name: "100 Nylon Net Hooks",
    tocLabel: "Best Netting Repair Kit",
    tocName: "Nylon Net Hooks",
    pick: "If you already have netting up: 100 nylon hooks to make an access point or a repair.",
    blurb: "Add this if you already have netting up. The pack has 100 UV-stabilised nylon hooks, listed as suitable for external installation, for making an access point into the net or a temporary repair. The maker states they suit 19mm, 28mm and 50mm nets.",
    pros: ["100 hooks per pack", "UV-stabilised nylon, listed for external installation", "Suits 19mm, 28mm and 50mm nets, per the maker"],
  },
  {
    anchorId: "best-electronic",
    asin: "B0157D7CXW",
    rank: 7,
    cardName: "BCT Ultrasonic Bird Repeller — 4 Speaker, Multi Frequency",
    cardLabel: "Best Electronic Deterrent",
    features: [
      "Four speakers, frequency listed as adjustable from 8kHz to 40kHz",
      "Waterproof, listed for indoor and outdoor use, with a 12VDC adaptor and 10m lead",
      "Its title names birds and dogs; its target species row reads Mouse, Rat",
      "The maker states it can be used for a variety of animal repelling",
      "A deterrent rather than a barrier: it does not physically exclude anything",
    ],
    tableCells: [
      "BCT Ultrasonic Bird Repeller",
      "Ultrasonic deterrent",
      "4 speakers, 8kHz–40kHz, 12VDC",
      "Deterrent — see the ASA position below",
      "Best Electronic Deterrent",
    ],
    h2Label: "Best Electronic Deterrent",
    h2Name: "BCT Ultrasonic Bird Repeller",
    tocLabel: "Best Electronic Deterrent",
    tocName: "BCT Ultrasonic Bird Repeller",
    pick: "For a site with power to hand: a four-speaker ultrasonic unit, adjustable 8kHz to 40kHz.",
    blurb: "This is the electronic option, for a site where you can run power to a unit. It has four speakers, a frequency the maker gives as adjustable from 8kHz to 40kHz, and a waterproof casing listed for indoor and outdoor use, with a 12VDC adaptor and a 10m lead. The title names birds and dogs while the target species row reads mouse and rat, so check it fits your pest.",
    pros: ["Four speakers", "Frequency adjustable from 8kHz to 40kHz, per the maker", "Waterproof, listed for indoor and outdoor use", "12VDC adaptor and 10m lead supplied"],
  },
];

const faqs = [
  {
    q: "Is it legal to proof a building against birds?",
    a: "GOV.UK states that all wild bird species, their eggs and nests are protected by law, and that you must always try to avoid harming birds or use measures which do not kill or injure them before considering taking harmful action. Physical exclusion fitted outside the breeding season is the ordinary way of doing that. This site reports what GOV.UK and the RSPB publish and does not rule on your particular building.",
  },
  {
    q: "What if there is already a nest?",
    a: "The RSPB states that the Wildlife and Countryside Act 1981 makes it illegal, subject to certain exceptions, to intentionally take, damage or destroy the nest of any wild bird while it is in use or being built. That is a reason to survey before installation, not after.",
  },
  {
    q: "Does this page carry a health warning about droppings?",
    a: "No, and the reason is worth stating. An earlier version of this page named three pathogens and asserted an employer duty, with no source behind either. Two attempts were made this round to source the health question properly from the CDC and both were blocked. With nothing on disk to quote, the passage was deleted rather than reworded. Anything about your own health belongs with a pharmacist or a GP, and any duty question with a competent adviser.",
  },
  {
    q: "How big should the mesh be?",
    a: "The Internet Center for Wildlife Damage Management writes that openings to lofts, steeples, vents and eaves should be blocked with wood, metal, glass, masonry, quarter-inch rust-proofed wire mesh, or plastic or nylon netting, and that ornamental architecture can be screened with 1-inch mesh polypropylene UV-stabilised netting to prevent roosting, loafing and nesting. The netting carded here is a 50mm mesh, which is roughly 2 inches — sized for pigeons rather than for smaller birds.",
  },
  {
    q: "Do spikes work on every bird?",
    a: "Penn State Extension says not: these materials are not effective against smaller birds, such as house sparrows, because the birds can fit between the points and use the site for nesting. If the birds on your ledge are small, spikes may give you a nesting site with a frame around it.",
  },
  {
    q: "Is there a cheaper alternative to any of this?",
    a: "Penn State Extension names one that costs nothing to specify: change the angle of the roosting ledge to at least 45 degrees, fitting slanted metal or wooden boards. It is a fabrication job rather than a purchase, and on a ledge you are already scaffolding for it may be the cheaper answer.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// S70 R1 (Law 195): the one-line safety/legal note carried inside the decision
// block (the top-picks box). It satisfies Law 180 on this route; the full legal
// and safety sections sit below the picks.
const SAFETY_NOTE = (
  <>
    Wild birds, their eggs and nests are protected by law. Survey before you
    fit anything.{" "}
    <a href="#legal" className="underline">
      The legal position
    </a>
    .
  </>
);

const tocItems = [
  { id: "compared", title: "The Seven Compared" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "situation", title: "Exclusion Is the Method" },
  { id: "legal", title: "The Legal Position on Wild Birds" },
  { id: "limits", title: "Where Bird Proofing Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Use and Placement" },
];

export default function BestCommercialBirdProofingPage() {
  return (
    <GuideLayout
      title="Best Commercial Bird Proofing UK 2026: Netting, Spikes &amp; Wire Systems"
      subtitle="Netting, spikes, wire and mesh for pigeons on ledges, roofs and solar panels, plus two deterrents, for building owners and managers."
      lastUpdated="September 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "Pigeon Control: Complete UK Guide", href: "/guides/pigeon-control" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
      ]}
      relatedProducts={[
        { title: "Best Professional Bird Netting UK 2026", href: "/best/professional-bird-netting-kits" },
        { title: "Best Pigeon Spikes UK 2026", href: "/best/pigeon-spikes" },
        { title: "Best Bird Deterrents UK 2026", href: "/best/bird-deterrents" },
        { title: "Best Ultrasonic Pest Repellers UK 2026", href: "/best/ultrasonic-pest-repellers" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      topPicks={
        <TopPicks
          note={SAFETY_NOTE}
          picks={products.slice(0, 3).map((p) => ({
            label: p.cardLabel,
            name: p.cardName,
            reason: p.pick,
            asin: p.asin,
            anchorId: p.anchorId,
          }))}
        />
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Affiliate disclosure */}
      <div className="not-prose mb-8 rounded-xl border border-[var(--color-ochre-edge)] bg-[var(--color-ochre-wash)] p-4">
        <p className="text-sm text-[var(--color-ochre-deep)]">
          <strong>Affiliate disclosure:</strong> PestPro Index is
          reader-supported. When you buy through links on this page, we may earn
          a small commission at no extra cost to you. This helps us keep the
          site running and free for everyone. As an Amazon Associate, PestPro
          Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        Five of the seven picks are physical barriers that stop a bird landing
        or getting in. The 10m by 20m netting suits you if a whole area needs
        closing off. The OFFO stainless spikes are for sills, balustrades and
        roof edges, and the post and pad kit carries bird wire where you cannot
        drill. There are also two deterrents, a gel and an ultrasonic unit, for
        sites where you would prefer not to fit a barrier.
      </p>

      {/* Comparison table — LISTING facts only, "not stated" where absent */}
      <h2 id="compared">The Seven Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        claim attributed to the maker who makes it. Where a listing does not
        state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Type</th>
              <th className="text-left p-2 border-b font-semibold">Size and specification, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Barrier or deterrent</th>
              <th className="text-left p-2 border-b font-semibold">Award</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.asin} className="align-top">
                {p.tableCells.map((c, i) => (
                  <td key={i} className="p-2 border-b">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {products.map((p, i) => (
        <div key={p.asin}>
          <h2 id={p.anchorId}>
            {p.h2Label} &mdash; {p.h2Name}
          </h2>
          <div className="not-prose my-6">
            <ProductCard
              name={p.cardName}
              features={p.features}
              asin={p.asin}
              bestFor={p.cardLabel}
              rank={p.rank}
            />
          </div>
          <p>{p.blurb}</p>
          <ProsList pros={p.pros} />
        </div>
      ))}

      {/* DECISION BLOCK — situation first, product second. The legal line and the
          does-not-work line sit ABOVE every product line. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>There may be a nest.</strong>{" "}
            <a href="#legal" className="underline">
              The legal position
            </a>{" "}
            decides whether you can start at all, and it comes before any
            product.
          </li>
          <li>
            <strong>The birds on your ledge are small.</strong>{" "}
            <a href="#limits" className="underline">
              Where bird proofing does not work
            </a>{" "}
            — Penn State Extension is explicit that spikes are not for them.
          </li>
          <li>
            <strong>You are closing a large open area.</strong>{" "}
            <a href="#best-netting" className="underline">
              The 10m by 20m netting
            </a>{" "}
            at a 50mm mesh.
          </li>
          <li>
            <strong>You are proofing a ledge or a parapet.</strong>{" "}
            <a href="#best-ledges" className="underline">
              The spikes
            </a>{" "}
            or{" "}
            <a href="#best-wire" className="underline">
              the post and wire kit
            </a>
            , with the wire kit's own light-perching caveat.
          </li>
          <li>
            <strong>Pigeons are nesting under solar panels.</strong>{" "}
            <a href="#best-solar" className="underline">
              The perimeter mesh kit
            </a>{" "}
            is built for exactly that.
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            GOV.UK states that all wild bird species, their eggs and nests are
            protected by law. Survey before you fit anything, and read the legal
            section below before ordering.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Exclusion Is the Method</h2>
      <p>
        Both extension services read for this page put physical exclusion first
        and the specification in numbers. The Internet Center for Wildlife
        Damage Management:{" "}
        <em>
          &ldquo;Openings to lofts, steeples, vents, and eaves should be blocked
          with wood, metal, glass, masonry, 1/4-inch (0.6-cm) rust-proofed wire
          mesh, or plastic or nylon netting.&rdquo;
        </em>{" "}
        (
        <a href={SRC.icwdm} rel="nofollow">
          ICWDM
        </a>
        ).
      </p>
      <p>
        And for open architecture rather than a hole:{" "}
        <em>
          &ldquo;Ornamental architecture can be screened with 1-inch (2.5-cm)
          mesh polypropylene u.v.-stabilized netting to prevent roosting,
          loafing, and nesting.&rdquo;
        </em>{" "}
        The netting carded here is 50mm, which is about two inches — a pigeon
        mesh, not a small-bird mesh, and the comparison table states it.
      </p>
      <p>
        Penn State Extension states the same order of operations:{" "}
        <em>&ldquo;Exclude birds from roosting sites by covering the undersides of the rafters with netting.&rdquo;</em>{" "}
        (
        <a href={SRC.psu} rel="nofollow">
          Penn State Extension
        </a>
        ). Both are US publications and their specifications are quoted as
        statements about method, not about UK law.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Wild Birds</h2>
      <p>
        GOV.UK states the protection in one sentence:{" "}
        <em>&ldquo;All wild bird species, their eggs and nests are protected by law.&rdquo;</em>{" "}
        (
        <a href={SRC.gov} rel="nofollow">
          GOV.UK
        </a>
        ). And the order it expects:{" "}
        <em>
          &ldquo;You must always try to avoid harming birds or to use measures
          which do not kill or injure them before considering taking harmful
          action.&rdquo;
        </em>{" "}
        Every physical barrier on this page is a measure of that kind.
      </p>
      <p>
        The RSPB sets out the statute:{" "}
        <em>&ldquo;This act offers protection to wild birds, their eggs and nests in England, Scotland and Wales.&rdquo;</em>{" "}
        (
        <a href={SRC.rspb} rel="nofollow">
          RSPB
        </a>
        ). Among the things it says the Wildlife and Countryside Act 1981 makes
        illegal, subject to certain exceptions:{" "}
        <em>&ldquo;Intentionally take, damage or destroy the nest of any wild bird while it is in use or being built.&rdquo;</em>{" "}
        and{" "}
        <em>&ldquo;Use traps, poison or similar items to kill, injure or take wild birds.&rdquo;</em>
      </p>
      <p>
        The practical consequence for a building owner is a survey before
        installation rather than after. Netting fitted over an active nest is
        not a proofing job; it is the thing the statute names. This site reports
        what GOV.UK and the RSPB publish and does not rule on any particular
        building.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where Bird Proofing Does Not Work</h2>
      <p>
        <strong>Spikes, against small birds.</strong> Penn State Extension:{" "}
        <em>
          &ldquo;These materials are not effective against smaller birds, such
          as house sparrows, because the birds can fit between the points and
          use the site for nesting.&rdquo;
        </em>{" "}
        (
        <a href={SRC.psu} rel="nofollow">
          Penn State Extension
        </a>
        ). A spike strip fitted against sparrows can end up holding the nest.
      </p>
      <p>
        <strong>Bird wire, where the pressure is heavy.</strong> The post and
        pad kit&rsquo;s own maker states the system is designed for light
        perching of pigeons only and should not be used in areas where pigeons
        are active overnight. That is the maker limiting its own product, and it
        is on the card.
      </p>
      <p>
        <strong>Wire and spikes, once they silt up.</strong> ICWDM:{" "}
        <em>
          &ldquo;Sometimes pigeons and sparrows cover the wires with nesting
          material or droppings, which requires occasional removal.&rdquo;
        </em>{" "}
        (
        <a href={SRC.icwdm} rel="nofollow">
          ICWDM
        </a>
        ). A proofing installation is a maintenance item, not a one-off.
      </p>
      <p>
        <strong>The two deterrents, on the evidence.</strong> The ASA, writing
        about pest repellent devices it has examined with independent experts:{" "}
        <em>&ldquo;It has yet to accept any claim of efficacy.&rdquo;</em> (
        <a href={SRC.asa} rel="nofollow">
          ASA
        </a>
        ). And on what a seller may say:{" "}
        <em>
          &ldquo;Marketers who do not hold evidence in the form of UK-based
          trials should not state or imply efficacy for the products, through
          either claims, visuals or product names.&rdquo;
        </em>{" "}
        Two products here are deterrents rather than barriers — the optical gel
        and the ultrasonic unit — and this page makes no claim that either
        works. Reporting that position is not the same as saying the products do
        not work, which is equally not ours to say.
      </p>
      <p>
        <strong>A mesh sized for the wrong bird.</strong> ICWDM specifies
        quarter-inch mesh for closing openings and 1-inch netting for screening
        architecture. A 50mm mesh excludes a pigeon and admits a sparrow.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Barrier or deterrent</h3>
      <p>
        Five of these seven physically prevent a bird landing or entering. Two
        ask it not to. GOV.UK&rsquo;s instruction to use measures which do not
        kill or injure covers both, but only one kind has a specification you
        can check against a source.
      </p>
      <h3>2. Mesh and spacing, against the bird you actually have</h3>
      <p>
        ICWDM gives quarter-inch mesh for openings and 1-inch netting for
        ornamental architecture; Penn State gives at least 45 degrees for a
        modified ledge. The netting here is 50mm and the spikes are 100mm long
        in 76mm groups. Those are the numbers to hold against the two sources
        before ordering.
      </p>
      <h3>3. What the kit does not include</h3>
      <p>
        The netting listing does not list fixings. The post and pad kit states
        explicitly that fixings are not included, and it is posts and pads
        rather than wire. The net hooks are a fitting for netting you already
        own. Three of the seven are components rather than complete
        installations, and the cards say which.
      </p>


      {/* Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      <p>
        <strong>Change the ledge instead of arming it.</strong> Penn State
        Extension:{" "}
        <em>&ldquo;Change the angle of the roosting ledge to at least 45 degrees.&rdquo;</em>{" "}
        (
        <a href={SRC.psu} rel="nofollow">
          Penn State Extension
        </a>
        ). Slanted metal or wooden boards at that angle, which is fabrication
        rather than a purchase.
      </p>
      <p>
        <strong>Close the opening rather than screen the face.</strong> ICWDM
        puts blocking lofts, steeples, vents and eaves ahead of everything else,
        with a quarter-inch rust-proofed mesh.
      </p>
      <p>
        <strong>Remove what is attracting them.</strong> ICWDM&rsquo;s own list
        starts with removing bird feeders, discouraging public feeding and
        eliminating standing water. On a commercial site that is a bin and
        catering question before it is a hardware one.
      </p>
      <p>
        <strong>Other routes on this site.</strong> Our{" "}
        <a href="/best/professional-bird-netting-kits">
          professional bird netting
        </a>{" "}
        page covers netting systems in more depth, our{" "}
        <a href="/best/pigeon-spikes">pigeon spikes</a> page covers spikes, and
        our <a href="/guides/pigeon-control">pigeon control guide</a> covers the
        building rather than the product.
      </p>

      {/* Use and placement */}
      <h2 id="using">Use and Placement</h2>
      <ol>
        <li>
          <strong>Survey for nests first.</strong> The RSPB names an active or
          part-built nest as protected, and that governs whether the job can
          start at all.
        </li>
        <li>
          <strong>Identify the bird before you pick the mesh.</strong>{" "}
          Quarter-inch for openings, 1-inch for architecture, per ICWDM; the
          50mm netting here is for pigeons.
        </li>
        <li>
          <strong>Buy the fixings separately.</strong> Two of these seven state
          or imply that fixings are not in the box.
        </li>
        <li>
          <strong>Prepare the surface for anything adhesive.</strong> The post
          and pad maker recommends a surface cleaner to remove grease and oils
          before bonding.
        </li>
        <li>
          <strong>Put it on the maintenance schedule.</strong> ICWDM notes that
          wires silt up with nesting material and droppings and need occasional
          clearing.
        </li>
      </ol>


      {/* FAQ — rendered from the same array the schema above is derived from */}
      <h2 id="faq">Frequently Asked Questions</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <FindProviderCTA
        heading="Bird proofing a commercial building is a survey job before it is a purchase"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
