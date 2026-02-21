export interface LiverpoolBoroughData {
  name: string;
  slug: string;
  metaDescription: string;
  intro: string;
  commonPests: string;
}

export const liverpoolBoroughs: LiverpoolBoroughData[] = [
  {
    name: "Liverpool City",
    slug: "liverpool-city",
    metaDescription: "Find trusted pest control services in Liverpool city centre and inner Liverpool, Merseyside. Compare verified providers with ratings and reviews. BPCA & NPTA certified companies.",
    intro: "Liverpool city centre is a vibrant urban hub combining Georgian and Victorian architecture with modern developments around the waterfront. The mix of restaurants, bars, student accommodation and older residential streets creates diverse pest control challenges across the city.",
    commonPests: "Rats and mice are widespread in the city centre, drawn by commercial food waste and the extensive Victorian sewer network. Cockroaches are found in restaurant districts and older apartment buildings. Bed bugs have become increasingly common in the growing number of city centre hotels and student lets. Pigeons nest on commercial buildings across the waterfront and city centre. Wasps and ants are seasonal issues in residential streets surrounding the centre."
  },
  {
    name: "Wirral",
    slug: "wirral",
    metaDescription: "Find trusted pest control services in Wirral, Merseyside. Covering Birkenhead, Wallasey, Bebington and Neston. Compare verified providers with ratings and reviews.",
    intro: "The Wirral peninsula sits across the Mersey from Liverpool, encompassing towns including Birkenhead, Wallasey, Bebington, Heswall and Neston. Its mix of Victorian terraces, suburban semis and coastal properties creates varied pest control needs across the borough.",
    commonPests: "Rats are prevalent near the Mersey waterfront and the borough's many parks and green spaces. Mice commonly enter the older terraced properties found across Birkenhead and Wallasey through aging brickwork and air bricks. Wasps are a significant summer pest in the borough's suburban gardens. Squirrels target loft spaces in the larger properties around Heswall and West Kirby. Seagulls are a notable nuisance in coastal areas, particularly around New Brighton and Hoylake."
  },
  {
    name: "Sefton",
    slug: "sefton",
    metaDescription: "Find trusted pest control services in Sefton, Merseyside. Covering Bootle, Crosby, Formby and Southport. Compare verified providers with ratings and reviews.",
    intro: "Sefton stretches along the coast north of Liverpool, from the urban areas of Bootle and Crosby through to the affluent suburbs of Formby and the seaside town of Southport. The borough's varied landscape — from dense urban housing to coastal dunes — presents distinct pest challenges.",
    commonPests: "Rats and mice are common across Sefton, particularly in the denser housing stock around Bootle and Litherland. Wasps frequently nest in eaves and garden structures across suburban Crosby and Formby. Seagulls are a persistent problem in Southport town centre and along the coast. Squirrels cause damage in the wooded areas around Formby and Hightown. Ants are a common summer nuisance in residential properties throughout the borough."
  },
  {
    name: "Knowsley",
    slug: "knowsley",
    metaDescription: "Find trusted pest control services in Knowsley, Merseyside. Covering Prescot, Huyton, Kirkby and Halewood. Compare verified providers with ratings and reviews.",
    intro: "Knowsley lies to the east of Liverpool, including the towns of Prescot, Huyton, Kirkby and Halewood. The borough combines post-war housing estates with older town centres and significant green belt land, including Knowsley Safari Park and extensive farmland.",
    commonPests: "Rats and mice are the most commonly reported pests, particularly in older housing areas and near commercial zones. Wasps are a significant summer issue across the borough's many gardens and green spaces. Foxes have become well-established in residential areas, particularly around Huyton and Prescot. Ants are commonly reported during warmer months. Bed bugs are occasionally found in the denser housing areas."
  },
  {
    name: "St Helens",
    slug: "st-helens",
    metaDescription: "Find trusted pest control services in St Helens and surrounding areas, Merseyside. Compare verified providers with ratings and reviews. BPCA & NPTA certified companies.",
    intro: "St Helens sits on the eastern edge of Merseyside, with a strong industrial heritage and a mix of Victorian terraces, inter-war semis and modern housing estates. The town's canal network and former industrial sites, combined with surrounding countryside, create varied pest control needs.",
    commonPests: "Rats are particularly common near the St Helens Canal and former industrial sites across the town. Mice frequently enter the borough's older terraced properties through gaps in brickwork and around pipe entries. Wasps are a significant summer pest in suburban gardens. Ants are commonly reported during warmer months. Foxes and squirrels are increasingly seen in residential areas bordering green spaces."
  },
  {
    name: "Warrington",
    slug: "warrington",
    metaDescription: "Find trusted pest control services in Warrington and surrounding areas. Compare verified providers with ratings and reviews. BPCA & NPTA certified companies.",
    intro: "Warrington is a large town between Liverpool and Manchester, with significant commercial and industrial areas alongside residential suburbs. Its position on the Mersey and the Manchester Ship Canal, combined with extensive new-build developments, creates diverse pest control challenges.",
    commonPests: "Rats are prevalent near the River Mersey and Manchester Ship Canal corridors running through the town. Mice are common across both older terraced housing and newer developments where construction has disturbed existing populations. Wasps frequently nest in eaves and outbuildings across Warrington's suburban areas. Ants are a persistent summer issue. Cockroaches are occasionally found in commercial premises and older flatted properties."
  }
];

export function getBoroughBySlug(slug: string): LiverpoolBoroughData | undefined {
  return liverpoolBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): LiverpoolBoroughData[] {
  return liverpoolBoroughs;
}
