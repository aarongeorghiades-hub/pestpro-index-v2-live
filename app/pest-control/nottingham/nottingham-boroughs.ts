export interface NottinghamBoroughData {
  name: string;
  slug: string;
  metaDescription: string;
  intro: string;
  commonPests: string;
}

export const nottinghamBoroughs: NottinghamBoroughData[] = [
  {
    name: "Nottingham City",
    slug: "nottingham-city",
    metaDescription: "Find trusted pest control services in Nottingham city centre, St Ann's, Sneinton, Bulwell, Bestwood, The Park, Lace Market and Hockley. Compare verified providers with ratings and reviews.",
    intro: "Nottingham city centre is a vibrant urban hub blending historic architecture around the Lace Market and Castle quarter with modern developments and dense residential areas in St Ann's, Sneinton, Bulwell, Bestwood and The Park. The mix of student accommodation near the universities, Victorian terraces and city centre apartments creates diverse pest control challenges across the city.",
    commonPests: "Rats and mice are widespread across central Nottingham, particularly near the canal and River Trent where food waste and older drainage systems provide ideal conditions. Bed bugs are increasingly common in the high concentration of student lets and HMOs around the universities. Cockroaches are found in restaurant and takeaway districts around the city centre and Hockley. Pigeons nest extensively on commercial buildings in the Lace Market and Old Market Square. Wasps and ants are seasonal issues in the residential streets of The Park and Bestwood."
  },
  {
    name: "Gedling",
    slug: "gedling",
    metaDescription: "Find trusted pest control services in Gedling borough covering Arnold, Carlton, Mapperley, Netherfield, Colwick and Calverton. Compare verified providers with ratings and reviews.",
    intro: "Gedling borough lies immediately east and north-east of Nottingham city, encompassing the suburban towns of Arnold, Carlton, Mapperley, Netherfield, Colwick and the village of Calverton. The area combines inter-war and post-war housing estates with older village centres and green belt land bordering the Trent Valley.",
    commonPests: "Rats and mice are common across Gedling, particularly in the older housing stock around Arnold and Carlton where aging brickwork and air vents provide easy entry. Wasps are a significant summer pest in suburban gardens across Mapperley and Arnold. Squirrels cause damage in properties near the wooded areas around Calverton and Gedling Country Park. Ants are a persistent summer issue in residential properties throughout the borough. Foxes have become well-established in urban areas, particularly around Carlton and Netherfield."
  },
  {
    name: "Broxtowe",
    slug: "broxtowe",
    metaDescription: "Find trusted pest control services in Broxtowe covering Beeston, Stapleford, Kimberley, Eastwood, Chilwell and Attenborough. Compare verified providers with ratings and reviews.",
    intro: "Broxtowe borough sits to the west and north-west of Nottingham, including the towns of Beeston, Stapleford, Kimberley, Eastwood and Chilwell, along with the nature reserve at Attenborough. The mix of Victorian terraces, university accommodation near the Beeston campus, and suburban housing creates varied pest control needs.",
    commonPests: "Rats are particularly common near the River Trent corridor and Beeston Canal running through the borough. Mice frequently enter the older terraced properties in Beeston and Stapleford through gaps in Victorian-era brickwork. Bed bugs are occasionally found in student accommodation near the University of Nottingham campus. Wasps frequently nest in eaves and garden structures across the suburban areas of Chilwell and Kimberley. Squirrels are an issue in properties near Attenborough Nature Reserve and the wooded areas around Bramcote."
  },
  {
    name: "Rushcliffe",
    slug: "rushcliffe",
    metaDescription: "Find trusted pest control services in Rushcliffe covering West Bridgford, Bingham, Radcliffe-on-Trent, Cotgrave, Keyworth and Ruddington. Compare verified providers with ratings and reviews.",
    intro: "Rushcliffe is an affluent borough south of the River Trent, including the popular residential area of West Bridgford and the towns of Bingham, Radcliffe-on-Trent, Cotgrave, Keyworth and Ruddington. The area's mix of larger detached properties, village housing and new-build estates alongside significant countryside creates distinct pest control challenges.",
    commonPests: "Rats are prevalent near the River Trent and its tributaries, particularly around West Bridgford and Radcliffe-on-Trent. Mice commonly enter the larger detached and semi-detached properties found across the borough. Wasps are a significant summer pest in the borough's substantial gardens and rural fringes. Squirrels cause damage in the many wooded areas and larger properties around Keyworth and Ruddington. Moles and rabbits are reported in the more rural parts of the borough. Ants are a common summer nuisance across residential properties."
  },
  {
    name: "Ashfield",
    slug: "ashfield",
    metaDescription: "Find trusted pest control services in Ashfield covering Kirkby-in-Ashfield, Hucknall, Sutton-in-Ashfield, Annesley and Selston. Compare verified providers with ratings and reviews.",
    intro: "Ashfield district lies to the north-west of Nottingham, centred on the towns of Kirkby-in-Ashfield, Hucknall and Sutton-in-Ashfield, along with the villages of Annesley and Selston. A former coal mining area, the district combines post-war housing estates with older town centres and areas of regeneration.",
    commonPests: "Rats are particularly common in Ashfield, thriving near former industrial sites and the extensive network of streams and watercourses running through the district. Mice frequently enter the older housing stock found across Hucknall and Kirkby-in-Ashfield. Wasps are a significant summer pest in residential gardens. Ants are commonly reported during warmer months across the district. Foxes have become established in urban areas. Bed bugs are occasionally found in denser housing areas around Sutton-in-Ashfield."
  },
  {
    name: "Mansfield",
    slug: "mansfield",
    metaDescription: "Find trusted pest control services in Mansfield covering Mansfield town centre, Mansfield Woodhouse, Forest Town, Rainworth and Clipstone. Compare verified providers with ratings and reviews.",
    intro: "Mansfield is the largest town in north Nottinghamshire, encompassing Mansfield town centre, Mansfield Woodhouse, Forest Town, Rainworth and Clipstone. Set on the edge of Sherwood Forest, the district combines a historic market town with former mining communities and newer residential developments.",
    commonPests: "Rats and mice are the most commonly reported pests in Mansfield, particularly in the older town centre properties and near the River Maun running through the town. Wasps frequently nest in eaves and outbuildings, especially in properties bordering the extensive woodland around Sherwood Forest. Squirrels are a notable issue in Forest Town and properties near Vicar Water Country Park. Ants are a persistent summer problem. Foxes are increasingly seen in residential areas across the district. Cluster flies are common in rural and semi-rural properties on the outskirts of the town."
  }
];

export function getBoroughBySlug(slug: string): NottinghamBoroughData | undefined {
  return nottinghamBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): NottinghamBoroughData[] {
  return nottinghamBoroughs;
}
