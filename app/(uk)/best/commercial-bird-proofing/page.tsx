import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
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
    ],
    h2Label: "Best for Large Areas",
    h2Name: "Heavy Duty Anti-Pigeon Bird Netting 10m × 20m",
    tocLabel: "Best for Large Areas",
    tocName: "Anti-Pigeon Bird Netting",
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
    ],
    h2Label: "Best for Ledges",
    h2Name: "OFFO Stainless Steel Bird Spikes",
    tocLabel: "Best for Ledges",
    tocName: "OFFO Bird Spikes",
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
    ],
    h2Label: "Best Wire System",
    h2Name: "10 x 90mm Pigeon Post & Pad Kit",
    tocLabel: "Best Wire System",
    tocName: "Pigeon Post & Pad Kit",
  },
  {
    anchorId: "best-discreet",
    asin: "B01MQSRJQ6",
    rank: 4,
    cardName: "Bird Barrier Optical Gel (24 Pack)",
    cardLabel: "Optical gel discs",
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
    ],
    h2Label: "Optical gel discs",
    h2Name: "Bird Barrier Optical Gel (24 Pack)",
    tocLabel: "Optical gel discs",
    tocName: "Bird Barrier Optical Gel",
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
    ],
    h2Label: "Best for Solar Panels",
    h2Name: "Bird Proofing Mesh & 60 Fixing Clip Kit",
    tocLabel: "Best for Solar Panels",
    tocName: "Solar Panel Bird Mesh Kit",
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
    ],
    h2Label: "Best Netting Repair Kit",
    h2Name: "100 Nylon Net Hooks",
    tocLabel: "Best Netting Repair Kit",
    tocName: "Nylon Net Hooks",
  },
  {
    anchorId: "best-electronic",
    asin: "B0157D7CXW",
    rank: 7,
    cardName: "BCT Ultrasonic Bird Repeller — 4 Speaker, Multi Frequency",
    cardLabel: "Ultrasonic unit, 4 speakers",
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
    ],
    h2Label: "Ultrasonic unit, 4 speakers",
    h2Name: "BCT Ultrasonic Bird Repeller",
    tocLabel: "Ultrasonic unit, 4 speakers",
    tocName: "BCT Ultrasonic Bird Repeller",
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

const tocItems = [
  { id: "situation", title: "Exclusion Is the Method" },
  { id: "legal", title: "The Legal Position on Wild Birds" },
  { id: "limits", title: "Where Bird Proofing Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Use and Placement" },
  { id: "compared", title: "The Seven Compared" },
];

export default function BestCommercialBirdProofingPage() {
  return (
    <GuideLayout
      title="Best Commercial Bird Proofing UK 2026: Netting, Spikes &amp; Wire Systems"
      subtitle="Five physical exclusion products and two deterrents, described by what their own listings state — beside GOV.UK and the RSPB on what the law protects and two extension services on how exclusion is specified"
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
        Seven products, and the important division is not price. Five are
        physical barriers that stop a bird landing or entering. Two are
        deterrents that ask a bird to go somewhere else. The law that governs
        all of this is the same either way, and it comes first.
      </p>

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
          <p>
            {
              [
                "Two hundred square metres of six-strand knotted polyethylene at a 50mm mesh, UV stabilised, with the maker stating it will not rot, fade or stretch and that it is made in Cornwall. Held against ICWDM's specifications this is a pigeon mesh: it is roughly twice the 1-inch netting that source gives for screening architecture, and eight times the quarter-inch mesh it gives for closing an opening. No fixings are listed as included.",
                "A 78cm run per set in 304 grade stainless steel, with each spike listed at 100mm long and each group at 76mm wide, and a target species row of Pigeon. Its maker lists window sills, balustrades, roof edges, cornices and air conditioning units. Penn State Extension's caveat about smaller birds applies to this class of product and is quoted in full above.",
                "Ten 90mm posts with pads for installing bird wire where drilling is not an option. Read the maker's own three limits before ordering: fixings are not included, the system is designed for light perching of pigeons only, and it should not be used in areas where pigeons are active overnight. The maker recommends 90mm at the front leading edge with 130mm for intermediary rows.",
                "Twenty-four gel discs mounted with an adhesive dab, with the ingredients given by the maker as citronella, mint oil, agar and beeswax and a target species row of Birds. It is a deterrent, not a barrier: nothing about it physically prevents a bird landing. The ASA and CAP position on efficacy claims for pest repellent devices is set out in the limits section above and this page makes no claim about this product's effect.",
                "A 30 metre roll of PVC-coated galvanised mesh, 0.2m high, with 60 nylon clips, made for the one gap that is hard to close any other way: the perimeter under a roof solar array. The maker describes fitting it around the panel edge with the supplied clips, on domestic and commercial roofs. It is a barrier and its specification is a stated height and length rather than a claim.",
                "Not a product on its own: 100 UV-stabilised nylon hooks used to create access into netting already installed, or to attach netting to a wireframe, with the maker stating they suit 19mm, 28mm and 50mm nets. It is on this page because a netting installation that cannot be opened is a netting installation that gets cut, and the card says plainly what it is.",
                "Four speakers with a frequency the maker gives as adjustable from 8kHz to 40kHz, waterproof, supplied with a 12VDC adaptor and a 10 metre lead. Its listing cannot agree with itself on the target: the title names birds and dogs while the target species row reads Mouse, Rat. It is a deterrent rather than a barrier, and the ASA and CAP position quoted above bears on it directly; this page makes no claim that it works.",
              ][i]
            }
          </p>
        </div>
      ))}

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
