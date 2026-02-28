export interface SheffieldBoroughData {
  name: string;
  slug: string;
  metaDescription: string;
  intro: string;
  commonPests: string;
}

export const sheffieldBoroughs: SheffieldBoroughData[] = [
  {
    name: "Sheffield",
    slug: "sheffield",
    metaDescription: "Find trusted pest control services in Sheffield covering Sheffield city centre, Sharrow, Nether Edge, Kelham Island, Broomhill, Crookes, Hillsborough, Ecclesall and surrounding areas. Compare verified providers with ratings and reviews.",
    intro: "Sheffield is South Yorkshire's largest city and England's greenest city, spanning from the Peak District foothills to the Don Valley. Victorian terraces in Sharrow and Nether Edge, student areas around two major universities, and the growing Kelham Island quarter create diverse pest control needs. The city's hilly terrain and river corridors influence pest movement patterns across neighbourhoods.",
    commonPests: "Rats are Sheffield's most reported pest, thriving along the River Don, River Sheaf, and Porter Brook corridors and in the Victorian sewer network beneath older areas like Hillsborough, Walkley, and the city centre. Mice are widespread in the densely packed terraced housing of Crookes, Broomhill, and student areas near both universities. Wasps nest prolifically in the stone-built properties and garden sheds across Fulwood, Dore, and Totley. Bed bugs are a growing concern in student accommodation and the expanding hotel sector around Tudor Square. Pigeons roost across the city centre, particularly around the markets, the Moor, and Fargate. Squirrels enter loft spaces in the leafy suburbs of Ecclesall, Ranmoor, and areas bordering Endcliffe Park."
  },
  {
    name: "Rotherham",
    slug: "rotherham",
    metaDescription: "Find trusted pest control services in Rotherham covering Rotherham town centre, Wickersley, Maltby, the Dearne Valley corridor and surrounding areas. Compare verified providers with ratings and reviews.",
    intro: "Rotherham is a historic market town east of Sheffield with a mix of traditional housing and new developments. Key areas include Rotherham town centre, Wickersley, Maltby, and the Dearne Valley corridor. The town's industrial heritage and proximity to the River Don create specific pest challenges, while surrounding residential areas face typical urban and suburban pest issues.",
    commonPests: "Rats are common across Rotherham, particularly near the River Don corridor and around the town centre's older drainage systems. Mice infest older terraced properties and housing estates across the borough. Wasps are a significant summer pest in residential gardens and outbuildings. Cockroaches are found in some commercial kitchens and takeaway restaurants in the town centre. Ants are a frequent summer complaint. Pigeons roost on commercial buildings in the town centre. Squirrels cause issues in properties near Clifton Park and the borough's wooded areas."
  },
  {
    name: "Doncaster",
    slug: "doncaster",
    metaDescription: "Find trusted pest control services in Doncaster covering Doncaster town centre, Bessacarr, Bentley, Armthorpe, Lakeside and surrounding areas. Compare verified providers with ratings and reviews.",
    intro: "Doncaster is the eastern gateway of South Yorkshire with extensive rural areas surrounding the town centre. Key areas include Bessacarr, Bentley, Armthorpe, and the Lakeside development area near the racecourse. The town's flat terrain and network of waterways including the River Don create conditions that support diverse pest populations across both urban and rural settings.",
    commonPests: "Rats and mice are prevalent across Doncaster, with particular activity near the River Don and in older housing areas around Bentley and Balby. Wasps are a major summer pest in the town's residential gardens and rural fringes. Moles and rabbits cause significant issues in gardens and green spaces across the flatter eastern areas. Ants are frequently reported in residential properties during summer. Pigeons roost on commercial buildings in the town centre and around the racecourse area. Cluster flies are common in rural properties surrounding the town."
  },
  {
    name: "Barnsley",
    slug: "barnsley",
    metaDescription: "Find trusted pest control services in Barnsley covering Barnsley town centre, Penistone, Wombwell, Hoyland and the M1 corridor. Compare verified providers with ratings and reviews.",
    intro: "Barnsley is a northern South Yorkshire market town surrounded by former mining communities. Key areas include Barnsley town centre, Penistone, Wombwell, Hoyland, and the M1 corridor developments. The town's mix of older terraced housing, former council estates, and newer developments creates varied pest control needs, while surrounding rural and semi-rural areas face additional wildlife-related pest challenges.",
    commonPests: "Rats and mice are common across Barnsley, particularly in older housing areas and near watercourses. Wasps are a significant summer pest in residential gardens and outbuildings across the borough. Ants are frequently reported during warmer months. Squirrels cause issues in properties near the borough's parks and wooded areas around Penistone and the western fringes. Cluster flies are common in rural and semi-rural properties. Moles affect gardens and green spaces. Foxes are increasingly seen in suburban residential areas."
  },
  {
    name: "Chesterfield",
    slug: "chesterfield",
    metaDescription: "Find trusted pest control services in Chesterfield covering Chesterfield town centre, Staveley, Dronfield and the Peak District fringe. Compare verified providers with ratings and reviews.",
    intro: "Chesterfield is a north Derbyshire market town on Sheffield's southern border, known for its crooked spire. Key areas include Chesterfield town centre, Staveley, Dronfield, and the surrounding Peak District fringe villages. The town's position between urban South Yorkshire and the rural Peak District creates a distinctive mix of pest challenges from both environments.",
    commonPests: "Rats and mice are common across Chesterfield, with particular activity in the older town centre properties and near the River Rother corridor. Wasps nest prolifically in the area's older stone and brick properties and garden outbuildings. Squirrels are a significant concern in properties near the Peak District fringe and wooded areas around Dronfield. Cluster flies are very common in rural and semi-rural properties around Staveley and the surrounding villages. Moles affect gardens across the area. Ants are a frequent summer nuisance in residential properties."
  }
];

export function getBoroughBySlug(slug: string): SheffieldBoroughData | undefined {
  return sheffieldBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): SheffieldBoroughData[] {
  return sheffieldBoroughs;
}
