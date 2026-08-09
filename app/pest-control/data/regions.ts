export interface RegionCity {
  name: string;
  slug: string;
  status: 'live' | 'coming-soon';
  providerCount?: number;
  residentialLink?: string;
  commercialLink?: string;
  areasLink?: string;
}

export interface Region {
  name: string;
  slug: string;
  status: 'live' | 'coming-soon';
  description: string;
  metaTitle: string;
  metaDescription: string;
  cities: RegionCity[];
}

export const regions: Region[] = [
  {
    name: "Greater London",
    slug: "greater-london",
    status: "live",
    description: "Find pest control and pest removal providers across all 33 London boroughs. PestPro Index lists {count} residential and commercial pest control companies in Greater London with Google ratings — no lead fees, no commissions.",
    metaTitle: "Pest Control in Greater London | {count} Providers",
    metaDescription: "Compare {count} pest control and pest removal providers across Greater London. Google ratings, no lead fees, no commissions. Find pest control in your borough.",
    cities: [
      {
        name: "London Residential",
        slug: "london-residential",
        status: "live",
        residentialLink: "/residential",
      },
      {
        name: "London Commercial",
        slug: "london-commercial",
        status: "live",
        commercialLink: "/commercial",
      },
      {
        name: "Browse by Borough",
        slug: "london-boroughs",
        status: "live",
        areasLink: "/pest-control",
      }
    ]
  },
  {
    name: "West Midlands",
    slug: "west-midlands",
    status: "live",
    description: "Find pest control and pest removal providers across the West Midlands. PestPro Index covers Birmingham and Coventry with providers, with expansion to Wolverhampton and the wider West Midlands region coming soon.",
    metaTitle: "Pest Control in the West Midlands | Birmingham, Coventry & Surrounding Areas",
    metaDescription: "Compare pest control and pest removal providers across the West Midlands. Currently covering Birmingham and Coventry with providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Birmingham Residential",
        slug: "birmingham-residential",
        status: "live",
        residentialLink: "/birmingham/residential",
      },
      {
        name: "Birmingham Commercial",
        slug: "birmingham-commercial",
        status: "live",
        commercialLink: "/birmingham/commercial",
      },
      {
        name: "Coventry Residential",
        slug: "coventry-residential",
        status: "live",
        residentialLink: "/coventry/residential",
      },
      {
        name: "Coventry Commercial",
        slug: "coventry-commercial",
        status: "live",
        commercialLink: "/coventry/commercial",
      },
      {
        name: "Wolverhampton",
        slug: "wolverhampton",
        status: "coming-soon",
      },
      {
        name: "Solihull",
        slug: "solihull",
        status: "coming-soon",
      },
      {
        name: "Walsall",
        slug: "walsall",
        status: "coming-soon",
      },
      {
        name: "Dudley",
        slug: "dudley",
        status: "coming-soon",
      },
      {
        name: "Staffordshire",
        slug: "staffordshire",
        status: "coming-soon",
      },
      {
        name: "Warwickshire",
        slug: "warwickshire",
        status: "coming-soon",
      },
      {
        name: "Worcestershire",
        slug: "worcestershire",
        status: "coming-soon",
      },
      {
        name: "Shropshire",
        slug: "shropshire",
        status: "coming-soon",
      }
    ]
  },
  {
    name: "North West",
    slug: "north-west",
    status: "live",
    description: "Find pest control and pest removal providers across the North West. PestPro Index covers Manchester and Liverpool with {count} providers, with expansion to Lancashire, Cheshire, and Cumbria coming soon.",
    metaTitle: "Pest Control in the North West | Manchester, Liverpool & Surrounding Areas",
    metaDescription: "Compare {count} pest control and pest removal providers across the North West. Covering Manchester and Liverpool with providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Manchester Residential",
        slug: "manchester-residential",
        status: "live",
        residentialLink: "/manchester/residential",
      },
      {
        name: "Manchester Commercial",
        slug: "manchester-commercial",
        status: "live",
        commercialLink: "/manchester/commercial",
      },
      {
        name: "Liverpool Residential",
        slug: "liverpool-residential",
        status: "live",
        residentialLink: "/liverpool/residential",
      },
      {
        name: "Liverpool Commercial",
        slug: "liverpool-commercial",
        status: "live",
        commercialLink: "/liverpool/commercial",
      },
      { name: "Lancashire", slug: "lancashire", status: "coming-soon" },
      { name: "Cheshire", slug: "cheshire", status: "coming-soon" },
      { name: "Cumbria", slug: "cumbria", status: "coming-soon" }
    ]
  },
  {
    name: "Yorkshire & the Humber",
    slug: "yorkshire-and-the-humber",
    status: "live",
    description: "Find pest control and pest removal providers across Yorkshire. PestPro Index currently covers Leeds with {count} providers, with expansion to Sheffield, Bradford, Hull, York, and the wider Yorkshire region coming soon.",
    metaTitle: "Pest Control in Yorkshire & the Humber | Leeds & Surrounding Areas",
    metaDescription: "Compare {count} pest control and pest removal providers across Yorkshire. Currently covering Leeds with providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Leeds Residential",
        slug: "leeds-residential",
        status: "live",
        residentialLink: "/leeds/residential",
      },
      {
        name: "Leeds Commercial",
        slug: "leeds-commercial",
        status: "live",
        commercialLink: "/leeds/commercial",
      },
      {
        name: "Sheffield Residential",
        slug: "sheffield-residential",
        status: "live",
        residentialLink: "/sheffield/residential",
      },
      {
        name: "Sheffield Commercial",
        slug: "sheffield-commercial",
        status: "live",
        commercialLink: "/sheffield/commercial",
      },
      {
        name: "Bradford Residential",
        slug: "bradford-residential",
        status: "live",
        residentialLink: "/bradford/residential",
      },
      {
        name: "Bradford Commercial",
        slug: "bradford-commercial",
        status: "live",
        commercialLink: "/bradford/commercial",
      },
      { name: "Hull", slug: "hull", status: "coming-soon" },
      { name: "York", slug: "york", status: "coming-soon" },
      { name: "North Yorkshire", slug: "north-yorkshire", status: "coming-soon" },
      { name: "South Yorkshire", slug: "south-yorkshire", status: "coming-soon" },
      { name: "West Yorkshire", slug: "west-yorkshire", status: "coming-soon" },
      { name: "East Riding of Yorkshire", slug: "east-riding", status: "coming-soon" }
    ]
  },
  {
    name: "South East",
    slug: "south-east",
    status: "live",
    description: "Find pest control and pest removal providers across the South East. PestPro Index covers Brighton and Hampshire with {count} providers, with expansion to Kent, Surrey, and more coming soon.",
    metaTitle: "Pest Control in the South East | Brighton, Hampshire & Surrounding Areas",
    metaDescription: "Compare {count} pest control and pest removal providers across the South East. Covering Brighton and Hampshire with providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Brighton Residential",
        slug: "brighton-residential",
        status: "live",
        residentialLink: "/brighton/residential",
      },
      {
        name: "Brighton Commercial",
        slug: "brighton-commercial",
        status: "live",
        commercialLink: "/brighton/commercial",
      },
      {
        name: "Hampshire Residential",
        slug: "hampshire-residential",
        status: "live",
        residentialLink: "/hampshire/residential",
      },
      {
        name: "Hampshire Commercial",
        slug: "hampshire-commercial",
        status: "live",
        commercialLink: "/hampshire/commercial",
      },
      { name: "Kent", slug: "kent", status: "coming-soon" },
      { name: "Surrey", slug: "surrey", status: "coming-soon" },
      { name: "East Sussex", slug: "east-sussex", status: "coming-soon" },
      { name: "West Sussex", slug: "west-sussex", status: "coming-soon" },
      { name: "Berkshire", slug: "berkshire", status: "coming-soon" },
      { name: "Buckinghamshire", slug: "buckinghamshire", status: "coming-soon" },
      { name: "Oxfordshire", slug: "oxfordshire", status: "coming-soon" },
      { name: "Hertfordshire", slug: "hertfordshire", status: "coming-soon" },
      { name: "Essex", slug: "essex", status: "coming-soon" }
    ]
  },
  {
    name: "South West",
    slug: "south-west",
    status: "live",
    description: "Find pest control providers across Bristol, Bath, and the South West. PestPro Index lists {count} residential and commercial pest control companies with Google ratings — no lead fees, no commissions.",
    metaTitle: "Pest Control in the South West | {count} Providers",
    metaDescription: "Compare {count} pest control providers across Bristol, Bath, and the South West. Google ratings, no lead fees, no commissions. Find pest control near you.",
    cities: [
      {
        name: "Bristol Residential",
        slug: "bristol-residential",
        status: "live",
        residentialLink: "/bristol/residential",
      },
      {
        name: "Bristol Commercial",
        slug: "bristol-commercial",
        status: "live",
        commercialLink: "/bristol/commercial",
      },
      { name: "Bath", slug: "bath", status: "coming-soon" },
      { name: "Devon", slug: "devon", status: "coming-soon" },
      { name: "Cornwall", slug: "cornwall", status: "coming-soon" },
      { name: "Somerset", slug: "somerset", status: "coming-soon" },
      { name: "Dorset", slug: "dorset", status: "coming-soon" },
      { name: "Wiltshire", slug: "wiltshire", status: "coming-soon" },
      { name: "Gloucestershire", slug: "gloucestershire", status: "coming-soon" }
    ]
  },
  {
    name: "East Midlands",
    slug: "east-midlands",
    status: "live",
    description: "Find pest control and pest removal providers across the East Midlands. PestPro Index covers Nottingham and Leicester with {count} providers, with expansion to Derby, Northampton, and Lincolnshire coming soon.",
    metaTitle: "Pest Control in the East Midlands | Nottingham, Leicester & Surrounding Areas",
    metaDescription: "Compare {count} pest control and pest removal providers across the East Midlands. Covering Nottingham and Leicester with providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Nottingham Residential",
        slug: "nottingham-residential",
        status: "live",
        residentialLink: "/nottingham/residential",
      },
      {
        name: "Nottingham Commercial",
        slug: "nottingham-commercial",
        status: "live",
        commercialLink: "/nottingham/commercial",
      },
      {
        name: "Leicester Residential",
        slug: "leicester-residential",
        status: "live",
        residentialLink: "/leicester/residential",
      },
      {
        name: "Leicester Commercial",
        slug: "leicester-commercial",
        status: "live",
        commercialLink: "/leicester/commercial",
      },
      {
        name: "Derby Residential",
        slug: "derby-residential",
        status: "live",
        residentialLink: "/derby/residential",
      },
      {
        name: "Derby Commercial",
        slug: "derby-commercial",
        status: "live",
        commercialLink: "/derby/commercial",
      },
      { name: "Northamptonshire", slug: "northamptonshire", status: "coming-soon" },
      { name: "Lincolnshire", slug: "lincolnshire", status: "coming-soon" }
    ]
  },
  {
    name: "North East",
    slug: "north-east",
    status: "live",
    description: "Find pest control and pest removal providers across the North East. PestPro Index covers Newcastle upon Tyne with {count} providers, with expansion to Sunderland, County Durham, and Teesside coming soon.",
    metaTitle: "Pest Control in the North East | Newcastle & Surrounding Areas",
    metaDescription: "Compare {count} pest control and pest removal providers across the North East. Currently covering Newcastle with providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Newcastle Residential",
        slug: "newcastle-residential",
        status: "live",
        residentialLink: "/newcastle/residential",
      },
      {
        name: "Newcastle Commercial",
        slug: "newcastle-commercial",
        status: "live",
        commercialLink: "/newcastle/commercial",
      },
      { name: "Sunderland", slug: "sunderland", status: "coming-soon" },
      { name: "County Durham", slug: "county-durham", status: "coming-soon" },
      { name: "Teesside", slug: "teesside", status: "coming-soon" },
      { name: "Northumberland", slug: "northumberland", status: "coming-soon" }
    ]
  },
  {
    name: "Scotland",
    slug: "scotland",
    status: "live",
    description: "Find pest control and pest removal providers across Scotland. PestPro Index covers Glasgow and Edinburgh with providers, with expansion to Aberdeen and Dundee coming soon.",
    metaTitle: "Pest Control in Scotland | Glasgow, Edinburgh & Surrounding Areas",
    metaDescription: "Compare pest control and pest removal providers across Scotland. Covering Glasgow and Edinburgh with providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Glasgow Residential",
        slug: "glasgow-residential",
        status: "live",
        residentialLink: "/glasgow/residential",
      },
      {
        name: "Glasgow Commercial",
        slug: "glasgow-commercial",
        status: "live",
        commercialLink: "/glasgow/commercial",
      },
      {
        name: "Edinburgh Residential",
        slug: "edinburgh-residential",
        status: "live",
        residentialLink: "/edinburgh/residential",
      },
      {
        name: "Edinburgh Commercial",
        slug: "edinburgh-commercial",
        status: "live",
        commercialLink: "/edinburgh/commercial",
      },
      { name: "Aberdeen", slug: "aberdeen", status: "coming-soon" },
      { name: "Dundee", slug: "dundee", status: "coming-soon" },
      { name: "Fife", slug: "fife", status: "coming-soon" },
      { name: "Stirling", slug: "stirling", status: "coming-soon" },
      { name: "Ayrshire", slug: "ayrshire", status: "coming-soon" },
      { name: "Lanarkshire", slug: "lanarkshire", status: "coming-soon" }
    ]
  },
  {
    name: "Wales",
    slug: "wales",
    status: "live",
    description: "Find pest control and pest removal providers across Wales. PestPro Index covers Cardiff with {count} providers, with expansion to Swansea, Newport, and North Wales coming soon.",
    metaTitle: "Pest Control in Wales | Cardiff & Surrounding Areas",
    metaDescription: "Compare {count} pest control and pest removal providers across Wales. Currently covering Cardiff with providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Cardiff Residential",
        slug: "cardiff-residential",
        status: "live",
        residentialLink: "/cardiff/residential",
      },
      {
        name: "Cardiff Commercial",
        slug: "cardiff-commercial",
        status: "live",
        commercialLink: "/cardiff/commercial",
      },
      { name: "Swansea", slug: "swansea", status: "coming-soon" },
      { name: "Newport", slug: "newport", status: "coming-soon" },
      { name: "North Wales", slug: "north-wales", status: "coming-soon" }
    ]
  },
  {
    name: "Northern Ireland",
    slug: "northern-ireland",
    status: "live",
    description: "Find pest control and pest removal providers across Northern Ireland. PestPro Index covers Belfast with {count} providers, with expansion to Derry, Lisburn, and Newry coming soon.",
    metaTitle: "Pest Control in Northern Ireland | Belfast & Surrounding Areas",
    metaDescription: "Compare {count} pest control and pest removal providers across Northern Ireland. Currently covering Belfast with providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Belfast Residential",
        slug: "belfast-residential",
        status: "live",
        residentialLink: "/belfast/residential",
      },
      {
        name: "Belfast Commercial",
        slug: "belfast-commercial",
        status: "live",
        commercialLink: "/belfast/commercial",
      },
      { name: "Derry / Londonderry", slug: "derry", status: "coming-soon" },
      { name: "Lisburn", slug: "lisburn", status: "coming-soon" },
      { name: "Newry", slug: "newry", status: "coming-soon" }
    ]
  }
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find(region => region.slug === slug);
}

export function getAllRegions(): Region[] {
  return regions;
}
