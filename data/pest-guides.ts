export interface PestGuide {
  slug: string;
  name: string;
  pluralName: string;
  seoTitle: string;
  metaDescription: string;
  heroDescription: string;
  overview: string;
  signsOfInfestation: string[];
  healthRisks: string[];
  diyMethods: { method: string; description: string; effectiveness: 'Low' | 'Medium' | 'High' }[];
  whenToCallProfessional: string[];
  costRange: { typical: string; description: string };
  preventionTips: string[];
  seasonalInfo: string;
  faqItems: { question: string; answer: string }[];
  relatedPests: string[];
}

export const pestGuides: PestGuide[] = [
  {
    slug: 'mice',
    name: 'Mice',
    pluralName: 'Mice',
    seoTitle: 'Mice Pest Control UK | Treatment, Costs & Removal | PestPro Index',
    metaDescription: 'Expert mice pest control advice for UK homes and businesses. Learn the signs of a mouse infestation, removal costs from £80–£150, and when to call a professional.',
    heroDescription: 'Mice are one of the most common household pests in the UK, capable of breeding rapidly and causing significant damage to property and health risks to occupants.',
    overview: 'The house mouse (Mus musculus) is the most prevalent rodent pest in UK homes, particularly during the colder months when they seek warmth and food indoors. A single pair of mice can produce up to 2,000 offspring in a year under ideal conditions, making early intervention critical. Mice can squeeze through gaps as small as 6mm, meaning even well-maintained properties are vulnerable to infestation.',
    signsOfInfestation: [
      'Small, dark droppings (3–8mm long) found along skirting boards, in cupboards, or near food sources',
      'Gnaw marks on food packaging, wood, cables, and plastic — mice must gnaw constantly to keep their teeth from overgrowing',
      'Scratching or scurrying noises in walls, ceilings, or under floors, particularly at night when mice are most active',
      'Greasy smear marks along walls and surfaces caused by oils in the mouse\'s fur as they follow the same routes repeatedly',
      'A strong, ammonia-like smell from mouse urine, particularly in enclosed areas such as cupboards and loft spaces',
      'Shredded paper, fabric, or insulation used as nesting material, often found in hidden corners or behind appliances'
    ],
    healthRisks: [
      'Salmonella and other food-borne illnesses transmitted through droppings and urine contaminating food preparation surfaces',
      'Leptospirosis (Weil\'s disease), a potentially serious bacterial infection spread through contact with mouse urine',
      'Hantavirus, though rare in the UK, can be transmitted through inhalation of dust contaminated with mouse droppings',
      'Allergic reactions and asthma exacerbation caused by mouse dander, droppings, and urine proteins becoming airborne'
    ],
    diyMethods: [
      {
        method: 'Snap traps',
        description: 'Traditional spring-loaded traps placed along walls and known mouse routes, baited with chocolate, peanut butter, or nesting material. Place traps perpendicular to the wall with the trigger end closest to the skirting board.',
        effectiveness: 'High'
      },
      {
        method: 'Humane live-catch traps',
        description: 'Enclosed traps that capture mice alive for release at least 2 miles from the property. Check traps every 12 hours to prevent stress and dehydration. Note that released mice often return or may not survive relocation.',
        effectiveness: 'Medium'
      },
      {
        method: 'Ultrasonic deterrents',
        description: 'Electronic devices that emit high-frequency sound waves claimed to repel mice. Plug-in units are widely available from DIY stores. However, scientific evidence for their effectiveness is limited and mice may habituate to the sound.',
        effectiveness: 'Low'
      },
      {
        method: 'Steel wool and sealant',
        description: 'Blocking entry points with steel wool held in place by caulk or expanding foam. Mice cannot gnaw through steel wool. Focus on gaps around pipes, vents, doors, and where utility lines enter the building.',
        effectiveness: 'High'
      },
      {
        method: 'Peppermint oil',
        description: 'Soaking cotton wool balls in peppermint essential oil and placing them near suspected entry points. The strong scent is said to deter mice, though this is generally only a short-term solution and not effective for established infestations.',
        effectiveness: 'Low'
      }
    ],
    whenToCallProfessional: [
      'You have found droppings in multiple rooms, suggesting a widespread infestation rather than a single intruder',
      'DIY traps have failed to resolve the problem after two weeks, indicating a larger population or inaccessible nesting sites',
      'You suspect mice are living within wall cavities, under floors, or in the loft space where access is difficult',
      'There are signs of structural damage such as gnawed electrical cables, which pose a serious fire risk',
      'You are running a food business or other commercial premises where pest control records and compliance are legally required'
    ],
    costRange: {
      typical: '£80–£150',
      description: 'The cost of professional mouse control typically covers an initial survey, bait station placement, and one or two follow-up visits. Prices vary depending on the severity of the infestation, the size of the property, and your location within the UK. Some local councils offer free or subsidised rodent control services, so it is worth checking with your local authority before hiring a private contractor.'
    },
    preventionTips: [
      'Seal all gaps and holes larger than 6mm around the exterior of your property using steel wool, wire mesh, or cement',
      'Store food in airtight glass or metal containers and never leave pet food out overnight',
      'Keep bins securely lidded and ensure rubbish is collected regularly to avoid attracting mice to your property',
      'Clear clutter from lofts, garages, and sheds to reduce potential nesting sites',
      'Trim back vegetation and tree branches that touch the exterior walls or roof of your property',
      'Fix any dripping taps or leaking pipes, as mice need a water source and will be attracted to available moisture',
      'Maintain good hygiene in kitchens by cleaning up crumbs and spillages promptly'
    ],
    seasonalInfo: 'Mice infestations in the UK peak between October and February as falling temperatures drive them indoors to seek warmth, food, and shelter. Breeding occurs year-round indoors but slows in wild populations during winter. Spring and summer months may see reduced indoor activity, though mice established inside a property will remain unless removed. Autumn is the critical time to proof your home against entry before the winter influx.',
    faqItems: [
      {
        question: 'How quickly can a mouse infestation grow?',
        answer: 'A female mouse can have 5 to 10 litters per year, with each litter containing 4 to 12 pups. Young mice reach sexual maturity at around 6 weeks old, meaning a small problem can escalate to a major infestation within just a few months.'
      },
      {
        question: 'Are mice dangerous to my health?',
        answer: 'Yes, mice pose genuine health risks. They can spread salmonella, leptospirosis, and other diseases through their droppings, urine, and contaminated food. Their dander and droppings can also trigger allergic reactions and worsen asthma symptoms.'
      },
      {
        question: 'Can I use poison to get rid of mice myself?',
        answer: 'Rodenticide baits are available to the public, but they must be used with extreme caution, especially in homes with children or pets. The BPCA recommends using tamper-resistant bait stations and following all label instructions carefully. Professional pest controllers have access to more effective, restricted-use products.'
      },
      {
        question: 'Will my council deal with a mouse problem for free?',
        answer: 'Many UK local councils offer rodent control services, though whether these are free or chargeable varies by area. Some councils provide free treatment for council housing tenants or residents on certain benefits. Contact your local environmental health department to find out what services are available in your area.'
      },
      {
        question: 'How do mice get into my house?',
        answer: 'Mice can squeeze through gaps as small as 6mm — roughly the diameter of a pencil. Common entry points include gaps around pipes, air vents, damaged brickwork, gaps beneath doors, and where utility cables enter the building. They are also excellent climbers and can access upper floors via climbing plants or rough brickwork.'
      }
    ],
    relatedPests: ['rats', 'squirrels']
  },
  {
    slug: 'rats',
    name: 'Rats',
    pluralName: 'Rats',
    seoTitle: 'Rat Pest Control UK | Treatment, Costs & Removal | PestPro Index',
    metaDescription: 'Professional rat control advice for UK properties. Identify signs of a rat infestation, typical removal costs of £100–£200, and find BPCA-certified pest controllers.',
    heroDescription: 'Rats are a serious pest in the UK, posing significant health risks and capable of causing extensive structural damage to homes and businesses.',
    overview: 'The brown rat (Rattus norvegicus) is the most common rat species in the UK, found in both urban and rural environments. Rats are highly adaptable, intelligent animals that can gnaw through wood, plastic, and even soft metals, causing damage to buildings, pipework, and electrical wiring. They are a notifiable pest under the Prevention of Damage by Pests Act 1949, and property owners have a legal obligation to keep their premises free from rat infestations.',
    signsOfInfestation: [
      'Large, dark droppings (10–20mm long) shaped like a spindle or capsule, typically found along walls, behind appliances, or near food sources',
      'Gnaw marks on woodwork, plastic pipes, food containers, and electrical cables — rat teeth leave marks approximately 4mm wide',
      'Burrow holes (6–9cm in diameter) in gardens, under sheds, near compost heaps, or around the foundations of buildings',
      'Greasy rub marks along walls, pipes, and beams caused by the oil and dirt in a rat\'s fur as they repeatedly travel the same routes',
      'Scratching, squeaking, or thumping noises in walls, under floors, or in loft spaces, particularly after dark',
      'A strong, unpleasant smell of ammonia from rat urine, especially in enclosed or poorly ventilated areas'
    ],
    healthRisks: [
      'Leptospirosis (Weil\'s disease), a serious bacterial infection transmitted through rat urine that can contaminate water sources and cause liver and kidney failure',
      'Salmonella and E. coli contamination of food and surfaces through rat droppings and urine',
      'Rat-bite fever, a bacterial infection that can result from a bite or scratch, or from handling a dead rat without gloves',
      'Toxoplasmosis and Cryptosporidiosis, parasitic infections that can be transmitted through contact with rat faeces',
      'Structural fire risk from rats gnawing through electrical cables, which is estimated to cause a significant proportion of unexplained building fires in the UK'
    ],
    diyMethods: [
      {
        method: 'Snap traps',
        description: 'Heavy-duty rat snap traps placed at right angles to walls along known rat runs. Bait with peanut butter, chocolate, or bacon. Rat traps are significantly larger and more powerful than mouse traps and should be handled with care.',
        effectiveness: 'High'
      },
      {
        method: 'Proofing and exclusion',
        description: 'Sealing entry points with metal kick plates, wire mesh, or cement. Rats can squeeze through gaps of around 25mm and can gnaw through most non-metal materials. Pay particular attention to gaps around drains, pipes, and air bricks.',
        effectiveness: 'High'
      },
      {
        method: 'Removing food and water sources',
        description: 'Storing all food in sealed containers, securing bin lids, removing fallen fruit from gardens, and fixing dripping taps or leaking pipes. Eliminating the food supply forces rats to move on or increases the effectiveness of traps and bait.',
        effectiveness: 'Medium'
      },
      {
        method: 'Bait stations with rodenticide',
        description: 'Commercially available bait stations containing anticoagulant rodenticides placed along rat runs. Always use tamper-resistant bait stations to protect children, pets, and non-target wildlife. Follow the Campaign for Responsible Rodenticide Use (CRRU) guidelines.',
        effectiveness: 'High'
      }
    ],
    whenToCallProfessional: [
      'You discover burrows under or around the foundations of your building, which may indicate a large, established colony',
      'Rats are accessing the interior of the property through the drainage system, requiring specialist drain surveys and one-way valves',
      'There are signs of rats in a commercial property, where pest control records and documentation are required for health and safety compliance',
      'DIY methods have failed after two weeks and the infestation is persisting or worsening',
      'Rats are gnawing on electrical wiring, gas pipes, or structural timbers, creating immediate safety hazards'
    ],
    costRange: {
      typical: '£100–£200',
      description: 'Professional rat control usually involves an initial inspection, placement of bait stations or traps, and two to three follow-up visits over several weeks. Costs depend on the severity of the infestation, the size and type of property, and whether additional work such as drain surveys or proofing is needed. Many UK councils still provide free or low-cost rat control for residential properties, so check with your local authority first.'
    },
    preventionTips: [
      'Seal any gaps larger than 15mm around the exterior of your property using cement, metal plates, or galvanised wire mesh',
      'Ensure all drain covers are intact and consider fitting non-return valves to prevent rats entering through the sewer system',
      'Store refuse in wheelie bins with secure lids and avoid leaving black bags on the ground',
      'Remove potential harbourage sites such as dense vegetation, log piles, and accumulated rubbish near the property',
      'Avoid feeding birds excessively, as fallen seed and fat balls attract rats — use rat-proof bird feeders where possible',
      'Compost bins should be rodent-resistant; avoid adding cooked food, meat, or dairy to open compost heaps',
      'Keep garages, sheds, and outbuildings tidy and well-maintained to reduce nesting opportunities'
    ],
    seasonalInfo: 'Rat activity increases noticeably in the UK during autumn and winter as rats seek shelter, warmth, and food indoors. Brown rats breed throughout the year when conditions allow, producing up to 5 litters annually with 6 to 12 pups per litter. Spring and summer may see rats active outdoors in gardens and near waterways, but they will readily move indoors if food or shelter becomes scarce. Flooding events at any time of year can displace rats from drains and burrows, causing sudden surges in infestations.',
    faqItems: [
      {
        question: 'What is the difference between rat and mouse droppings?',
        answer: 'Rat droppings are significantly larger, measuring 10–20mm in length and shaped like a dark brown capsule or spindle. Mouse droppings are much smaller at 3–8mm, resembling dark grains of rice. The size of the droppings is one of the most reliable ways to determine which rodent you are dealing with.'
      },
      {
        question: 'Can rats come up through the toilet?',
        answer: 'Yes, although uncommon, rats can swim through sewer pipes and emerge through toilet bowls, particularly if there is a broken drain nearby. This is more likely in older properties with deteriorating drainage. A qualified drainage specialist can survey your drains and fit a non-return valve to prevent this.'
      },
      {
        question: 'Am I legally required to deal with a rat infestation?',
        answer: 'Under the Prevention of Damage by Pests Act 1949, local authorities have the power to require property owners to take steps to eliminate rat infestations. If you fail to act, the council can carry out the work and charge you for it. Businesses have additional obligations under food safety and health and safety legislation.'
      },
      {
        question: 'How long does professional rat treatment take?',
        answer: 'A typical professional rat treatment programme takes between 3 and 6 weeks, involving an initial assessment and multiple follow-up visits to monitor bait take and trap activity. The duration depends on the size of the colony and the complexity of the site. Your pest controller should provide a clear treatment plan at the outset.'
      },
      {
        question: 'Are there rats in every part of the UK?',
        answer: 'Brown rats are found throughout the entire UK, from city centres to remote rural areas. The UK rat population is estimated at around 10 million, though exact figures are difficult to establish. Urban areas with dense housing, commercial food outlets, and sewer networks tend to have the highest concentrations.'
      },
      {
        question: 'Do rats only come out at night?',
        answer: 'Rats are predominantly nocturnal, but seeing rats during daylight hours can indicate a very large population or that their usual food sources have been disrupted. Daytime sightings are a strong indicator that the infestation is significant and professional treatment should be sought promptly.'
      }
    ],
    relatedPests: ['mice', 'squirrels']
  },
  {
    slug: 'bed-bugs',
    name: 'Bed Bugs',
    pluralName: 'Bed Bugs',
    seoTitle: 'Bed Bug Pest Control UK | Treatment, Costs & Removal | PestPro Index',
    metaDescription: 'Complete UK guide to bed bug control. Identify bed bug infestations, understand treatment options, and find professional removal from £150–£300 per treatment.',
    heroDescription: 'Bed bugs are resilient, blood-feeding parasites that have seen a dramatic resurgence across the UK, infesting homes, hotels, and hostels regardless of cleanliness.',
    overview: 'The common bed bug (Cimex lectularius) is a small, flat, wingless insect that feeds exclusively on blood, typically biting humans during the night. Bed bug numbers have risen sharply in the UK since the early 2000s, driven by increased international travel and resistance to commonly used insecticides. Infestations are not a sign of poor hygiene — bed bugs are expert hitchhikers that spread via luggage, second-hand furniture, and clothing.',
    signsOfInfestation: [
      'Clusters of small, red, itchy bites on exposed skin, often appearing in a line or zigzag pattern, typically noticed upon waking',
      'Tiny dark brown or black spots (bed bug faecal matter) on mattress seams, bed frames, headboards, and nearby furniture',
      'Shed skins (exuviae) found in and around the bed, as bed bugs moult five times before reaching adulthood',
      'Small blood spots on sheets or pillowcases from crushed bed bugs or bites that have bled during the night',
      'A distinctive sweet, musty odour in heavily infested rooms, produced by the bed bugs\' scent glands',
      'Live bed bugs (4–7mm long, oval, flat, and reddish-brown) hiding in mattress seams, behind headboards, in furniture joints, and behind skirting boards'
    ],
    healthRisks: [
      'Intense itching and skin irritation from bites, which can lead to secondary bacterial infections if scratched excessively',
      'Allergic reactions in some individuals, ranging from mild swelling to severe anaphylaxis in very rare cases',
      'Significant psychological distress, anxiety, and insomnia caused by the knowledge of being bitten during sleep',
      'Anaemia in extreme and prolonged infestations, particularly in vulnerable individuals such as the elderly or very young children'
    ],
    diyMethods: [
      {
        method: 'High-temperature washing',
        description: 'Washing all bedding, clothing, and soft furnishings at 60\u00B0C or above, then tumble drying on a hot setting for at least 30 minutes. This kills bed bugs and their eggs on contact. Seal items in plastic bags before transporting to the washing machine to prevent spreading.',
        effectiveness: 'Medium'
      },
      {
        method: 'Vacuuming',
        description: 'Thoroughly vacuuming mattresses, bed frames, headboards, skirting boards, and nearby furniture using a crevice tool. Immediately seal and dispose of the vacuum bag in an outdoor bin. Vacuuming alone will not eliminate an infestation but can reduce numbers.',
        effectiveness: 'Low'
      },
      {
        method: 'Mattress encasements',
        description: 'Encasing mattresses and box springs in specialist bed bug-proof covers that trap any remaining bugs inside and prevent new ones from harbourage. Encasements must remain in place for at least 12 months, as bed bugs can survive without feeding for extended periods.',
        effectiveness: 'Medium'
      },
      {
        method: 'Diatomaceous earth',
        description: 'Applying food-grade diatomaceous earth around bed legs, along skirting boards, and in crevices. The fine powder damages the bed bug\'s waxy outer coating, causing dehydration and death over several days. Use sparingly and avoid inhaling the dust.',
        effectiveness: 'Medium'
      },
      {
        method: 'Steam treatment',
        description: 'Using a domestic steam cleaner at temperatures above 60\u00B0C on mattresses, upholstery, and crevices where bed bugs hide. Steam kills bugs and eggs on contact but requires thorough, slow application to be effective. It may not reach bugs deep within furniture or wall voids.',
        effectiveness: 'Medium'
      }
    ],
    whenToCallProfessional: [
      'You have confirmed a bed bug infestation through sightings of live bugs, faecal spots, or shed skins — bed bugs are extremely difficult to eradicate without professional treatment',
      'Bites are recurring despite your own efforts, suggesting the infestation is established and reproducing',
      'The infestation has spread to multiple rooms or adjacent properties, requiring a coordinated treatment approach',
      'You are operating a hotel, hostel, B&B, or rental property where bed bug infestations can have serious reputational and legal consequences',
      'You need a heat treatment or fumigation, which requires specialist equipment and training not available for DIY use'
    ],
    costRange: {
      typical: '£150–£300',
      description: 'Professional bed bug treatment costs vary depending on the method used (insecticide spray, heat treatment, or fumigation), the number of affected rooms, and the severity of the infestation. Heat treatments tend to be more expensive but can resolve an infestation in a single visit. Most pest controllers will require at least two treatment visits, spaced 10–14 days apart, to ensure all life stages are eliminated.'
    },
    preventionTips: [
      'Inspect hotel beds and headboards carefully when travelling — check mattress seams and behind headboards for signs of bed bugs',
      'Keep luggage on luggage racks or in the bathroom when staying in hotels, rather than placing bags on the bed or floor',
      'Wash and hot-dry all clothing immediately after returning from trips, even if unworn',
      'Be cautious when buying second-hand furniture, particularly mattresses, bed frames, and upholstered items — inspect thoroughly before bringing into your home',
      'Reduce clutter around beds to minimise potential hiding spots for bed bugs',
      'Use mattress and pillow encasements as a preventative measure to limit harbourage opportunities',
      'Regularly vacuum around beds, skirting boards, and furniture joints to remove any early-stage invaders before they establish'
    ],
    seasonalInfo: 'Bed bugs are active year-round in heated UK properties, as they thrive in stable indoor temperatures between 18\u00B0C and 28\u00B0C. However, infestations tend to peak in late summer and early autumn, coinciding with the return from summer holidays when bugs are inadvertently brought home in luggage. Bed bug reproduction slows at lower temperatures, and bugs can enter a dormant state in unheated properties during winter, surviving for several months without a blood meal.',
    faqItems: [
      {
        question: 'Can you see bed bugs with the naked eye?',
        answer: 'Yes, adult bed bugs are visible to the naked eye at 4–7mm in length, roughly the size and shape of an apple pip. Nymphs (juveniles) are smaller and pale, making them harder to spot. Eggs are tiny (1mm), white, and often found in crevices near the bed.'
      },
      {
        question: 'Do bed bugs spread disease?',
        answer: 'Unlike mosquitoes or ticks, bed bugs are not currently known to transmit diseases to humans through their bites. However, bites can cause significant itching, secondary infections from scratching, and considerable psychological distress. The WHO classifies them as a public health nuisance.'
      },
      {
        question: 'Can I get bed bugs even if my house is clean?',
        answer: 'Absolutely. Bed bugs are not attracted to dirt or filth — they are attracted to the carbon dioxide and warmth produced by sleeping humans. They spread by hitchhiking on luggage, clothing, and second-hand furniture. Any home, regardless of how clean it is, can develop a bed bug infestation.'
      },
      {
        question: 'How long can bed bugs survive without feeding?',
        answer: 'Bed bugs are remarkably resilient and can survive without a blood meal for several months, and in some cases up to a year in cool conditions. This is why simply vacating a property for a few weeks will not resolve an infestation. Professional treatment is essential for complete eradication.'
      },
      {
        question: 'Is one bed bug a sign of an infestation?',
        answer: 'Finding a single bed bug does not necessarily mean you have a full-blown infestation, but it should be taken seriously. A single fertilised female can lay up to 500 eggs in her lifetime. It is advisable to carry out a thorough inspection and consider professional assessment to determine the extent of the problem.'
      }
    ],
    relatedPests: ['fleas', 'moths']
  },
  {
    slug: 'wasps',
    name: 'Wasps',
    pluralName: 'Wasps',
    seoTitle: 'Wasp Nest Removal UK | Treatment, Costs & Pest Control | PestPro Index',
    metaDescription: 'UK wasp nest removal guide with costs from £50–£100. Learn how to identify wasp nests, understand the risks, and find qualified pest controllers near you.',
    heroDescription: 'Wasps become a significant nuisance across the UK each summer, and their nests — which can house thousands of aggressive insects — often require professional removal.',
    overview: 'The common wasp (Vespula vulgaris) and the German wasp (Vespula germanica) are the two main pest species in the UK. A single wasp nest can contain up to 10,000 workers by late summer, and wasps become increasingly aggressive as the colony matures and natural food sources dwindle. Unlike bees, wasps can sting repeatedly, and their stings can cause severe allergic reactions, including life-threatening anaphylaxis in sensitised individuals.',
    signsOfInfestation: [
      'A steady stream of wasps flying to and from a fixed point on or near your property, indicating a nest entrance',
      'A visible papery nest structure, which may be found in loft spaces, wall cavities, under eaves, in sheds, or in the ground',
      'Increased wasp activity around food and drink, particularly sugary items, during late summer',
      'Buzzing or humming sounds within walls or ceilings, suggesting a concealed nest inside the building structure',
      'Chewed wood or bark on fences and garden furniture, as wasps strip wood fibres to build their nests'
    ],
    healthRisks: [
      'Painful stings that cause localised swelling, redness, and itching, which can be particularly dangerous around the mouth and throat',
      'Anaphylaxis — a severe, potentially fatal allergic reaction that requires immediate emergency medical treatment with adrenaline (EpiPen)',
      'Multiple stings from disturbed nests, which can cause systemic reactions including nausea, vomiting, and dizziness even in non-allergic individuals',
      'Secondary infections from sting sites that are scratched or not kept clean'
    ],
    diyMethods: [
      {
        method: 'Shop-bought wasp nest foam',
        description: 'Aerosol insecticidal foams designed to be sprayed directly into the nest entrance from a safe distance (typically 2–3 metres). Apply at dusk when wasps are less active and most are inside the nest. Follow the product instructions carefully and wear protective clothing.',
        effectiveness: 'Medium'
      },
      {
        method: 'Wasp traps',
        description: 'Commercial or homemade traps using sugary liquid or fermenting fruit to attract and drown worker wasps. These reduce numbers around outdoor dining areas but will not eliminate the nest itself. Effective as a supplementary measure rather than a standalone solution.',
        effectiveness: 'Low'
      },
      {
        method: 'Leaving the nest until winter',
        description: 'Wasp nests are annual — the colony dies off naturally in late autumn, and the nest is never reused. If the nest is in a location that does not cause a direct hazard, simply waiting for the cold weather to kill off the colony is a viable option. Block the entrance after the nest is confirmed dead.',
        effectiveness: 'High'
      },
      {
        method: 'Insecticidal dust application',
        description: 'Applying permethrin-based insecticidal dust (bendiocarb powder) to the nest entrance using a puffer bottle. Wasps walk through the dust and carry it into the nest. This method works well for ground nests or nests with an accessible entrance, but requires appropriate PPE.',
        effectiveness: 'High'
      }
    ],
    whenToCallProfessional: [
      'The nest is in an inaccessible location such as inside a wall cavity, high under the eaves, or in a loft space where safe access is difficult',
      'Anyone in the household has a known allergy to wasp stings, making any disturbance of the nest potentially life-threatening',
      'The nest is near a doorway, window, children\'s play area, or any high-traffic zone where stings are likely',
      'You are uncomfortable or inexperienced with DIY pest control and do not want to risk agitating a large nest'
    ],
    costRange: {
      typical: '£50–£100',
      description: 'Wasp nest removal is one of the more affordable pest control treatments. The cost typically covers a single visit during which the technician treats the nest with insecticidal powder or spray. Prices may be higher for nests in difficult-to-reach locations (such as high rooflines or chimney stacks) that require ladders or specialist access equipment. Some local councils offer wasp nest treatment for a fixed fee, often around £50–£70.'
    },
    preventionTips: [
      'Inspect your property in early spring (March–April) for emerging queen wasps seeking nesting sites, and block any potential entry points to loft spaces and wall cavities',
      'Keep bins tightly sealed, particularly during summer, and clean up any food or drink spills outdoors promptly',
      'Avoid leaving sweet or fermented drinks unattended outside, and use cups with lids at barbecues and picnics',
      'Fit fly screens to windows and doors that are regularly left open during warm weather',
      'Check loft spaces, sheds, and garages in spring for early-stage nests (golf ball-sized) which are much easier to deal with before the colony grows'
    ],
    seasonalInfo: 'Wasp colonies in the UK follow a strict seasonal cycle. Queen wasps emerge from hibernation in April and begin building small nests and laying eggs. Worker numbers increase rapidly through June and July, and nests reach peak size in August and September. In late summer, wasps become noticeably more aggressive as the colony produces new queens and males, and the workers\' food-gathering behaviour shifts from protein (insects) to sugar. The first frosts of autumn kill off the workers and males, and only new fertilised queens survive by hibernating through winter.',
    faqItems: [
      {
        question: 'Will wasps reuse the same nest next year?',
        answer: 'No, wasp nests are never reused. Each spring, a new queen builds an entirely new nest from scratch. However, wasps may choose to nest in the same general area if the conditions are favourable, so it is worth proofing the location after the old colony has died off.'
      },
      {
        question: 'Is it safe to remove a wasp nest myself?',
        answer: 'Small, accessible nests in early summer (when the colony is still small) may be manageable with shop-bought treatments, provided you wear protective clothing and apply the product at dusk. Large, established nests or nests in awkward locations should always be treated by a qualified pest controller to avoid the risk of mass stinging.'
      },
      {
        question: 'What should I do if someone is stung and has a severe reaction?',
        answer: 'Call 999 immediately if someone shows signs of anaphylaxis, including difficulty breathing, swelling of the face or throat, rapid heartbeat, or feeling faint. If the person carries an adrenaline auto-injector (EpiPen), help them to use it. Lay them flat with legs raised unless they are struggling to breathe, in which case sit them upright.'
      },
      {
        question: 'Do wasps serve any useful purpose?',
        answer: 'Yes, wasps are actually beneficial for the ecosystem. They are important predators of garden pests including aphids, caterpillars, and flies, and they also play a role in pollination. Where possible, nests in out-of-the-way locations that pose no direct risk can be left alone to benefit your garden.'
      },
      {
        question: 'How can I tell the difference between a wasp and a bee?',
        answer: 'Wasps have a smooth, shiny body with distinct yellow and black bands, a narrow waist, and relatively hairless legs. Bees are generally fuzzier, rounder, and have a more brownish colouration. Honey bee swarms and bumblebee nests should not be destroyed — contact a local beekeeper for advice on relocation.'
      }
    ],
    relatedPests: ['ants', 'cockroaches']
  },
  {
    slug: 'ants',
    name: 'Ants',
    pluralName: 'Ants',
    seoTitle: 'Ant Pest Control UK | Treatment, Costs & Removal | PestPro Index',
    metaDescription: 'UK ant pest control guide covering the most common species, signs of infestation, removal costs from £60–£120, and effective treatment and prevention advice.',
    heroDescription: 'Ants are among the most common household pests in the UK, with black garden ants and pharaoh ants frequently invading kitchens and food storage areas in large numbers.',
    overview: 'The black garden ant (Lasius niger) is by far the most common ant pest in UK homes, entering buildings in search of sweet foods during spring and summer. Pharaoh ants (Monomorium pharaonis) are a more serious indoor pest, particularly in heated buildings such as hospitals and blocks of flats, and require specialist treatment. While ants are not typically a health hazard, large infestations can contaminate food, undermine paving, and cause considerable nuisance.',
    signsOfInfestation: [
      'Trails of ants marching in a line between a food source and their nest, often seen along skirting boards, worktops, and window sills',
      'Small piles of fine earth or sand around paving slabs, at the base of walls, or in cracks in paths — these are excavated nest material',
      'Ants swarming indoors, particularly flying ants during "flying ant day" events in July and August',
      'Ants found inside food packaging, around pet food bowls, or in bin areas',
      'Rustling sounds in wall cavities or beneath flooring in cases of large or established colonies'
    ],
    healthRisks: [
      'Contamination of food and food preparation surfaces, as ants traverse both outdoor and indoor environments carrying bacteria on their bodies',
      'Pharaoh ants in particular are associated with the spread of pathogens including Salmonella, Staphylococcus, and Clostridium, especially in hospital settings',
      'Some ant species can bite, though UK species rarely cause more than minor irritation',
      'Structural nuisance from nesting activity undermining patios, paths, and lawns'
    ],
    diyMethods: [
      {
        method: 'Ant bait stations',
        description: 'Ready-to-use bait stations containing a sweet liquid insecticide that worker ants carry back to the nest, poisoning the queen and the entire colony. Place stations along ant trails and near entry points. Allow up to two weeks for the bait to be distributed throughout the colony.',
        effectiveness: 'High'
      },
      {
        method: 'Boiling water on nests',
        description: 'Pouring several kettles of boiling water directly into an outdoor ant nest entrance. This can kill a significant number of ants and may destroy a small nest, but larger colonies often extend too deep for the water to reach the queen and brood chambers.',
        effectiveness: 'Low'
      },
      {
        method: 'Ant powder (insecticidal dust)',
        description: 'Applying permethrin-based ant killer powder along ant trails, around entry points, and directly onto visible nests. Worker ants walk through the powder and transfer it to the nest. Effective for garden ants but must be kept dry to remain active.',
        effectiveness: 'Medium'
      },
      {
        method: 'Sealing entry points',
        description: 'Using silicone sealant or caulk to block gaps around doors, windows, pipes, and cracks in walls where ants are entering the property. This does not address the nest itself but prevents ants from gaining access to your kitchen and food areas.',
        effectiveness: 'Medium'
      },
      {
        method: 'Removing food attractants',
        description: 'Thoroughly cleaning kitchen surfaces, storing food in sealed containers, wiping up spills immediately, and keeping bins clean and closed. Removing the food source that is attracting ants into the property can encourage them to forage elsewhere.',
        effectiveness: 'Medium'
      }
    ],
    whenToCallProfessional: [
      'You suspect pharaoh ants, which are small (2mm), yellow-brown ants typically found in heated buildings — these require specialist treatment and cannot be effectively controlled with shop-bought products',
      'The ant colony is nesting inside the fabric of the building, such as within wall cavities, under floors, or in insulation, where it cannot be reached with surface treatments',
      'Repeated DIY treatments have failed to resolve the problem, suggesting a large or multi-nest colony',
      'Ants are infesting a commercial food premises where pest control records and compliance with food hygiene regulations are required'
    ],
    costRange: {
      typical: '£60–£120',
      description: 'Professional ant treatment costs depend on the species involved and the extent of the infestation. Garden ant treatments are usually straightforward and may require just one or two visits. Pharaoh ant infestations in large or multi-occupancy buildings can be significantly more expensive and time-consuming, potentially requiring a coordinated treatment programme across multiple units.'
    },
    preventionTips: [
      'Keep kitchen worktops and floors scrupulously clean, wiping up crumbs and sticky residues promptly',
      'Store sugar, honey, jam, and other sweet foods in sealed containers rather than leaving them in open cupboards',
      'Rinse out food tins and jars before placing them in recycling bins',
      'Seal gaps around doors, windows, and where pipes enter the building using silicone sealant',
      'Clear vegetation and debris away from the base of external walls to discourage nesting close to the property',
      'Empty and clean pet food bowls after feeding rather than leaving food down throughout the day'
    ],
    seasonalInfo: 'Ant activity in the UK is strongly seasonal. Colonies become active in spring (March–April) as temperatures rise, and foraging workers increasingly enter buildings from May through September. The famous "flying ant day" events typically occur in July or August, when winged males and queens swarm to mate — though swarming may happen over several days or weeks depending on weather conditions. Ant activity drops significantly from October onward, and colonies become dormant through winter.',
    faqItems: [
      {
        question: 'What is flying ant day?',
        answer: 'Flying ant day refers to the period, usually in July or August, when virgin queen ants and males take flight to mate. It is not a single nationwide event — swarming is triggered by warm, humid conditions following rain and can occur on different days in different areas. The swarms are harmless and typically last only a day or two.'
      },
      {
        question: 'Why are ants coming into my kitchen?',
        answer: 'Ants send out scout workers to search for food, and when a scout finds a reliable source, it lays a chemical (pheromone) trail back to the nest for other workers to follow. Sweet and sugary foods are particularly attractive to the common black garden ant. Cleaning the trail with soapy water and removing the food source will discourage further visits.'
      },
      {
        question: 'Are UK ants dangerous?',
        answer: 'The common black garden ant does not sting and its bite is too weak to pierce human skin, so it poses no direct health risk. However, pharaoh ants (found mainly in heated buildings) can carry harmful bacteria. The main concern with garden ants is food contamination and the nuisance of large numbers in the home.'
      },
      {
        question: 'How do I get rid of ants permanently?',
        answer: 'The only way to permanently resolve an ant problem is to destroy the queen in the nest. Bait-based treatments are the most effective approach because workers carry the bait back to the colony. Killing surface ants with spray only removes a fraction of the colony and the queen will quickly replenish worker numbers.'
      },
      {
        question: 'Can ants damage my house?',
        answer: 'Garden ants do not cause structural damage to buildings in the UK, unlike carpenter ants found in other countries. However, nesting activity can undermine paving slabs, damage lawns, and push fine soil into properties through small gaps. In rare cases, ants nesting near electrical connections can cause short circuits.'
      }
    ],
    relatedPests: ['wasps', 'cockroaches']
  },
  {
    slug: 'cockroaches',
    name: 'Cockroaches',
    pluralName: 'Cockroaches',
    seoTitle: 'Cockroach Pest Control UK | Treatment, Costs & Removal | PestPro Index',
    metaDescription: 'Professional cockroach control for UK homes and businesses. Identify infestations, understand health risks, and find treatment from £100–£250 with BPCA experts.',
    heroDescription: 'Cockroaches are one of the most reviled pests in the UK, carrying serious disease risks and thriving in warm, humid environments such as kitchens, bathrooms, and commercial food premises.',
    overview: 'The two main cockroach species found in the UK are the German cockroach (Blattella germanica) and the Oriental cockroach (Blatta orientalis). German cockroaches prefer warm, humid indoor environments and are most commonly found in kitchens and food preparation areas, while Oriental cockroaches tolerate cooler conditions and often inhabit basements, drains, and cellars. Cockroach infestations are a serious public health concern, and their presence in food businesses can result in prosecution and closure by local authority environmental health officers.',
    signsOfInfestation: [
      'Live cockroaches spotted scurrying away when lights are switched on, particularly in kitchens and bathrooms — seeing them during the day indicates a heavy infestation',
      'Small, dark cylindrical droppings (resembling ground pepper or coffee granules) found on worktops, inside cupboards, and behind appliances',
      'Egg cases (oothecae) — dark brown, purse-shaped capsules approximately 8mm long — found in sheltered crevices near food and water sources',
      'An unpleasant, musty, oily smell that intensifies as the infestation grows, caused by pheromones and faecal matter',
      'Smear marks — dark, irregular streaks on surfaces where cockroaches travel along walls or through gaps, especially in areas with high moisture',
      'Shed skins from nymphs as they grow through their moult stages, typically found near harbourage points'
    ],
    healthRisks: [
      'Transmission of food-borne illnesses including Salmonella, E. coli, and dysentery, as cockroaches contaminate food and surfaces with bacteria from drains and waste',
      'Triggering and worsening of asthma and allergies, particularly in children, caused by proteins in cockroach droppings, shed skins, and saliva becoming airborne',
      'Spread of parasitic infections including Cryptosporidiosis and Gastroenteritis through contamination of food and utensils',
      'Potential for food business closure and prosecution under the Food Safety Act 1990 and associated hygiene regulations if cockroaches are found on premises'
    ],
    diyMethods: [
      {
        method: 'Gel bait',
        description: 'Applying small dots of cockroach gel bait (containing fipronil or imidacloprid) in crevices, behind appliances, under sinks, and along known cockroach routes. The gel is consumed by cockroaches and the active ingredient is passed through the colony via coprophagy and necrophagy.',
        effectiveness: 'High'
      },
      {
        method: 'Sticky traps (monitoring)',
        description: 'Placing glue board traps in areas where cockroaches are suspected, such as under sinks, behind fridges, and near boilers. These are primarily a monitoring tool to assess the extent of the infestation and identify species, rather than a means of control.',
        effectiveness: 'Low'
      },
      {
        method: 'Boric acid powder',
        description: 'Applying a thin film of boric acid powder behind appliances, inside wall cavities, and beneath units where cockroaches harbour. Cockroaches walk through the powder and ingest it during grooming. Effective but must be kept dry and applied thinly — thick applications are avoided by cockroaches.',
        effectiveness: 'Medium'
      },
      {
        method: 'Deep cleaning and harbourage reduction',
        description: 'Thoroughly cleaning behind and underneath kitchen appliances, removing grease build-up, fixing water leaks, and sealing cracks and crevices where cockroaches hide. While cleaning alone will not eliminate an established infestation, it reduces food sources and harbourage, increasing the effectiveness of other treatments.',
        effectiveness: 'Medium'
      }
    ],
    whenToCallProfessional: [
      'You identify cockroaches as German cockroaches, which breed rapidly and are notoriously difficult to control without professional-grade insecticides and integrated pest management',
      'Cockroaches are seen during daylight hours, which strongly suggests a large, established population that has outgrown its available harbourage',
      'You operate a food business, restaurant, or any commercial premises where cockroach infestations must be dealt with urgently and documented for regulatory compliance',
      'DIY treatments have not resolved the problem within two to three weeks, indicating the infestation is more extensive than initially thought',
      'Cockroaches are emerging from drains or wall cavities, requiring treatment of voids and infrastructure that is not accessible to householders'
    ],
    costRange: {
      typical: '£100–£250',
      description: 'Cockroach treatment costs reflect the difficulty of eradicating these resilient pests and typically involve multiple visits over several weeks. German cockroach infestations in particular may require 3 to 4 treatments to achieve full control. Costs for commercial premises, especially food businesses, tend to be at the higher end due to the need for detailed reporting, compliance documentation, and ongoing monitoring contracts.'
    },
    preventionTips: [
      'Eliminate all food sources by cleaning up crumbs, wiping down surfaces, and storing food in airtight containers',
      'Fix dripping taps, leaking pipes, and any sources of standing water — cockroaches need moisture and are particularly attracted to damp areas',
      'Seal gaps around pipes, behind sinks, and where utility services enter the building using silicone sealant or expanding foam',
      'Keep bins clean and emptied regularly, and do not leave refuse bags sitting on the floor',
      'Ensure extractor fans in kitchens and bathrooms are functional to reduce humidity',
      'In flats and multi-occupancy buildings, coordinate with neighbours and building management, as cockroaches readily spread between adjacent units through shared voids and pipework'
    ],
    seasonalInfo: 'Cockroach activity in the UK is less seasonal than many other pests because they primarily inhabit heated indoor environments. German cockroaches breed year-round in warm kitchens and food premises. Oriental cockroaches may be more active in warmer months (May–September) and are sometimes found outdoors in summer. However, central heating means infestations can establish and persist at any time of year. Warmer summers and milder winters may be contributing to a gradual increase in cockroach reports across the UK.',
    faqItems: [
      {
        question: 'Are cockroaches common in the UK?',
        answer: 'While cockroach infestations are less widespread in the UK than in warmer climates, they are a persistent problem in urban areas, particularly in restaurants, takeaways, flats, and buildings with communal heating. London and other major cities report significant numbers of cockroach callouts each year.'
      },
      {
        question: 'What attracts cockroaches to my home?',
        answer: 'Cockroaches are attracted to warmth, moisture, and food. Kitchens and bathrooms provide ideal conditions. Grease residue behind cookers, leaking pipes, pet food left out overnight, and food waste in bins are all common attractants. They can also be introduced via second-hand appliances or deliveries.'
      },
      {
        question: 'Can cockroaches fly?',
        answer: 'The Oriental cockroach, the most common species in UK homes, cannot fly. German cockroaches have wings but rarely fly, preferring to run. Neither species in the UK is a strong flier. If you see a large, flying cockroach-like insect, it may be a different species or potentially a non-pest beetle.'
      },
      {
        question: 'How quickly do cockroaches breed?',
        answer: 'German cockroaches are prolific breeders. A single female can produce up to 6 egg cases (oothecae) in her lifetime, each containing 30–40 eggs. Nymphs reach maturity in about 6 weeks under ideal conditions. This means a single cockroach brought into your property can give rise to thousands within months.'
      },
      {
        question: 'Do cockroaches bite humans?',
        answer: 'Cockroaches can technically bite, but it is extremely rare and usually only occurs in cases of very heavy infestations where food is scarce. The real danger from cockroaches is the diseases they carry and the allergens they produce, not their bite. Their contamination of food and surfaces is the primary health concern.'
      }
    ],
    relatedPests: ['ants', 'silverfish']
  },
  {
    slug: 'fleas',
    name: 'Fleas',
    pluralName: 'Fleas',
    seoTitle: 'Flea Pest Control UK | Treatment, Costs & Removal | PestPro Index',
    metaDescription: 'Expert UK flea control advice for homes with pets. Identify flea infestations, treatment costs from £80–£150, and find professional pest controllers near you.',
    heroDescription: 'Fleas are a widespread pest in UK homes, particularly those with cats and dogs, causing irritating bites and requiring thorough treatment of both animals and the home environment.',
    overview: 'The cat flea (Ctenocephalides felis) is the most common flea species affecting UK households, feeding on cats, dogs, and occasionally humans. A single flea can lay up to 50 eggs per day, and flea pupae can remain dormant in carpets and soft furnishings for months, hatching in response to vibrations and warmth when a host is detected. Effective flea control requires simultaneous treatment of pets, bedding, carpets, and the wider home environment.',
    signsOfInfestation: [
      'Pets scratching, biting, or grooming themselves excessively, especially around the neck, base of the tail, and belly',
      'Small, dark reddish-brown insects (1–3mm long) visible in pet fur, particularly when parting the hair on the belly or behind the ears',
      'Flea dirt — tiny black specks in pet fur or on bedding that turn reddish-brown when placed on damp white tissue (this is digested blood)',
      'Itchy red bites on human skin, typically on the lower legs and ankles, often appearing in clusters or lines',
      'Flea larvae (small, white, worm-like) visible in carpet fibres, pet bedding, or in cracks between floorboards',
      'Pets developing bald patches or skin irritation from flea allergy dermatitis (FAD), one of the most common veterinary skin conditions in the UK'
    ],
    healthRisks: [
      'Itchy, uncomfortable bites that can become infected if scratched, leading to secondary bacterial skin infections',
      'Flea allergy dermatitis (FAD) in pets, causing severe itching, hair loss, and skin damage that requires veterinary treatment',
      'Tapeworm transmission — pets (and rarely children) can contract the Dipylidium caninum tapeworm by swallowing an infected flea during grooming',
      'Anaemia in young, elderly, or small pets with heavy flea burdens, as a large number of fleas can extract a significant volume of blood'
    ],
    diyMethods: [
      {
        method: 'Veterinary flea treatment for pets',
        description: 'Treating all pets in the household with a veterinary-recommended flea product such as a spot-on treatment (e.g., Advantage, Frontline), oral tablet, or flea collar. This is the essential first step in any flea control programme. Over-the-counter supermarket products are generally less effective than veterinary-dispensed treatments.',
        effectiveness: 'High'
      },
      {
        method: 'Thorough vacuuming',
        description: 'Vacuuming all carpets, rugs, upholstered furniture, and cracks between floorboards daily for at least two weeks. Vacuuming removes adult fleas, eggs, and larvae, and the vibration stimulates dormant pupae to hatch, bringing them into contact with any treatments applied. Dispose of the vacuum bag or empty the canister into an outdoor bin after each session.',
        effectiveness: 'Medium'
      },
      {
        method: 'Hot washing of bedding and fabrics',
        description: 'Washing all pet bedding, human bedding, cushion covers, and washable soft furnishings at 60\u00B0C or above to kill fleas, eggs, and larvae. Tumble dry on a hot setting for added effectiveness. Repeat weekly until the infestation is resolved.',
        effectiveness: 'Medium'
      },
      {
        method: 'Household flea spray',
        description: 'Using a residual insecticidal spray containing permethrin and an insect growth regulator (IGR) such as methoprene on carpets, rugs, and upholstered furniture. IGRs prevent flea eggs and larvae from developing into adults. Spray in accordance with the product label, ventilate the room, and keep pets and children off treated surfaces until dry.',
        effectiveness: 'High'
      },
      {
        method: 'Diatomaceous earth',
        description: 'Sprinkling food-grade diatomaceous earth on carpets, leaving for 24–48 hours, and then vacuuming thoroughly. The powder damages the flea\'s exoskeleton, causing dehydration. Less effective than chemical sprays but suitable for those who prefer a non-chemical approach.',
        effectiveness: 'Medium'
      }
    ],
    whenToCallProfessional: [
      'The infestation persists despite treating all pets and applying household flea sprays, suggesting a very heavy or widespread infestation',
      'Fleas are present in a property with no pets, which may indicate the previous occupants had pets or that wildlife such as foxes or hedgehogs are harbourage hosts nearby',
      'Flea pupae continue to hatch weeks or months after initial treatment, as professional-grade residual insecticides provide longer-lasting control than domestic products',
      'The property is a rental, holiday let, or commercial premises where a fast and guaranteed resolution is needed'
    ],
    costRange: {
      typical: '£80–£150',
      description: 'Professional flea treatment typically involves spraying all carpeted areas and soft furnishings with a long-lasting residual insecticide. Costs vary based on the size of the property and the number of rooms requiring treatment. Most treatments require one visit, though a follow-up may be recommended after 2–3 weeks if the infestation is severe. Pet treatment by a vet is an additional cost that must be factored in.'
    },
    preventionTips: [
      'Use a veterinary-recommended flea preventative on all pets year-round, not just during summer months, as centrally heated homes allow fleas to thrive in winter',
      'Vacuum carpets, rugs, and upholstered furniture regularly, paying particular attention to areas where pets sleep and rest',
      'Wash pet bedding at 60\u00B0C or above at least fortnightly',
      'Groom pets regularly using a fine-toothed flea comb, checking for live fleas and flea dirt',
      'Treat the home environment as well as the pet if fleas are found — only 5% of a flea infestation is on the animal; the remaining 95% (eggs, larvae, pupae) is in the environment',
      'If moving into a property previously occupied by pet owners, vacuum thoroughly and consider a preventative household flea spray before moving in'
    ],
    seasonalInfo: 'Flea activity in the UK traditionally peaks during the warmer months from June to October, when higher temperatures accelerate the flea life cycle. However, the widespread use of central heating means that fleas can remain active and breed year-round in UK homes. The transition from summer to autumn, when heating systems are switched on, can trigger a surge in flea hatching as dormant pupae respond to the warmth and vibration of returning occupants. Veterinary practices report flea cases throughout the year.',
    faqItems: [
      {
        question: 'How long does it take to get rid of fleas?',
        answer: 'A complete flea eradication typically takes 2 to 4 weeks with consistent treatment of both pets and the home environment. Flea pupae in carpets can remain dormant for up to 6 months and are resistant to insecticides, so continued vacuuming is essential to stimulate hatching and expose new adults to residual treatments.'
      },
      {
        question: 'Can fleas live in a house without pets?',
        answer: 'Yes, fleas can infest a home without pets. Previous occupants\' pets may have left behind flea eggs and pupae in carpets, which can remain dormant for months before hatching when new occupants move in. Fleas can also be brought in on clothing or introduced by visiting animals.'
      },
      {
        question: 'Do fleas bite humans?',
        answer: 'Yes, cat and dog fleas readily bite humans, particularly around the ankles and lower legs. Flea bites appear as small, red, itchy bumps, often in clusters. While fleas prefer to feed on pets, they will bite humans when hungry or when pet hosts are unavailable.'
      },
      {
        question: 'Why are there still fleas after I treated my pet?',
        answer: 'Only about 5% of a flea infestation lives on your pet — the remaining 95% exists as eggs, larvae, and pupae in your carpets, furniture, and floorboards. Treating the pet kills adult fleas on the animal, but the environmental population must also be addressed through vacuuming, washing, and insecticidal sprays to break the breeding cycle.'
      },
      {
        question: 'Can fleas transmit diseases to humans in the UK?',
        answer: 'The risk of flea-transmitted disease in the UK is low compared to tropical regions. However, fleas can transmit the Dipylidium caninum tapeworm (mainly a risk for children who accidentally swallow a flea) and cause secondary bacterial infections through scratched bites. The main health impact is discomfort and irritation from bites.'
      }
    ],
    relatedPests: ['bed-bugs', 'moths']
  },
  {
    slug: 'moths',
    name: 'Moths',
    pluralName: 'Moths',
    seoTitle: 'Moth Pest Control UK | Treatment, Costs & Removal | PestPro Index',
    metaDescription: 'UK moth pest control guide for clothes moths and pantry moths. Learn signs of infestation, treatment costs from £80–£200, and how to protect your home.',
    heroDescription: 'Clothes moths and pantry moths cause costly damage to textiles, carpets, and stored food in UK homes, often going unnoticed until significant harm has been done.',
    overview: 'The two main moth pests in UK homes are the common clothes moth (Tineola bisselliella), which damages woollen garments, carpets, and other natural fibres, and the Indian meal moth (Plodia interpunctella), which infests stored dried foods. It is the moth larvae, not the adult moths, that cause the damage — adult clothes moths are small, golden-coloured, and avoid light, making them easy to overlook. Moth infestations have increased significantly across the UK in recent decades, partly attributed to warmer homes and reduced use of traditional mothballs.',
    signsOfInfestation: [
      'Small, irregular holes in woollen, silk, or cashmere garments, often in areas of the fabric that are stained or soiled',
      'Fine, silky webbing or tubes on the surface of fabrics, carpets, or stored foods — these are created by moth larvae as they feed',
      'Small, cream-coloured larvae (caterpillars) visible on or within affected textiles or food products',
      'Adult moths (8–10mm) flying or crawling in wardrobes, cupboards, or pantries — clothes moths tend to scurry rather than fly toward light',
      'Threadbare patches on the edges of carpets, particularly under furniture and along skirting boards where the carpet is undisturbed',
      'Contaminated dried food products (cereals, flour, rice, nuts) with webbing, small caterpillars, or cocoons in stored food cupboards'
    ],
    healthRisks: [
      'Contamination of stored food products with larvae, webbing, and faecal pellets, rendering food unfit for consumption',
      'Allergic reactions in some individuals, including skin irritation and respiratory symptoms, caused by moth scales, larval hairs, and droppings',
      'Significant financial loss from damage to expensive clothing, carpets, upholstery, and historical textiles such as tapestries and antique rugs'
    ],
    diyMethods: [
      {
        method: 'Thorough cleaning and vacuuming',
        description: 'Vacuuming wardrobes, drawers, and carpet edges (especially under heavy furniture) to remove larvae, eggs, and food debris that sustains them. Wash or dry-clean affected garments. Vacuuming is the essential first step in any moth control programme.',
        effectiveness: 'Medium'
      },
      {
        method: 'Pheromone traps',
        description: 'Sticky traps impregnated with synthetic clothes moth or pantry moth pheromones that attract and capture adult male moths. These are excellent monitoring tools that help identify the extent of an infestation and confirm whether treatments are working, but they will not eliminate an infestation alone.',
        effectiveness: 'Low'
      },
      {
        method: 'Cedar wood and lavender',
        description: 'Placing cedar wood blocks, rings, or sachets of dried lavender in wardrobes and drawers as a deterrent. Cedar oil contains natural insecticidal compounds that may repel adult moths. Effectiveness diminishes as the scent fades, and these products are unlikely to resolve an established infestation.',
        effectiveness: 'Low'
      },
      {
        method: 'Freezing affected items',
        description: 'Sealing infested garments or textiles in plastic bags and placing them in a domestic freezer at -18\u00B0C or below for at least 72 hours. This kills moth eggs, larvae, and adults. Allow items to return to room temperature and repeat the process after a week for thorough control.',
        effectiveness: 'High'
      },
      {
        method: 'Insecticidal moth spray',
        description: 'Applying a residual moth killer spray to the inside of wardrobes, drawer interiors, carpet edges, and other areas where moth activity has been detected. Products containing permethrin or transfluthrin provide residual protection for several weeks. Avoid spraying directly onto delicate fabrics.',
        effectiveness: 'Medium'
      }
    ],
    whenToCallProfessional: [
      'Clothes moth damage is widespread, affecting carpets throughout the property or multiple rooms\' worth of stored clothing',
      'You have valuable, antique, or irreplaceable textiles (Persian rugs, tapestries, vintage clothing) that require specialist conservation-grade treatment',
      'Pantry moth infestations recur despite thorough cleaning and disposal of contaminated food, suggesting a hidden breeding source',
      'The infestation is in a commercial setting such as a clothing retailer, museum, or food warehouse where stock protection is critical'
    ],
    costRange: {
      typical: '£80–£200',
      description: 'Professional moth treatment may include a combination of insecticidal spraying, fumigation of affected textiles, and installation of monitoring traps. The cost depends on the extent of the infestation, the size of the property, and whether specialist treatment of high-value items is required. Heat treatment of individual rooms using industrial heaters is an effective but more expensive option for severe clothes moth infestations.'
    },
    preventionTips: [
      'Store out-of-season woollen, silk, and cashmere garments in sealed garment bags or airtight containers after washing or dry-cleaning',
      'Vacuum wardrobes, drawers, and the edges of fitted carpets regularly, paying attention to dark, undisturbed areas under beds and heavy furniture',
      'Rotate and air clothing regularly — moths prefer to lay eggs on garments that are left undisturbed for long periods',
      'Keep stored food in airtight glass or plastic containers rather than open packets, and check "use by" dates regularly',
      'Use cedar wood products or lavender sachets as a deterrent in wardrobes and drawers, refreshing or sanding them periodically to maintain their potency',
      'Address any damp issues in the property, as moths are attracted to humidity and damp conditions favour larval development'
    ],
    seasonalInfo: 'Clothes moth activity in UK homes occurs year-round due to central heating maintaining warm temperatures, though natural peaks occur in spring (April–May) and late summer (August–September) when adult moths emerge to mate and lay eggs. Indian meal moths similarly thrive in warm kitchen environments throughout the year. Historically, autumn was the traditional time for "putting away" winter woollens with mothballs, and this remains a sensible time to ensure textiles are properly cleaned and stored in sealed containers.',
    faqItems: [
      {
        question: 'Are the moths I see flying around my house clothes moths?',
        answer: 'Not necessarily. Many moths found indoors are simply outdoor species attracted to light through open windows and are completely harmless. Clothes moths are small (6–8mm), golden-buff coloured, and strongly avoid light — they tend to scurry along surfaces rather than fly. If moths are fluttering around your lights, they are most likely not clothes moths.'
      },
      {
        question: 'What do clothes moth larvae eat?',
        answer: 'Clothes moth larvae feed on keratin, a protein found in natural animal fibres such as wool, cashmere, silk, fur, and feathers. They are particularly attracted to garments stained with food, sweat, or body oils. Synthetic and cotton fabrics are not at risk unless they are blended with natural fibres or heavily soiled.'
      },
      {
        question: 'Do mothballs still work?',
        answer: 'Traditional mothballs containing naphthalene or paradichlorobenzene are effective at killing moth larvae in enclosed spaces. However, they have a strong, unpleasant odour and contain chemicals that may pose health risks with prolonged exposure. Many people now prefer cedar wood, lavender, or sealed storage as alternatives, though these are generally less effective for active infestations.'
      },
      {
        question: 'How do I know if I have pantry moths or clothes moths?',
        answer: 'Pantry moths (Indian meal moths) are larger than clothes moths, with distinctive coppery-brown wingtips. They are found in kitchens near stored food and are more likely to fly. Clothes moths are small, uniformly golden, and found in wardrobes, on carpets, or near textiles. Identifying the species is important as the treatment approach differs.'
      },
      {
        question: 'Can professional pest control guarantee moth removal?',
        answer: 'A good professional pest controller can significantly reduce and usually eliminate a moth infestation through targeted insecticide application and integrated pest management. However, prevention is an ongoing process — without continued good housekeeping, proper storage, and monitoring, re-infestation from external sources is always possible.'
      }
    ],
    relatedPests: ['silverfish', 'fleas']
  },
  {
    slug: 'silverfish',
    name: 'Silverfish',
    pluralName: 'Silverfish',
    seoTitle: 'Silverfish Pest Control UK | Treatment, Costs & Removal | PestPro Index',
    metaDescription: 'UK silverfish control guide with treatment costs from £60–£120. Learn how to identify silverfish, reduce humidity, and eliminate infestations professionally.',
    heroDescription: 'Silverfish are small, moisture-loving insects commonly found in UK bathrooms, kitchens, and damp areas, where they feed on starchy materials and can damage books, wallpaper, and clothing.',
    overview: 'The silverfish (Lepisma saccharina) is a primitive, wingless insect that has coexisted with humans for thousands of years. Measuring 10–15mm in length with a distinctive silvery, fish-like appearance and rapid, darting movement, silverfish are nocturnal and prefer dark, damp environments. While they are not a health hazard, they feed on starchy substances including book bindings, wallpaper paste, cardboard, flour, and even the sizing on cotton fabrics, making them a nuisance pest that can cause damage over time.',
    signsOfInfestation: [
      'Sightings of small, silvery, elongated insects with three tail-like appendages darting across bathroom floors, kitchen surfaces, or from behind skirting boards when lights are switched on',
      'Irregular holes, notches, or surface etching on paper, books, cardboard, and wallpaper caused by silverfish feeding',
      'Tiny dark droppings resembling ground pepper found in cupboards, bookshelves, and along skirting boards',
      'Yellowish staining on fabrics, paper, or wallpaper from silverfish secretions',
      'Shed silverfish skins, which are small, translucent, and often found in bathrooms, airing cupboards, or near bookcases'
    ],
    healthRisks: [
      'Silverfish are not known to transmit diseases and do not bite or sting humans',
      'Allergic reactions in some individuals caused by silverfish scales and droppings, which may contribute to dust allergies',
      'Damage to books, documents, photographs, wallpaper, and stored papers — particularly problematic for archives, libraries, and historic collections',
      'Contamination of dry food products including flour, cereals, and dried pasta if silverfish access unsealed packaging'
    ],
    diyMethods: [
      {
        method: 'Reducing humidity',
        description: 'Using dehumidifiers, improving ventilation, fixing leaks, and using extractor fans in bathrooms and kitchens to lower humidity levels below 50%. Silverfish require high humidity (75%+) to thrive, and drying out the environment makes conditions inhospitable for them.',
        effectiveness: 'High'
      },
      {
        method: 'Insecticidal powder',
        description: 'Applying a residual insecticidal powder (containing permethrin or deltamethrin) behind skirting boards, in cracks, around pipes, and in other harbourage areas. The powder remains active for several weeks, killing silverfish that cross treated surfaces.',
        effectiveness: 'Medium'
      },
      {
        method: 'Sticky traps',
        description: 'Placing adhesive traps in areas where silverfish have been sighted — behind toilets, under baths, near bookshelves, and in kitchen cupboards. Useful for monitoring numbers and identifying the main harbourage areas, but unlikely to control a large population on their own.',
        effectiveness: 'Low'
      },
      {
        method: 'Diatomaceous earth',
        description: 'Applying food-grade diatomaceous earth in cracks, crevices, and behind fixtures where silverfish hide. The powder damages their waxy outer layer, causing dehydration. Effective in dry conditions but loses its efficacy when damp, which can be a challenge in the humid environments silverfish prefer.',
        effectiveness: 'Medium'
      },
      {
        method: 'Removing food sources',
        description: 'Storing books, papers, and cardboard in sealed plastic boxes rather than open shelves. Keeping dried food in airtight containers. Removing old newspapers, magazines, and cardboard boxes from damp areas. This reduces the food supply and makes the environment less attractive to silverfish.',
        effectiveness: 'Medium'
      }
    ],
    whenToCallProfessional: [
      'Silverfish numbers are large and persistent despite efforts to reduce humidity and apply DIY treatments',
      'The property has an underlying damp problem that is creating ideal silverfish habitat and requires professional assessment',
      'Silverfish are damaging valuable books, documents, photographs, or wallpaper in a home, office, or archive',
      'You are finding silverfish throughout the property rather than in a single room, suggesting widespread harbourage in wall cavities and sub-floor voids'
    ],
    costRange: {
      typical: '£60–£120',
      description: 'Professional silverfish treatment usually involves residual insecticidal spraying of affected areas, dusting of voids and crevices, and advice on environmental management to reduce humidity. The cost is generally at the lower end of the pest control scale. Addressing underlying damp problems (which may require a damp specialist) is usually more important and potentially more costly than the pest treatment itself.'
    },
    preventionTips: [
      'Maintain good ventilation in bathrooms, kitchens, and laundry areas by using extractor fans and opening windows regularly',
      'Use a dehumidifier in persistently damp rooms to keep relative humidity below 50%',
      'Fix any plumbing leaks, dripping taps, and sources of condensation promptly',
      'Store books, photographs, and important documents in sealed plastic containers rather than leaving them on open shelves in damp rooms',
      'Seal gaps around pipes, skirting boards, and other entry points with silicone sealant',
      'Avoid accumulating piles of old newspapers, magazines, and cardboard, which provide both food and harbourage for silverfish'
    ],
    seasonalInfo: 'Silverfish are active year-round in UK homes, as they inhabit heated indoor environments and are not strongly affected by outdoor temperatures. However, they may become more noticeable during autumn and winter when increased use of central heating and reduced ventilation raises indoor humidity levels through condensation. Bathroom and kitchen infestations are perennial. Silverfish have a long lifespan (2–8 years) and reproduce slowly, so infestations tend to develop gradually over months or years rather than appearing suddenly.',
    faqItems: [
      {
        question: 'Are silverfish harmful?',
        answer: 'Silverfish do not bite, sting, or transmit diseases, so they are not a direct health risk. However, they can cause damage to books, wallpaper, photographs, and stored papers over time. Their scales and droppings may contribute to household dust allergies in sensitive individuals.'
      },
      {
        question: 'Why do I keep finding silverfish in my bathroom?',
        answer: 'Silverfish thrive in warm, humid environments, making bathrooms an ideal habitat. They are attracted to the moisture from showers and baths, and they feed on organic matter including soap residue, toothpaste, and damp paper. Improving ventilation with an extractor fan and wiping down wet surfaces will make the bathroom less inviting.'
      },
      {
        question: 'Do silverfish indicate a damp problem?',
        answer: 'A persistent silverfish population often indicates elevated humidity levels in the property. While a few silverfish are common in most UK homes, large numbers suggest a damp or ventilation problem that should be investigated. Addressing the underlying moisture issue is the most effective long-term solution.'
      },
      {
        question: 'How do I get rid of silverfish permanently?',
        answer: 'The key to long-term silverfish control is reducing humidity below 50%, eliminating harbourage, and removing food sources. Insecticidal treatments can knock down existing populations, but without addressing the damp conditions that attract them, silverfish are likely to return. A combined approach of environmental management and chemical treatment is most effective.'
      },
      {
        question: 'Can silverfish climb walls and ceilings?',
        answer: 'Silverfish can climb most surfaces but struggle on very smooth ones such as glass, porcelain, and some plastics. They are surprisingly agile and can often be seen darting across bathroom walls and ceilings. Their ability to climb allows them to access bookshelves, cupboards, and even loft spaces.'
      }
    ],
    relatedPests: ['cockroaches', 'moths']
  },
  {
    slug: 'squirrels',
    name: 'Squirrels',
    pluralName: 'Squirrels',
    seoTitle: 'Squirrel Pest Control UK | Treatment, Costs & Removal | PestPro Index',
    metaDescription: 'UK squirrel pest control guide covering grey squirrel removal, legal requirements, costs from £100–£250, and how to protect your loft and property.',
    heroDescription: 'Grey squirrels are a destructive pest in UK loft spaces and gardens, gnawing through cables, timber, and insulation, and are legally classified as an invasive non-native species.',
    overview: 'The grey squirrel (Sciurus carolinensis) was introduced to the UK from North America in the 19th century and has since displaced the native red squirrel across most of England, Wales, and southern Scotland. Grey squirrels commonly enter loft spaces and roof voids where they cause significant damage by gnawing on electrical cables, roof timbers, water pipes, and insulation. Under the Wildlife and Countryside Act 1981 and the Invasive Alien Species (Enforcement and Permitting) Order 2019, it is illegal to release a trapped grey squirrel back into the wild — they must be humanely dispatched.',
    signsOfInfestation: [
      'Loud scratching, scurrying, and thumping noises in the loft space, particularly during the early morning and late afternoon when squirrels are most active',
      'Droppings (similar in size to rat droppings but more rounded) found in the loft, along roof beams, or near entry points',
      'Visible damage to roof timbers, loft insulation, stored items, and electrical cables caused by persistent gnawing',
      'Entry holes in fascia boards, soffits, or where roof tiles have been displaced, typically 5–7cm in diameter',
      'Squirrel nests (dreys) built from insulation material, leaves, and twigs found in loft corners or between joists',
      'Bark stripping on trees in the garden, which grey squirrels do to access the sap layer beneath'
    ],
    healthRisks: [
      'Fire risk from gnawed electrical cables in loft spaces — exposed wiring caused by squirrel damage is a genuine fire hazard',
      'Water damage from squirrels gnawing through plastic water pipes and water tank fittings in the loft',
      'Contamination of water tanks from droppings and urine if squirrels gain access to uncovered cold water tanks',
      'Structural damage to roof timbers and fascia boards from persistent gnawing, which can be costly to repair',
      'Squirrels may carry fleas and ticks, though direct disease transmission to humans in the UK is very rare'
    ],
    diyMethods: [
      {
        method: 'Proofing entry points',
        description: 'Identifying and blocking all entry points using galvanised wire mesh (16-gauge or heavier), metal plates, or concrete. Ensure no squirrels are trapped inside before sealing. Common entry points include gaps in fascia boards, damaged soffits, and where roof tiles meet walls. This is the most critical step in squirrel control.',
        effectiveness: 'High'
      },
      {
        method: 'One-way exclusion doors',
        description: 'Fitting a one-way excluder valve or door over the main squirrel entry point, allowing squirrels to leave but preventing re-entry. Once all squirrels have exited (confirm by monitoring for activity over several days), permanently seal the hole. This method avoids the legal complexities of trapping.',
        effectiveness: 'High'
      },
      {
        method: 'Tree branch management',
        description: 'Cutting back tree branches that overhang or touch the roof, denying squirrels their primary access route to the building. Squirrels can leap up to 2.5 metres horizontally, so ensure a clear gap. This is a preventative measure rather than a standalone solution if squirrels are already inside.',
        effectiveness: 'Medium'
      },
      {
        method: 'Cage trapping',
        description: 'Using approved live-capture cage traps placed in the loft space or on known squirrel routes, baited with peanuts, hazelnuts, or maize. Important legal note: under the Wildlife and Countryside Act 1981, trapped grey squirrels must NOT be released — they must be humanely dispatched. If you are not prepared to do this, you must engage a professional.',
        effectiveness: 'High'
      }
    ],
    whenToCallProfessional: [
      'You are unable or unwilling to humanely dispatch trapped grey squirrels, which is a legal requirement — a BPCA or NPTA qualified pest controller will handle this responsibly',
      'Squirrels have caused damage to electrical wiring in the loft, which needs assessment by a qualified electrician as well as pest control',
      'Entry points are high up on the roof or in locations that require ladders or scaffolding for safe access',
      'Squirrels keep returning despite your attempts to proof the property, suggesting additional entry points that a professional survey can identify',
      'You suspect squirrels may be nesting and have young (kittens) in the loft — a professional can assess the situation and time the treatment appropriately'
    ],
    costRange: {
      typical: '£100–£250',
      description: 'Professional squirrel control typically involves a survey to identify entry points, trapping or exclusion work, humane dispatch of any trapped grey squirrels, and proofing of the property to prevent re-entry. The cost varies depending on the number of entry points, the difficulty of access, and the extent of proofing work required. Additional costs may apply for repairing damage to wiring, insulation, or plumbing caused by squirrel activity.'
    },
    preventionTips: [
      'Inspect your roofline, fascia boards, and soffits at least twice a year (spring and autumn) for any gaps or damage that could allow squirrel entry',
      'Cut back tree branches to maintain at least a 2.5-metre gap between trees and the roof, walls, and guttering of your property',
      'Fit metal mesh over ventilation openings and any gaps in the roofline using galvanised steel mesh with holes no larger than 25mm',
      'Ensure loft hatches close securely and that any holes where pipes or cables enter the loft are sealed',
      'Avoid feeding squirrels in your garden if you are experiencing problems with them entering your roof space',
      'Consider fitting squirrel baffles on bird feeders and removing fallen fruit from the garden to reduce attractants',
      'If you have an uncovered cold water tank in the loft, fit a compliant lid to prevent contamination'
    ],
    seasonalInfo: 'Grey squirrels are active throughout the year and do not hibernate, though they are less visible during periods of very cold or wet weather. They typically breed twice a year, with litters born in February–March and June–July. The period before breeding (December–January and May–June) is when squirrels are most likely to seek out loft spaces as nesting sites. Autumn sees increased activity as squirrels gather and cache food for winter. Roof entry and loft nesting can occur at any time but is most common from late autumn through to spring.',
    faqItems: [
      {
        question: 'Is it legal to trap and release grey squirrels?',
        answer: 'No. Under the Wildlife and Countryside Act 1981 and the Invasive Alien Species (Enforcement and Permitting) Order 2019, it is illegal to release a trapped grey squirrel back into the wild. Once caught, grey squirrels must be humanely dispatched. This is because grey squirrels are an invasive non-native species that threatens the native red squirrel population.'
      },
      {
        question: 'What about red squirrels — are they protected?',
        answer: 'Yes, red squirrels are fully protected under the Wildlife and Countryside Act 1981. It is illegal to intentionally kill, injure, or take a red squirrel, or to damage or destroy a red squirrel drey. If you have red squirrels in your loft (which is very rare), contact your local wildlife trust or Natural England for advice.'
      },
      {
        question: 'Can squirrels cause a house fire?',
        answer: 'Yes, this is one of the most serious risks of a squirrel infestation. Squirrels gnaw on electrical cables in loft spaces, stripping the insulation and exposing bare wires. This creates a genuine fire hazard. If you suspect squirrels have damaged wiring, have it inspected by a qualified electrician as a matter of urgency.'
      },
      {
        question: 'How do squirrels get into my loft?',
        answer: 'Grey squirrels typically access lofts by climbing trees, walls, or drainpipes and entering through gaps in fascia boards, damaged soffits, loose or missing roof tiles, or ventilation openings. They only need a gap of about 5cm (2 inches) to squeeze through, and they can enlarge smaller gaps by gnawing.'
      },
      {
        question: 'Will squirrels leave my loft on their own?',
        answer: 'It is unlikely. Once squirrels have established a nesting site in a warm, sheltered loft space with access to food in the surrounding area, they will not voluntarily leave. Without intervention, they will continue to cause damage and may breed, making the problem worse. Active exclusion or trapping is necessary to resolve the issue.'
      },
      {
        question: 'How can I tell if it is squirrels or rats in my loft?',
        answer: 'Squirrels are primarily active during the day (especially early morning and late afternoon), whereas rats are nocturnal. Squirrel noises tend to be louder and more characterised by running and jumping, while rat noises are lighter scratching and scurrying. Squirrel droppings are rounded, whereas rat droppings are more elongated and spindle-shaped.'
      }
    ],
    relatedPests: ['mice', 'rats']
  }
];
