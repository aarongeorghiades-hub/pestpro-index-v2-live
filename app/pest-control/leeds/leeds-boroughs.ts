export interface LeedsBoroughData {
  name: string;
  slug: string;
  metaDescription: string;
  intro: string;
  commonPests: string;
}

export const leedsBoroughs: LeedsBoroughData[] = [
  {
    name: "Leeds City Centre",
    slug: "leeds-city",
    metaDescription: "Find trusted pest control services in Leeds city centre, Headingley, Hyde Park, Chapeltown, Harehills, Roundhay and Moortown. Compare verified providers covering postcodes LS1-LS17.",
    intro: "Leeds city centre is the commercial and cultural heart of West Yorkshire, blending Victorian arcades and modern developments with dense residential areas in Headingley, Hyde Park, Chapeltown, Harehills, Roundhay and Moortown. The mix of student accommodation, terraced housing and city centre apartments creates diverse pest control challenges across postcodes LS1 through LS17.",
    commonPests: "Rats and mice are widespread across central Leeds, particularly near the River Aire and the canal basin areas where food waste and older drainage systems provide ideal conditions. Bed bugs are increasingly common in the high concentration of student lets and HMOs across Headingley and Hyde Park. Cockroaches are found in restaurant and takeaway districts around the city centre. Pigeons nest extensively on commercial buildings in the city centre. Wasps and ants are seasonal issues in the residential streets of Roundhay and Moortown. Textile moths are a persistent problem in older properties with original wool carpets and fabrics."
  },
  {
    name: "Bradford",
    slug: "bradford",
    metaDescription: "Find trusted pest control services in Bradford, Shipley, Bingley, Keighley, Ilkley and Saltaire. Compare verified providers covering postcodes BD1-BD24.",
    intro: "Bradford is West Yorkshire's second city, encompassing the urban centre along with the towns of Shipley, Bingley, Keighley, Ilkley and the UNESCO World Heritage Site of Saltaire. The district's mix of Victorian mill towns, stone-built terraces and modern housing estates across postcodes BD1 to BD24 creates varied pest control needs.",
    commonPests: "Rats are particularly common near Bradford's extensive canal network and the older industrial sites being redeveloped across the city. Mice frequently enter the district's older stone-built terraced properties through gaps in pointing and around pipe entries. Wasps are a significant summer pest in suburban gardens across Shipley and Bingley. Textile moths are notably prevalent in Bradford given the city's historic wool trade — older properties often harbour populations in original carpets and fabrics. Squirrels cause damage in properties near the wooded valleys around Ilkley and Saltaire."
  },
  {
    name: "Wakefield",
    slug: "wakefield",
    metaDescription: "Find trusted pest control services in Wakefield, Pontefract, Castleford, Normanton, Ossett and Dewsbury. Compare verified providers covering postcodes WF1-WF17.",
    intro: "Wakefield district covers a large area of West Yorkshire south-east of Leeds, including the cathedral city of Wakefield and the towns of Pontefract, Castleford, Normanton, Ossett and Dewsbury. The mix of former mining communities, market towns and rural areas across postcodes WF1 to WF17 presents distinct pest challenges.",
    commonPests: "Rats are prevalent across Wakefield district, particularly near the River Calder and former colliery sites where ground disturbance has created extensive burrow networks. Mice are common in the older terraced housing stock found across Pontefract and Castleford. Wasps frequently nest in eaves and outbuildings across the district's suburban areas. Ants are a persistent summer issue in residential properties. Foxes have become well-established in urban areas, particularly around Wakefield city centre and Dewsbury. Bed bugs are occasionally found in denser housing areas."
  },
  {
    name: "Kirklees",
    slug: "kirklees",
    metaDescription: "Find trusted pest control services in Huddersfield, Dewsbury, Batley, Heckmondwike, Cleckheaton and Holmfirth. Compare verified providers covering postcodes HD1-HD9 and WF12-WF17.",
    intro: "Kirklees is a metropolitan borough in West Yorkshire centred on Huddersfield, also encompassing Dewsbury, Batley, Heckmondwike, Cleckheaton and the Holme Valley including Holmfirth. The area spans from dense urban centres to remote Pennine moorland across postcodes HD1 to HD9 and WF12 to WF17, creating diverse pest control requirements.",
    commonPests: "Rats and mice are common across Kirklees, particularly in the older mill towns where Victorian stone terraces with aging infrastructure provide easy access. Wasps are a significant summer pest in the suburban areas and rural fringes of the borough. Textile moths are notably prevalent in Huddersfield given the town's historic textile industry — older properties and mills converted to housing often harbour populations. Squirrels cause issues in the wooded valleys around Holmfirth and the Colne Valley. Pigeons nest on commercial buildings across Huddersfield and Dewsbury town centres."
  },
  {
    name: "Calderdale",
    slug: "calderdale",
    metaDescription: "Find trusted pest control services in Halifax, Brighouse, Elland, Todmorden, Hebden Bridge and Sowerby Bridge. Compare verified providers covering postcodes HX1-HX7.",
    intro: "Calderdale is the westernmost metropolitan borough of West Yorkshire, centred on Halifax and including the towns of Brighouse, Elland, Todmorden, Hebden Bridge and Sowerby Bridge. Set in the steep-sided Calder Valley with a mix of industrial heritage and Pennine countryside across postcodes HX1 to HX7, the area has distinctive pest control challenges.",
    commonPests: "Rats are particularly prevalent near the River Calder and Rochdale Canal running through the valley, with the waterways providing corridors for rodent populations. Mice commonly enter the area's older stone-built properties through gaps in traditional construction. Wasps frequently nest in the eaves and stone walls of hillside properties. Squirrels are a significant issue in the wooded valleys around Hebden Bridge and Hardcastle Crags. Cluster flies are notably common in the rural and semi-rural properties on the higher ground above the valley floor. Foxes have become well-established across Halifax and the valley towns."
  }
];

export function getBoroughBySlug(slug: string): LeedsBoroughData | undefined {
  return leedsBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): LeedsBoroughData[] {
  return leedsBoroughs;
}
