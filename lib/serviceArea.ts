// Where a firm is allowed to appear, decided from its own postcode.
//
// City lists keep a firm whose postcode cannot be read (the region tag is the
// only evidence). A postcode that can be read and sits outside the city's
// areas is left off that city list.
//
// A borough or town page has two sections. Section 1 is firms whose postcode
// district is one of that place's districts. Section 2 is every other firm
// tagged to the parent city, including a postcode outside the city, labelled
// with the base the postcode actually supports. Same-city postcodes come
// before out-of-city postcodes. A missing postcode sits between those two,
// because it is not evidence of either. Rating order is preserved inside
// each group. Nothing here is a distance.
//
// This file is pure data plus functions. It does not read the database.

export type PostcodeParts = {
  area: string;
  district: string;
};

export type PlaceMatch = {
  city: string;
  cityName: string;
  placeSlug: string | null;
  placeName: string | null;
  href: string;
};

type Place = { name: string; districts: readonly string[] };

// Letter prefixes that belong to a city. A district listed under a place can
// add an exception (TN16 is Bromley even though TN is not a London area).
const CITY_AREAS: Record<string, readonly string[]> = {
  london: ['E', 'EC', 'N', 'NW', 'SE', 'SW', 'W', 'WC', 'BR', 'CR', 'DA', 'EN', 'HA', 'IG', 'KT', 'RM', 'SM', 'TW', 'UB', 'WD'],
  birmingham: ['B'],
  manchester: ['M', 'BL', 'OL', 'SK', 'WN'],
  liverpool: ['L', 'CH', 'WA', 'PR'],
  leeds: ['LS', 'WF', 'HD', 'HX'],
  sheffield: ['S', 'DN'],
  nottingham: ['NG'],
  bristol: ['BS', 'BA'],
  brighton: ['BN', 'RH'],
  glasgow: ['G'],
  bradford: ['BD'],
  newcastle: ['NE', 'SR', 'DH'],
  cardiff: ['CF', 'NP'],
  edinburgh: ['EH'],
  leicester: ['LE'],
  hampshire: ['SO', 'PO', 'RG', 'GU', 'SP', 'BH'],
  coventry: ['CV'],
  belfast: ['BT'],
  derby: ['DE'],
};

const CITY_NAMES: Record<string, string> = {
  london: 'London',
  birmingham: 'Birmingham',
  manchester: 'Manchester',
  liverpool: 'Liverpool',
  leeds: 'Leeds',
  sheffield: 'Sheffield',
  nottingham: 'Nottingham',
  bristol: 'Bristol',
  brighton: 'Brighton',
  glasgow: 'Glasgow',
  bradford: 'Bradford',
  newcastle: 'Newcastle',
  cardiff: 'Cardiff',
  edinburgh: 'Edinburgh',
  leicester: 'Leicester',
  hampshire: 'Hampshire',
  coventry: 'Coventry',
  belfast: 'Belfast',
  derby: 'Derby',
};

// Districts are the outward code without a trailing letter: SW1 covers SW1A,
// SW1P and the rest. SW1 does not cover SW11.
const PLACES: Record<string, Record<string, Place>> = {
  london: {
    'barking-and-dagenham': { name: 'Barking and Dagenham', districts: ['IG11', 'RM8', 'RM9', 'RM10'] },
    barnet: { name: 'Barnet', districts: ['EN4', 'EN5', 'N2', 'N3', 'N10', 'N11', 'N12', 'N20', 'NW2', 'NW4', 'NW7', 'NW9', 'NW11', 'HA8'] },
    bexley: { name: 'Bexley', districts: ['DA5', 'DA6', 'DA7', 'DA8', 'DA14', 'DA15', 'DA16', 'DA17', 'DA18', 'SE2'] },
    brent: { name: 'Brent', districts: ['HA0', 'HA9', 'NW2', 'NW6', 'NW9', 'NW10', 'W9', 'W10'] },
    bromley: { name: 'Bromley', districts: ['BR1', 'BR2', 'BR3', 'BR4', 'BR5', 'BR6', 'BR7', 'SE20', 'SE26', 'TN16'] },
    camden: { name: 'Camden', districts: ['EC1', 'N1', 'N6', 'N7', 'N19', 'NW1', 'NW3', 'NW5', 'NW6', 'NW8', 'W1', 'WC1', 'WC2'] },
    'city-of-london': { name: 'City of London', districts: ['EC1', 'EC2', 'EC3', 'EC4'] },
    croydon: { name: 'Croydon', districts: ['CR0', 'CR2', 'CR5', 'CR7', 'CR8', 'SE19', 'SE25'] },
    ealing: { name: 'Ealing', districts: ['W3', 'W4', 'W5', 'W7', 'W13', 'UB1', 'UB2', 'UB5', 'UB6', 'NW10'] },
    enfield: { name: 'Enfield', districts: ['EN1', 'EN2', 'EN3', 'N9', 'N11', 'N13', 'N14', 'N18', 'N21'] },
    greenwich: { name: 'Greenwich', districts: ['SE2', 'SE3', 'SE7', 'SE8', 'SE9', 'SE10', 'SE12', 'SE18', 'SE28'] },
    hackney: { name: 'Hackney', districts: ['E2', 'E5', 'E8', 'E9', 'N1', 'N4', 'N16'] },
    'hammersmith-and-fulham': { name: 'Hammersmith and Fulham', districts: ['SW6', 'W6', 'W12', 'W14'] },
    haringey: { name: 'Haringey', districts: ['N4', 'N6', 'N8', 'N10', 'N15', 'N17', 'N22'] },
    harrow: { name: 'Harrow', districts: ['HA1', 'HA2', 'HA3', 'HA5', 'HA7', 'HA8'] },
    havering: { name: 'Havering', districts: ['RM1', 'RM2', 'RM3', 'RM4', 'RM5', 'RM7', 'RM11', 'RM12', 'RM13', 'RM14'] },
    hillingdon: { name: 'Hillingdon', districts: ['HA4', 'HA6', 'TW6', 'UB3', 'UB4', 'UB7', 'UB8', 'UB9', 'UB10', 'UB11'] },
    hounslow: { name: 'Hounslow', districts: ['TW3', 'TW4', 'TW5', 'TW7', 'TW8', 'TW13', 'TW14', 'W4'] },
    islington: { name: 'Islington', districts: ['EC1', 'N1', 'N4', 'N5', 'N7', 'N19'] },
    'kensington-and-chelsea': { name: 'Kensington and Chelsea', districts: ['SW3', 'SW5', 'SW7', 'SW10', 'W8', 'W10', 'W11', 'W14'] },
    'kingston-upon-thames': { name: 'Kingston upon Thames', districts: ['KT1', 'KT2', 'KT3', 'KT5', 'KT6', 'KT9'] },
    lambeth: { name: 'Lambeth', districts: ['SE1', 'SE5', 'SE11', 'SE19', 'SE21', 'SE24', 'SE27', 'SW2', 'SW4', 'SW8', 'SW9', 'SW16'] },
    lewisham: { name: 'Lewisham', districts: ['SE4', 'SE6', 'SE8', 'SE12', 'SE13', 'SE14', 'SE23', 'SE26', 'BR1'] },
    merton: { name: 'Merton', districts: ['CR4', 'SM4', 'SW19', 'SW20'] },
    newham: { name: 'Newham', districts: ['E6', 'E7', 'E12', 'E13', 'E15', 'E16', 'E20', 'IG11'] },
    redbridge: { name: 'Redbridge', districts: ['E11', 'IG1', 'IG2', 'IG3', 'IG4', 'IG5', 'IG6', 'IG7', 'IG8'] },
    'richmond-upon-thames': { name: 'Richmond upon Thames', districts: ['SW13', 'SW14', 'TW1', 'TW2', 'TW9', 'TW10'] },
    southwark: { name: 'Southwark', districts: ['SE1', 'SE5', 'SE11', 'SE15', 'SE16', 'SE17', 'SE21', 'SE22', 'SE24'] },
    sutton: { name: 'Sutton', districts: ['SM1', 'SM2', 'SM3', 'SM5', 'SM6', 'KT4'] },
    'tower-hamlets': { name: 'Tower Hamlets', districts: ['E1', 'E2', 'E3', 'E14'] },
    'waltham-forest': { name: 'Waltham Forest', districts: ['E4', 'E10', 'E11', 'E17'] },
    wandsworth: { name: 'Wandsworth', districts: ['SW11', 'SW12', 'SW15', 'SW17', 'SW18'] },
    westminster: { name: 'Westminster', districts: ['NW1', 'NW8', 'SW1', 'W1', 'W2', 'W9', 'WC2'] },
  },
  manchester: {
    manchester: { name: 'Manchester', districts: ['M1', 'M2', 'M3', 'M4', 'M8', 'M9', 'M11', 'M12', 'M13', 'M14', 'M15', 'M16', 'M18', 'M19', 'M20', 'M21', 'M22', 'M23', 'M40'] },
    salford: { name: 'Salford', districts: ['M3', 'M5', 'M6', 'M7', 'M27', 'M28', 'M30', 'M44', 'M50'] },
    trafford: { name: 'Trafford', districts: ['M16', 'M17', 'M21', 'M32', 'M33', 'M41', 'WA14', 'WA15'] },
    stockport: { name: 'Stockport', districts: ['SK1', 'SK2', 'SK3', 'SK4', 'SK5', 'SK6', 'SK7', 'SK8'] },
    tameside: { name: 'Tameside', districts: ['OL5', 'OL6', 'OL7', 'SK14', 'SK15', 'SK16', 'M34', 'M43'] },
    oldham: { name: 'Oldham', districts: ['OL1', 'OL2', 'OL3', 'OL4', 'OL8', 'OL9'] },
    rochdale: { name: 'Rochdale', districts: ['OL11', 'OL12', 'OL16'] },
    bury: { name: 'Bury', districts: ['BL0', 'BL8', 'BL9', 'M26'] },
    bolton: { name: 'Bolton', districts: ['BL1', 'BL2', 'BL3', 'BL4', 'BL5', 'BL6', 'BL7'] },
    wigan: { name: 'Wigan', districts: ['WN1', 'WN2', 'WN3', 'WN4', 'WN5', 'WN6', 'WN7', 'WN8'] },
  },
  birmingham: {
    'birmingham-city-centre': { name: 'Birmingham City Centre', districts: ['B1', 'B2', 'B3', 'B4', 'B5'] },
    'sutton-coldfield': { name: 'Sutton Coldfield', districts: ['B72', 'B73', 'B74', 'B75', 'B76'] },
    edgbaston: { name: 'Edgbaston', districts: ['B5', 'B15', 'B16'] },
    erdington: { name: 'Erdington', districts: ['B23', 'B24'] },
    'handsworth-perry-barr': { name: 'Handsworth and Perry Barr', districts: ['B20', 'B21', 'B42', 'B44'] },
    'hodge-hill-stechford': { name: 'Hodge Hill and Stechford', districts: ['B8', 'B33', 'B34'] },
    'kings-norton-northfield': { name: 'Kings Norton and Northfield', districts: ['B13', 'B14', 'B29', 'B30', 'B31', 'B38'] },
    'ladywood-nechells': { name: 'Ladywood and Nechells', districts: ['B1', 'B4', 'B6', 'B7', 'B18', 'B19'] },
    'selly-oak-bournville': { name: 'Selly Oak and Bournville', districts: ['B13', 'B29', 'B30'] },
    'yardley-sheldon': { name: 'Yardley and Sheldon', districts: ['B25', 'B26', 'B33'] },
  },
  liverpool: {
    'liverpool-city': { name: 'Liverpool', districts: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10', 'L11', 'L12', 'L13', 'L14', 'L15', 'L16', 'L17', 'L18', 'L19', 'L24', 'L25'] },
    wirral: { name: 'Wirral', districts: ['CH41', 'CH42', 'CH43', 'CH44', 'CH45', 'CH46', 'CH47', 'CH48', 'CH49', 'CH60', 'CH61', 'CH62', 'CH63', 'CH64', 'CH65', 'CH66'] },
    sefton: { name: 'Sefton', districts: ['L20', 'L21', 'L22', 'L23', 'L29', 'L30', 'L31', 'L37', 'PR8', 'PR9'] },
    knowsley: { name: 'Knowsley', districts: ['L26', 'L32', 'L33', 'L34', 'L35', 'L36'] },
    'st-helens': { name: 'St Helens', districts: ['WA9', 'WA10', 'WA11'] },
    warrington: { name: 'Warrington', districts: ['WA1', 'WA2', 'WA3', 'WA4', 'WA5'] },
  },
  nottingham: {
    'nottingham-city': { name: 'Nottingham', districts: ['NG1', 'NG2', 'NG3', 'NG5', 'NG6', 'NG7', 'NG8'] },
    gedling: { name: 'Gedling', districts: ['NG3', 'NG4', 'NG5', 'NG14'] },
    broxtowe: { name: 'Broxtowe', districts: ['NG9', 'NG16'] },
    rushcliffe: { name: 'Rushcliffe', districts: ['NG11', 'NG12', 'NG13'] },
    ashfield: { name: 'Ashfield', districts: ['NG15', 'NG17'] },
    mansfield: { name: 'Mansfield', districts: ['NG18', 'NG19', 'NG20'] },
  },
  brighton: {
    'brighton-and-hove': { name: 'Brighton and Hove', districts: ['BN1', 'BN2', 'BN3', 'BN41'] },
    worthing: { name: 'Worthing', districts: ['BN11', 'BN12', 'BN13', 'BN14'] },
    eastbourne: { name: 'Eastbourne', districts: ['BN20', 'BN21', 'BN22', 'BN23'] },
    lewes: { name: 'Lewes', districts: ['BN7', 'BN8'] },
    adur: { name: 'Adur', districts: ['BN15', 'BN43'] },
    arun: { name: 'Arun', districts: ['BN16', 'BN17', 'BN18'] },
    'mid-sussex': { name: 'Mid Sussex', districts: ['RH15', 'RH16', 'RH17', 'RH19'] },
    wealden: { name: 'Wealden', districts: ['BN26', 'BN27', 'TN6', 'TN22'] },
  },
  leeds: {
    'leeds-city': { name: 'Leeds', districts: ['LS1', 'LS2', 'LS3', 'LS4', 'LS5', 'LS6', 'LS7', 'LS8', 'LS9', 'LS10', 'LS11', 'LS12', 'LS13', 'LS14', 'LS15', 'LS16', 'LS17', 'LS18', 'LS19', 'LS20', 'LS21', 'LS22', 'LS23', 'LS24', 'LS25', 'LS26', 'LS27', 'LS28'] },
    wakefield: { name: 'Wakefield', districts: ['WF1', 'WF2', 'WF3', 'WF4', 'WF5', 'WF6', 'WF7', 'WF8', 'WF9', 'WF10', 'WF11', 'WF12', 'WF13', 'WF14', 'WF15', 'WF16', 'WF17'] },
    kirklees: { name: 'Kirklees', districts: ['HD1', 'HD2', 'HD3', 'HD4', 'HD5', 'HD6', 'HD7', 'HD8', 'HD9'] },
    calderdale: { name: 'Calderdale', districts: ['HX1', 'HX2', 'HX3', 'HX4', 'HX5', 'HX6', 'HX7'] },
  },
  sheffield: {
    sheffield: { name: 'Sheffield', districts: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14', 'S17', 'S20', 'S35', 'S36'] },
    rotherham: { name: 'Rotherham', districts: ['S25', 'S26', 'S60', 'S61', 'S62', 'S63', 'S64', 'S65', 'S66'] },
    doncaster: { name: 'Doncaster', districts: ['DN1', 'DN2', 'DN3', 'DN4', 'DN5', 'DN6', 'DN7', 'DN8', 'DN9', 'DN10', 'DN11', 'DN12'] },
    barnsley: { name: 'Barnsley', districts: ['S70', 'S71', 'S72', 'S73', 'S74', 'S75'] },
    chesterfield: { name: 'Chesterfield', districts: ['S40', 'S41', 'S42', 'S43', 'S44', 'S45'] },
  },
  bristol: {
    bristol: { name: 'Bristol', districts: ['BS1', 'BS2', 'BS3', 'BS4', 'BS5', 'BS6', 'BS7', 'BS8', 'BS9', 'BS10', 'BS11', 'BS13', 'BS14', 'BS15', 'BS16'] },
    bath: { name: 'Bath', districts: ['BA1', 'BA2'] },
    'south-gloucestershire': { name: 'South Gloucestershire', districts: ['BS15', 'BS16', 'BS30', 'BS32', 'BS34', 'BS35', 'BS36', 'BS37'] },
    'north-somerset': { name: 'North Somerset', districts: ['BS20', 'BS21', 'BS22', 'BS23', 'BS24', 'BS40', 'BS48', 'BS49'] },
    'weston-super-mare': { name: 'Weston-super-Mare', districts: ['BS22', 'BS23', 'BS24'] },
  },
  glasgow: {
    'glasgow-city-centre': { name: 'Glasgow City Centre', districts: ['G1', 'G2', 'G3', 'G4'] },
    'glasgow-west': { name: 'Glasgow West', districts: ['G11', 'G12', 'G13', 'G14', 'G15'] },
    'glasgow-south': { name: 'Glasgow South', districts: ['G41', 'G42', 'G43', 'G44', 'G45', 'G46'] },
    'glasgow-east': { name: 'Glasgow East', districts: ['G31', 'G32', 'G33', 'G34'] },
    'east-dunbartonshire': { name: 'East Dunbartonshire', districts: ['G61', 'G62', 'G64', 'G66'] },
    'greater-glasgow': { name: 'Greater Glasgow', districts: ['G51', 'G52', 'G53', 'G71', 'G72', 'G73', 'G74', 'G76', 'G77', 'G78'] },
  },
  bradford: {
    'bradford-city': { name: 'Bradford', districts: ['BD1', 'BD2', 'BD3', 'BD4', 'BD5', 'BD7', 'BD8', 'BD9'] },
    shipley: { name: 'Shipley', districts: ['BD17', 'BD18'] },
    bingley: { name: 'Bingley', districts: ['BD16'] },
    keighley: { name: 'Keighley', districts: ['BD20', 'BD21', 'BD22'] },
    ilkley: { name: 'Ilkley', districts: ['LS29'] },
    manningham: { name: 'Manningham', districts: ['BD8', 'BD9'] },
    thornton: { name: 'Thornton', districts: ['BD13'] },
    queensbury: { name: 'Queensbury', districts: ['BD13'] },
    idle: { name: 'Idle', districts: ['BD10'] },
    baildon: { name: 'Baildon', districts: ['BD17'] },
  },
  newcastle: {
    'newcastle-city-centre': { name: 'Newcastle City Centre', districts: ['NE1', 'NE2', 'NE3', 'NE4'] },
    gateshead: { name: 'Gateshead', districts: ['NE8', 'NE9', 'NE10', 'NE11'] },
    'north-tyneside': { name: 'North Tyneside', districts: ['NE12', 'NE25', 'NE26', 'NE27', 'NE28', 'NE29', 'NE30'] },
    'south-tyneside': { name: 'South Tyneside', districts: ['NE31', 'NE32', 'NE33', 'NE34', 'NE35', 'NE36'] },
    sunderland: { name: 'Sunderland', districts: ['SR1', 'SR2', 'SR3', 'SR4', 'SR5', 'SR6'] },
    'washington-houghton': { name: 'Washington and Houghton', districts: ['NE37', 'NE38', 'DH4', 'DH5'] },
    'cramlington-northumberland': { name: 'Cramlington', districts: ['NE23'] },
    'consett-county-durham': { name: 'Consett', districts: ['DH8'] },
  },
  cardiff: {
    'cardiff-city-centre': { name: 'Cardiff City Centre', districts: ['CF10', 'CF11'] },
    'cardiff-bay': { name: 'Cardiff Bay', districts: ['CF10'] },
    'canton-pontcanna': { name: 'Canton and Pontcanna', districts: ['CF5', 'CF11'] },
    'roath-cathays': { name: 'Roath and Cathays', districts: ['CF24'] },
    'north-cardiff': { name: 'North Cardiff', districts: ['CF14'] },
    'penarth-vale': { name: 'Penarth and the Vale', districts: ['CF62', 'CF63', 'CF64'] },
    'newport-caerphilly': { name: 'Newport and Caerphilly', districts: ['NP10', 'NP19', 'NP20', 'CF83'] },
    'pontypridd-rct': { name: 'Pontypridd', districts: ['CF37', 'CF38'] },
  },
  edinburgh: {
    'edinburgh-city-centre': { name: 'Edinburgh City Centre', districts: ['EH1', 'EH2', 'EH3'] },
    leith: { name: 'Leith', districts: ['EH6'] },
    southside: { name: 'Southside', districts: ['EH8', 'EH9'] },
    stockbridge: { name: 'Stockbridge', districts: ['EH3', 'EH4'] },
    morningside: { name: 'Morningside', districts: ['EH10'] },
    portobello: { name: 'Portobello', districts: ['EH15'] },
    musselburgh: { name: 'Musselburgh', districts: ['EH21'] },
    'dalkeith-midlothian': { name: 'Dalkeith', districts: ['EH22'] },
  },
  leicester: {
    'leicester-city-centre': { name: 'Leicester City Centre', districts: ['LE1'] },
    highfields: { name: 'Highfields', districts: ['LE2'] },
    evington: { name: 'Evington', districts: ['LE5'] },
    oadby: { name: 'Oadby', districts: ['LE2'] },
    wigston: { name: 'Wigston', districts: ['LE18'] },
    braunstone: { name: 'Braunstone', districts: ['LE3'] },
    'beaumont-leys': { name: 'Beaumont Leys', districts: ['LE4'] },
    knighton: { name: 'Knighton', districts: ['LE2'] },
  },
  coventry: {
    'coventry-city-centre': { name: 'Coventry City Centre', districts: ['CV1'] },
    earlsdon: { name: 'Earlsdon', districts: ['CV5'] },
    'tile-hill': { name: 'Tile Hill', districts: ['CV4'] },
    canley: { name: 'Canley', districts: ['CV4'] },
    foleshill: { name: 'Foleshill', districts: ['CV6'] },
    stoke: { name: 'Stoke', districts: ['CV2', 'CV3'] },
    binley: { name: 'Binley', districts: ['CV3'] },
    coundon: { name: 'Coundon', districts: ['CV6'] },
  },
  derby: {
    'derby-city-centre': { name: 'Derby City Centre', districts: ['DE1'] },
    allestree: { name: 'Allestree', districts: ['DE22'] },
    littleover: { name: 'Littleover', districts: ['DE23'] },
    chellaston: { name: 'Chellaston', districts: ['DE73'] },
    spondon: { name: 'Spondon', districts: ['DE21'] },
    normanton: { name: 'Normanton', districts: ['DE23'] },
    oakwood: { name: 'Oakwood', districts: ['DE21'] },
    mickleover: { name: 'Mickleover', districts: ['DE3'] },
  },
  belfast: {
    'belfast-city-centre': { name: 'Belfast City Centre', districts: ['BT1', 'BT2'] },
    'south-belfast': { name: 'South Belfast', districts: ['BT7', 'BT9'] },
    'east-belfast': { name: 'East Belfast', districts: ['BT4', 'BT5', 'BT6'] },
    'west-belfast': { name: 'West Belfast', districts: ['BT11', 'BT12', 'BT13'] },
    'north-belfast': { name: 'North Belfast', districts: ['BT14', 'BT15'] },
    'lisburn-road': { name: 'Lisburn Road', districts: ['BT9'] },
    holywood: { name: 'Holywood', districts: ['BT18'] },
    dunmurry: { name: 'Dunmurry', districts: ['BT17'] },
  },
  hampshire: {
    basingstoke: { name: 'Basingstoke', districts: ['RG21', 'RG22', 'RG23', 'RG24'] },
    southampton: { name: 'Southampton', districts: ['SO14', 'SO15', 'SO16', 'SO17', 'SO18', 'SO19'] },
    portsmouth: { name: 'Portsmouth', districts: ['PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6'] },
    alton: { name: 'Alton', districts: ['GU34'] },
    andover: { name: 'Andover', districts: ['SP10', 'SP11'] },
    lymington: { name: 'Lymington', districts: ['SO41'] },
    winchester: { name: 'Winchester', districts: ['SO22', 'SO23'] },
    fleet: { name: 'Fleet', districts: ['GU51', 'GU52'] },
    fareham: { name: 'Fareham', districts: ['PO14', 'PO15', 'PO16', 'PO17'] },
    havant: { name: 'Havant', districts: ['PO9'] },
    waterlooville: { name: 'Waterlooville', districts: ['PO7', 'PO8'] },
    hook: { name: 'Hook', districts: ['RG27'] },
    farnham: { name: 'Farnham', districts: ['GU9'] },
    farnborough: { name: 'Farnborough', districts: ['GU14'] },
    gosport: { name: 'Gosport', districts: ['PO12', 'PO13'] },
    bordon: { name: 'Bordon', districts: ['GU35'] },
    romsey: { name: 'Romsey', districts: ['SO51'] },
    eastleigh: { name: 'Eastleigh', districts: ['SO50'] },
    ringwood: { name: 'Ringwood', districts: ['BH24'] },
    'isle-of-wight': { name: 'Isle of Wight', districts: ['PO30', 'PO31', 'PO32', 'PO33', 'PO34', 'PO35', 'PO36', 'PO37', 'PO38', 'PO39', 'PO40', 'PO41'] },
  },
};

const ADDRESS_POSTCODE = /[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}/i;

export function extractPostcode(address: string | null | undefined): string | null {
  if (!address) return null;
  const match = address.match(ADDRESS_POSTCODE);
  return match ? match[0] : null;
}

export function effectivePostcode(row: { postcode?: string | null; address?: string | null }): string | null {
  const direct = (row.postcode || '').trim();
  if (direct) return direct;
  return extractPostcode(row.address);
}

export function parsePostcode(raw: string | null | undefined): PostcodeParts | null {
  if (!raw) return null;
  const compact = raw.toUpperCase().replace(/\s+/g, '');
  const match = compact.match(/^([A-Z]{1,2})(\d{1,2})([A-Z])?(\d[A-Z]{2})?$/);
  if (!match) return null;
  return { area: match[1], district: match[1] + match[2] + (match[3] || '') };
}

function districtHits(district: string, listed: readonly string[]): boolean {
  for (const item of listed) {
    if (district === item) return true;
    if (district.startsWith(item)) {
      const rest = district.slice(item.length);
      if (rest.length === 1 && rest >= 'A' && rest <= 'Z') return true;
    }
  }
  return false;
}

export function cityNames(): Record<string, string> {
  return CITY_NAMES;
}

export function cityListHref(city: string): string {
  return city === 'london' ? '/residential' : `/${city}/residential`;
}

export function placeHref(city: string, placeSlug: string): string {
  if (city === 'london') return `/pest-control/${placeSlug}`;
  return `/pest-control/${city}/${placeSlug}`;
}

export function placeName(city: string, placeSlug: string): string | null {
  return PLACES[city]?.[placeSlug]?.name ?? null;
}

export function placesIn(city: string): { slug: string; name: string }[] {
  const places = PLACES[city];
  if (!places) return [];
  return Object.entries(places).map(([slug, place]) => ({ slug, name: place.name }));
}

function districtInCity(parts: PostcodeParts, city: string): boolean {
  const places = PLACES[city];
  if (!places) return false;
  for (const place of Object.values(places)) {
    if (districtHits(parts.district, place.districts)) return true;
  }
  return false;
}

/**
 * A readable postcode outside this city's areas is rejected.
 * A missing or unreadable postcode is kept: the row was already limited to
 * the city's region tag, and there is no postcode evidence against it.
 */
export function servesCity(postcode: string | null | undefined, city: string): boolean {
  const parts = parsePostcode(postcode);
  if (!parts) return true;
  if (CITY_AREAS[city]?.includes(parts.area)) return true;
  return districtInCity(parts, city);
}

export function inPlace(postcode: string | null | undefined, city: string, placeSlug: string): boolean {
  const parts = parsePostcode(postcode);
  if (!parts) return false;
  const place = PLACES[city]?.[placeSlug];
  if (!place) return false;
  return districtHits(parts.district, place.districts);
}

export function inCity<T extends { postcode?: string | null; address?: string | null }>(rows: T[], city: string): T[] {
  return rows.filter((row) => servesCity(effectivePostcode(row), city));
}

/**
 * The words under a firm that is not based in this place.
 * One matching town or borough is named. A district shared by two places
 * stays as the district, so the page does not pick a borough. No readable
 * postcode produces no place name.
 */
export function baseLabel(postcode: string | null | undefined): string {
  const parts = parsePostcode(postcode);
  if (!parts) return 'Base not shown on the listing';
  const hits: string[] = [];
  for (const places of Object.values(PLACES)) {
    for (const place of Object.values(places)) {
      if (districtHits(parts.district, place.districts) && !hits.includes(place.name)) {
        hits.push(place.name);
      }
    }
  }
  if (hits.length === 1) return `Based in ${hits[0]}`;
  return `Based in ${parts.district}`;
}

export type CoveringRow<T> = T & { baseLabel: string };

/**
 * Section 1 is the place itself. Section 2 is everyone else already tagged
 * to the parent city. Callers pass rows in rating order; each group keeps
 * that order.
 */
export function splitCoverage<T extends { postcode?: string | null; address?: string | null }>(
  rows: T[],
  city: string,
  placeSlug: string,
): { local: T[]; alsoCovering: CoveringRow<T>[] } {
  const local: T[] = [];
  const sameCity: CoveringRow<T>[] = [];
  const unreadable: CoveringRow<T>[] = [];
  const outside: CoveringRow<T>[] = [];
  for (const row of rows) {
    const postcode = effectivePostcode(row);
    if (inPlace(postcode, city, placeSlug)) {
      local.push(row);
      continue;
    }
    const labelled = { ...row, baseLabel: baseLabel(postcode) };
    const parts = parsePostcode(postcode);
    if (!parts) unreadable.push(labelled);
    else if (servesCity(postcode, city)) sameCity.push(labelled);
    else outside.push(labelled);
  }
  return { local, alsoCovering: [...sameCity, ...unreadable, ...outside] };
}

/** Local firms only. Used by indexing and counts, which do not render section 2. */
export function splitPlace<T extends { postcode?: string | null; address?: string | null }>(
  rows: T[],
  city: string,
  placeSlug: string,
): { local: T[] } {
  return { local: splitCoverage(rows, city, placeSlug).local };
}

/**
 * Where a postcode should send a reader.
 * One matching place links to that place. Several places (a shared district)
 * link to the city list, because picking one borough would be a guess.
 */
export function matchPostcode(raw: string): PlaceMatch | null {
  const parts = parsePostcode(raw);
  if (!parts) return null;

  const hits: { city: string; slug: string; name: string }[] = [];
  for (const [city, places] of Object.entries(PLACES)) {
    for (const [slug, place] of Object.entries(places)) {
      if (districtHits(parts.district, place.districts)) {
        hits.push({ city, slug, name: place.name });
      }
    }
  }

  if (hits.length === 1) {
    const hit = hits[0];
    return {
      city: hit.city,
      cityName: CITY_NAMES[hit.city] || hit.city,
      placeSlug: hit.slug,
      placeName: hit.name,
      href: placeHref(hit.city, hit.slug),
    };
  }

  const cities = new Set(hits.map((hit) => hit.city));
  if (cities.size === 1) {
    const city = hits[0].city;
    return {
      city,
      cityName: CITY_NAMES[city] || city,
      placeSlug: null,
      placeName: null,
      href: cityListHref(city),
    };
  }

  for (const [city, areas] of Object.entries(CITY_AREAS)) {
    if (areas.includes(parts.area)) {
      return {
        city,
        cityName: CITY_NAMES[city] || city,
        placeSlug: null,
        placeName: null,
        href: cityListHref(city),
      };
    }
  }

  return null;
}

export function knownCities(): string[] {
  return Object.keys(CITY_NAMES);
}

/**
 * Area letters and the districts that belong to a city even though their
 * letter prefix does not. Used by the owner-run SQL review so it names the
 * same places as this file.
 */
export function areaRules(): { city: string; areas: string[]; exceptions: string[] }[] {
  return Object.keys(CITY_AREAS).map((city) => {
    const areas = CITY_AREAS[city];
    const areaSet = new Set(areas);
    const exceptions = new Set<string>();
    for (const place of Object.values(PLACES[city] || {})) {
      for (const district of place.districts) {
        const area = district.match(/^[A-Z]+/)?.[0];
        if (area && !areaSet.has(area)) exceptions.add(district);
      }
    }
    return { city, areas: [...areas], exceptions: [...exceptions].sort() };
  });
}
