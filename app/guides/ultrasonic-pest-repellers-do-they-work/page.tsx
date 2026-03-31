import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Ultrasonic Pest Repellers: Do They Actually Work? (UK 2026) | PestPro Index',
    description:
      'An evidence-based review of ultrasonic pest repellers. We examine the science, test results, advertising claims, and whether these devices are worth buying for UK homes.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/ultrasonic-pest-repellers-do-they-work',
    },
    openGraph: {
      title: 'Ultrasonic Pest Repellers: Do They Actually Work? (UK 2026) | PestPro Index',
      description:
        'An evidence-based review of ultrasonic pest repellers. We examine the science, advertising claims, and whether these devices are worth buying for UK homes.',
      url: 'https://pestproindex.com/guides/ultrasonic-pest-repellers-do-they-work',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ultrasonic Pest Repellers: Do They Actually Work? (UK 2026)',
  description:
    'An evidence-based review of ultrasonic pest repellers. We examine the science, test results, advertising claims, and whether these devices are worth buying for UK homes.',
  datePublished: '2026-03-31',
  dateModified: '2026-03-31',
  author: {
    '@type': 'Organization',
    name: 'PestPro Index',
    url: 'https://pestproindex.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PestPro Index',
    url: 'https://pestproindex.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://pestproindex.com/guides/ultrasonic-pest-repellers-do-they-work',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://pestproindex.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Guides',
      item: 'https://pestproindex.com/guides',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Do Ultrasonic Pest Repellers Work?',
      item: 'https://pestproindex.com/guides/ultrasonic-pest-repellers-do-they-work',
    },
  ],
};

const tocItems = [
  { id: 'verdict-first', title: 'The Short Answer' },
  { id: 'how-they-work', title: 'How Ultrasonic Repellers Claim to Work' },
  { id: 'the-science', title: 'What Does the Science Say?' },
  { id: 'advertising-vs-reality', title: 'Advertising Claims vs Reality' },
  { id: 'pest-by-pest', title: 'Pest-by-Pest Verdict' },
  { id: 'what-actually-works', title: 'What Actually Works Instead' },
  { id: 'if-you-still-want-one', title: 'If You Still Want to Try One' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do ultrasonic pest repellers work on rats and mice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The scientific consensus is that ultrasonic devices have little to no lasting effect on rats and mice. While initial exposure may cause brief avoidance behaviour, rodents quickly habituate to the sound — often within days. No peer-reviewed study has demonstrated that ultrasonic repellers can eliminate or significantly reduce a rodent population. The BPCA, CRRU, and most pest control professionals do not recommend them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do ultrasonic pest repellers work on insects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no credible scientific evidence that ultrasonic devices repel insects. Most insects do not hear in the ultrasonic frequency range used by these devices. Studies specifically testing ultrasonic devices against cockroaches, ants, spiders, and mosquitoes have consistently found no repellent effect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do ultrasonic pest repellers have good reviews on Amazon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several factors explain positive reviews: confirmation bias (people attribute any natural change to the device), coincidental timing (pests may leave for seasonal or other reasons), placebo effect, and unfortunately, fake or incentivised reviews. Many one-star reviews on the same products report no effect at all. Scientific testing consistently fails to support the positive claims.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are ultrasonic pest repellers safe for dogs and cats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most manufacturers claim their devices are safe for pets. However, dogs can hear frequencies up to 65 kHz and cats up to 85 kHz, which overlaps with the range of some ultrasonic devices (typically 20–65 kHz). Some pet owners report behavioural changes in their animals. If you have pets, check the device frequency range and monitor your animals for signs of stress.',
      },
    },
    {
      '@type': 'Question',
      name: 'Has the ASA or FTC taken action against ultrasonic repeller manufacturers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. In the US, the Federal Trade Commission (FTC) has issued warnings to multiple ultrasonic device manufacturers for making unsubstantiated claims. In the UK, the Advertising Standards Authority (ASA) has upheld complaints against ultrasonic pest repeller adverts for claiming effectiveness that is not supported by robust scientific evidence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best way to get rid of mice without traps or poison?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective non-lethal approach is exclusion: seal every gap larger than 6 mm with steel wool and caulk, remove food sources (store everything in sealed containers), and eliminate nesting opportunities (clear clutter). Without access to food and shelter, mice will move elsewhere. This is more effective than any repellent device.',
      },
    },
  ],
};

export default function UltrasonicPestRepellersPage() {
  return (
    <GuideLayout
      title="Ultrasonic Pest Repellers: Do They Actually Work?"
      subtitle="An honest, evidence-based look at one of the most popular — and most questionable — pest control products on the market"
      lastUpdated="March 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'Rat Poison vs Rat Traps', href: '/guides/rat-poison-vs-rat-traps' },
        { title: 'Professional Pest Control vs DIY', href: '/guides/professional-pest-control-vs-diy' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
      ]}
      relatedProducts={[
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* The Short Answer */}
      <h2 id="verdict-first">The Short Answer</h2>
      <p>
        <strong>No, ultrasonic pest repellers do not work reliably.</strong> The scientific evidence is clear: these devices have little to no lasting effect on rodents, insects, or spiders. While they are heavily marketed on Amazon and social media, no credible peer-reviewed study has demonstrated that ultrasonic repellers can eliminate or significantly reduce a pest population in a real-world setting.
      </p>
      <p>
        The British Pest Control Association (BPCA), the Campaign for Responsible Rodenticide Use (CRRU), and virtually every professional pest controller in the UK will tell you the same thing: ultrasonic repellers are not an effective pest control method. If you have a genuine pest problem, your money is far better spent on proven methods like traps, bait, exclusion, and professional treatment.
      </p>
      <p>
        That said, we understand why people are drawn to the idea — a simple plug-in device that keeps pests away without chemicals, traps, or mess sounds almost too good to be true. And, unfortunately, it is. Below we explain why.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>PestPro Index does not recommend ultrasonic pest repellers as a primary pest control method. The evidence does not support the marketing claims. We include this guide to help consumers make informed decisions.</p>
        </Callout>
      </div>

      {/* How They Work */}
      <h2 id="how-they-work">How Ultrasonic Repellers Claim to Work</h2>
      <p>
        Ultrasonic pest repellers are small electronic devices that emit high-frequency sound waves — typically between 20 kHz and 65 kHz — which are above the range of human hearing. The claimed mechanism is that these sound waves are unpleasant or disorienting to pests, causing them to leave the area.
      </p>
      <p>
        Most devices plug directly into a wall socket and claim to cover a single room or area of 80 to 150 square metres. They typically cost between £10 and £30 for a multi-pack. Manufacturers claim they repel a wide range of pests including rats, mice, spiders, ants, cockroaches, mosquitoes, and even bed bugs.
      </p>
      <p>
        The appeal is obvious: no chemicals, no traps, no mess, no killing, and they run silently (to humans) 24/7. But appeal and effectiveness are very different things.
      </p>

      {/* The Science */}
      <h2 id="the-science">What Does the Science Say?</h2>
      <p>
        The scientific evidence on ultrasonic pest repellers has been remarkably consistent over the past three decades: <strong>they do not work reliably</strong>.
      </p>

      <h3>Rodents (Rats and Mice)</h3>
      <p>
        Rodents can hear ultrasonic frequencies, so the basic premise is not entirely unreasonable. Laboratory studies have shown that initial exposure to ultrasonic sound can cause brief startle or avoidance responses in mice. However, every properly controlled study has found that this effect diminishes rapidly — rodents <strong>habituate</strong> (get used to) the sound within days, sometimes hours.
      </p>
      <p>
        A widely cited study by the University of Nebraska–Lincoln reviewed all available research and concluded: <em>&quot;There is no evidence that ultrasonic devices drive established rodent populations from buildings or prevent them from entering.&quot;</em> The study noted that when food, water, and shelter are present, rodents simply learn to ignore the sound.
      </p>
      <p>
        The BPCA&apos;s position is unambiguous: <em>&quot;The BPCA does not endorse ultrasonic devices as an effective method of rodent control.&quot;</em>
      </p>

      <h3>Insects</h3>
      <p>
        The evidence for insect repellency is even weaker. Most common household insects — cockroaches, ants, bed bugs, fleas — <strong>cannot even hear</strong> ultrasonic frequencies. They lack the auditory apparatus to detect these sound waves, so the entire mechanism is biologically implausible.
      </p>
      <p>
        Studies testing ultrasonic devices against cockroaches, mosquitoes, and ants have consistently found <strong>no repellent effect</strong>. A 2007 review published in the <em>Journal of Economic Entomology</em> examined all available evidence and concluded that ultrasonic devices are not effective against any household insect pest.
      </p>

      <h3>Spiders</h3>
      <p>
        Spiders do not have ears and do not detect airborne sound in the ultrasonic range. They sense vibrations through their legs, but ultrasonic devices do not produce the type of substrate-borne vibrations that would affect spider behaviour. There is no scientific evidence that ultrasonic devices repel spiders.
      </p>

      <div className="not-prose">
        <StatCallout stat="0" description="peer-reviewed studies demonstrating ultrasonic repellers can eliminate a pest infestation" />
      </div>

      {/* Advertising vs Reality */}
      <h2 id="advertising-vs-reality">Advertising Claims vs Reality</h2>
      <p>
        The marketing for ultrasonic pest repellers is aggressive and often misleading. Here are some common claims and the reality:
      </p>
      <table>
        <thead>
          <tr>
            <th>Marketing Claim</th>
            <th>Reality</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&quot;Repels all pests&quot;</td>
            <td>No device repels all pests. Most insects cannot hear ultrasonic sound at all.</td>
          </tr>
          <tr>
            <td>&quot;Covers 150 sq metres&quot;</td>
            <td>Ultrasound does not penetrate walls, furniture, or soft furnishings. Effective range (if any) is line-of-sight only within a single room.</td>
          </tr>
          <tr>
            <td>&quot;Results in 2–3 weeks&quot;</td>
            <td>If pests leave during this period, it is more likely due to seasonal changes or other factors, not the device.</td>
          </tr>
          <tr>
            <td>&quot;Scientifically proven&quot;</td>
            <td>No peer-reviewed, independent study has proven these devices effective. Manufacturer-funded studies often lack proper controls.</td>
          </tr>
          <tr>
            <td>&quot;Safe for pets&quot;</td>
            <td>Dogs and cats can hear ultrasonic frequencies and may be affected. Some owners report anxiety or behavioural changes.</td>
          </tr>
          <tr>
            <td>&quot;4.5-star Amazon rating&quot;</td>
            <td>Many positive reviews reflect confirmation bias, coincidence, or incentivised reviews. Look at the 1-star reviews for a more balanced picture.</td>
          </tr>
        </tbody>
      </table>

      <h3>Regulatory Action</h3>
      <p>
        In the United States, the Federal Trade Commission (FTC) has issued warnings and enforcement actions against multiple ultrasonic pest repeller manufacturers for making unsupported claims. In 2001, the FTC sent warning letters to over 60 companies, stating that the efficacy claims for these products are not supported by scientific testing.
      </p>
      <p>
        In the UK, the Advertising Standards Authority (ASA) has upheld complaints against ultrasonic pest repeller advertisements for claiming effectiveness not supported by robust evidence. Despite this, the products remain freely available on Amazon and in high street shops.
      </p>

      {/* Pest by Pest Verdict */}
      <h2 id="pest-by-pest">Pest-by-Pest Verdict</h2>
      <table>
        <thead>
          <tr>
            <th>Pest</th>
            <th>Can It Hear Ultrasound?</th>
            <th>Does the Device Work?</th>
            <th>What Works Instead</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Rats</strong></td>
            <td>Yes</td>
            <td>No lasting effect — they habituate quickly</td>
            <td><Link href="/best/rat-traps">Snap traps</Link>, <Link href="/best/rat-bait-stations">bait stations</Link>, proofing</td>
          </tr>
          <tr>
            <td><strong>Mice</strong></td>
            <td>Yes</td>
            <td>No lasting effect — habituation within days</td>
            <td><Link href="/best/mouse-traps">Snap traps</Link>, <Link href="/best/mouse-bait-stations">bait stations</Link>, proofing</td>
          </tr>
          <tr>
            <td><strong>Cockroaches</strong></td>
            <td>No</td>
            <td>No — biologically implausible</td>
            <td><Link href="/best/cockroach-gel-bait">Gel bait</Link>, professional treatment</td>
          </tr>
          <tr>
            <td><strong>Ants</strong></td>
            <td>No</td>
            <td>No — biologically implausible</td>
            <td><Link href="/best/ant-gel-bait">Ant gel bait</Link>, hygiene measures</td>
          </tr>
          <tr>
            <td><strong>Spiders</strong></td>
            <td>No</td>
            <td>No — spiders do not hear airborne sound</td>
            <td>Remove webs, reduce prey insects, seal gaps</td>
          </tr>
          <tr>
            <td><strong>Bed bugs</strong></td>
            <td>No</td>
            <td>No — no auditory apparatus</td>
            <td><Link href="/best/bed-bug-spray">Sprays</Link>, <Link href="/best/bed-bug-mattress-encasement">encasements</Link>, professional heat treatment</td>
          </tr>
          <tr>
            <td><strong>Fleas</strong></td>
            <td>No</td>
            <td>No — biologically implausible</td>
            <td><Link href="/best/flea-spray-for-home">Flea spray</Link>, <Link href="/best/flea-fogger">foggers</Link>, pet treatment</td>
          </tr>
          <tr>
            <td><strong>Mosquitoes</strong></td>
            <td>Partially</td>
            <td>No — studies show no repellent effect</td>
            <td>Window screens, DEET repellent, eliminate standing water</td>
          </tr>
        </tbody>
      </table>

      {/* What Actually Works */}
      <h2 id="what-actually-works">What Actually Works Instead</h2>
      <p>
        If you are looking for effective pest control, here are the methods that are actually supported by evidence:
      </p>

      <h3>1. Exclusion (Proofing)</h3>
      <p>
        The single most effective long-term pest control measure is preventing pests from entering your home. Seal gaps around pipes, cables, and vents with steel wool and caulk. Fit brush strips under doors. Repair broken air bricks and damaged fascia boards. A mouse can squeeze through a 6 mm gap; a rat through 25 mm.
      </p>

      <h3>2. Hygiene</h3>
      <p>
        Remove the food sources that attract pests. Store food in sealed containers. Clean up crumbs and spills. Fix leaking taps (rodents and insects need water). Empty bins regularly. Good hygiene does not eliminate an existing infestation, but it makes your home far less attractive to pests in the first place.
      </p>

      <h3>3. Trapping</h3>
      <p>
        For rodents, snap traps remain the most effective, humane, and affordable method of control. Place them along walls, behind appliances, and near droppings. Check daily. For insects, sticky traps and pheromone traps are useful for monitoring and reducing populations. See our <Link href="/best/rat-traps">best rat traps</Link> and <Link href="/best/mouse-traps">best mouse traps</Link> guides.
      </p>

      <h3>4. Targeted Baiting</h3>
      <p>
        Gel baits for ants and cockroaches, bait blocks in tamper-resistant stations for rodents — these are the same products professionals use, and many are available on Amazon UK. Applied correctly, they are far more effective than any plug-in device. See our <Link href="/best/ant-gel-bait">ant gel bait</Link> and <Link href="/best/cockroach-gel-bait">cockroach gel bait</Link> guides.
      </p>

      <h3>5. Professional Treatment</h3>
      <p>
        For difficult pests (bed bugs, large cockroach or rat infestations, wasp nests at height), professional treatment delivers results that consumer products cannot match. See our <Link href="/guides/professional-pest-control-vs-diy">professional vs DIY guide</Link> for advice on when to call in the experts.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>The money you would spend on ultrasonic repellers (typically £20 to £30 for a multi-pack) is better spent on quality snap traps, gel bait, or steel wool and caulk for proofing. These proven methods will actually solve your pest problem.</p>
        </Callout>
      </div>

      {/* If You Still Want One */}
      <h2 id="if-you-still-want-one">If You Still Want to Try One</h2>
      <p>
        We understand that some readers will want to try an ultrasonic device despite the evidence — perhaps as a supplement to other methods, or because the idea of a chemical-free, maintenance-free solution is too appealing to ignore. If so, manage your expectations:
      </p>
      <ul>
        <li><strong>Do not rely on it as your sole method of pest control.</strong> Use it alongside traps, bait, and proofing.</li>
        <li><strong>Buy from a brand that offers a money-back guarantee.</strong> You may well want to return it.</li>
        <li><strong>Monitor carefully.</strong> If you still see signs of pest activity after 2 to 3 weeks, the device is not working — switch to proven methods immediately.</li>
        <li><strong>Be cautious with pets.</strong> Dogs and cats can hear ultrasonic frequencies. Watch for signs of anxiety, stress, or behavioural changes.</li>
        <li><strong>Remember that correlation is not causation.</strong> If pests disappear after you plug in a device, it may be coincidence — seasonal changes, a neighbour doing building work, or other factors can cause pests to move on temporarily.</li>
      </ul>

      <FindProviderCTA
        heading="Dealing with a pest problem right now?"
        subtext="Skip the gadgets and get proven results. Find BPCA-certified pest controllers near you for a professional assessment and treatment plan."
      />

      {/* FAQ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Do ultrasonic pest repellers work on rats and mice?</h3>
      <p>
        The scientific consensus is no. While initial exposure may cause brief avoidance, rodents habituate to the sound within days. No peer-reviewed study has demonstrated that ultrasonic repellers can eliminate or significantly reduce a rodent population. The BPCA does not recommend them.
      </p>

      <h3>Do ultrasonic pest repellers work on insects?</h3>
      <p>
        No. Most household insects — cockroaches, ants, bed bugs, fleas — cannot hear ultrasonic frequencies. Studies testing these devices against insects have consistently found no repellent effect.
      </p>

      <h3>Why do ultrasonic pest repellers have good reviews on Amazon?</h3>
      <p>
        Confirmation bias (attributing natural changes to the device), coincidental timing, the placebo effect, and incentivised or fake reviews all contribute. One-star reviews on the same products consistently report no effect.
      </p>

      <h3>Are ultrasonic pest repellers safe for dogs and cats?</h3>
      <p>
        Dogs hear up to 65 kHz and cats up to 85 kHz — both overlap with ultrasonic device frequencies. Some pet owners report behavioural changes. Check the device frequency range and monitor your animals.
      </p>

      <h3>Has the ASA or FTC taken action against ultrasonic repeller manufacturers?</h3>
      <p>
        Yes. The US Federal Trade Commission has issued warnings to over 60 companies. The UK Advertising Standards Authority has upheld complaints against adverts making unsupported effectiveness claims.
      </p>

      <h3>What is the best way to get rid of mice without traps or poison?</h3>
      <p>
        Exclusion: seal every gap larger than 6 mm with steel wool and caulk, remove food sources, and eliminate nesting opportunities. Without access to food and shelter, mice will move elsewhere. This is more effective than any repellent device.
      </p>
    </GuideLayout>
  );
}
