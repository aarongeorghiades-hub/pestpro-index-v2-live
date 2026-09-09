import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S69 R3 — ROLLOUT REBUILD to the R69R1/R69R2 pattern, on sources. GROUP B.
// THE LAST UNREBUILT ROUTE IN THE /best BACKLOG apart from /best/commercial-fly-killers,
// which is held to 19 September under the S65 R6 snippet experiment.
//
// HEALTH STATEMENTS ON THIS PAGE: ZERO, deliberately. The page previously carried an
// own-voice paragraph asserting that pigeon guano harbours Chlamydia psittaci and
// Histoplasma capsulatum and that this is an occupational hazard under COSHH 2002, with
// no source behind any of it. The same passage was deleted from
// /best/commercial-bird-proofing at S69 R2 for the same reason. Two CDC pages were
// attempted at S69 R2 and BOTH WERE BLOCKED; this round exercised Law 137's single
// permitted retry on that exact list, as Law 163 requires, and both returned HTTP 403
// again at 424 and 409 bytes. THEY ARE NOW TWICE-BLOCKED AND TERMINAL. With no body on
// disk the passage is deleted rather than reworded and nothing replaces it.
//
// ALSO DELETED AS UNSOURCED: a £2,000–£8,000 guano-cleaning range, an assertion about
// property values and regulatory exposure under the Health and Safety at Work Act, and
// two "most effective" claims in this site's own voice.
//
// LAW 189 — THE h2s WERE MISCLASSIFIED. `h2Text` held a rank numeral, a product name and
// in one case a parenthesised award ("#1 Birdgo Anti-Pigeon Netting — 5m x 10m (Best
// Value)"). On rebuild the h2 gains the award the card already shows, product name
// retained, card label unchanged.
//
// CARD NAMES CORRECTED TOWARDS THEIR FETCHED TITLES (S50-H). The rank-3 record was named
// "Birdgo Bird Netting & Mesh Fixing Clips" and is neither Birdgo nor general netting
// clips: its fetched title is "Solar Panel Roof Mesh Fixing Clips", every one of its
// bullets is about solar panel installations, and its manufacturer row reads Seahaven
// Limited. NOT a removal under the mismatch ruling — its label "Best No-Drill Fixings" is
// supported by its own "NO DRILL SOLUTION" bullet and its target is pigeons — but the
// name and the scope are corrected and the card says what it is actually for.
//
// LAW 146 — THE RANK-4 LISTING CONTRADICTS ITSELF. Its title reads "Pest-Stop
// Professional Bird Spikes" and its target species row reads Fly. Both readings are on
// the card; S50-H makes the fetched title authoritative for the name and does not resolve
// the row.
//
// TITLE AND H1: the claim clause promised netting alone while the page cards one net, one
// pack of fixings and two spike strips. Both now name what is carded; the head keyword
// "Best Professional Bird Netting" is kept byte-identical at the front of each.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Professional Bird Netting, Spikes & Fixings UK (2026)",
    description:
      "One net, two spike strips and a pack of no-drill clips, compared on their own listings, with the law on wild birds and two extension specs.",
    alternates: {
      canonical: "https://pestproindex.com/best/professional-bird-netting-kits",
    },
    openGraph: {
      title: "Best Professional Bird Netting, Spikes & Fixings UK (2026)",
      description:
        "One net, two spike strips and a pack of no-drill clips, compared on their own listings, with the law on wild birds and two extension specs.",
      url: "https://pestproindex.com/best/professional-bird-netting-kits",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Professional Bird Netting, Spikes & Fixings UK (2026)",
  description:
    "One net, two spike strips and a pack of no-drill clips, compared on their own listings, with the law on wild birds and two extension specs.",
  datePublished: "2026-04-06",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/professional-bird-netting-kits",
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
      name: "Best Professional Bird Netting UK 2026",
      item: "https://pestproindex.com/best/professional-bird-netting-kits",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). All four bodies were fetched in earlier rounds and are
// carried forward under Law 175 rather than re-fetched:
//   www.gov.uk        fetched 2026-09-08, ~/pp-s68r7/sources/gov-wild-birds.src.txt
//   www.rspb.org.uk   fetched 2026-09-08, ~/pp-s68r7/sources/rspb-wca.src.txt
//   icwdm.org         fetched 2026-09-09, ~/pp-s69r2/sources/icwdm-pigeons.src.txt
//   extension.psu.edu fetched 2026-09-09, ~/pp-s69r2/sources/psu-birds-farm-buildings.src.txt
//
// THE TWO US SOURCES ARE US SOURCES (Law 135). Their exclusion specifications are
// statements about method and are quoted as such. Nothing in either of them about
// shooting, trapping or toxicants is restated here: UK law on those points is what the
// two UK sources set out, and it is different.
const SRC = {
  gov: "https://www.gov.uk/guidance/wild-birds-protection-surveys-and-licences",
  rspb: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-and-countryside-act",
  icwdm: "https://icwdm.org/species/birds/pigeons/pigeon-damage-control-and-prevention-methods/",
  psu: "https://extension.psu.edu/controlling-birds-around-farm-buildings",
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
// "not stated". Two of these four listings are close to empty — one has no feature
// bullets at all and one has a single bullet reading "Professional" — and the cards say
// so rather than filling the gap with our own writing.
const products: ProductRecord[] = [
  {
    anchorId: "product-2",
    asin: "B07KB29QTF",
    rank: 1,
    cardName: "Birdgo White 50mm Anti-Pigeon Netting 5m x 10m (Knotted, UV-Stabilised)",
    cardLabel: "Best Value Net",
    features: [
      "50 square metres at a 50mm mesh, listed as 5m x 10m",
      "Polyethylene, described in the title as knotted and UV-stabilised",
      "Listed as white, which is unusual: most pigeon netting is sold black",
      "The listing carries no feature bullets at all — the title is nearly the whole of it",
      "Fixings are not listed as included",
    ],
    tableCells: [
      "Birdgo White 50mm Anti-Pigeon Netting",
      "Netting",
      "5m × 10m, 50mm mesh, polyethylene",
      "not stated",
    ],
    h2Label: "Best Value Net",
    h2Name: "Birdgo White 50mm Anti-Pigeon Netting 5m x 10m",
    tocLabel: "Best Value Net",
    tocName: "Birdgo Anti-Pigeon Netting",
  },
  {
    anchorId: "product-3",
    asin: "B006Y9L57S",
    rank: 2,
    cardName: "Defender Wide Plastic Bird Spikes — 5 Metre Pack",
    cardLabel: "Best for Ledges",
    features: [
      "15 strips of 33.4cm, listed as a 5 metre pack",
      "The maker states they suit ledges with a depth of up to 20cm",
      "The maker states each strip can be snapped into smaller sections",
      "Its own bullet: glue, screws and cable ties are not included",
      "The maker states a 15 year warranty and includes a 40-page pigeon guide",
    ],
    tableCells: [
      "Defender Wide Plastic Bird Spikes",
      "Ledge spikes, plastic",
      "5m pack; 15 strips of 33.4cm; ledges to 20cm",
      "15 years, per the maker",
    ],
    h2Label: "Best for Ledges",
    h2Name: "Defender Wide Plastic Bird Spikes",
    tocLabel: "Best for Ledges",
    tocName: "Defender Wide Plastic Bird Spikes",
  },
  {
    anchorId: "product-4",
    asin: "B0823ZVZSN",
    rank: 3,
    cardName: "Solar Panel Roof Mesh Fixing Clips — No Drill (Nylon, Pack of 60)",
    cardLabel: "Best No-Drill Fixings",
    features: [
      "60 nylon clips, made specifically for attaching mesh to solar panel edges",
      "The maker states no drilling and no adhesive is needed",
      "The maker states drilling into solar panels risks damage to the panel system",
      "The maker recommends clip spacing of 450mm, about 18 inches",
      "Not a general netting fixing: every bullet on the listing is about solar panels",
    ],
    tableCells: [
      "Solar Panel Roof Mesh Fixing Clips",
      "Fixing clips, nylon",
      "Pack of 60; 450mm spacing recommended by the maker",
      "not stated",
    ],
    h2Label: "Best No-Drill Fixings",
    h2Name: "Solar Panel Roof Mesh Fixing Clips (60-Pack)",
    tocLabel: "Best No-Drill Fixings",
    tocName: "Solar Panel Mesh Fixing Clips",
  },
  {
    anchorId: "product-5",
    asin: "B0024NL0OQ",
    rank: 4,
    cardName: "Pest-Stop Professional Bird Spikes",
    cardLabel: "Best Spikes Option",
    features: [
      "Described in the title as stainless steel and UV-resistant",
      "Material row reads Metal, Plastic; colour row reads Yellow; weight 680g",
      "Its target species row reads Fly, which its own title contradicts",
      "The listing has one feature bullet and it is the single word Professional",
      "No length, coverage or strip count is stated anywhere in the listing",
    ],
    tableCells: [
      "Pest-Stop Professional Bird Spikes",
      "Ledge spikes, steel and plastic",
      "not stated",
      "not stated",
    ],
    h2Label: "Best Spikes Option",
    h2Name: "Pest-Stop Professional Bird Spikes",
    tocLabel: "Best Spikes Option",
    tocName: "Pest-Stop Bird Spikes",
  },
];

const faqs = [
  {
    q: "Can I net a building against birds?",
    a: "GOV.UK states that all wild bird species, their eggs and nests are protected by law, and that you must always try to avoid harming birds or use measures which do not kill or injure them before considering taking harmful action. Exclusion fitted when nothing is nesting is a measure of that kind. This site reports what GOV.UK and the RSPB publish and does not rule on your particular building.",
  },
  {
    q: "When should the work be done?",
    a: "The RSPB writes that maintenance works, such as hedge trimming, and building work should ideally be completed outside of the main nesting season during autumn and winter to avoid disturbance. It also states that the Wildlife and Countryside Act 1981 makes it illegal, subject to certain exceptions, to intentionally take, damage or destroy the nest of any wild bird while it is in use or being built.",
  },
  {
    q: "Is a 50mm mesh the right size?",
    a: "It depends entirely on the bird. ICWDM writes that ornamental architecture can be screened with 1-inch mesh polypropylene UV-stabilised netting, and that openings should be closed with quarter-inch mesh; Penn State Extension says to close all openings more than 0.5 inch. The net on this page is 50mm, roughly two inches. That excludes a pigeon and admits anything smaller.",
  },
  {
    q: "How long does netting last?",
    a: "ICWDM writes that the life span of this netting can be as long as 10 years, of the 1-inch UV-stabilised polypropylene it describes. The listing on this page states polyethylene and UV-stabilised and gives no life figure at all, so no figure appears in its comparison cell.",
  },
  {
    q: "Do spikes work on every bird?",
    a: "Penn State Extension is explicit that they do not: these materials are not effective against smaller birds, such as house sparrows, because the birds can fit between the points and use the site for nesting. Two of the four products here are spikes, and if the birds on your ledge are small they may end up holding the nest rather than preventing it.",
  },
  {
    q: "Does this page carry a health warning about droppings?",
    a: "No, and the reason is worth stating. An earlier version of this page named two pathogens and asserted a duty under COSHH, with no source behind either. Two CDC pages were attempted at the previous round and blocked; the single permitted retry was exercised this round and both were blocked again, so they are terminal. With nothing on disk to quote, the passage was deleted rather than reworded. Anything about your own health belongs with a pharmacist or a GP, and any duty question with a competent adviser.",
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
  { id: "limits", title: "Where These Products Do Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Use and Placement" },
  { id: "compared", title: "The Four Compared" },
];

export default function BestProfessionalBirdNettingKitsPage() {
  return (
    <GuideLayout
      title="Best Professional Bird Netting, Spikes &amp; Fixings for Commercial Properties (2026)"
      subtitle="One net, two spike strips and a pack of no-drill clips, described by what their own listings state — beside GOV.UK and the RSPB on what the law protects and two extension services on how exclusion is specified"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "Pigeon Control: Complete UK Guide", href: "/guides/pigeon-control" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
      ]}
      relatedProducts={[
        { title: "Best Commercial Bird Proofing UK 2026", href: "/best/commercial-bird-proofing" },
        { title: "Best Pigeon Spikes UK 2026", href: "/best/pigeon-spikes" },
        { title: "Best Bird Deterrents UK 2026", href: "/best/bird-deterrents" },
        { title: "Best Commercial Insect Monitors UK 2026", href: "/best/commercial-insect-monitors" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
        Four products, and only one of them is a net. The others are two sets of
        ledge spikes and a pack of clips for fixing mesh to solar panels. This
        page is the components of a proofing job rather than four competing
        nets, and the cards say which is which.
      </p>

      {/* DECISION BLOCK — situation first, product second. The legal line and the
          does-not-work line sit ABOVE every product line. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>There may be a nest.</strong>{" "}
            <a href="#legal" className="underline">
              The legal position
            </a>{" "}
            decides whether the job can start at all, and it comes before any
            product.
          </li>
          <li>
            <strong>The birds are smaller than pigeons.</strong>{" "}
            <a href="#limits" className="underline">
              Where these products do not work
            </a>{" "}
            — the mesh here is 50mm and Penn State is explicit about spikes and
            sparrows.
          </li>
          <li>
            <strong>You are closing an open span.</strong>{" "}
            <a href="#product-2" className="underline">
              The 5m by 10m net
            </a>{" "}
            is the only netting on this page.
          </li>
          <li>
            <strong>You are proofing a ledge up to 20cm deep.</strong>{" "}
            <a href="#product-3" className="underline">
              The 5 metre spike pack
            </a>{" "}
            states that depth; the other spike listing states nothing at all.
          </li>
          <li>
            <strong>Pigeons are under a solar array.</strong>{" "}
            <a href="#product-4" className="underline">
              The no-drill clips
            </a>{" "}
            are for that specific job and no other.
          </li>
        </ul>
      </div>

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
        The Internet Center for Wildlife Damage Management puts blocking access
        ahead of everything else:{" "}
        <em>
          &ldquo;Pigeons can be excluded from buildings (in some cases very
          easily) by blocking access to indoor roosts and nesting areas.&rdquo;
        </em>{" "}
        (
        <a href={SRC.icwdm} rel="nofollow">
          ICWDM
        </a>
        ).
      </p>
      <p>
        For an open span rather than a hole, it gives a specification:{" "}
        <em>
          &ldquo;Ornamental architecture can be screened with 1-inch (2.5-cm)
          mesh polypropylene u.v.-stabilized netting to prevent roosting,
          loafing, and nesting.&rdquo;
        </em>{" "}
        And a service life for it:{" "}
        <em>&ldquo;The life span of this netting can be as long as 10 years.&rdquo;</em>
      </p>
      <p>
        Penn State Extension states the same order of operations in a farm
        setting:{" "}
        <em>&ldquo;Exclude birds from roosting sites by covering the undersides of the rafters with netting.&rdquo;</em>{" "}
        (
        <a href={SRC.psu} rel="nofollow">
          Penn State Extension
        </a>
        ). Both are US publications and their figures are quoted as statements
        about method, not about UK law.
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
        Every product on this page is a physical barrier, which is a measure of
        that kind.
      </p>
      <p>
        The RSPB names the statutory prohibition that most often catches a
        proofing job:{" "}
        <em>&ldquo;Intentionally take, damage or destroy the nest of any wild bird while it is in use or being built.&rdquo;</em>{" "}
        (
        <a href={SRC.rspb} rel="nofollow">
          RSPB
        </a>
        ).
      </p>
      <p>
        And it gives the practical consequence for scheduling:{" "}
        <em>
          &ldquo;Maintenance works, such as hedge trimming, and building work
          should ideally be completed outside of the main nesting season during
          autumn and winter to avoid disturbance.&rdquo;
        </em>{" "}
        Netting fitted over an active nest is not a proofing job. This site
        reports what GOV.UK and the RSPB publish and does not rule on any
        particular building.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where These Products Do Not Work</h2>
      <p>
        <strong>A 50mm mesh, against anything smaller than a pigeon.</strong>{" "}
        ICWDM specifies 1-inch netting for screening architecture and
        quarter-inch mesh for closing openings; Penn State Extension says{" "}
        <em>&ldquo;Close all openings more than 0.5 inch.&rdquo;</em> (
        <a href={SRC.psu} rel="nofollow">
          Penn State Extension
        </a>
        ). The net here is 50mm, about two inches. It is a pigeon net.
      </p>
      <p>
        <strong>Spikes, against small birds.</strong>{" "}
        <em>
          &ldquo;These materials are not effective against smaller birds, such
          as house sparrows, because the birds can fit between the points and
          use the site for nesting.&rdquo;
        </em>{" "}
        (
        <a href={SRC.psu} rel="nofollow">
          Penn State Extension
        </a>
        ). Half the cards on this page are spikes.
      </p>
      <p>
        <strong>Once the installation silts up.</strong> ICWDM:{" "}
        <em>
          &ldquo;Sometimes pigeons and sparrows cover the wires with nesting
          material or droppings, which requires occasional removal.&rdquo;
        </em>{" "}
        (
        <a href={SRC.icwdm} rel="nofollow">
          ICWDM
        </a>
        ). Proofing is a maintenance item, not a one-off.
      </p>
      <p>
        <strong>On a budget that assumed it was cheap.</strong> Penn State
        Extension, on the non-lethal methods generally:{" "}
        <em>
          &ldquo;These nonlethal methods are safe for people, livestock, and
          nontarget wildlife, but they are often time-consuming to install and
          expensive.&rdquo;
        </em>
      </p>
      <p>
        <strong>Where the listing tells you nothing.</strong> One of the four
        products here has a single feature bullet, and that bullet is the one
        word Professional. It states no length, no coverage and no strip count
        anywhere. Its comparison cells say &ldquo;not stated&rdquo; because that
        is the honest answer, not because nothing was checked.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Mesh and spacing, against the bird you actually have</h3>
      <p>
        ICWDM gives 1-inch netting for architecture and quarter-inch mesh for
        openings; Penn State gives half an inch as the threshold for closing an
        opening at all. The net carded here is 50mm. Hold that number against
        the bird before you order, because no fixing or spike choice recovers a
        mesh that is too coarse.
      </p>
      <h3>2. Whether the listing states a dimension at all</h3>
      <p>
        Two of these four do. The net gives 5m by 10m at 50mm; the plastic
        spikes give 15 strips of 33.4cm covering ledges to 20cm deep. The clips
        give a pack count and a recommended spacing. The steel spikes give
        nothing — no length, no coverage, no strip count — and that is a real
        difference between two otherwise similar products.
      </p>
      <h3>3. What the kit does not include</h3>
      <p>
        The netting listing does not list fixings. The plastic spike listing
        states in its own words that glue, screws and cable ties are not
        included. The clips attach mesh to solar panels and are not a general
        netting fixing. Three of the four are components, and a first order that
        assumes otherwise arrives incomplete.
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
                "Fifty square metres of knotted, UV-stabilised polyethylene at a 50mm mesh, and the only netting on this page. Held against ICWDM's specification it is about twice the 1-inch mesh that source gives for screening architecture, so it is sized for pigeons and not for anything smaller. It is listed as white, where most pigeon netting is sold black, and ICWDM notes that black is often the best choice on a building. The listing carries no feature bullets at all, so its title is very nearly the whole of what its maker says about it.",
                "The better documented of the two spike products: 15 strips of 33.4cm making a 5 metre pack, with the maker stating they suit ledges up to 20cm deep and that each strip can be snapped into smaller sections. Its own bullet says glue, screws and cable ties are not included, which is the kind of thing worth knowing before the scaffold goes up. The maker states a 15 year warranty and includes a 40-page pigeon guide.",
                "Not a general netting fixing, and the card leads with that: 60 nylon clips made specifically to attach bird-proofing mesh to the edges of a solar panel array without drilling. Its maker states that drilling into solar panels risks damage to the panel system, and recommends clip spacing of 450mm. Every bullet on the listing is about solar installations, and it was previously carded here under a brand and a description that were not its own.",
                "The thinnest listing on this page, and the card reports that rather than dressing it up. Its title says stainless steel and UV-resistant; its material row says Metal, Plastic; its colour row says Yellow; its weight is 680g. Its single feature bullet is the word Professional. Its target species row reads Fly, which its own title contradicts. No length, coverage or strip count is stated anywhere, so three of its four comparison cells read not stated.",
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
        ). Slanted metal or wooden boards at that angle — a fabrication job
        rather than a purchase, and one that cannot silt up.
      </p>
      <p>
        <strong>Close the opening rather than screen the face.</strong> ICWDM
        puts blocking access to indoor roosts and nesting areas ahead of
        everything else, with a quarter-inch rust-proofed mesh.
      </p>
      <p>
        <strong>Remove what is attracting them.</strong> ICWDM&rsquo;s own list
        starts with removing bird feeders, discouraging public feeding and
        eliminating standing water. On a commercial site that is a bin and
        catering question before it is a hardware one.
      </p>
      <p>
        <strong>Other routes on this site.</strong> Our{" "}
        <a href="/best/commercial-bird-proofing">commercial bird proofing</a>{" "}
        page covers the wider set including bird wire and solar mesh, our{" "}
        <a href="/best/pigeon-spikes">pigeon spikes</a> page covers spikes on
        their own, and our{" "}
        <a href="/guides/pigeon-control">pigeon control guide</a> covers the
        building rather than the product.
      </p>

      {/* Use and placement */}
      <h2 id="using">Use and Placement</h2>
      <ol>
        <li>
          <strong>Survey for nests first.</strong> The RSPB names an active or
          part-built nest as protected, and that governs whether the job can
          start.
        </li>
        <li>
          <strong>Schedule it for autumn or winter.</strong> The RSPB&rsquo;s
          own recommendation for building work, to avoid disturbance.
        </li>
        <li>
          <strong>Match the mesh to the bird.</strong> 50mm excludes a pigeon
          and admits a sparrow; ICWDM and Penn State both give tighter figures
          for smaller birds.
        </li>
        <li>
          <strong>Order the fixings separately.</strong> The net lists none and
          the plastic spikes state in their own words that none are included.
        </li>
        <li>
          <strong>Put it on the maintenance schedule.</strong> ICWDM notes that
          installations silt up with nesting material and droppings and need
          occasional clearing.
        </li>
      </ol>

      {/* Comparison table — LISTING facts only, "not stated" where absent */}
      <h2 id="compared">The Four Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        claim attributed to the maker who makes it. Where a listing does not
        state something, the cell says so rather than guessing — and on this
        page four cells do.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Type</th>
              <th className="text-left p-2 border-b font-semibold">Size and specification, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Warranty or life, as listed</th>
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
