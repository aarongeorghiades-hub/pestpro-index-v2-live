export interface BristolBoroughData {
  name: string;
  slug: string;
  metaDescription: string;
  intro: string;
  commonPests: string;
}

export const bristolBoroughs: BristolBoroughData[] = [
  {
    name: "Bristol",
    slug: "bristol",
    metaDescription: "Find trusted pest control services in Bristol covering the city centre, Clifton, Bedminster, Southville, Easton, St Pauls, Redland, Cotham and Bishopston. Compare verified providers with ratings and reviews.",
    intro: "Bristol is the South West's largest city, combining the Georgian elegance of Clifton with the vibrant communities of Easton, St Pauls, and Southville. The Floating Harbour, Victorian sewer network, and diverse housing stock from period terraces to modern waterfront developments create varied pest control challenges across neighbourhoods.",
    commonPests: "Rats are Bristol's most significant pest, thriving along the River Avon corridor, the Floating Harbour, and in the Victorian sewer network beneath Bedminster, Southville, and the Old City. Mice are widespread in terraced housing across Totterdown, Easton, and the student areas of Redland and Cotham. Seagulls are a persistent issue in Clifton, Hotwells, and the city centre, nesting on flat roofs and becoming aggressive during breeding season. Wasps nest prolifically in the leafy suburbs of Henleaze, Westbury-on-Trym, and Bishopston. Bed bugs are a growing concern in student accommodation and the expanding short-let market. Pigeons roost across Broadmead, Cabot Circus, and Temple Meads."
  },
  {
    name: "Bath",
    slug: "bath",
    metaDescription: "Find trusted pest control services in Bath covering Bath city centre, Batheaston, Bathford, Combe Down and Weston. Compare verified providers with ratings and reviews.",
    intro: "Bath is a UNESCO World Heritage city east of Bristol, with Georgian architecture, a thriving tourism sector, and surrounding villages including Batheaston, Bathford, Combe Down, and Weston. The city's historic stone buildings, riverside location along the Avon, and dense visitor accommodation create distinctive pest control needs.",
    commonPests: "Rats are common near the River Avon running through the city and in the older drainage systems beneath the Georgian centre. Mice infest period properties where aging stonework and original features create entry points. Seagulls have established breeding colonies on Bath's flat-roofed commercial buildings. Wasps are a summer pest in the surrounding residential areas and villages. Bed bugs are a concern in the city's numerous hotels, guesthouses, and student accommodation near the University of Bath. Pigeons roost on historic buildings across the city centre."
  },
  {
    name: "South Gloucestershire",
    slug: "south-gloucestershire",
    metaDescription: "Find trusted pest control services in South Gloucestershire covering Bradley Stoke, Filton, Yate, Chipping Sodbury, Thornbury and Kingswood. Compare verified providers with ratings and reviews.",
    intro: "South Gloucestershire is a large district north and east of Bristol encompassing the commuter towns of Bradley Stoke, Filton, Yate, Chipping Sodbury, Thornbury, and Kingswood. A mix of modern housing estates, older market towns, and rural areas creates varied pest control needs from standard suburban rodent issues to agricultural pest challenges.",
    commonPests: "Rats and mice are common across South Gloucestershire, with particular activity in older housing areas around Kingswood and Staple Hill and near watercourses throughout the district. Wasps are a significant summer pest in the area's many gardens and newer housing estates. Squirrels cause issues in properties near the district's woodland areas and parks. Moles affect gardens and green spaces across the more rural areas around Thornbury and Chipping Sodbury. Ants are a frequent summer complaint in residential properties. Cluster flies are common in rural and semi-rural properties."
  },
  {
    name: "North Somerset",
    slug: "north-somerset",
    metaDescription: "Find trusted pest control services in North Somerset covering Clevedon, Portishead, Nailsea, Long Ashton and Backwell. Compare verified providers with ratings and reviews.",
    intro: "North Somerset is a district south-west of Bristol covering the commuter towns of Clevedon, Portishead, Nailsea, Long Ashton, and Backwell. Coastal areas, the Mendip Hills fringe, and proximity to Bristol create a mix of urban and rural pest challenges. Growing residential development has increased demand for pest control services across the area.",
    commonPests: "Rats and mice are common across North Somerset, with particular activity near the coast at Clevedon and Portishead and along watercourses throughout the district. Seagulls are a persistent pest in the coastal towns. Wasps nest prolifically in the area's many gardens and older properties. Squirrels cause issues in properties near woodland areas around Long Ashton and Backwell. Moles and rabbits affect gardens and green spaces across the more rural areas. Cluster flies are very common in rural properties near the Mendips."
  },
  {
    name: "Weston-super-Mare",
    slug: "weston-super-mare",
    metaDescription: "Find trusted pest control services in Weston-super-Mare covering Weston town centre, Worle, Axbridge, Cheddar and Burnham-on-Sea. Compare verified providers with ratings and reviews.",
    intro: "Weston-super-Mare is a seaside resort south of Bristol, together with surrounding towns including Worle, Axbridge, Cheddar, and Burnham-on-Sea. The town's tourism sector, coastal location, and mix of Victorian seafront properties and modern estates create particular pest challenges, especially during the busy summer season.",
    commonPests: "Seagulls are Weston-super-Mare's most visible pest, nesting on rooftops across the seafront and town centre and becoming aggressive during breeding season. Rats are common near the seafront, in the older town centre drainage network, and along the coast. Mice infest older properties throughout the town. Wasps are a significant summer pest in residential gardens and holiday accommodation. Bed bugs are a concern in the town's hotels, guesthouses, and holiday lets during the busy summer season. Ants are frequently reported in residential properties during warmer months."
  }
];

export function getBoroughBySlug(slug: string): BristolBoroughData | undefined {
  return bristolBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): BristolBoroughData[] {
  return bristolBoroughs;
}
