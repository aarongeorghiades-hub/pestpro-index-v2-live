import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import TopPicks, { ProsList } from "@/components/TopPicks";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S68 R1 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award labels,
// rank numerals, anchor ids and card order UNCHANGED as ruled.
//
// ONLY ONE OF THE FIVE IS A FOGGER. Read from the banked listings: the Zero In product
// is a one-shot aerosol that empties the can into the room; the other four are trigger
// or hand sprays. The H1 reads "Flea Bombs That Actually Work" and is held by the
// standing rule; the page says on every other surface what the products are, and what
// two university sources say a total-release fogger cannot reach.
//
// THE PROTECTED STRING "10-time Best Flea Product award winner" IS GONE, UNDER LAW 193
// — see /best/flea-spray-for-home for the proof. The listing says "10+ years", not
// "10-time", so the numeral was also wrong.
//
// S68 R2 — THE STRIKEBACK LABEL WAS "Best Twin Pack" ON A SINGLE 1-LITRE LISTING. Held
// and referred at S68 R1; corrected on the PM's ruling at S68 R2 to the listing's own
// facts, the same string on card, h2, contents and table. Anchor id unchanged.
//
// S70 R1 — THE STRIKEBACK AWARD IS RESTORED with the false words swapped: "Best Twin
// Pack" becomes "Best Triple Action Spray", the same string on card, h2, contents and
// table. The listing is one bottle; its title states triple action.
//
// FAQ block and FAQPage schema removed together (Law 190).
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Flea Fogger UK 2026: Flea Bombs and Sprays Compared",
    description:
      "Only one of the five is a fogger. What a total-release fogger cannot reach, the fire risk the guidance warns about, and five flea products on their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/flea-fogger" },
    openGraph: {
      title: "Best Flea Fogger UK 2026: Flea Bombs and Sprays Compared",
      description:
        "Only one of the five is a fogger. What a total-release fogger cannot reach, the fire risk the guidance warns about, and five flea products on their own listings.",
      url: "https://pestproindex.com/best/flea-fogger",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Flea Fogger UK 2026: Flea Bombs and Sprays Compared",
  description:
    "Only one of the five is a fogger. What a total-release fogger cannot reach, the fire risk the guidance warns about, and five flea products on their own listings.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/flea-fogger" },
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
      name: "Best Flea Fogger UK 2026: Flea Bombs and Sprays Compared",
      item: "https://pestproindex.com/best/flea-fogger",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). Banked at S68 R1 under
// ~/pp-s68r1/sources/ (Law 175).
const SRC = {
  ukyFog: "https://entomology.mgcafe.uky.edu/ef643",
  npic: "https://npic.orst.edu/ingred/ptype/fogger.html",
  ucipm: "https://ipm.ucanr.edu/home-and-landscape/fleas/",
  uky: "https://entomology.mgcafe.uky.edu/ef602",
  hse: "https://www.hse.gov.uk/biocides/using/overview.htm",
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

const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B00GKHI2PW",
    rank: 1,
    cardName: "Indorex Defence Household Flea Spray 500ml",
    cardLabel: "Best Overall",
    features: [
      "A hand spray, not a fogger — sprayed from about 50cm onto surfaces, per the listing",
      "Ingredients listed as pyriproxyfen, permethrin, piperonyl butoxide and Chrysanthemum cinerariaefolium",
      "Listed as treating approximately a 3-4 bedroom house per 500ml can",
      "Directions: remove pets, birds and fish aquaria; ventilate after use",
      "The listing claims a YourCat & YourDog readers' Best Flea Product award over 10+ years",
    ],
    tableCells: ["Indorex Defence 500ml", "Hand spray; permethrin + pyriproxyfen IGR, as listed", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Indorex Defence Household Flea Spray 500ml",
    tocLabel: "Best Overall",
    tocName: "Indorex Defence Flea Spray",
    pick: "A 500ml hand spray with the growth regulator pyriproxyfen, for about a 3-4 bedroom house.",
    blurb: "Our overall pick, and a hand spray rather than a fogger, so you can aim it where fleas develop. You spray it from about 50cm onto and under carpets, rugs, tiles and skirting, and the maker says one 500ml can treats approximately a 3-4 bedroom house. Its four listed ingredients include permethrin and the growth regulator pyriproxyfen. Remove pets, birds and fish aquaria first, and ventilate afterwards.",
    pros: ["Sprayed onto and under carpets, rugs and skirting", "Pyriproxyfen growth regulator listed", "About a 3-4 bedroom house per can, per the maker", "Four ingredients listed, including permethrin"],
  },
  {
    anchorId: "best-natural",
    asin: "B077M5TTHL",
    rank: 2,
    cardName: "Zero In Natural Flea Bomb 150ml — One-Shot Aerosol",
    cardLabel: "Best Natural",
    features: [
      "The only fogger on this page: a one-shot aerosol locked on and left to empty into the room",
      "Contains pyrethrins, per the listing",
      "Listed as a whole-room treatment covering up to 40 m³",
      "Target species listed as Insect, Flea, Fleas",
      "Directions: press the trigger to lock, then leave the room while the can disperses",
    ],
    tableCells: ["Zero In Natural Flea Bomb 150ml", "One-shot aerosol fogger; pyrethrins; up to 40 m³, as listed", "Best Natural"],
    h2Label: "Best Natural",
    h2Name: "Zero In Natural Flea Bomb 150ml",
    tocLabel: "Best Natural",
    tocName: "Zero In Natural Flea Bomb",
    pick: "The one true flea bomb here: a 150ml one-shot can with pyrethrins, for up to 40 m³.",
    blurb: "The pick if you want an actual flea bomb. It is a 150ml one-shot aerosol containing pyrethrins: you press the trigger to lock it and leave the room while the can empties, and the listing gives a whole-room treatment of up to 40 m³. Turn off pilot lights and keep it away from flames first, as the fire warning above sets out. Follow up with a hand spray under beds and furniture, where a fogger reaches least.",
    pros: ["One-shot aerosol you lock and leave", "Contains pyrethrins, per the listing", "Whole-room treatment up to 40 m³, as listed"],
  },
  {
    anchorId: "best-large",
    asin: "B097F82JSG",
    rank: 3,
    cardName: "NOPE! CP Flea Spray 500ml for the Home",
    cardLabel: "Best Large Room",
    features: [
      "A spot-treatment spray, not a fogger, per the listing",
      "Ingredient listed as cypermethrin",
      "The maker claims ongoing protection for up to 3 months after application",
      "Listed for indoor and outdoor use; water-based, solvent-free, non-staining",
      "Listing states it is not to be used directly on pets",
    ],
    tableCells: ["NOPE! Flea Killer Spray 500ml", "Spot spray; cypermethrin; indoor and outdoor, as listed", "Best Large Room"],
    h2Label: "Best Large Room",
    h2Name: "NOPE! CP Flea Spray 500ml for the Home",
    tocLabel: "Best Large Room",
    tocName: "NOPE! CP Flea Spray 500ml",
    pick: "A 500ml cypermethrin spot spray for indoors and out, with up to 3 months claimed.",
    blurb: "A water-based spot spray naming cypermethrin, for indoor and outdoor use. It is solvent-free and non-staining, as listed, and the maker claims ongoing protection for up to three months after application. It is not for use directly on pets, so treat the animal with a vet's flea product alongside it, as the listing says.",
    pros: ["Cypermethrin named on the listing", "For indoor and outdoor use", "Water-based, solvent-free and non-staining", "Up to 3 months protection, per the maker"],
  },
  {
    anchorId: "best-twin",
    asin: "B0D7WFDYD2",
    rank: 4,
    cardName: "Strikeback Super Strength Triple Action Flea Spray 1L",
    cardLabel: "Best Triple Action Spray",
    features: [
      "Listed as a single 1-litre bottle; unit count 1,000 millilitres",
      "A hand spray applied from about 30cm, not a fogger, per the listing",
      "Title states triple insecticides and a growth regulator; none is named on the listing",
      "Target species listed as Insects",
      "Listing safety text: avoid naked flames; let it dry before pets or children return",
    ],
    tableCells: ["Strikeback Triple Action 1L", "Hand spray; actives not named; single 1L bottle, as listed", "Best Triple Action Spray"],
    h2Label: "Best Triple Action Spray",
    h2Name: "Strikeback Super Strength Triple Action Flea Spray 1L",
    tocLabel: "Best Triple Action Spray",
    tocName: "Strikeback Triple Action Flea Spray",
    pick: "A full litre of hand spray in a single bottle, applied from about 30cm.",
    blurb: "A litre of hand spray in one bottle, applied from about 30cm onto the surfaces you want to treat. Its title states triple insecticides and a growth regulator, though the listing names none of them, so read the label for the actives. The listing's own safety text says to avoid naked flames and to let surfaces dry before pets or children come back.",
    pros: ["Single 1-litre bottle", "Hand spray, applied from about 30cm", "Plain safety text on flames and drying, per the listing"],
  },
  {
    anchorId: "best-professional",
    asin: "B09GYGC5FL",
    rank: 5,
    cardName: "Pest Expert Formula C+ Flea Killer Spray 1L",
    cardLabel: "Best Professional",
    features: [
      "A hand spray, not a fogger; title states \"Approved for Amateur Use\"",
      "The maker states three active ingredients, one of them the growth regulator pyriproxyfen",
      "Listed as covering 50 square metres per application",
      "The maker claims a residue that continues to protect for up to 12 weeks",
      "Listed as water-based; keep children and pets out until dry, approx. 2-3 hours",
    ],
    tableCells: ["Pest Expert Formula C+ 1L", "Hand spray; three actives incl. pyriproxyfen; 50 m², as listed", "Best Professional"],
    h2Label: "Best Professional",
    h2Name: "Pest Expert Formula C+ Flea Killer Spray 1L",
    tocLabel: "Best Professional",
    tocName: "Pest Expert Formula C+",
    pick: "A 1L water-based spray with pyriproxyfen, covering 50 square metres per application.",
    blurb: "The pick for a bigger job where you want a growth regulator in the bottle. The maker states three actives, one of them pyriproxyfen, and the listing gives coverage of 50 square metres per application. The title states it is approved for amateur use. The maker claims a residue lasting up to 12 weeks, and you keep children and pets out until it dries, about 2 to 3 hours.",
    pros: ["Three actives including pyriproxyfen, per the maker", "50 square metres per application, as listed", "Approved for amateur use, per the title", "Water-based, dry in about 2 to 3 hours"],
  },
];

const SAFETY_NOTE = (
  <>
    Only one of these is a fogger: turn off pilot lights and keep it away from
    flames, as NPIC warns. HSE says the public should use only products intended
    for the general public.{" "}
    <a href="#legal" className="underline">
      The legal position and the fire warning
    </a>
    .
  </>
);

const tocItems = [
  { id: "compared", title: "The Five Products Compared" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "situation", title: "What a Fogger Is, and Which of These Is One" },
  { id: "legal", title: "The Legal Position and the Fire Warning" },
  { id: "limits", title: "Where a Fogger Does Not Reach" },
  { id: "what-decides", title: "What Decides the Choice" },
  { id: "alternatives", title: "If a Fogger Is Not the Answer" },
  { id: "using", title: "Using Them" },
];

export default function BestFleaFoggerPage() {
  return (
    <GuideLayout
      title="Best Flea Fogger UK 2026: Flea Bombs and Sprays Compared"
      subtitle="One fogger and four sprays for UK homes, described by what their own listings state — and what two universities say a total-release fogger cannot reach"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedProducts={[
        { title: "Best Bed Bug Spray UK 2026", href: "/best/bed-bug-spray" },
        { title: "Best Moth Killers UK 2026", href: "/best/moth-killers" },
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
        A fogger empties itself into the air of a room and settles. The
        National Pesticide Information Center describes the limit of that in
        one sentence:{" "}
        <em>
          &ldquo;They do not spray out gas and do not reach into unexposed
          voids, cracks and crevices, where pests may hide.&rdquo;
        </em>{" "}
        (
        <a href={SRC.npic} rel="nofollow">
          NPIC
        </a>
        ). Four of the five products here are not foggers at all.
      </p>

      {/* [16] Comparison table */}
      <h2 id="compared">The Five Products Compared</h2>
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
                Form, actives and coverage, as listed
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

      {/* DECISION BLOCK — situation first. The legal/fire line and the does-not-reach
          line sit ABOVE the product lines. No Amazon link, no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>You came here for a flea bomb.</strong> One of the five is
            one; the other four are sprays &mdash;{" "}
            <a href="#situation" className="underline">
              which of these is a fogger
            </a>
            .
          </li>
          <li>
            <strong>You have a gas hob, a boiler or a pilot light.</strong> Two
            sources warn about foggers and flames &mdash;{" "}
            <a href="#legal" className="underline">
              the legal position and the fire warning
            </a>
            .
          </li>
          <li>
            <strong>You want it to reach under the furniture.</strong> A fogger
            does not, and the University of Kentucky says what does &mdash;{" "}
            <a href="#limits" className="underline">
              where a fogger does not reach
            </a>
            .
          </li>
          <li>
            <strong>You have a dog or a cat.</strong> The pet is treated first,
            and no product here is listed for use on an animal &mdash;{" "}
            <a href="#alternatives" className="underline">
              if a fogger is not the answer
            </a>
            .
          </li>
        </DecisionBox>

      {/* [0] Situation */}
      <h2 id="situation">What a Fogger Is, and Which of These Is One</h2>
      <p>
        Read from their own listings, the five products are one one-shot
        aerosol &mdash; the Zero In can, locked on and left to empty into a room
        of up to 40 m³ &mdash; and four sprays applied by hand from 30cm or 50cm
        onto surfaces. Only the first is what the word fogger, or flea bomb,
        means. The comparison table states the form for every row.
      </p>
      <p>
        That matters because the two questions a reader has about a fogger
        &mdash; what it reaches and what it can set alight &mdash; do not apply
        to a hand spray in the same way.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position and the Fire Warning</h2>
      <p>
        HSE&rsquo;s guidance on using biocides:{" "}
        <em>
          &ldquo;If you are a member of the public, you should only use
          biocidal products that are intended for the general public -
          sometimes the terms &apos;amateur&apos; or &apos;non-professional&apos;
          might be used instead.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). One listing here carries that status in its title; the label on the
        others is where it is stated.
      </p>
      <p>
        The fire warning is specific to foggers. NPIC:{" "}
        <em>
          &ldquo;Keep foggers away from open flames, turn off pilot lights, and
          unplug electrical appliances before use.&rdquo;
        </em>{" "}
        The University of Kentucky records why:{" "}
        <em>
          &ldquo;There have been several house fires involving insect foggers
          when users neglected to extinguish pilot lights on stoves, furnaces,
          and other household appliances&rdquo;
        </em>{" "}
        (
        <a href={SRC.ukyFog} rel="nofollow">
          University of Kentucky Entomology
        </a>
        ). The Strikeback listing carries its own line on naked flames.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Fogger Does Not Reach</h2>
      <p>
        <strong>Not into the places fleas develop.</strong> University of
        Kentucky on foggers:{" "}
        <em>
          &ldquo;very little insecticide actually penetrates into cracks, voids,
          and other secluded locations where cockroaches, ants, bed bugs, and
          most other household pests congregate and spend most of their
          time.&rdquo;
        </em>{" "}
        And on what does:{" "}
        <em>
          &ldquo;Flea control products that can be dispensed by hand can be
          directed under beds, behind furniture, and into other hidden
          locations less accessible to foggers.&rdquo;
        </em>
      </p>
      <p>
        <strong>It can scatter what it does not kill.</strong>{" "}
        <em>
          &ldquo;The ingredients within &lsquo;bug bombs&rsquo; also tend to be
          repellent, causing insects to scatter and move deeper into walls,
          crevices, and other hard-to-reach areas.&rdquo;
        </em>
      </p>
      <p>
        <strong>Nothing here reaches pupae.</strong> UC IPM on any home
        insecticide:{" "}
        <em>
          &ldquo;This treatment kills larvae but not pupae, so fleas may
          continue to emerge for up to 2 weeks.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ).
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Fogger or hand spray</h3>
      <p>
        The only question the sources above turn on. One product empties into
        the air; four are pointed at a surface. The table states it for every
        row.
      </p>
      <h3>2. Whether the listing names a growth regulator</h3>
      <p>
        UC IPM names methoprene and pyriproxyfen as the IGRs aimed at eggs and
        immatures. Indorex and Pest Expert state pyriproxyfen. Zero In states
        pyrethrins. NOPE! states cypermethrin. Strikeback&rsquo;s title claims a
        growth regulator and its listing names none.
      </p>
      <h3>3. What the listing says it covers</h3>
      <p>
        Zero In: up to 40 m³ of room. Indorex: approximately a 3-4 bedroom
        house per can. Pest Expert: 50 square metres. NOPE! and Strikeback state
        a volume and no area.
      </p>


      {/* [14] Alternatives */}
      <h2 id="alternatives">If a Fogger Is Not the Answer</h2>
      <p>
        <strong>A hand spray reaches what a fogger does not.</strong> That is
        Kentucky&rsquo;s point above, and four of the five products here are
        hand sprays.
      </p>
      <p>
        <strong>Treat the pet first, with a vet.</strong> University of
        Kentucky:{" "}
        <em>
          &ldquo;Flea eradication requires treatment of pets, and oftentimes the
          premises.&rdquo;
        </em>{" "}
        (
        <a href={SRC.uky} rel="nofollow">
          University of Kentucky Entomology
        </a>
        ). No product on this page is listed for use on an animal.
      </p>
      <p>
        <strong>Vacuum.</strong>{" "}
        <em>
          &ldquo;Vacuuming removes many of the eggs, larvae and pupae developing
          within the home.&rdquo;
        </em>{" "}
        Our <a href="/guides/how-to-get-rid-of-fleas">flea guide</a> covers the
        whole sequence.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Check the label lists your pest.</strong> NPIC:{" "}
          <em>&ldquo;Check the product label to see if your pest is listed.&rdquo;</em>
        </li>
        <li>
          <strong>For the fogger, deal with flames first.</strong> Pilot lights
          off, appliances unplugged, then leave the room as the listing directs.
        </li>
        <li>
          <strong>For the sprays, point them where fleas develop.</strong> Under
          beds and behind furniture, at the distance each listing states.
        </li>
        <li>
          <strong>Keep vacuuming for two weeks.</strong> UC IPM:{" "}
          <em>
            &ldquo;Vacuum regularly to remove adult fleas that emerge from pupae
            for the next 2 weeks.&rdquo;
          </em>
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            A fogger and a pilot light in the same house is the combination the
            University of Kentucky records fires from. Turn every flame off
            before the can is set off.
          </p>
        </Callout>
      </div>


      <FindProviderCTA
        heading="Fleas still emerging after the house and the pet are treated?"
        subtext="Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
