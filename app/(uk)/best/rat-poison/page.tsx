import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';
import TopPicks, { ProsList } from "@/components/TopPicks";

// S68 R2 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award labels,
// rank numerals, anchor ids and card order UNCHANGED as ruled.
//
// TWO RECORDS STILL DISAGREE WITH THEIR OWN h2 (B010E2GCIM, B071K8WQZB) and sit under the
// standing hold recorded in CLAUDE.md's Law 188 section until 19 September. Neither
// label surface is touched here. "Best Difenacoum Bait" on B07BFQ1V5L, the S43 R1c
// substitution for "Best Trusted Brand", is confirmed in place; the old label appears
// nowhere on this route.
//
// S68 R3 — THE H1's "Strongest & Most Effective" CLAUSE IS REPLACED on the PM's ruling with
// the <title>'s own neutral clause; head keyword and every other byte kept. The subtitle's
// "Our pick of the most effective" is deleted under the same ruling. The old page's "strongest SGAR available", "grain bait of
// choice for many professional pest controllers", "proven, effective combination" and
// "Trusted brand" are gone: 23 unsourced sentences deleted, none softened.
//
// HEALTH: one sentence, and it is the Elixir listing's own warning, carried as the
// maker's, naming no illness.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Rat Poison UK: What You Can Legally Buy",
    description:
      "Which rat poisons a UK householder may lawfully buy, why HSE says to consider other methods first, and six products compared on their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/rat-poison" },
    openGraph: {
      title: "Best Rat Poison UK: What You Can Legally Buy",
      description:
        "Which rat poisons a UK householder may lawfully buy, why HSE says to consider other methods first, and six products compared on their own listings.",
      url: "https://pestproindex.com/best/rat-poison",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Rat Poison UK: What You Can Legally Buy",
  description:
    "Which rat poisons a UK householder may lawfully buy, why HSE says to consider other methods first, and six products compared on their own listings.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/rat-poison" },
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
      name: "Best Rat Poison UK: What You Can Legally Buy",
      item: "https://pestproindex.com/best/rat-poison",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). HSE, CRRU's bait-station
// note and Defra's code were banked at S67 R2; CRRU's Code and its permanent-baiting
// notice at S68 R2 (~/pp-s68r2/sources/). All kept under Law 175.
const SRC = {
  hse: "https://www.hse.gov.uk/biocides/using/rodenticides.htm",
  crruCode: "https://www.thinkwildlife.org/code-of-best-practice/crru-code/",
  crruPermanent:
    "https://www.thinkwildlife.org/pest-controllers-alerted-to-end-of-routine-permanent-rat-baiting-around-rural-buildings/",
  crruStations:
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
  // S70 R1 (Law 195) selling layer: top-picks reason, benefit-led blurb, pros.
  // Every fact in them is one the features above already carry from the listing.
  pick: string;
  blurb: string;
  pros: string[];
};

// Feature text and comparison cells from the banked listings' OWN bullets and detail
// rows (S52-E), fetched 2026-09-01. Maker claims are framed as the maker's; comparative
// self-praise ("4 x STRONGER", "widely considered the best") is trimmed and never
// restated (S47-F).
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B0DL2SLHTM",
    rank: 1,
    cardName: "Roshield Brodifacoum Wax Blocks",
    cardLabel: "Best Overall",
    features: [
      "Active ingredient listed as brodifacoum, 0.0025%; HSE registration UK-2016-0997-0006 stated on the listing",
      "Listed as 300g, 15 x 20g blocks, ready to use in tamper-resistant bait stations, for rats and mice in and around buildings",
      "The maker says not to use brodifacoum as a first step unless in an area of known resistance or where other baits have shown little impact",
      "The maker describes the blocks as tolerant to humidity",
      "Item form field on the listing reads Granules",
    ],
    tableCells: ["Roshield Brodifacoum Blocks 300g", "Wax block; brodifacoum 0.0025%, as listed", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Roshield Brodifacoum Blocks",
    tocLabel: "Best Overall",
    tocName: "Roshield Brodifacoum Blocks",
    pick: "For a damp shed or outbuilding: brodifacoum wax blocks the maker calls humidity tolerant.",
    blurb: "A good fit for a damp shed or outbuilding, because the maker describes these wax blocks as tolerant to humidity. You get fifteen 20g blocks of brodifacoum at 0.0025%, ready for a tamper-resistant bait station, with the HSE registration number on the listing. The maker advises keeping brodifacoum for known resistance or where other baits have had little effect, so read that before you buy.",
    pros: ["Active and strength stated on the listing: brodifacoum 0.0025%", "HSE registration number shown on the listing", "Wax blocks the maker describes as tolerant to humidity", "15 x 20g blocks, ready to use in a bait station"],
  },
  {
    anchorId: "best-professional",
    asin: "B010E2GCIM",
    rank: 2,
    cardName: "Pest Expert Formula B+ Grain Bait",
    cardLabel: "Best Professional-Strength",
    features: [
      "Active concentration listed as brodifacoum 0.0029%",
      "Listed as 1kg in 10 x 100g sachets; wholewheat grain, no wax",
      "The maker states it can be used indoors and outdoors",
      "Item form field on the listing reads Capsules",
    ],
    tableCells: ["Pest Expert Formula B+ 1kg", "Grain sachets; brodifacoum 0.0029%, as listed", "Best Professional-Strength"],
    h2Label: "Best Professional-Strength",
    h2Name: "Pest Expert Formula B+ Grain Bait",
    tocLabel: "Best Professional-Strength",
    tocName: "Pest Expert Formula B+",
    pick: "For several stations to stock: 1kg of wholewheat grain in ten 100g sachets.",
    blurb: "Pick this if you have several stations to stock and prefer grain to wax. A full kilogram of wholewheat grain comes split into ten 100g sachets, so each station gets a measured fill. Brodifacoum is stated at 0.0029%, and the maker says it can go indoors or outdoors.",
    pros: ["1kg in 10 x 100g sachets", "Brodifacoum 0.0029% stated on the listing", "Wholewheat grain with no wax", "Maker states indoor and outdoor use"],
  },
  {
    anchorId: "best-value",
    asin: "B071K8WQZB",
    rank: 3,
    cardName: "Elixir Gardens Rodex Whole Wheat Sachets",
    cardLabel: "Best Value",
    features: [
      "Listed as 1kg in 10 x 100g ready-to-use sachets, whole wheat",
      "No active substance is named on this listing",
      "The maker says a red dye colours droppings so you can tell the bait is being taken",
      "Listing warning: contains an anticoagulant; if ingested call a poison centre, UK 111",
    ],
    tableCells: ["Elixir Gardens Rodex 1kg", "Grain sachets; active not stated, as listed", "Best Value"],
    h2Label: "Best Value",
    h2Name: "Elixir Gardens Rodex Whole Wheat",
    tocLabel: "Best Value",
    tocName: "Elixir Gardens Rodex Sachets",
    pick: "If you want to see uptake: the maker says a red dye colours droppings.",
    blurb: "Suits you if you are keeping several stations topped up and want to see whether the bait is being eaten. A kilogram of whole wheat comes in ten ready-to-use 100g sachets, and the maker says a red dye colours droppings. The listing names no active substance, so check the pack for it.",
    pros: ["10 x 100g ready-to-use sachets", "Red dye marks droppings so uptake is visible, per the maker", "Listing carries a clear first-aid warning"],
  },
  {
    anchorId: "best-difenacoum",
    asin: "B07BFQ1V5L",
    rank: 4,
    cardName: "Rentokil Rodine Mouse & Rat Killer Grain Bait",
    cardLabel: "Best Grain Bait Sachets",
    features: [
      "Active listed as brodifacoum, 0.0025% w/w",
      "Listed as 200g of grain bait in sachets designed for lockable, tamper-resistant bait stations",
      "The maker claims a lethal dose in one feed",
      "Listing dimensions 4 x 10.5 x 18.5 cm",
    ],
    tableCells: ["Rentokil Rodine 200g", "Grain sachets; brodifacoum 0.0025%, as listed", "Best Grain Bait Sachets"],
    h2Label: "Best Grain Bait Sachets",
    h2Name: "Rentokil Rodine Grain Bait",
    tocLabel: "Best Grain Bait Sachets",
    tocName: "Rentokil Rodine Grain Bait",
    pick: "For a small, contained job: 200g of grain sachets made for lockable stations.",
    blurb: "For a small, contained job, this 200g pack from Rentokil is enough. The listing says the sachets are designed for lockable, tamper-resistant stations, and states the active as brodifacoum at 0.0025% w/w. The maker claims a lethal dose in one feed.",
    pros: ["Sachets designed for lockable, tamper-resistant stations", "Brodifacoum 0.0025% w/w stated on the listing", "Compact 200g pack for a small job"],
  },
  {
    anchorId: "best-paste",
    asin: "B07H8NZGH7",
    rank: 5,
    cardName: "Racan Force Rat & Mouse Killer Paste",
    cardLabel: "Best Paste Bait",
    features: [
      "Listed as 6 x 10g paste sachets; item form Paste",
      "No active substance is named on the listing",
      "The maker says the sachets should be used in its tamper-proof bait stations",
      "The listing's own description text refers to mice throughout",
    ],
    tableCells: ["Racan Force Paste 6 x 10g", "Paste sachets; active not stated, as listed", "Best Paste Bait"],
    h2Label: "Best Paste Bait",
    h2Name: "Racan Force Paste",
    tocLabel: "Best Paste Bait",
    tocName: "Racan Force Paste",
    pick: "If you already use the maker's stations: six 10g paste sachets.",
    blurb: "Worth a look if you already have the maker's tamper-proof bait stations and a small job to do. You get six 10g paste sachets. The description talks about mice throughout and names no active substance, so read the pack before you use it against rats.",
    pros: ["6 x 10g paste sachets", "Maker says to use them in its tamper-proof stations", "Item form listed as paste"],
  },
  {
    anchorId: "best-kit",
    asin: "B010E2H7KY",
    rank: 6,
    cardName: "Pest Expert Rat Poison Bait Block Kit",
    cardLabel: "Best Combo Kit",
    features: [
      "Active concentration listed as brodifacoum 0.0025%",
      "Listed as 1.5kg in 5 x 300g — 75 blocks of 20g — with 2 lockable, tamper-resistant bait boxes",
      "Blocks listed as pre-formed to fit the metal rod inside each box",
      "Boxes listed as suited to indoor and exterior use",
    ],
    tableCells: ["Pest Expert Block Kit 1.5kg + 2 boxes", "Wax blocks + 2 stations; brodifacoum 0.0025%, as listed", "Best Combo Kit"],
    h2Label: "Best Combo Kit",
    h2Name: "Pest Expert Bait Block Kit",
    tocLabel: "Best Combo Kit",
    tocName: "Pest Expert Bait Block Kit",
    pick: "If you have no bait station yet: two lockable boxes come with 75 blocks.",
    blurb: "Start here if you do not own a bait station yet. The kit has 75 x 20g blocks at brodifacoum 0.0025% and two lockable, tamper-resistant boxes, and the blocks are pre-formed to sit on the metal rod inside each box. The boxes are listed for indoor and exterior use.",
    pros: ["Two lockable, tamper-resistant boxes included", "75 blocks pre-formed to fit the rod in each box", "Brodifacoum 0.0025% stated on the listing", "Boxes listed for indoor and exterior use"],
  },
];

// S70 R1 (Law 195): the one-line safety/legal note carried inside the decision
// block (the top-picks box). It satisfies Law 180 on this route; the full legal
// and safety sections sit below the picks.
const SAFETY_NOTE = (
  <>
    Anticoagulant poison: consider other methods first, and keep every bait in
    a lockable station.{" "}
    <a href="#legal" className="underline">
      The legal position
    </a>
    .
  </>
);

const tocItems = [
  { id: "compared", title: "The Six Products Compared" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "situation", title: "Poison Is Not the Default" },
  { id: "legal", title: "The Legal Position on Rat Poison" },
  { id: "limits", title: "Where Poison Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  { id: "alternatives", title: "If Poison Is Not the Answer" },
  { id: "using", title: "Using It" },
];

export default function BestRatPoisonPage() {
  return (
    <GuideLayout
      title="Best Rat Poison UK 2026: What You Can Legally Buy"
      subtitle="Six UK rat poisons compared, from brodifacoum wax blocks to grain sachets and paste, for householders baiting in lockable stations"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedProducts={[
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Mouse Poison UK 2026", href: "/best/mouse-poison" },
        { title: "Best Wasp Killers UK 2026", href: "/best/wasp-killers" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
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
        Six rat poisons you can buy in the UK, compared on the form, active and
        strength each listing states. Roshield&rsquo;s brodifacoum wax blocks
        suit a damp shed or outbuilding. If you have several stations to fill,
        Pest Expert&rsquo;s grain and Elixir&rsquo;s Rodex both come as 1kg in ten
        sachets, and the Rodex bait carries a dye that marks droppings. If you
        have no station yet, the Pest Expert kit comes with two lockable boxes.
      </p>

      {/* [16] Comparison table */}
      <h2 id="compared">The Six Products Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">
                Form and active, as listed
              </th>
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

      <p>
        Every product on this page is an anticoagulant, and the regulator&rsquo;s
        own view of that class is on record:{" "}
        <em>
          &ldquo;Risk assessments carried out by regulators, including HSE, have
          shown that anticoagulants present a higher risk to people and
          non-target animals than is normally acceptable for authorisation in
          Great Britain and Northern Ireland.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). They are sold anyway, under conditions. The conditions are the page.
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
          <p>{p.blurb}</p>
          <ProsList pros={p.pros} />
        </div>
      ))}

      {/* DECISION BLOCK — situation first. The other-methods line, the legal line and
          the does-not-help line sit ABOVE the product lines. No Amazon link, no price,
          no image, no award. */}
      <DecisionBox>
          <li>
            <strong>You have not tried anything else yet.</strong> HSE asks
            you to consider other methods first &mdash;{" "}
            <a href="#situation" className="underline">
              poison is not the default
            </a>
            .
          </li>
          <li>
            <strong>You want to know what you may lawfully buy and where it
            may go.</strong>{" "}
            <a href="#legal" className="underline">
              The legal position
            </a>
            .
          </li>
          <li>
            <strong>Bait has been down a week and nothing has touched it.</strong>{" "}
            Defra says why &mdash;{" "}
            <a href="#limits" className="underline">
              where poison does not help
            </a>
            .
          </li>
          <li>
            <strong>You are choosing between blocks, grain and paste.</strong>{" "}
            Two of the six listings name no active substance at all &mdash;{" "}
            <a href="#what-decides" className="underline">
              what decides the choice
            </a>
            .
          </li>
        </DecisionBox>

      {/* [0] Situation */}
      <h2 id="situation">Poison Is Not the Default</h2>
      <p>
        HSE:{" "}
        <em>
          &ldquo;If you need to deal with a rodent problem, it is important to
          remember to consider other available control methods, such as those
          listed above, before reaching for anticoagulant products.&rdquo;
        </em>{" "}
        Traps and proofing are those methods, and they have their own pages
        here. CRRU&rsquo;s Code puts a survey ahead of any bait:{" "}
        <em>
          &ldquo;Before treatment begins, a thorough survey of the infested
          site is an essential key to success when using any rodenticide.&rdquo;
        </em>{" "}
        (
        <a href={SRC.crruCode} rel="nofollow">
          CRRU UK Code of Best Practice
        </a>
        ).
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Rat Poison</h2>
      <p>
        <strong>What a householder may buy is restricted, and HSE says how.</strong>{" "}
        <em>
          &ldquo;In order to ensure rodenticides are used as safely as possible
          by the general public, rodenticide products may be restricted in ways
          such as: the amount of active substance they contain where they can be
          used (for example only within a bait box) the maximum pack size that
          can be sold&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). Every product here is sold to the public; three of the six listings
        state their active concentration, and all of the ones that say where
        the bait goes say a tamper-resistant station.
      </p>
      <p>
        <strong>Professional products are a different category.</strong> HSE
        lists the professional restrictions separately, among them{" "}
        <em>
          &ldquo;the types of treatment programmes that can be used (for example
          no permanent baiting)&rdquo;
        </em>
        , and adds that{" "}
        <em>
          &ldquo;the use of anticoagulant rodenticides by professional users in
          Great Britain and Northern Ireland must follow the requirements of
          one of the UK rodenticide stewardship regimes&rdquo;
        </em>
        . Where a listing says{" "}
        <em>&ldquo;Previously only available to professionals.&rdquo;</em>{" "}
        that is the maker&rsquo;s statement about its own history, not a
        statement about what you may use.
      </p>
      <p>
        <strong>Permanent baiting is ruled out, not merely discouraged.</strong>{" "}
        CRRU&rsquo;s notice to professional users:{" "}
        <em>
          &ldquo;Except as a justifiable last resort against clear long-term
          threats to human or animal health, the UK Rodenticide Stewardship
          Regime now rules out permanent rodenticide baiting around the outside
          of rural buildings.&rdquo;
        </em>{" "}
        (
        <a href={SRC.crruPermanent} rel="nofollow">
          CRRU UK
        </a>
        ). And its Code, for everyone:{" "}
        <em>
          &ldquo;Rodenticide baits should only be used for as long as is
          necessary to achieve satisfactory control.&rdquo;
        </em>{" "}
        With a timescale:{" "}
        <em>
          &ldquo;In most cases, any anticoagulant bait should have achieved
          control within 35 days.&rdquo;
        </em>
      </p>
      <p>
        <strong>What a tamper-resistant station has to be.</strong> CRRU
        records the label text now required of them:{" "}
        <em>&ldquo;Strong enough to prevent entry or destruction by dogs.&rdquo;</em>{" "}
        and{" "}
        <em>
          &ldquo;Lockable or sealable so that children and dogs cannot gain
          access through the opening or mechanisms used to fill the bait
          compartments.&rdquo;
        </em>{" "}
        (
        <a href={SRC.crruStations} rel="nofollow">
          CRRU UK
        </a>
        ). Defra&rsquo;s code says the same in one line:{" "}
        <em>
          &ldquo;Commercially available tamper-resistant bait boxes should
          normally be used to secure baits from non-target animals.&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          Defra
        </a>
        ).
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where Poison Does Not Help</h2>
      <p>
        <strong>In the first fortnight.</strong> Defra:{" "}
        <em>
          &ldquo;Rats: In contrast, rats exhibit behaviour known as &lsquo;new
          object reaction&rsquo; or neophobia.&rdquo;
        </em>{" "}
        So:{" "}
        <em>
          &ldquo;it is best to allow at least two to three weeks for rats to
          get used to feeding in bait boxes placed in their environment, before
          deciding on whether the method being used is working.&rdquo;
        </em>{" "}
        Untouched bait in week one is expected.
      </p>
      <p>
        <strong>Where the bait is exposed.</strong> CRRU&rsquo;s Code:{" "}
        <em>
          &ldquo;Care should be taken to ensure that bait is sufficiently
          protected to avoid accidentally poisoning other mammals and
          birds.&rdquo;
        </em>{" "}
        A sachet on a shelf is not a treatment; it is the risk HSE describes
        above.
      </p>
      <p>
        <strong>As a standing arrangement.</strong> The 35-day figure and the
        rule against permanent baiting are both above. A station kept stocked
        all year is the thing the regime rules out.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether the listing names the active and its strength</h3>
      <p>
        Four of the six do: Roshield brodifacoum 0.0025%, Pest Expert grain
        0.0029%, Rentokil Rodine 0.0025%, Pest Expert blocks 0.0025%. The Elixir
        and Racan listings name nothing. HSE&rsquo;s first restriction on public
        products is the amount of active they contain; a listing that does not
        state it leaves you reading the pack.
      </p>
      <h3>2. Whether a station comes with it</h3>
      <p>
        One product does &mdash; the Pest Expert kit, with two lockable boxes.
        Every other listing that mentions placement says the bait belongs in a
        tamper-resistant station you already own.
      </p>
      <h3>3. Block, grain or paste, as listed</h3>
      <p>
        Two block products, three grain, one paste. Roshield describes its
        blocks as tolerant to humidity; Pest Expert says its blocks are
        pre-formed for the rod in its boxes. Those are the listings&rsquo; own
        placement facts, and the table carries them.
      </p>


      {/* [14] Alternatives */}
      <h2 id="alternatives">If Poison Is Not the Answer</h2>
      <p>
        <strong>A trap, first.</strong> That is the method HSE asks you to
        consider before an anticoagulant &mdash; our{" "}
        <a href="/best/rat-traps">rat traps</a> page.
      </p>
      <p>
        <strong>Proofing, always.</strong> Defra&rsquo;s code:{" "}
        <em>
          &ldquo;Buildings should be proofed as far as possible against rodent
          ingress&rdquo;
        </em>{" "}
        &mdash; our <a href="/best/rodent-proofing">rodent proofing</a> page.
      </p>
      <p>
        <strong>A professional, for anything you cannot survey.</strong>{" "}
        CRRU&rsquo;s survey-first line is above; where the harbourage is in a
        cavity or under a floor you cannot open, the survey is not yours to do.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Using It</h2>
      <ol>
        <li>
          <strong>Survey first.</strong> Runs, droppings, burrow entrances
          &mdash; CRRU&rsquo;s essential key to success.
        </li>
        <li>
          <strong>Put every bait in a tamper-resistant station.</strong> Strong
          enough for dogs, lockable against children, per the label text CRRU
          records.
        </li>
        <li>
          <strong>Leave it two to three weeks before judging it.</strong>{" "}
          Defra&rsquo;s figure for neophobic rats.
        </li>
        <li>
          <strong>Stop when control is achieved.</strong> Within 35 days in
          most cases, per CRRU; the bait comes up, it is not left down.
        </li>
        <li>
          <strong>Read the pack for what the listing does not say.</strong> Two
          of the six name no active substance online.
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            A bait station kept stocked all year is what the stewardship regime
            rules out. The bait goes down for a treatment and comes up when it
            has worked.
          </p>
        </Callout>
      </div>


      <FindProviderCTA
        heading="Rats in a cavity, a void or under a floor you cannot open?"
        subtext="That is the survey CRRU puts first, and it is a professional's. Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
