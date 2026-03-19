export interface DerbyBoroughData {
  name: string;
  slug: string;
  metaDescription: string;
  intro: string;
  commonPests: string;
}

export const derbyBoroughs: DerbyBoroughData[] = [
  {
    name: "Derby City Centre",
    slug: "derby-city-centre",
    metaDescription: "Find trusted pest control services in Derby city centre covering the DE1 postcode area. Compare verified providers with ratings and reviews.",
    intro: "Derby city centre is the commercial and cultural heart of the city, home to the Cathedral Quarter, the Intu Derby shopping centre, and a growing number of restaurants, bars, and apartments. The mix of historic buildings, modern developments, and busy hospitality venues creates varied pest control challenges across the DE1 postcode area.",
    commonPests: "Rats are widespread across Derby city centre, particularly around older drainage systems and the rear service areas of restaurants and takeaways. Mice are extremely common in the older commercial buildings and city centre apartments. Cockroaches are a persistent concern in food premises. Pigeons nest extensively on historic buildings around the Cathedral and Irongate. Bed bugs are an increasing problem in hotels and serviced apartments."
  },
  {
    name: "Allestree",
    slug: "allestree",
    metaDescription: "Find trusted pest control services in Allestree, north Derby. Compare verified providers covering the DE22 postcode area.",
    intro: "Allestree is a popular residential suburb in the north of Derby, known for Allestree Park (home to the former Allestree Hall), Markeaton Park nearby, and a range of desirable family homes. The area features large detached and semi-detached properties, established gardens, and proximity to open countryside and the A6 corridor.",
    commonPests: "Rats are common in Allestree, particularly near the park and brook corridors where gardens back onto open land. Mice readily enter the older properties through gaps in construction. Wasps are a major summer pest given the large gardens and mature trees. Squirrels frequently access roof spaces in properties near Allestree Park. Moles cause issues in the larger gardens and playing fields."
  },
  {
    name: "Littleover",
    slug: "littleover",
    metaDescription: "Find trusted pest control services in Littleover, south-west Derby. Compare verified providers covering the DE23 postcode area.",
    intro: "Littleover is a well-established residential area in south-west Derby, popular with families and commuters. The area features a mix of inter-war semi-detached homes, modern estates, and some older properties around the historic Littleover village. It borders the countryside towards Findern and Mickleover.",
    commonPests: "Mice are the most common pest call-out in Littleover, thriving in the inter-war housing stock. Rats are found near the brook corridors and in gardens where bird feeding is popular. Wasps are a significant summer pest across the residential areas. Ants are persistent during warmer months. Moths can affect properties with natural-fibre carpets and clothing."
  },
  {
    name: "Chellaston",
    slug: "chellaston",
    metaDescription: "Find trusted pest control services in Chellaston, south Derby. Compare verified providers covering the DE73 postcode area.",
    intro: "Chellaston is a large residential suburb in the south of Derby, close to the A50 and with good transport links. The area has expanded significantly with modern housing estates alongside the older village centre. Its proximity to open farmland and the Trent Valley creates specific pest pressures.",
    commonPests: "Rats are common near the edges of Chellaston where housing meets farmland, and along the brook and drainage corridors. Mice enter properties across the area, particularly in newer-build homes with cavity walls. Wasps are a significant summer problem. Ants trail into kitchens during warm weather. Cluster flies can affect properties on the semi-rural edges."
  },
  {
    name: "Spondon",
    slug: "spondon",
    metaDescription: "Find trusted pest control services in Spondon, east Derby. Compare verified providers covering the DE21 postcode area.",
    intro: "Spondon is a residential area on the eastern side of Derby, with a distinct village identity despite being part of the city. The area features a mix of older village properties, inter-war housing, and modern estates. It borders the Derwent Valley and the former industrial areas along the river corridor.",
    commonPests: "Rats are prevalent near the River Derwent corridor and in areas close to the former industrial sites. Mice are common in the older village properties and inter-war housing. Wasps build nests in roof spaces and eaves during summer. Cockroaches are occasionally found in older properties. Pigeons roost on commercial buildings near the village centre."
  },
  {
    name: "Normanton",
    slug: "normanton",
    metaDescription: "Find trusted pest control services in Normanton, Derby. Compare verified providers serving the DE23 and DE1 postcode areas.",
    intro: "Normanton is one of Derby's most densely populated residential areas, located just south of the city centre. The area is characterised by Victorian terraced housing, a vibrant commercial high street, and a diverse community. Its proximity to the city centre and high housing density create particular pest control challenges.",
    commonPests: "Mice are extremely common in Normanton's densely packed Victorian terraced housing with shared walls. Rats are prevalent in rear alleyways and gardens, particularly where waste management is challenging. Cockroaches are found in some older properties and commercial premises along Normanton Road. Bed bugs are a concern due to the high turnover of rented accommodation. Ants trail persistently into kitchens during warmer months."
  },
  {
    name: "Oakwood",
    slug: "oakwood",
    metaDescription: "Find trusted pest control services in Oakwood and Chaddesden, north-east Derby. Compare verified providers covering the DE21 postcode area.",
    intro: "Oakwood is a modern residential development on the north-eastern edge of Derby, built largely in the 1990s and 2000s. Together with the neighbouring Chaddesden area, it offers a mix of newer family homes and some older housing stock. The area has good access to open countryside and Chaddesden Park.",
    commonPests: "Mice are common across Oakwood, entering modern homes through gaps around utility entries and cavity walls. Rats are found near the rural edges and brook corridors. Wasps are a significant summer pest in the mature gardens of Chaddesden and newer Oakwood properties. Squirrels access roof spaces near green corridors. Ants are a persistent warm-weather problem."
  },
  {
    name: "Mickleover",
    slug: "mickleover",
    metaDescription: "Find trusted pest control services in Mickleover, west Derby. Compare verified providers covering the DE3 postcode area.",
    intro: "Mickleover is a popular residential suburb on the western edge of Derby, known for its village atmosphere, local shops, and proximity to open countryside. The area features a mix of older village properties, inter-war housing, and substantial modern housing developments. The former Mickleover Golf Course site and nearby farmland influence the local pest landscape.",
    commonPests: "Rats are common near the rural edges of Mickleover and along brook corridors. Mice enter properties across the area, particularly the older housing stock. Wasps are a major summer pest given the large gardens and proximity to countryside. Moles cause issues in gardens near the former golf course and green spaces. Moths can affect properties with natural-fibre furnishings."
  },
];

export function getBoroughBySlug(slug: string): DerbyBoroughData | undefined {
  return derbyBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): DerbyBoroughData[] {
  return derbyBoroughs;
}
