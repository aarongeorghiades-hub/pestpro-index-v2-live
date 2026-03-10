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
    description: "Find trusted pest control and pest removal providers across all 33 London boroughs. PestPro Index lists 389 residential and commercial pest control companies in Greater London with verified Google ratings — no lead fees, no commissions.",
    metaTitle: "Pest Control in Greater London | 389 Verified Providers | PestPro Index",
    metaDescription: "Compare 389 pest control and pest removal providers across Greater London. Verified Google ratings, no lead fees, no commissions. Find trusted pest control in your borough.",
    cities: [
      {
        name: "London Residential",
        slug: "london-residential",
        status: "live",
        providerCount: 389,
        residentialLink: "/residential",
      },
      {
        name: "London Commercial",
        slug: "london-commercial",
        status: "live",
        providerCount: 240,
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
    description: "Find trusted pest control and pest removal providers across the West Midlands. PestPro Index currently covers Birmingham with 42 verified providers, with expansion to Coventry, Wolverhampton, and the wider West Midlands region coming soon.",
    metaTitle: "Pest Control in the West Midlands | Birmingham & Surrounding Areas | PestPro Index",
    metaDescription: "Compare pest control and pest removal providers across the West Midlands. Currently covering Birmingham with 42 verified providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Birmingham Residential",
        slug: "birmingham-residential",
        status: "live",
        providerCount: 42,
        residentialLink: "/birmingham/residential",
      },
      {
        name: "Birmingham Commercial",
        slug: "birmingham-commercial",
        status: "live",
        commercialLink: "/birmingham/commercial",
      },
      {
        name: "Coventry",
        slug: "coventry",
        status: "coming-soon",
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
    description: "Find trusted pest control and pest removal providers across the North West. PestPro Index covers Manchester and Liverpool with 207 verified providers, with expansion to Lancashire, Cheshire, and Cumbria coming soon.",
    metaTitle: "Pest Control in the North West | Manchester, Liverpool & Surrounding Areas | PestPro Index",
    metaDescription: "Compare 207 pest control and pest removal providers across the North West. Covering Manchester and Liverpool with verified providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Manchester Residential",
        slug: "manchester-residential",
        status: "live",
        providerCount: 134,
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
        providerCount: 73,
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
    description: "Find trusted pest control and pest removal providers across Yorkshire. PestPro Index currently covers Leeds with 61 verified providers, with expansion to Sheffield, Bradford, Hull, York, and the wider Yorkshire region coming soon.",
    metaTitle: "Pest Control in Yorkshire & the Humber | Leeds & Surrounding Areas | PestPro Index",
    metaDescription: "Compare 61 pest control and pest removal providers across Yorkshire. Currently covering Leeds with verified providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Leeds Residential",
        slug: "leeds-residential",
        status: "live",
        providerCount: 61,
        residentialLink: "/leeds/residential",
      },
      {
        name: "Leeds Commercial",
        slug: "leeds-commercial",
        status: "live",
        commercialLink: "/leeds/commercial",
      },
      { name: "Sheffield", slug: "sheffield", status: "coming-soon" },
      { name: "Bradford", slug: "bradford", status: "coming-soon" },
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
    status: "coming-soon",
    description: "PestPro Index is expanding to the South East. We will soon cover Kent, Surrey, Sussex, Hampshire, Berkshire, Buckinghamshire, Oxfordshire, Hertfordshire, and Essex with verified pest control providers.",
    metaTitle: "Pest Control in the South East | Kent, Surrey, Hampshire & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to the South East. Soon covering Kent, Surrey, Sussex, Hampshire, and more. Neutral pest control directory — no lead fees, no commissions.",
    cities: [
      { name: "Kent", slug: "kent", status: "coming-soon" },
      { name: "Surrey", slug: "surrey", status: "coming-soon" },
      { name: "East Sussex", slug: "east-sussex", status: "coming-soon" },
      { name: "West Sussex", slug: "west-sussex", status: "coming-soon" },
      { name: "Hampshire", slug: "hampshire", status: "coming-soon" },
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
    description: "Find trusted pest control providers across Bristol, Bath, and the South West. PestPro Index lists 43 residential and commercial pest control companies with verified Google ratings — no lead fees, no commissions.",
    metaTitle: "Pest Control in the South West | 43 Verified Providers | PestPro Index",
    metaDescription: "Compare 43 pest control providers across Bristol, Bath, and the South West. Verified Google ratings, no lead fees, no commissions. Find trusted pest control near you.",
    cities: [
      {
        name: "Bristol Residential",
        slug: "bristol-residential",
        status: "live",
        providerCount: 43,
        residentialLink: "/bristol/residential",
      },
      {
        name: "Bristol Commercial",
        slug: "bristol-commercial",
        status: "live",
        providerCount: 43,
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
    name: "East of England",
    slug: "east-of-england",
    status: "coming-soon",
    description: "PestPro Index is expanding to the East of England. We will soon cover Norfolk, Suffolk, Cambridgeshire, and Bedfordshire with verified pest control providers.",
    metaTitle: "Pest Control in the East of England | Norfolk, Suffolk, Cambridge & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to the East of England. Soon covering Norfolk, Suffolk, Cambridgeshire, and Bedfordshire. Neutral pest control directory — no lead fees.",
    cities: [
      { name: "Norfolk", slug: "norfolk", status: "coming-soon" },
      { name: "Suffolk", slug: "suffolk", status: "coming-soon" },
      { name: "Cambridgeshire", slug: "cambridgeshire", status: "coming-soon" },
      { name: "Bedfordshire", slug: "bedfordshire", status: "coming-soon" }
    ]
  },
  {
    name: "East Midlands",
    slug: "east-midlands",
    status: "live",
    description: "Find trusted pest control and pest removal providers across the East Midlands. PestPro Index covers Nottingham and Leicester with 106 verified providers, with expansion to Derby, Northampton, and Lincolnshire coming soon.",
    metaTitle: "Pest Control in the East Midlands | Nottingham, Leicester & Surrounding Areas | PestPro Index",
    metaDescription: "Compare 106 pest control and pest removal providers across the East Midlands. Covering Nottingham and Leicester with verified providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Nottingham Residential",
        slug: "nottingham-residential",
        status: "live",
        providerCount: 106,
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
      { name: "Derby", slug: "derby", status: "coming-soon" },
      { name: "Northamptonshire", slug: "northamptonshire", status: "coming-soon" },
      { name: "Lincolnshire", slug: "lincolnshire", status: "coming-soon" }
    ]
  },
  {
    name: "North East",
    slug: "north-east",
    status: "live",
    description: "Find trusted pest control and pest removal providers across the North East. PestPro Index covers Newcastle upon Tyne with 53 verified providers, with expansion to Sunderland, County Durham, and Teesside coming soon.",
    metaTitle: "Pest Control in the North East | Newcastle & Surrounding Areas | PestPro Index",
    metaDescription: "Compare 53 pest control and pest removal providers across the North East. Currently covering Newcastle with verified providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Newcastle Residential",
        slug: "newcastle-residential",
        status: "live",
        providerCount: 53,
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
    description: "Find trusted pest control and pest removal providers across Scotland. PestPro Index covers Glasgow and Edinburgh with verified providers, with expansion to Aberdeen and Dundee coming soon.",
    metaTitle: "Pest Control in Scotland | Glasgow, Edinburgh & Surrounding Areas | PestPro Index",
    metaDescription: "Compare pest control and pest removal providers across Scotland. Covering Glasgow and Edinburgh with verified providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Glasgow Residential",
        slug: "glasgow-residential",
        status: "live",
        providerCount: 60,
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
    description: "Find trusted pest control and pest removal providers across Wales. PestPro Index covers Cardiff with 38 verified providers, with expansion to Swansea, Newport, and North Wales coming soon.",
    metaTitle: "Pest Control in Wales | Cardiff & Surrounding Areas | PestPro Index",
    metaDescription: "Compare 38 pest control and pest removal providers across Wales. Currently covering Cardiff with verified providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Cardiff Residential",
        slug: "cardiff-residential",
        status: "live",
        providerCount: 38,
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
    status: "coming-soon",
    description: "PestPro Index is expanding to Northern Ireland. We will soon cover Belfast, Derry, and the wider Northern Ireland region with verified pest control providers.",
    metaTitle: "Pest Control in Northern Ireland | Belfast, Derry & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to Northern Ireland. Soon covering Belfast, Derry, Lisburn, and Newry. Neutral pest control directory — no lead fees, no commissions.",
    cities: [
      { name: "Belfast", slug: "belfast", status: "coming-soon" },
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
