export interface GlasgowBoroughData {
  name: string;
  slug: string;
  metaDescription: string;
  intro: string;
  commonPests: string;
}

export const glasgowBoroughs: GlasgowBoroughData[] = [
  {
    name: "Glasgow City Centre",
    slug: "glasgow-city-centre",
    metaDescription: "Find trusted pest control services in Glasgow City Centre covering Merchant City, Buchanan Street, Argyle Street, Blythswood Hill and Cowcaddens. Compare verified providers with ratings and reviews.",
    intro: "Glasgow City Centre is Scotland's largest commercial hub, encompassing Merchant City, the Style Mile along Buchanan Street, Blythswood Hill, and the bustling areas around Central and Queen Street stations. The dense mix of Victorian commercial buildings, modern offices, restaurants, student accommodation, and residential conversions creates complex pest control challenges in a compact urban environment.",
    commonPests: "Rats are Glasgow City Centre's most significant pest, thriving in the extensive Victorian sewer network beneath the Merchant City and along the River Clyde corridor. Mice are widespread in older commercial premises, restaurants along Sauchiehall Street, and residential conversions throughout the centre. Pigeons roost extensively on buildings around George Square, Central Station, and the shopping precincts. Cockroaches are a concern in food premises across Merchant City and the restaurant quarter. Bed bugs are an increasing problem in the city's hotels, hostels, and growing short-let market. Seagulls nest aggressively on flat-roofed buildings throughout the centre."
  },
  {
    name: "West End",
    slug: "west-end",
    metaDescription: "Find trusted pest control services in Glasgow's West End covering Byres Road, Hillhead, Kelvinbridge, Partick, Hyndland and Dowanhill. Compare verified providers with ratings and reviews.",
    intro: "Glasgow's West End is one of the city's most desirable areas, centred around the University of Glasgow and Byres Road. Covering Hillhead, Kelvinbridge, Partick, Hyndland, and Dowanhill, the area features grand Victorian and Edwardian tenement flats, leafy residential streets, and a vibrant mix of independent shops, cafes, and restaurants. The ageing housing stock and proximity to the River Kelvin create particular pest control needs.",
    commonPests: "Mice are the West End's most common pest, finding easy entry through the gaps and crevices in Victorian tenement buildings across Hillhead, Hyndland, and Dowanhill. Rats are prevalent near the River Kelvin corridor and in the lane networks behind Byres Road restaurants. Squirrels cause significant issues in properties near the Botanic Gardens, Kelvingrove Park, and the tree-lined streets of Hyndland. Wasps nest in the eaves and roof spaces of tenement buildings during summer. Cluster flies are a recurring autumn pest in upper-floor flats. Bed bugs are a concern in the dense student accommodation around the university."
  },
  {
    name: "Southside",
    slug: "southside",
    metaDescription: "Find trusted pest control services in Glasgow's Southside covering Shawlands, Pollokshields, Govanhill, Queen's Park, Langside and Cathcart. Compare verified providers with ratings and reviews.",
    intro: "Glasgow's Southside encompasses the diverse communities of Shawlands, Pollokshields, Govanhill, Queen's Park, Langside, and Cathcart. The area combines grand sandstone tenements, terraced housing, and modern developments, with significant green spaces including Queen's Park and Pollok Country Park. The mixed housing stock, dense residential population, and varied socioeconomic profile create a range of pest control challenges.",
    commonPests: "Rats are common across the Southside, particularly along the White Cart Water corridor and in areas with older drainage infrastructure around Govanhill and Pollokshields. Mice are widespread in the tenement buildings throughout Shawlands, Queen's Park, and Langside. Wasps are a significant summer pest in the leafy residential streets and gardens of Cathcart and Langside. Bed bugs have become an increasing concern in densely populated areas of Govanhill. Squirrels cause issues in properties bordering Queen's Park and Pollok Country Park. Ants are a frequent summer complaint in ground-floor flats and houses across the area."
  },
  {
    name: "East End",
    slug: "east-end",
    metaDescription: "Find trusted pest control services in Glasgow's East End covering Dennistoun, Parkhead, Bridgeton, Calton, Tollcross and Shettleston. Compare verified providers with ratings and reviews.",
    intro: "Glasgow's East End covers the historic communities of Dennistoun, Parkhead, Bridgeton, Calton, Tollcross, and Shettleston. The area has undergone significant regeneration since the 2014 Commonwealth Games, blending Victorian tenements and traditional housing with modern developments around the Emirates Arena and Glasgow Green. The mix of older and newer properties, combined with proximity to the River Clyde, creates varied pest control needs.",
    commonPests: "Rats are the East End's most persistent pest, thriving along the River Clyde corridor, around Glasgow Green, and in the older drainage systems beneath Bridgeton and Calton. Mice are common in tenement properties throughout Dennistoun and Parkhead. Wasps nest in the roof spaces of older properties across Shettleston and Tollcross. Pigeons roost on commercial buildings along the Gallowgate and around Parkhead. Cockroaches are found in some older residential and commercial premises. Foxes have become increasingly visible in residential areas, particularly around Glasgow Green and Tollcross Park."
  },
  {
    name: "North Glasgow",
    slug: "north-glasgow",
    metaDescription: "Find trusted pest control services in North Glasgow covering Maryhill, Possilpark, Springburn, Bishopbriggs, Milngavie and Bearsden. Compare verified providers with ratings and reviews.",
    intro: "North Glasgow spans from the inner-city communities of Maryhill, Possilpark, and Springburn to the suburban towns of Bishopbriggs, Milngavie, and Bearsden. The area combines social housing estates and traditional tenements with affluent residential suburbs, along with significant green corridors including the Forth and Clyde Canal and the Campsie Fells foothills. This diversity creates a wide range of pest control requirements.",
    commonPests: "Rats are prevalent across North Glasgow, particularly along the Forth and Clyde Canal corridor through Maryhill and near watercourses throughout Possilpark and Springburn. Mice are common in both tenement flats and suburban houses across the area. Squirrels are a significant issue in the leafy suburbs of Bearsden, Milngavie, and Bishopbriggs. Wasps nest prolifically in the gardens and roof spaces of suburban properties. Moles affect gardens in the more rural fringes near Milngavie and the Campsie Fells. Cluster flies are common in properties on the suburban-rural boundary."
  },
  {
    name: "Greater Glasgow",
    slug: "greater-glasgow",
    metaDescription: "Find trusted pest control services across Greater Glasgow covering Paisley, East Kilbride, Clydebank, Dumbarton, Hamilton and Motherwell. Compare verified providers with ratings and reviews.",
    intro: "Greater Glasgow extends beyond the city boundaries to encompass the surrounding towns of Paisley, East Kilbride, Clydebank, Dumbarton, Hamilton, and Motherwell. This wider metropolitan area includes industrial heritage sites, new-build housing estates, and semi-rural communities across Renfrewshire, East Renfrewshire, South Lanarkshire, and West Dunbartonshire. The varied landscape from urban to semi-rural creates diverse pest control challenges.",
    commonPests: "Rats are common throughout Greater Glasgow, with particular activity near the River Clyde and its tributaries through Clydebank, Dumbarton, and Hamilton, and around industrial estates across the region. Mice infest both older housing stock in towns like Paisley and newer developments in East Kilbride. Wasps are a major summer pest across the suburban and semi-rural areas. Moles and rabbits affect gardens and green spaces in the outlying areas. Squirrels cause issues in properties near woodland areas. Cluster flies and ladybirds are seasonal pests in rural and semi-rural properties across the wider region."
  }
];

export function getBoroughBySlug(slug: string): GlasgowBoroughData | undefined {
  return glasgowBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): GlasgowBoroughData[] {
  return glasgowBoroughs;
}
