import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S68 R3 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award
// labels, rank numerals, anchor ids and card order are UNCHANGED. Three card NAMES are
// corrected under the S68 R3 ride-along ruling, each to what its own listing states:
// the Roshield 4-pack's listing does not say "PRO BOX" or "Extra Large"; the 2-pack's
// listing states a secure solid lid, not an inspection window; and the "(Single)" box's
// listing states two pieces. The pre-baited kit's ASIN resolves on Amazon to canonical
// B0DK254FLC, the same two-box pre-baited kit; the card keeps the ASIN it links.
//
// THE DESCRIPTION IS REWRITTEN. It said "UK regulation compliant"; that is the reader's
// test to apply against the standard quoted at #legal, not this page's certificate.
//
// THE FAQ IS REMOVED, BLOCK AND SCHEMA TOGETHER (Law 190). It had one visible question
// and no schema entry; the question, how many stations, is answered at #what-decides.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Professional Bait Station Kits UK (2026)",
    description:
      "Bait station kits for landlords: the station standard the label requires, who may use the bait inside, and five compared on what the listings state.",
    alternates: {
      canonical: "https://pestproindex.com/best/professional-bait-station-kits",
    },
    openGraph: {
      title: "Best Professional Bait Station Kits UK (2026)",
      description:
        "Bait station kits for landlords: the station standard the label requires, who may use the bait inside, and five compared on what the listings state.",
      url: "https://pestproindex.com/best/professional-bait-station-kits",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Professional Bait Station Kits UK (2026)",
  description:
    "Bait station kits for landlords: the station standard the label requires, who may use the bait inside, and five compared on what the listings state.",
  datePublished: "2026-04-06",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/professional-bait-station-kits",
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
      name: "Best Professional Bait Station Kits UK (2026)",
      item: "https://pestproindex.com/best/professional-bait-station-kits",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Bodies kept under Law 175: hse-biocides-using at
// ~/pp-s68r1/sources; hse-rodenticides, crru-baitstation and gov-poultry-rodent-cop at
// ~/pp-s66r8 (banked S66 R8, copied to ~/pp-s67r2/sources).
const SRC = {
  hseBiocides: "https://www.hse.gov.uk/biocides/using/overview.htm",
  hse: "https://www.hse.gov.uk/biocides/using/rodenticides.htm",
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
// S50-H); a cell the listing does not state reads "not stated".
//
// GONE, BY NAME: "4-pack covers a standard residential HMO property", "reduces servicing
// time across multiple properties", "from the UK leading professional pest control
// brand", and the pre-baited kit's "Brodifacoum single-feed bait included" — the fetched
// listing for that kit names no active substance at all.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B00XL3CENO",
    rank: 1,
    cardName: "Roshield Tamper Proof Rat Poison Box, 4 Pack",
    cardLabel: "Best Overall",
    features: [
      "Four boxes, as listed; the listing says traps and bait are not included",
      "Listed as holding blocks and grain bait on a metal rod",
      "Listed at 3 kilograms for the pack",
      "Target species listed as Mouse, Rat",
      "Listed as designed and made in the UK from recycled materials",
    ],
    tableCells: ["Roshield 4-pack", "4 boxes, no bait", "not stated", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Roshield Tamper Proof Rat Poison Box, 4 Pack",
    tocLabel: "Best Overall",
    tocName: "Roshield 4-Pack",
  },
  {
    anchorId: "runner-up",
    asin: "B00XL382T4",
    rank: 2,
    cardName: "Roshield PRO BOX 2 Extra Large Bait Stations — Solid Lid",
    cardLabel: "Runner-Up",
    features: [
      "Two extra-large stations; the listing says bait is not included",
      "Listed with a secure solid lid for easy inspection",
      "Listed at 26 x 19 x 12 cm and 500 grams",
      "Target species listed as Mouse, Rat",
      "Listed for indoor and outdoor use, and for rodenticide or traps",
    ],
    tableCells: ["Roshield PRO BOX 2-pack", "2 boxes, no bait", "26 x 19 x 12 cm", "Runner-Up"],
    h2Label: "Runner-Up",
    h2Name: "Roshield PRO BOX 2 Extra Large Bait Stations",
    tocLabel: "Runner-Up",
    tocName: "Roshield PRO BOX 2-Pack",
  },
  {
    anchorId: "best-budget",
    asin: "B0CD7QDM1L",
    rank: 3,
    cardName: "Roshield Pro Quality Tamper-Resistant Bait Box, 2 Pack",
    cardLabel: "Best Budget",
    features: [
      "Two boxes, as listed; no bait included",
      "Listed with an inspection window and key-only access",
      "Listed as holding wax blocks, wheat bait, pasta sachets and traps",
      "Target species listed as Mouse, Rat",
      "Listed for indoor and outdoor use",
    ],
    tableCells: ["Roshield Pro Quality 2-pack", "2 boxes, no bait", "not stated", "Best Budget"],
    h2Label: "Best Budget",
    h2Name: "Roshield Pro Quality Tamper-Resistant Bait Box, 2 Pack",
    tocLabel: "Best Budget",
    tocName: "Roshield Tamper-Resistant 2 Pack",
  },
  {
    anchorId: "best-professional",
    asin: "B08XWBB8QF",
    rank: 4,
    cardName: "Pest Expert Heavy Duty Outdoor Bait Boxes — Pack of 4",
    cardLabel: "Best Professional-Grade",
    features: [
      "Four boxes, as listed; no bait included",
      "Listed as fully lockable and weather resistant",
      "Listed as taking grain, blocks and paste",
      "Target species listed as Mouse, Rat",
      "Listed for indoor and outdoor use",
    ],
    tableCells: ["Pest Expert 4-pack", "4 boxes, no bait", "not stated", "Best Professional-Grade"],
    h2Label: "Best Professional-Grade",
    h2Name: "Pest Expert Heavy Duty Outdoor Bait Boxes",
    tocLabel: "Best Professional-Grade",
    tocName: "Pest Expert 4-Pack",
  },
  {
    anchorId: "best-ready-to-deploy",
    asin: "B07JGDJFQY",
    rank: 5,
    cardName: "Roshield 2x Pre-Baited Rat Kit — Ready to Deploy",
    cardLabel: "Best Ready to Deploy",
    features: [
      "Two pre-baited lockable stations with an access key, as listed",
      "Active substance not named on the listing",
      "Listed as refillable and reusable",
      "Target species listed as Rat",
      "Listed as made in the UK",
    ],
    tableCells: ["Roshield pre-baited 2x kit", "2 boxes, bait included", "not stated", "Best Ready to Deploy"],
    h2Label: "Best Ready to Deploy",
    h2Name: "Roshield 2x Pre-Baited Rat Kit",
    tocLabel: "Best Ready to Deploy",
    tocName: "Roshield Pre-Baited Kit",
  },
];

const tocItems = [
  { id: "situation", title: "Do You Need Bait at All?" },
  { id: "legal", title: "Who May Use the Bait, and What the Box Must Be" },
  { id: "limits", title: "Where a Bait Station Kit Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If Bait Is Not the Answer" },
  { id: "using", title: "Placing and Checking Them" },
  { id: "compared", title: "Best Professional Bait Station Kits Compared" },
];

export default function BestProfessionalBaitStationKitsPage() {
  return (
    <GuideLayout
      title="Best Professional Rat & Mouse Bait Station Kits for Landlords (2026)"
      subtitle="Tamper-resistant bait station kits for landlords — five compared on what their listings state, with the label standard the box must meet and HSE's line on who may use professional products"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Rats: Complete UK Guide", href: "/guides/how-to-get-rid-of-rats" },
        { title: "How to Get Rid of Mice: Complete UK Guide", href: "/guides/how-to-get-rid-of-mice" },
        {
          title: "Landlord Pest Control: Responsibilities & Legal Guide",
          href: "/guides/landlord-pest-control",
        },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
      ]}
      relatedProducts={[
        { title: "Best Rat Poison UK 2026", href: "/best/rat-poison" },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Mouse Poison UK 2026", href: "/best/mouse-poison" },
        {
          title: "Best Commercial Rodent Bait Stations UK 2026",
          href: "/best/commercial-rodent-bait-stations",
        },
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
        Four of the five kits here are empty boxes sold in packs of two or four.
        One arrives pre-baited. For a landlord the question is not which box,
        but whether the bait that goes in it is one you are allowed to use
        yourself.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>You are not sure you should be putting poison down.</strong>{" "}
            HSE lists anticoagulants after the other methods —{" "}
            <a href="#situation" className="underline">
              whether you need bait at all
            </a>
            .
          </li>
          <li>
            <strong>You have bought bait marked for professional use.</strong>{" "}
            HSE is plain that the general public must not use it —{" "}
            <a href="#legal" className="underline">
              who may use the bait
            </a>
            .
          </li>
          <li>
            <strong>You put boxes out before and saw nothing for a week.</strong>{" "}
            Defra&rsquo;s code says to allow two to three weeks —{" "}
            <a href="#limits" className="underline">
              where a kit does not help
            </a>
            .
          </li>
          <li>
            <strong>You want boxes only, for bait you already hold.</strong>{" "}
            Four kits here are empty —{" "}
            <a href="#best-overall" className="underline">
              four boxes
            </a>
            ,{" "}
            <a href="#best-professional" className="underline">
              four heavy-duty
            </a>
            ,{" "}
            <a href="#runner-up" className="underline">
              two extra-large
            </a>{" "}
            and{" "}
            <a href="#best-budget" className="underline">
              two with a window
            </a>
            .
          </li>
          <li>
            <strong>You want a kit that arrives with bait in it.</strong> One
            does —{" "}
            <a href="#best-ready-to-deploy" className="underline">
              the pre-baited pair
            </a>
            , whose listing does not name the active.
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Rodenticide is toxic to mammals generally, not only to rats and
            mice. Every bait that goes into these boxes must be used inside a
            tamper-resistant station, and that is a condition of the
            bait&rsquo;s label rather than a recommendation.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Do You Need Bait at All?</h2>
      <p>
        A box holds bait; it does not decide whether bait is the answer. HSE
        puts anticoagulants last:{" "}
        <em>
          &ldquo;If you need to deal with a rodent problem, it is important to
          remember to consider other available control methods, such as those
          listed above, before reaching for anticoagulant products.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). For a landlord that means proofing the property and trapping come
        before any of the kits below.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">Who May Use the Bait, and What the Box Must Be</h2>
      <p>
        The boxes are sold freely and to anyone. The bait is not, and this is
        the honest position for a landlord who is not a pest control
        professional. HSE states that{" "}
        <em>
          &ldquo;members of the general public must not use professional or
          industrial use products&rdquo;
        </em>{" "}
        and that{" "}
        <em>
          &ldquo;If you are a member of the public, you should only use biocidal
          products that are intended for the general public&rdquo;
        </em>{" "}
        (
        <a href={SRC.hseBiocides} rel="nofollow">
          HSE
        </a>
        ) — the label may say amateur or non-professional instead. The one
        pre-baited kit here does not name its active or its
        authorisation on the fetched listing; read the pack before you use it.
      </p>
      <p>
        The box has a standard of its own. CRRU UK sets out the label text HSE
        requires of a tamper-resistant station: it must be{" "}
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
        ). Every box below is listed as lockable; whether it meets the rest is
        the reader&rsquo;s test to apply, not this page&rsquo;s certificate.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Bait Station Kit Does Not Help</h2>
      <p>
        <strong>In the first fortnight.</strong> Defra&rsquo;s code of practice
        for rodent control notes that{" "}
        <em>
          &ldquo;it is best to allow at least two to three weeks for rats to get
          used to feeding in bait boxes placed in their environment, before
          deciding on whether the method being used is working.&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          GOV.UK
        </a>
        ). A box ignored in week one is normal.
      </p>
      <p>
        <strong>Against the way in.</strong> A station reduces the rodents that
        are here; the gap they came through is still there.
      </p>
      <p>
        <strong>As a compliance certificate.</strong> A box listed as complying
        with the regulations is the maker&rsquo;s statement. The standard is
        quoted above; apply it to the box in your hand.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. How many boxes the property needs</h3>
      <p>
        Packs here are two or four. Count the runs and entry points you have
        seen — along walls, behind appliances, at the base of an external door
        — and buy for that number, not for the number of bedrooms.
      </p>
      <h3>2. Whether you can check it without opening it</h3>
      <p>
        One listing here states an inspection window. The others are opened
        with a key, and the Defra code&rsquo;s point is that the key is what
        makes a check possible at all.
      </p>
      <h3>3. Empty, or pre-baited</h3>
      <p>
        Four kits are empty and leave the choice of bait to you, with its own
        label conditions. One arrives baited and its fetched listing names no
        active; the comparison table says so.
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
                "Four black boxes listed at 3 kilograms for the pack, each with a metal rod for blocks or grain, supplied empty. The card previously called this a PRO BOX Extra Large pack; the listing does not, and the name now follows the listing.",
                "Two extra-large stations at 26 x 19 x 12 cm with what the listing calls a secure solid lid for easy inspection, supplied empty. The card previously said inspection window; the listing does not, and it now says solid lid.",
                "Two Roshield boxes with an inspection window and key-only access, listed as holding wax blocks, wheat bait, pasta sachets and traps. The card previously said single; the listing states two pieces, and the name now says so.",
                "Four heavy-duty boxes listed as fully lockable and weather resistant, taking grain, blocks and paste, supplied empty. Target species listed as mouse and rat.",
                "Two pre-baited lockable stations with an access key, listed as refillable and reusable and made in the UK. The listing names rat as the target species and does not name the active substance; the card previously said brodifacoum, and no longer does.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If Bait Is Not the Answer</h2>
      <p>
        <strong>Proof the property first.</strong> Bait removes the rodents
        that are here; our <a href="/best/rodent-proofing">rodent proofing</a>{" "}
        page covers the way in.
      </p>
      <p>
        <strong>Trap instead.</strong> Two boxes here are listed as taking
        traps as well as bait — see our <a href="/best/rat-traps">rat traps</a>{" "}
        and <a href="/best/mouse-traps">mouse traps</a> pages.
      </p>
      <p>
        <strong>Read the bait question separately.</strong> Which rodenticide
        goes in the box, and whether you may use it, is covered on our{" "}
        <a href="/best/rat-poison">rat poison</a> and{" "}
        <a href="/best/mouse-poison">mouse poison</a> pages.
      </p>

      {/* Using them */}
      <h2 id="using">Placing and Checking Them</h2>
      <ol>
        <li>
          <strong>Put them on the runs.</strong> Rodents travel along walls and
          fixed edges; a box in open floor is a box in the wrong place.
        </li>
        <li>
          <strong>Lock them and keep the key.</strong> A station that is not
          locked is a bowl.
        </li>
        <li>
          <strong>Give it two to three weeks.</strong> That is Defra&rsquo;s own
          figure above.
        </li>
        <li>
          <strong>Check consumption, not the calendar.</strong> You cannot tell
          whether bait is being taken without looking.
        </li>
        <li>
          <strong>Follow the bait&rsquo;s own label.</strong> The box does not
          change what the label on the rodenticide requires, or who it says may
          use it.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">Best Professional Bait Station Kits Compared</h2>
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
              <th className="text-left p-2 border-b font-semibold">Size or active, as listed</th>
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
        heading="A property you would rather not bait yourself?"
        subtext="Where the bait you need is professional-use only, compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
