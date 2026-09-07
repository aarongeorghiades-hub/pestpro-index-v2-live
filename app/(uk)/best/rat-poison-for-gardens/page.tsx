import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R2 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award labels,
// rank numerals, anchor ids and card order UNCHANGED as ruled. The subtitle's "safe,
// effective" is held by the standing rule and reported.
//
// THE OLD PAGE'S WILDLIFE FIGURES ARE GONE. "Over 80% of barn owls", "200 offspring per
// year", "6-9 cm burrow holes" and every sentence about hedgehog entry sizes had no
// source. What CRRU and HSE actually say about non-target animals is quoted instead:
// 34 unsourced sentences deleted, none softened. FAQ block and FAQPage schema removed
// together (Law 190).
//
// HEALTH: one sentence, the Elixir listing's own warning, carried as the maker's.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Rat Poison for Gardens UK",
    description:
      "Rat poison for gardens: what amateur rodenticide may go outdoors, what CRRU says about protecting bait from wildlife, and five products on their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/rat-poison-for-gardens" },
    openGraph: {
      title: "Best Rat Poison for Gardens UK",
      description:
        "Rat poison for gardens: what amateur rodenticide may go outdoors, what CRRU says about protecting bait from wildlife, and five products on their own listings.",
      url: "https://pestproindex.com/best/rat-poison-for-gardens",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Rat Poison for Gardens UK",
  description:
    "Rat poison for gardens: what amateur rodenticide may go outdoors, what CRRU says about protecting bait from wildlife, and five products on their own listings.",
  datePublished: "2026-03-31",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/rat-poison-for-gardens" },
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
      name: "Best Rat Poison for Gardens UK",
      item: "https://pestproindex.com/best/rat-poison-for-gardens",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). Banked at S67 R2 and
// S68 R2 and kept under Law 175.
const SRC = {
  hse: "https://www.hse.gov.uk/biocides/using/rodenticides.htm",
  crruCode: "https://www.thinkwildlife.org/code-of-best-practice/crru-code/",
  crruPermanent:
    "https://www.thinkwildlife.org/pest-controllers-alerted-to-end-of-routine-permanent-rat-baiting-around-rural-buildings/",
  crruStations:
    "https://www.thinkwildlife.org/implications-for-rodenticide-users-of-new-label-text-specifying-bait-station-standards/",
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

// Feature text and comparison cells from the banked listings' OWN bullets and detail
// rows (S52-E), fetched 2026-09-01. Comparative self-praise is trimmed (S47-F).
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B07Z6CQ5HT",
    rank: 1,
    cardName: "Pest Expert Formula B+ + Outdoor Bait Box Combo 900g",
    cardLabel: "Best Overall",
    features: [
      "Active concentration listed as brodifacoum 0.0029%",
      "Listed as 900g in 15 x 60g sachets, wholewheat grain, with one rat bait box",
      "The maker names garden sheds, lofts and kitchens as places of use",
      "The listing's comparisons with other brands are the maker's and are not repeated here",
    ],
    tableCells: ["Pest Expert Formula B+ 900g + box", "Grain sachets + 1 station; brodifacoum 0.0029%, as listed", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Pest Expert Formula B+ + Outdoor Bait Box Combo 900g",
    tocLabel: "Best Overall",
    tocName: "Pest Expert Formula B+ Combo",
  },
  {
    anchorId: "best-bulk",
    asin: "B07B51YZC6",
    rank: 2,
    cardName: "Pest Expert Formula B+ Rat Poison 1.5kg (15x100g)",
    cardLabel: "Best Bulk Pack",
    features: [
      "Active concentration listed as brodifacoum 0.0029%",
      "Listed as 1.5kg in 15 x 100g sachets, wholewheat grain, wax-free",
      "Target species listed as Rodents",
      "No station is included; the maker names sheds, lofts and kitchens as places of use",
    ],
    tableCells: ["Pest Expert Formula B+ 1.5kg", "Grain sachets; brodifacoum 0.0029%, as listed", "Best Bulk Pack"],
    h2Label: "Best Bulk Pack",
    h2Name: "Pest Expert Formula B+ Rat Poison 1.5kg (15x100g)",
    tocLabel: "Best Bulk Pack",
    tocName: "Pest Expert Formula B+ 1.5kg",
  },
  {
    anchorId: "best-starter",
    asin: "B07B73Y2LW",
    rank: 3,
    cardName: "Roshield External Bait Box + 300g Block Kit",
    cardLabel: "Best Starter Kit",
    features: [
      "Blocks listed as bromadiolone 0.0025%; HSE registration UK-2016-0986-0007 stated",
      "Listed as one tamper-resistant bait station with 300g of wax blocks, a metal rod and a bait divider",
      "The maker's own line: all amateur-approved rodenticide must be used within tamper-resistant bait boxes",
      "Target species listed as Mouse, Rat; box 30.5 x 22.9 x 22.9 cm",
    ],
    tableCells: ["Roshield box + 300g blocks", "Wax blocks + 1 station; bromadiolone 0.0025%, as listed", "Best Starter Kit"],
    h2Label: "Best Starter Kit",
    h2Name: "Roshield External Bait Box + 300g Block Kit",
    tocLabel: "Best Starter Kit",
    tocName: "Roshield External Bait Box Kit",
  },
  {
    anchorId: "best-multi-station",
    asin: "B07B7CH7W6",
    rank: 4,
    cardName: "Roshield 2x External Tamper-Proof Bait Box + Wax Blocks Kit",
    cardLabel: "Best Multi-Station",
    features: [
      "Same blocks as the single-box kit: bromadiolone 0.0025%, UK-2016-0986-0007",
      "Listed as two tamper-resistant bait stations with 300g of blocks between them",
      "The maker describes it as suited to a small to medium infestation",
      "Unit count listed as 2 box kit",
    ],
    tableCells: ["Roshield 2 boxes + 300g blocks", "Wax blocks + 2 stations; bromadiolone 0.0025%, as listed", "Best Multi-Station"],
    h2Label: "Best Multi-Station",
    h2Name: "Roshield 2x External Tamper-Proof Bait Box + Wax Blocks Kit",
    tocLabel: "Best Multi-Station",
    tocName: "Roshield 2x Bait Box Kit",
  },
  {
    anchorId: "best-value",
    asin: "B071GNVKTK",
    rank: 5,
    cardName: "Elixir Gardens Rat Poison 1kg Outdoor Sachets",
    cardLabel: "Best Value",
    features: [
      "Active ingredient listed as bromadiolone",
      "Listed as 1kg in 10 x 100g ready-to-use sachets; target species Rodents",
      "The maker says a red dye colours droppings so uptake can be seen",
      "Listing warning: contains an anticoagulant; if ingested call a poison centre, UK 111",
    ],
    tableCells: ["Elixir Gardens 1kg sachets", "Grain sachets; bromadiolone, as listed", "Best Value"],
    h2Label: "Best Value",
    h2Name: "Elixir Gardens Rat Poison 1kg Outdoor Sachets",
    tocLabel: "Best Value",
    tocName: "Elixir Gardens Outdoor Sachets",
  },
];

const tocItems = [
  { id: "situation", title: "A Garden Is Outdoors Around a Building" },
  { id: "legal", title: "The Legal Position on Rat Poison Outdoors" },
  { id: "limits", title: "Where Poison Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If Poison Is Not the Answer" },
  { id: "using", title: "Using It" },
  { id: "compared", title: "The Five Products Compared" },
];

export default function BestRatPoisonForGardensPage() {
  return (
    <GuideLayout
      title="Best Rat Poison for Gardens UK 2026"
      subtitle="Outdoor rodenticides and weather-proof bait stations for safe, effective garden rat control"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedProducts={[
        { title: "Best Rat Poison UK 2026", href: "/best/rat-poison" },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Poison UK 2026", href: "/best/mouse-poison" },
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* Affiliate disclosure */}
      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-amber-800">
          <strong>Affiliate disclosure:</strong> PestPro Index is
          reader-supported. When you buy through links on this page, we may earn
          a small commission at no extra cost to you. This helps us keep the
          site running and free for everyone. As an Amazon Associate, PestPro
          Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        A garden is where the animals HSE is worried about actually are. Its
        own sentence:{" "}
        <em>
          &ldquo;Rodenticides can often carry a higher risk than some other
          biocidal products because the way that they are used and how they
          look and smell, might mean that children, pets and other non-target
          animals are more likely to be harmed by them.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). Everything below is about putting bait outside without putting it
        in front of them.
      </p>

      {/* DECISION BLOCK — situation first. The legal line and the does-not-help line
          sit ABOVE the product lines. No Amazon link, no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You have not tried anything else yet.</strong> HSE asks
            you to consider other methods before an anticoagulant &mdash;{" "}
            <a href="#alternatives" className="underline">
              if poison is not the answer
            </a>
            .
          </li>
          <li>
            <strong>You want to know what may go outside, and in what.</strong>{" "}
            <a href="#legal" className="underline">
              The legal position on rat poison outdoors
            </a>
            .
          </li>
          <li>
            <strong>You have pets, hedgehogs or birds in the garden.</strong>{" "}
            CRRU&rsquo;s Code has a line for exactly that &mdash;{" "}
            <a href="#limits" className="underline">
              where poison does not help
            </a>
            .
          </li>
          <li>
            <strong>You want a station with the bait.</strong> Three of the five
            include one &mdash;{" "}
            <a href="#what-decides" className="underline">
              what decides the choice
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">A Garden Is Outdoors Around a Building</h2>
      <p>
        That phrase is the label category, and CRRU records what a station has
        to withstand there. For use &ldquo;outdoors around buildings&rdquo;, a
        tamper-resistant station must be{" "}
        <em>
          &ldquo;Resistant to destruction or weakening from exposure to typical
          non-catastrophic weather&rdquo;
        </em>{" "}
        (
        <a href={SRC.crruStations} rel="nofollow">
          CRRU UK
        </a>
        ). Two of the five products here arrive with a station the maker
        describes as external; two arrive with none.
      </p>
      <p>
        Defra&rsquo;s code puts the station before the bait in one sentence:{" "}
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

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Rat Poison Outdoors</h2>
      <p>
        <strong>The public&rsquo;s products are restricted in three named ways.</strong>{" "}
        HSE:{" "}
        <em>
          &ldquo;In order to ensure rodenticides are used as safely as possible
          by the general public, rodenticide products may be restricted in ways
          such as: the amount of active substance they contain where they can be
          used (for example only within a bait box) the maximum pack size that
          can be sold&rdquo;
        </em>
        . Every product here is sold to the public and every listing that
        mentions placement says a tamper-resistant box. One maker states the
        rule itself on its listing: all amateur-approved rodenticide must be
        used within tamper-resistant bait boxes.
      </p>
      <p>
        <strong>Permanent baiting is ruled out.</strong> CRRU:{" "}
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
        ). Its Code, for every user:{" "}
        <em>
          &ldquo;Rodenticide baits should only be used for as long as is
          necessary to achieve satisfactory control.&rdquo;
        </em>{" "}
        (
        <a href={SRC.crruCode} rel="nofollow">
          CRRU UK Code of Best Practice
        </a>
        ). A garden station kept topped up through the year is the practice
        the regime ended.
      </p>
      <p>
        <strong>What a station must be.</strong> CRRU records the label text:{" "}
        <em>&ldquo;Strong enough to prevent entry or destruction by dogs.&rdquo;</em>{" "}
        and{" "}
        <em>
          &ldquo;Lockable or sealable so that children and dogs cannot gain
          access through the opening or mechanisms used to fill the bait
          compartments.&rdquo;
        </em>
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where Poison Does Not Help</h2>
      <p>
        <strong>Exposed, anywhere.</strong> CRRU&rsquo;s Code:{" "}
        <em>
          &ldquo;Care should be taken to ensure that bait is sufficiently
          protected to avoid accidentally poisoning other mammals and
          birds.&rdquo;
        </em>{" "}
        A sachet under a shed is exposed. Two of the five listings are bait
        with no station at all.
      </p>
      <p>
        <strong>In the first fortnight.</strong> Defra:{" "}
        <em>
          &ldquo;it is best to allow at least two to three weeks for rats to
          get used to feeding in bait boxes placed in their environment, before
          deciding on whether the method being used is working.&rdquo;
        </em>
      </p>
      <p>
        <strong>Left down after it has worked.</strong> CRRU:{" "}
        <em>
          &ldquo;In most cases, any anticoagulant bait should have achieved
          control within 35 days.&rdquo;
        </em>{" "}
        After that the bait is a hazard, not a treatment.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether a station comes with it</h3>
      <p>
        Three of the five do: the Pest Expert combo with one box, and the two
        Roshield kits with one and two. The Pest Expert 1.5kg and the Elixir
        sachets are bait alone, for a station you already own.
      </p>
      <h3>2. Which active the listing names, and at what strength</h3>
      <p>
        Pest Expert states brodifacoum at 0.0029% on both listings. Roshield
        states bromadiolone at 0.0025% with an HSE registration number. Elixir
        states bromadiolone and no percentage. All five name one, which is
        more than the indoor page can say.
      </p>
      <h3>3. Block or grain, as listed</h3>
      <p>
        Roshield&rsquo;s blocks sit on a metal rod inside its boxes; the three
        grain products are sachets. Which suits a station is a fact about the
        station, and both Roshield listings state the rod.
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
                "Fifteen 60g sachets of wholewheat grain with brodifacoum stated at 0.0029%, and one bait box in the same listing. The maker names sheds, lofts and kitchens; the listing's claims about being stronger than every other brand are the maker's and stop here.",
                "The same grain at the same stated strength, 1.5kg in fifteen 100g sachets, with no station included. Target species listed as Rodents. Bait alone is for a box you already have, and that is the only difference between this and the card above.",
                "One tamper-resistant station with 300g of wax blocks stated as bromadiolone 0.0025% under an HSE registration number, a metal rod and a divider. The listing itself states that amateur-approved rodenticide must be used within a tamper-resistant box, which is what CRRU and HSE say above.",
                "The same blocks and the same rod, with two stations instead of one and 300g of bait between them. The maker describes it as suited to a small to medium infestation; that is the listing's sizing, not ours.",
                "Ten 100g ready-to-use sachets whose listing names bromadiolone and no percentage, with a red dye the maker says marks droppings. No station. The listing's own warning — an anticoagulant; if ingested call 111 — is the one health line on this page.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If Poison Is Not the Answer</h2>
      <p>
        <strong>Consider the other methods first.</strong> HSE:{" "}
        <em>
          &ldquo;If you need to deal with a rodent problem, it is important to
          remember to consider other available control methods, such as those
          listed above, before reaching for anticoagulant products.&rdquo;
        </em>{" "}
        Traps are on our <a href="/best/rat-traps">rat traps</a> page.
      </p>
      <p>
        <strong>Take away what brings them.</strong> Defra&rsquo;s code:{" "}
        <em>
          &ldquo;Buildings should be proofed as far as possible against rodent
          ingress&rdquo;
        </em>{" "}
        &mdash; our <a href="/best/rodent-proofing">rodent proofing</a> page
        covers the materials.
      </p>
      <p>
        <strong>A professional, where you cannot find the harbourage.</strong>{" "}
        CRRU puts a survey first; a burrow under a neighbour&rsquo;s shed is not
        yours to survey.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Using It</h2>
      <ol>
        <li>
          <strong>Survey the garden first.</strong> Runs along fences, burrow
          entrances, the route to a bin.
        </li>
        <li>
          <strong>Use a station listed for outdoors.</strong> Weather-resistant,
          dog-proof, lockable, per the label text CRRU records.
        </li>
        <li>
          <strong>Give it two to three weeks.</strong> Defra&rsquo;s figure.
        </li>
        <li>
          <strong>Take it up when it has worked.</strong> CRRU&rsquo;s 35 days
          is a ceiling, not a schedule.
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Bait outside a tamper-resistant station is the exposure CRRU and
            HSE both describe. Two of the five products here are bait with no
            station; the station is not optional.
          </p>
        </Callout>
      </div>

      {/* [16] Comparison table */}
      <h2 id="compared">The Five Products Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">
                Form, station and active, as listed
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

      <FindProviderCTA
        heading="Burrows you cannot find, or a garden next to a watercourse?"
        subtext="Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
