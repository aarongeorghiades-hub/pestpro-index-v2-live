import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S68 R3 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award
// labels, rank numerals, anchor ids (including best-seller, NEVER TOUCH) and card order
// are UNCHANGED. Two card NAMES are corrected under the S68 R3 ride-along ruling: the
// Roshield PRO BOX 2-pack's listing states a secure solid lid, not a transparent one,
// and the Roshield Pro Quality box's listing states two pieces.
//
// THE DESCRIPTION IS REWRITTEN. It said "BRC-compliant"; no listing here mentions BRC
// and this page holds no BRC source.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Commercial Rodent Bait Stations UK 2026",
    description:
      "Tamper-resistant rodent bait stations and bait kits for UK premises: the stewardship rules on professional use, and nine compared on what the listings state.",
    alternates: {
      canonical: "https://pestproindex.com/best/commercial-rodent-bait-stations",
    },
    openGraph: {
      title: "Best Commercial Rodent Bait Stations UK 2026",
      description:
        "Tamper-resistant rodent bait stations and bait kits for UK premises: the stewardship rules on professional use, and nine compared on what the listings state.",
      url: "https://pestproindex.com/best/commercial-rodent-bait-stations",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Commercial Rodent Bait Stations UK 2026",
  description:
    "Tamper-resistant rodent bait stations and bait kits for UK premises: the stewardship rules on professional use, and nine compared on what the listings state.",
  datePublished: "2026-03-17",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/commercial-rodent-bait-stations",
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
      name: "Best Commercial Rodent Bait Stations UK 2026",
      item: "https://pestproindex.com/best/commercial-rodent-bait-stations",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Bodies kept under Law 175: hse-rodenticides,
// crru-baitstation and gov-poultry-rodent-cop at ~/pp-s66r8 (banked S66 R8, copied to
// ~/pp-s67r2/sources); crru-code and crru-permanent-baiting at ~/pp-s68r2/sources.
const SRC = {
  hse: "https://www.hse.gov.uk/biocides/using/rodenticides.htm",
  crruCode: "https://www.thinkwildlife.org/code-of-best-practice/crru-code/",
  crruPermanent:
    "https://www.thinkwildlife.org/pest-controllers-alerted-to-end-of-routine-permanent-rat-baiting-around-rural-buildings/",
  crruStation:
    "https://thinkwildlife.org/implications-for-rodenticide-users-of-new-label-text-specifying-bait-station-standards/",
  defra:
    "https://www.gov.uk/government/publications/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms",
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

// Feature text and comparison cells are rebuilt from the banked Amazon bodies, all inside
// the S45-C window. A property is asserted only where the listing states it (S52-E,
// S50-H); a cell the listing does not state reads "not stated". Pest Expert's "STRONGEST
// RAT POISON IN THE UK" and "widely considered to be the best" are manufacturer
// self-praise and are not restated (S47-F). Gone with them: "used by commercial pest
// controllers", "effective against resistant rodent populations", "compatible with all
// bait types", "UV and weather resistant" — none is on the listing it was attached to.
//
// FOUR PRODUCTS HERE INCLUDE RODENTICIDE and every card now says which and how much.
// ONE LISTING DISAGREES WITH ITSELF: the 3kg Pest Expert kit's feature text says both
// "20 x 60g measured sachets" and "30 x 100g"; the detail table says 30 units. Both are
// rendered (Law 146), not resolved.
const products: ProductRecord[] = [
  {
    anchorId: "best-large-kit",
    asin: "B010E2HM5O",
    rank: 1,
    cardName: "Pest Expert Formula B+ 3kg + Bait Stations Kit",
    cardLabel: "Best Large Infestation Kit",
    features: [
      "3kg of grain bait with two lockable bait boxes, as listed",
      "Active listed as brodifacoum, 0.0029%",
      "Sachet count stated two ways on the listing: 30 x 100g and 20 x 60g",
      "Target species listed as Mouse, Rat",
      "Listed for indoor and outdoor use",
    ],
    tableCells: ["Pest Expert 3kg kit", "2 boxes + 3kg grain", "brodifacoum 0.0029%", "Best Large Infestation Kit"],
    h2Label: "Best Large Infestation Kit",
    h2Name: "Pest Expert Formula B+ 3kg + Bait Stations",
    tocLabel: "Best Large Infestation Kit",
    tocName: "Pest Expert Formula B+ 3kg",
  },
  {
    anchorId: "best-medium-kit",
    asin: "B07SXB9WNQ",
    rank: 2,
    cardName: "Pest Expert Formula B+ 2kg + 2 Bait Station Boxes",
    cardLabel: "Best Medium Premises Kit",
    features: [
      "2kg of grain bait, listed as 20 x 100g, with two lockable bait stations",
      "Active listed as brodifacoum, 0.0029%",
      "Listed for indoor and outdoor use, residential or commercial",
      "Listed at 30 x 23 x 15 cm and 2.88 kg",
    ],
    tableCells: ["Pest Expert 2kg kit", "2 boxes + 2kg grain", "brodifacoum 0.0029%", "Best Medium Premises Kit"],
    h2Label: "Best Medium Premises Kit",
    h2Name: "Pest Expert Formula B+ 2kg + 2 Bait Station Boxes",
    tocLabel: "Best Medium Premises Kit",
    tocName: "Pest Expert Formula B+ 2kg",
  },
  {
    anchorId: "best-starter-kit",
    asin: "B010E2H7KY",
    rank: 3,
    cardName: "Pest Expert Formula B+ Block Kit 1.5kg (75 Blocks + 2 Stations)",
    cardLabel: "Best Starter Kit",
    features: [
      "75 x 20g blocks, listed as 1.5kg supplied as 5 x 300g, with two lockable bait boxes",
      "Active listed as brodifacoum, 0.0025%",
      "Listed for a minor to moderate rat infestation",
      "No detail table on the listing",
    ],
    tableCells: ["Pest Expert 1.5kg block kit", "2 boxes + 75 blocks", "brodifacoum 0.0025%", "Best Starter Kit"],
    h2Label: "Best Starter Kit",
    h2Name: "Pest Expert Formula B+ Block Kit 1.5kg (75 Blocks + 2 Stations)",
    tocLabel: "Best Starter Kit",
    tocName: "Pest Expert Formula B+ 1.5kg",
  },
  {
    anchorId: "best-overall",
    asin: "B0CD7QDM1L",
    rank: 4,
    cardName: "Roshield Pro Quality Tamper-Resistant Bait Box, 2 Pack",
    cardLabel: "Best Professional Grade",
    features: [
      "Two boxes, as listed; no bait included",
      "Listed as holding wax blocks, wheat bait, pasta sachets and traps",
      "Listed with an inspection window and key-only access",
      "Target species listed as Mouse, Rat",
      "Listed as made in the UK from recycled plastics",
    ],
    tableCells: ["Roshield Pro Quality", "2 boxes, no bait", "none", "Best Professional Grade"],
    h2Label: "Best Professional Grade",
    h2Name: "Roshield Pro Quality Tamper-Resistant Bait Box",
    tocLabel: "Best Professional Grade",
    tocName: "Roshield Pro Quality",
  },
  {
    anchorId: "best-seller",
    asin: "B088TH1XCS",
    rank: 5,
    cardName: "The Big Cheese Rat & Mouse Bait Station",
    cardLabel: "Best Value Multi-Pack",
    features: [
      "Three bait stations supplied with 900g of bait, as listed",
      "Active listed as difenacoum",
      "Listed as moisture resistant, for indoor and outdoor use",
      "Target species listed as Rodents",
    ],
    tableCells: ["The Big Cheese 3-pack", "3 boxes + 900g blocks", "difenacoum", "Best Value Multi-Pack"],
    h2Label: "Best Value Multi-Pack",
    h2Name: "The Big Cheese Rat & Mouse Bait Station",
    tocLabel: "Best Value Multi-Pack",
    tocName: "The Big Cheese",
  },
  {
    anchorId: "best-multi-pack",
    asin: "B08XWBB8QF",
    rank: 6,
    cardName: "Pest Expert Heavy Duty Bait Boxes (x4)",
    cardLabel: "Best Multi-Pack",
    features: [
      "Four boxes, as listed; no bait included",
      "Listed as fully lockable and weather resistant, for indoor and outdoor use",
      "Listed as taking grain, blocks and paste",
      "Target species listed as Mouse, Rat",
    ],
    tableCells: ["Pest Expert Heavy Duty x4", "4 boxes, no bait", "none", "Best Multi-Pack"],
    h2Label: "Best Multi-Pack",
    h2Name: "Pest Expert Heavy Duty Bait Boxes (x4)",
    tocLabel: "Best Multi-Pack",
    tocName: "Pest Expert Heavy Duty (x4)",
  },
  {
    anchorId: "best-budget",
    asin: "B0BZ8FRT9M",
    rank: 7,
    cardName: "Mice&Co 2x Large Professional Bait Boxes",
    cardLabel: "Best Budget Professional",
    features: [
      "Two boxes with two keys; the listing says bait is not included",
      "Listed as taking blocks, grain or paste on an internal metal rod",
      "Listed as polypropylene, weather-resistant, for indoor and outdoor use",
      "Listed with a two-entrance tunnel",
      "Target species listed as Mouse, Rat",
    ],
    tableCells: ["Mice&Co 2-pack", "2 boxes, no bait", "none", "Best Budget Professional"],
    h2Label: "Best Budget Professional",
    h2Name: "Mice&Co 2x Large Professional Bait Boxes",
    tocLabel: "Best Budget Professional",
    tocName: "Mice&Co 2x Large",
  },
  {
    anchorId: "best-monitoring",
    asin: "B00XL382T4",
    rank: 8,
    cardName: "Roshield PRO BOX 2x Extra Large — Solid Lid",
    cardLabel: "Best for Monitoring",
    features: [
      "Two extra-large stations; the listing says bait is not included",
      "Listed with a secure solid lid for inspection",
      "Listed at 26 x 19 x 12 cm and 500 grams",
      "Target species listed as Mouse, Rat",
      "Listed for indoor and outdoor use",
    ],
    tableCells: ["Roshield PRO BOX 2x", "2 boxes, no bait", "none", "Best for Monitoring"],
    h2Label: "Best for Monitoring",
    h2Name: "Roshield PRO BOX 2x Extra Large with Solid Lid",
    tocLabel: "Best for Monitoring",
    tocName: "Roshield PRO BOX Solid Lid",
  },
  {
    anchorId: "best-kit",
    asin: "B07B73Y2LW",
    rank: 9,
    cardName: "Roshield External Bait Box + 300g Wax Blocks Kit",
    cardLabel: "Best Station + Bait Kit",
    features: [
      "One bait station with 300g of wax blocks, as listed",
      "Active listed as bromadiolone, 0.0025%; HSE number UK-2016-0986-0007 on the listing",
      "Listed for a small or emerging infestation",
      "Listed at 30.5 x 22.9 x 22.9 cm",
      "Target species listed as Mouse, Rat",
    ],
    tableCells: ["Roshield box + blocks", "1 box + 300g blocks", "bromadiolone 0.0025%", "Best Station + Bait Kit"],
    h2Label: "Best Station + Bait Kit",
    h2Name: "Roshield External Bait Box + 300g Wax Blocks",
    tocLabel: "Best Station + Bait Kit",
    tocName: "Roshield External Bait Box + 300g Wax Blocks",
  },
];

const tocItems = [
  { id: "situation", title: "Is Baiting the Right Job?" },
  { id: "legal", title: "The Legal Position for a Business" },
  { id: "limits", title: "Where a Bait Station Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If Bait Is Not the Answer" },
  { id: "using", title: "Placing and Servicing Them" },
  { id: "compared", title: "Best Commercial Rodent Bait Stations Compared" },
];

export default function BestCommercialRodentBaitStationsPage() {
  return (
    <GuideLayout
      title="Best Commercial Rodent Bait Stations UK 2026: Tamper-Proof Stations"
      subtitle="Lockable rodent bait stations and station-plus-bait kits for UK premises — nine compared on what their listings state, with the stewardship rules that bind a business using them"
      lastUpdated="September 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "Commercial Pest Control Hub", href: "/guides/commercial-pest-control" },
        {
          title: "Warehouse Pest Management: BRC Compliance Guide",
          href: "/guides/warehouse-pest-management",
        },
        { title: "Restaurant Pest Control: Complete UK Guide", href: "/guides/restaurant-pest-control" },
        { title: "How to Get Rid of Rats: Complete UK Guide", href: "/guides/how-to-get-rid-of-rats" },
        { title: "How to Get Rid of Mice: Complete UK Guide", href: "/guides/how-to-get-rid-of-mice" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
      ]}
      relatedProducts={[
        { title: "Best Commercial Fly Killers UK 2026", href: "/best/commercial-fly-killers" },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Bird Deterrents UK 2026", href: "/best/bird-deterrents" },
        { title: "Best Commercial Bird Proofing UK 2026", href: "/best/commercial-bird-proofing" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
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
        A bait station is a lockable box that holds rodenticide where a rat or
        mouse can reach it and nothing else can. Five of the nine products here
        are empty boxes; four arrive with bait, and for a business the bait is
        where the rules bite.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>You run premises and someone on staff will be baiting.</strong>{" "}
            HSE ties professional use to the stewardship regime —{" "}
            <a href="#legal" className="underline">
              the legal position for a business
            </a>
            .
          </li>
          <li>
            <strong>You have not yet surveyed the site.</strong> The CRRU code
            puts the survey before the bait —{" "}
            <a href="#situation" className="underline">
              is baiting the right job
            </a>
            .
          </li>
          <li>
            <strong>You baited before and the boxes stayed out for months.</strong>{" "}
            Permanent baiting is what the regime rules out —{" "}
            <a href="#limits" className="underline">
              where a station does not help
            </a>
            .
          </li>
          <li>
            <strong>You want boxes that arrive with bait in them.</strong> Four
            kits here name their active substance —{" "}
            <a href="#best-large-kit" className="underline">
              3kg
            </a>
            ,{" "}
            <a href="#best-medium-kit" className="underline">
              2kg
            </a>
            ,{" "}
            <a href="#best-starter-kit" className="underline">
              1.5kg of blocks
            </a>{" "}
            and{" "}
            <a href="#best-kit" className="underline">
              one box with 300g
            </a>
            .
          </li>
          <li>
            <strong>You already hold bait and need boxes only.</strong> Five
            here are supplied empty —{" "}
            <a href="#best-multi-pack" className="underline">
              four boxes
            </a>
            ,{" "}
            <a href="#best-overall" className="underline">
              two with a window
            </a>
            ,{" "}
            <a href="#best-monitoring" className="underline">
              two extra-large
            </a>{" "}
            and{" "}
            <a href="#best-budget" className="underline">
              two polypropylene
            </a>
            .
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Four products on this page include anticoagulant rodenticide.
            Rodenticide is toxic to mammals generally, and every bait here must
            be used inside a tamper-resistant station as a condition of its own
            label.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Is Baiting the Right Job?</h2>
      <p>
        A station holds bait; it does not decide whether bait is the answer.
        The CRRU UK code of best practice, which the UK stewardship regime is
        built on, starts earlier than the box:{" "}
        <em>
          &ldquo;Before treatment begins, a thorough survey of the infested site
          is an essential key to success when using any rodenticide.&rdquo;
        </em>{" "}
        (
        <a href={SRC.crruCode} rel="nofollow">
          CRRU UK, thinkwildlife.org
        </a>
        ).
      </p>
      <p>
        HSE puts anticoagulants last, not first:{" "}
        <em>
          &ldquo;If you need to deal with a rodent problem, it is important to
          remember to consider other available control methods, such as those
          listed above, before reaching for anticoagulant products.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). For a business that means proofing and trapping are on the table
        before any of the four kits below.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position for a Business</h2>
      <p>
        Every product here is sold freely, and the four with bait describe it
        as amateur-market on their own listings. What changes for a business is
        who is using it. HSE states that{" "}
        <em>
          &ldquo;the use of anticoagulant rodenticides by professional users in
          Great Britain and Northern Ireland must follow the requirements of one
          of the UK rodenticide stewardship regimes&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). A staff member baiting a warehouse as part of their job is a
        professional user in that sense, whatever the pack they bought says.
      </p>
      <p>
        The box itself has a standard to meet. CRRU UK sets out the label text
        HSE requires: a tamper-resistant station must be{" "}
        <em>&ldquo;Strong enough to prevent entry or destruction by dogs.&rdquo;</em>{" "}
        and{" "}
        <em>
          &ldquo;Lockable or sealable so that children and dogs cannot gain
          access through the opening or mechanisms used to fill the bait
          compartments.&rdquo;
        </em>{" "}
        (
        <a href={SRC.crruStation} rel="nofollow">
          CRRU UK, thinkwildlife.org
        </a>
        ). Every box below is listed as lockable; that is the reader&rsquo;s
        test to apply, not this page&rsquo;s certificate.
      </p>
      <p>
        And there is a time limit on the bait. The CRRU code states that{" "}
        <em>
          &ldquo;Rodenticide baits should only be used for as long as is
          necessary to achieve satisfactory control.&rdquo;
        </em>{" "}
        and that{" "}
        <em>
          &ldquo;In most cases, any anticoagulant bait should have achieved
          control within 35 days.&rdquo;
        </em>{" "}
        (
        <a href={SRC.crruCode} rel="nofollow">
          CRRU UK
        </a>
        ).
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Bait Station Does Not Help</h2>
      <p>
        <strong>As a permanent fixture.</strong> CRRU UK reports that{" "}
        <em>
          &ldquo;Except as a justifiable last resort against clear long-term
          threats to human or animal health, the UK Rodenticide Stewardship
          Regime now rules out permanent rodenticide baiting around the outside
          of rural buildings.&rdquo;
        </em>{" "}
        (
        <a href={SRC.crruPermanent} rel="nofollow">
          CRRU UK, thinkwildlife.org
        </a>
        ). A perimeter of boxes left baited all year is the arrangement that
        ruling was written against.
      </p>
      <p>
        <strong>Without a key and a record.</strong> Defra&rsquo;s code of
        practice for rodent control on farms notes that{" "}
        <em>
          &ldquo;Where baits are already deployed in tamper-resistant bait
          boxes, it is important to have the necessary key to assess whether
          bait boxes are being properly used and if bait is being taken.&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          GOV.UK
        </a>
        ). Every lockable box here is a box that cannot be checked without its
        key.
      </p>
      <p>
        <strong>Against the way in.</strong> A station reduces the rodents on
        site; it does nothing about the gap they came through, and on a
        loading bay that gap is usually a door.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Bait included, and which active</h3>
      <p>
        Four products arrive with rodenticide and all four listings name it:
        brodifacoum in the three Pest Expert kits, bromadiolone in the Roshield
        kit, difenacoum in the Big Cheese pack. The comparison table carries the
        concentration where the listing states it.
      </p>
      <h3>2. How many boxes the survey found a need for</h3>
      <p>
        Packs run from one box to four. Count the runs and entry points the
        survey found and buy for that number; the CRRU code&rsquo;s own line is
        that{" "}
        <em>
          &ldquo;Bait stations should be appropriate to the prevailing
          circumstances.&rdquo;
        </em>
      </p>
      <h3>3. Whether the box can be inspected without opening it</h3>
      <p>
        One listing here states an inspection window. The other empty boxes are
        opened with a key to check consumption, which is the check the Defra
        code is describing.
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
                "Two lockable boxes with 3kg of grain bait, active listed as brodifacoum at 0.0029%. The listing states the sachet count two ways — 30 x 100g in one line, 20 x 60g in another — and the detail table says 30 units; this page reports the disagreement rather than picking one.",
                "Two lockable bait stations with 2kg of grain bait listed as 20 x 100g, active brodifacoum at 0.0029%. The listing names residential and commercial premises, indoors and out.",
                "Two lockable boxes with 75 blocks of 20g, listed as 1.5kg supplied as 5 x 300g, active brodifacoum at 0.0025%. The listing itself scopes it to a minor or moderate infestation.",
                "Two Roshield boxes with an inspection window and key-only access, listed as holding wax blocks, wheat bait, pasta sachets and traps. No bait is included; the name on this card now says two, because the listing does.",
                "Three stations supplied with 900g of bait, so this arrives ready to deploy. The listing names difenacoum, and says the station must be used by law when baiting for rats and mice.",
                "Four lockable boxes listed as weather resistant and as taking grain, blocks and paste, supplied empty. Target species listed as mouse and rat.",
                "Two polypropylene boxes with two keys and a two-entrance tunnel, listed as weather-resistant for indoor and outdoor use. The listing says in capitals that bait is not included.",
                "Two extra-large stations with what the listing calls a secure solid lid for easy inspection, supplied empty. The card previously said transparent lid; the listing does not, and it now says solid.",
                "One station with 300g of wax blocks, active listed as bromadiolone at 0.0025% under HSE number UK-2016-0986-0007. The listing scopes it to a small or emerging infestation.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If Bait Is Not the Answer</h2>
      <p>
        <strong>Proof the building.</strong> Bait removes the rodents that are
        here; it does nothing about the way in. Our{" "}
        <a href="/best/rodent-proofing">rodent proofing</a> page covers the
        materials.
      </p>
      <p>
        <strong>Trap where bait is not acceptable.</strong> Two of the empty
        boxes here are listed as taking traps as well as bait — see our{" "}
        <a href="/best/rat-traps">rat traps</a> and{" "}
        <a href="/best/mouse-traps">mouse traps</a> pages.
      </p>
      <p>
        <strong>Contract it out.</strong> Where the survey finds more than a
        small or moderate problem, a contractor working under the stewardship
        regime is the arrangement the HSE and CRRU pages above describe.
      </p>

      {/* Using them */}
      <h2 id="using">Placing and Servicing Them</h2>
      <ol>
        <li>
          <strong>Survey first.</strong> That is the CRRU code&rsquo;s first
          step, and it decides how many boxes you buy.
        </li>
        <li>
          <strong>Put them on the runs.</strong> Rodents travel along walls and
          fixed edges; a box in open floor is a box in the wrong place.
        </li>
        <li>
          <strong>Lock them and keep the key where the person checking them can
          get it.</strong>{" "}
          The Defra code is explicit that the key is what makes a check
          possible.
        </li>
        <li>
          <strong>Record each check.</strong> Consumption, not time elapsed, is
          what tells you whether bait is being taken.
        </li>
        <li>
          <strong>Take the bait up when control is achieved.</strong> The CRRU
          code&rsquo;s figure is 35 days in most cases; leaving boxes baited
          indefinitely is the practice the regime rules out.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">Best Commercial Rodent Bait Stations Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Pack and bait, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Active, as listed</th>
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

      <FindProviderCTA
        heading="Premises you would rather have under contract?"
        subtext="For an infestation beyond a small or moderate one, compare commercial pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
