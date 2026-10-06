// S70 R5 — WORDS FOR THE US TOP-PICKS BOX, AND ONLY WORDS (Law 195, extended to /us).
//
// Names and ASINs are NOT here: UsTopPicks derives them from each route's own cards.
// Each entry carries a neutral label (never an award: several US routes state in our
// own voice that their products are not ranked), a one-line who-it-suits reason drawn
// from that card's own listing facts, and a safety/law note only where the page
// already carries that safety or legal content. Keyed by route slug, then ASIN.

export type UsPickWords = { asin: string; label: string; reason: string };
export type UsBoxWords = { note: string | null; picks: UsPickWords[]; excluded: { asin: string; why: string }[] };

export const US_TOP_PICKS: Record<string, UsBoxWords> = {
  "ants": {
    note: "Place bait stations where ants find them easily but out of reach of pets and small children.",
    picks: [
      { asin: "B00E4GACB8", label: "Liquid bait stations, 12-pack", reason: "Suits several indoor trails: 12 ready-to-use borax stations, and the listing names odorous house and pavement ants." },
      { asin: "B07Q41N8K1", label: "Wall-mount bait stations, 8-pack", reason: "For counters and cabinets: eight pre-filled stations with adhesive strips to mount them off the floor." },
      { asin: "B08BJRMVGZ", label: "Liquid bait stations, 4-pack", reason: "For one small trail: four ready-to-use borax bait stations." },
      { asin: "B0C3WM5G7H", label: "Outdoor bait stakes, 12-pack", reason: "For trails that start outside: 12 stakes you push into the ground, with a see-through body to check the bait." },
    ],
    excluded: [],
  },
  "arizona-bark-scorpions": {
    note: "A bark scorpion sting is a medical matter; pick one up only with long forceps, never by hand.",
    picks: [
      { asin: "B0BVGTM2XY", label: "Window and door silicone", reason: "For sealing eaves, pipes and wall penetrations: clear silicone in a 10 fl oz cartridge." },
      { asin: "B0000CBJ7W", label: "Window and door sealant", reason: "A second clear silicone in the same cartridge size, for the same cracks and gaps." },
      { asin: "B0B8QPH3RW", label: "All-purpose silicone", reason: "Clear silicone sold as all-purpose rather than window-and-door, in a 10 fl oz cartridge." },
      { asin: "B0D1G867Y4", label: "UV flashlight, 21 LED", reason: "A compact 395 nm black light for night checks; the listing names scorpions among its uses." },
      { asin: "B076LSWZTF", label: "UV flashlight, 108 LED", reason: "For a wider beam on night checks: 108 LEDs at 395 nm, with scorpion detection listed." },
      { asin: "B07BK18YZD", label: "Zoomable UV flashlight, 2-pack", reason: "Two pocket-size 395 nm lights with an adjustable beam, handy if two people search." },
      { asin: "B09QLK77RT", label: "Curved tongs, 12 inch", reason: "Stainless curved tongs at 12 inches, the upper end of the 10 to 12 inch range UC IPM gives." },
      { asin: "B07CVT3LYF", label: "Feeding tongs, 2-pack", reason: "A pair of 10.6 inch stainless tongs, inside the length range UC IPM gives for forceps." },
    ],
    excluded: [],
  },
  "asian-lady-beetles": {
    note: null,
    picks: [
      { asin: "B0BVGTM2XY", label: "Window and door caulk", reason: "For sealing cracks around windows and doors: clear silicone in a 10 fl oz cartridge." },
      { asin: "B0000CBJ7W", label: "Window and door sealant", reason: "A second clear silicone for the same window and door gaps, in a 10.1 oz cartridge." },
      { asin: "B0B8QPH3RW", label: "All-purpose silicone caulk", reason: "For gaps beyond windows and doors, like utility pipes and siding: all-purpose clear silicone." },
      { asin: "B0BS4KH2FH", label: "20 x 20 mesh screen, 25 ft", reason: "For covering one attic vent or chimney opening: 20 x 20 mesh, 36 inches by 25 feet." },
      { asin: "B01N3BAPJO", label: "20 x 20 mesh screen, 100 ft", reason: "The same 20 x 20 mesh in a 100-foot roll, for screening several vents or chimneys." },
    ],
    excluded: [],
  },
  "bed-bugs": {
    note: "Commercial steamers run well above 180°F and Purdue warns they can scald if used improperly.",
    picks: [
      { asin: "B0033SC0LI", label: "Interceptor monitors, 4-pack", reason: "For checking a bed for activity: one pesticide-free interceptor under each leg, with a dual-well design." },
      { asin: "B018USWJVQ", label: "Twin XL mattress encasement", reason: "For a Twin XL mattress up to 39 by 80 inches: zippered cover sealed on all six sides." },
      { asin: "B01B6W09R4", label: "Bed bug steamer", reason: "For steaming mattresses and furniture: the listing states steam heated up to 356°F." },
    ],
    excluded: [],
  },
  "best-armadillo-traps": {
    note: "Check state rules first. Florida requires live-caught wildlife be released or euthanized within 24 hours.",
    picks: [
      { asin: "B00ADSHU84", label: "Cage trap, rear release door", reason: "For anyone who wants to release from behind: a single-entry wire cage with a rear sliding door." },
      { asin: "B000H6JJEA", label: "Cage trap, one-handed set", reason: "Suits a first-time trapper: a one-door wire cage with a set lever, so you never reach inside." },
      { asin: "B00004RAMT", label: "Galvanized cage trap", reason: "For a sturdier frame: one-door galvanized mesh with steel reinforcement at the frame and door." },
    ],
    excluded: [],
  },
  "best-gopher-traps": {
    note: "Trapping rules vary by state. Check yours before setting kill traps; this page is not legal advice.",
    picks: [
      { asin: "B00004RA58", label: "Macabee pincer trap", reason: "The classic two-pronged pincer trap, and the model used in the Utah State University trial." },
      { asin: "B09CN7WRKM", label: "Pincer traps, 2-pack", reason: "For setting a pair in one main tunnel: two stainless steel pincer traps." },
      { asin: "B09D3TVG1Y", label: "Pincer traps, 4-pack", reason: "For two active tunnels at once: the same pincer trap, supplied as four." },
      { asin: "B0F8R94HTX", label: "Heavy-duty pincer traps, 2-pack", reason: "A pair of pincer traps the seller lists as a heavy-duty build, set the same way as the others." },
      { asin: "B09ZK6Y4W7", label: "Stainless pincer traps, 3-pack", reason: "Three stainless steel pincer traps at 5.5 by 2.5 by 1.5 inches each." },
      { asin: "B002J89XYA", label: "Cinch trap kit", reason: "For trying the cinch style, which closes across the tunnel: the third model from the Utah State trial." },
      { asin: "B0CMW22ZPX", label: "Cinch traps, 3-pack", reason: "Three cinch traps sized by the seller for a 2-inch tunnel, so measure yours first." },
    ],
    excluded: [],
  },
  "best-raccoon-traps": {
    note: "Raccoon feces can carry roundworm eggs. Wear the protective gear agencies specify to clean up.",
    picks: [
      { asin: "B00004RAMT", label: "Havahart 1-door cage", reason: "A metal one-door live trap at 32.29 by 13.1 by 11.1 inches, over the Iowa State minimum." },
      { asin: "B07KB2QCZZ", label: "Steel 1-door cage", reason: "An alloy steel one-door cage at 32 by 12 by 12.5 inches, over the Iowa State minimum." },
      { asin: "B0C865FXRH", label: "32-inch cage, rear door", reason: "A 32 by 10 by 12 inch steel cage with a rear door held by fixing clips." },
      { asin: "B07KWYM922", label: "Spring-door cage", reason: "A 32 by 12 by 12.5 inch steel cage with a spring-loaded door." },
      { asin: "B073P7865G", label: "Stainless 1-door cage", reason: "For a stainless steel build: one-door cage at 32 by 12 by 12.5 inches." },
      { asin: "B0748JJL35", label: "Collapsible cage", reason: "For storing flat between uses: a collapsible single-door cage at 32 by 11 by 13 inches." },
    ],
    excluded: [],
  },
  "best-stink-bug-traps": {
    note: null,
    picks: [
      { asin: "B005X94R7U", label: "Pheromone lure trap", reason: "For indoor or outdoor use: a pheromone-lure trap listed for brown marmorated and green stink bugs." },
    ],
    excluded: [],
  },
  "black-widow-spiders": {
    note: "Widow bites are venomous: wear leather gloves when clearing webs and get medical help if bitten.",
    picks: [
      { asin: "B075L7QWP4", label: "Cobweb duster and pole", reason: "For webs in meter boxes and high corners: a pole that reaches 5 to 12 feet, so your hand stays clear." },
      { asin: "B071JWBBF9", label: "Leather gauntlet gloves", reason: "For clearing woodpiles and meter boxes: leather palms with a gauntlet cuff over the wrist." },
      { asin: "B00KL7VPWO", label: "Gasket storage boxes, 4-pack", reason: "For garage and seasonal storage: four 54-quart boxes with a gasket seal and latch clips." },
      { asin: "B0BVGTM2XY", label: "Window and door caulk", reason: "For gaps around doors and windows: a clear silicone in a 10 fl oz cartridge, sold for that job." },
      { asin: "B0000CBJ7W", label: "Window and door sealant", reason: "Another clear silicone for door and window gaps, in a 10.1 oz cartridge." },
      { asin: "B0B8QPH3RW", label: "All-purpose silicone caulk", reason: "For holes around conduit and plumbing: a clear all-purpose silicone, 10 fl oz cartridge." },
      { asin: "B0BS2DZZ7J", label: "Slide-on door sweep", reason: "For a gap of 1/4 to 1 inch under a door: a 36-inch sweep you can trim, with no slot needed in the door." },
      { asin: "B0BS4KH2FH", label: "Insect screen roll", reason: "For patching torn window screens: a 36-inch by 25-foot roll of 20 by 20 mesh." },
    ],
    excluded: [],
  },
  "boxelder-bugs": {
    note: null,
    picks: [
      { asin: "B0BVGTM2XY", label: "Window and door silicone", reason: "For caulking gaps around windows and doors: clear silicone in a 10 fl oz cartridge." },
      { asin: "B0000CBJ7W", label: "Window and door sealant", reason: "A second clear silicone in the same cartridge size, for the same openings." },
      { asin: "B0B8QPH3RW", label: "All-purpose silicone", reason: "Clear all-purpose silicone, if the gaps are in siding or foundations rather than frames." },
    ],
    excluded: [],
  },
  "brown-recluse-spiders": {
    note: "Wear long sleeves and gloves when sorting stored boxes, as University of Kentucky Extension advises.",
    picks: [
      { asin: "B06XXNSTNN", label: "10x pocket magnifier", reason: "For counting eyes on a suspect spider: a 10x double-lens LED pocket magnifier." },
      { asin: "B00KL7VPWO", label: "Gasket storage boxes, 4-pack", reason: "For moving stored items out of cardboard: four 54-quart boxes with a gasket seal and latch clips." },
      { asin: "B072KL69L5", label: "15 mil nitrile gloves", reason: "For sorting boxes in a closet: reusable unlined nitrile gloves at 15 mil." },
      { asin: "B0FDH2LTTN", label: "SHOWA 727 nitrile gloves", reason: "A second make of reusable unlined nitrile glove for the same sorting job." },
      { asin: "B007VR5H3K", label: "22 mil nitrile gloves", reason: "For clearing a garage, attic or crawl space: heavier unlined nitrile at 22 mil." },
      { asin: "B0BVGTM2XY", label: "Window and door caulk", reason: "For gaps around windows and doors: clear silicone in a 10 fl oz cartridge." },
      { asin: "B0000CBJ7W", label: "Window and door sealant", reason: "For door gaps and conduit holes in homes with attached garages: clear silicone, 10.1 oz." },
      { asin: "B0B8QPH3RW", label: "All-purpose silicone caulk", reason: "For utility penetrations and conduit holes: all-purpose clear silicone, 10 fl oz." },
      { asin: "B005F5U686", label: "Flat glue boards, 72-case", reason: "For surveying a whole house: 72 flat 8 by 4 inch boards to place along baseboards and corners." },
      { asin: "B06XGL8R89", label: "Glue boards, 12-pack", reason: "For a room or two: 12 peanut-butter-scented boards that can lie flat or fold." },
    ],
    excluded: [],
  },
  "carpenter-bees": {
    note: "Bees sting when handled or when you reach into an active hole, the sources say.",
    picks: [
      { asin: "B0D79GC3SM", label: "Hole repair plug kit", reason: "For plugging holes after the bees have gone: tapered wood plugs in three sizes, plus matching decals." },
      { asin: "B09VYHTLJG", label: "Oil-based deterrent spray", reason: "For decks and fences: citrus, peppermint and almond oil spray the listing says is meant to discourage boring." },
      { asin: "B0BJRXS15L", label: "Catch-and-release trap", reason: "For catching without killing: a latch opens the chamber so a bee can be released, per the listing." },
    ],
    excluded: [],
  },
  "carpet-beetles": {
    note: null,
    picks: [
      { asin: "B084DY21D6", label: "Gasket storage bins, 2-pack", reason: "For storing wool and clothes: two 47-quart bins with gasket seals and multi-buckle latches." },
      { asin: "B00KL7VPWO", label: "Gasket storage boxes, 4-pack", reason: "For larger loads of stored fabric: four 54-quart boxes with a gasket seal and latch clips." },
      { asin: "B0H2G1Q81W", label: "Pheromone traps, 6-pack", reason: "For finding where adults are active: six sticky traps with a pheromone lure for varied and black carpet beetles." },
      { asin: "B0GYWHZ7NL", label: "Pheromone sticky boards, 48 traps", reason: "For monitoring a whole house: 24 pheromone boards that split into 48 small traps." },
    ],
    excluded: [],
  },
  "chiggers": {
    note: "Use repellents as the label directs. Permethrin goes on clothing and gear, never on skin.",
    picks: [
      { asin: "B001ANQVYU", label: "Permethrin clothing treatment", reason: "For hikers and yard workers: a permethrin spray for clothing, gear and tents, not for skin." },
      { asin: "B002CMQJYU", label: "Picaridin pump spray", reason: "For skin, if you prefer a pump: 20% picaridin, one of the ingredients Ohio State names for chiggers." },
      { asin: "B0G5VN3GB3", label: "Picaridin aerosol", reason: "Same 20% picaridin as the pump spray, in an aerosol can." },
      { asin: "B0BJRS2F8H", label: "Calamine lotion, 6 oz", reason: "For bites that already itch: a 6 fl oz bottle of medicated calamine lotion." },
      { asin: "B08TKJY4R8", label: "Clear calamine lotion", reason: "Calamine in a clear lotion, for anyone who doesn't want the pink residue on their skin." },
      { asin: "B0BJMQBSKJ", label: "Hydrocortisone cream with aloe", reason: "For itch relief in a cream: 1% hydrocortisone with aloe." },
      { asin: "B0BJMDMDCX", label: "Water-resistant hydrocortisone", reason: "1% hydrocortisone in a water-resistant ointment, for anyone who'll be sweating or swimming." },
    ],
    excluded: [],
  },
  "chipmunks": {
    note: "Set snap traps under a box that keeps birds out. Some states, Pennsylvania included, protect chipmunks.",
    picks: [
      { asin: "B006K33C9C", label: "Wooden rat snap traps, 12-pack", reason: "For a yard with several chipmunks: twelve wood-based rat-size snap traps, the size the sources specify." },
      { asin: "B00004RAMW", label: "Wooden rat snap trap, single", reason: "The same Victor M201 sold singly, for one burrow or for topping up the twelve-pack." },
      { asin: "B09W8XZDVS", label: "1/4-inch hardware cloth, 24 in", reason: "For bulb beds and building gaps: a 24-inch by 50-foot roll of quarter-inch vinyl-coated mesh." },
      { asin: "B0B8QPH3RW", label: "All-purpose silicone caulk", reason: "For sealing where cables, gas and dryer lines enter the house: a 10 fl oz cartridge of clear silicone." },
      { asin: "B0GVSH57DC", label: "Downspout and vent strainer", reason: "For gutter downspouts and vents: a tool-free stainless strainer that fits 3.0 to 4.9 inch pipes." },
    ],
    excluded: [],
  },
  "cluster-flies": {
    note: null,
    picks: [
      { asin: "B0BVGTM2XY", label: "Window and door silicone", reason: "For summer sealing around windows, doors and siding: a 10 fl oz cartridge of clear silicone caulk." },
      { asin: "B0000CBJ7W", label: "Window and door sealant, 10.1 oz", reason: "A second clear silicone for the same job, in a 10.1 oz cartridge." },
      { asin: "B0B8QPH3RW", label: "All-purpose silicone caulk", reason: "For gaps beyond windows and doors, like utility pipes: an all-purpose clear silicone cartridge." },
    ],
    excluded: [],
  },
  "coyotes": {
    note: null,
    picks: [
      { asin: "B0H1W3T7ZZ", label: "Welded wire, 2x4 mesh", reason: "For a new fence line: 15 gauge galvanized wire, 2 by 4 inch mesh, in a 6 by 50 ft roll." },
      { asin: "B0FX21JKKQ", label: "Hot-dip galvanized wire, 2x4", reason: "The same 2 by 4 inch mesh, galvanized after welding so the joints are coated too." },
      { asin: "B0DPGFB9ZM", label: "Welded wire, 4x4 mesh, 100 ft", reason: "For a longer run: a 100 ft roll of heavier 12.5 gauge wire with 4 by 4 inch mesh." },
      { asin: "B0BMNPPN65", label: "Fence roller kit, 8 ft", reason: "For wood dog-ear fences: two spinning rollers and four brackets to mount on an existing fence." },
      { asin: "B0H74XZQT5", label: "Fence topper roller, 4 ft", reason: "A shorter roller kit listed for chain-link and wood dog-ear fences." },
    ],
    excluded: [],
  },
  "fleas": {
    note: null,
    picks: [
      { asin: "B0GH1KG672", label: "Fine-tooth metal comb", reason: "For checking a dog or cat: a fine-tooth metal comb that catches fleas and eggs, with a non-slip handle." },
      { asin: "B0002PS7O4", label: "Plug-in light trap", reason: "For a room where fleas are hatching: a bulb and sticky pad, with each pad listed for up to three months." },
      { asin: "B09NBKKQSZ", label: "Plug-in light traps, 2-pack", reason: "For two rooms at once: two traps with four glue pads and six spare bulbs." },
      { asin: "B0D6VB2FGZ", label: "Hanging LED light trap", reason: "For spots without a free outlet: a hanging trap on a USB-C cable, with three sticky pads included." },
      { asin: "B0GHMWBPC8", label: "Corded light traps, 2-pack", reason: "For placing away from the socket: two traps on six-foot cords, with six bulbs and eight sticky pads." },
    ],
    excluded: [],
  },
  "flies": {
    note: null,
    picks: [
      { asin: "B09VS6DHBK", label: "Hanging fly ribbons, 24-pack", reason: "For a garage, barn or porch: 24 unbaited sticky rolls with pins, each listed to hang up to three months." },
      { asin: "B07H58BNFT", label: "Fly ribbons, 32-pack", reason: "The largest pack here: 32 paper ribbons coated on both sides, with no vapors." },
      { asin: "B0BWM9BBH5", label: "Sticky fly sticks, 4-pack", reason: "For a few flies in a small space: sticks that stand or hang, with a dish for your own bait." },
      { asin: "B08DMY3WWX", label: "Hanging trap with bait cup", reason: "For house flies near trash cans: a paper stick with a cup you can add honey to." },
    ],
    excluded: [],
  },
  "fruit-flies": {
    note: null,
    picks: [
      { asin: "B0BCP3VT97", label: "Enzyme drain gel, 1 gallon", reason: "For flies breeding in a kitchen drain: an enzyme gel you pour down the drain, listed as safe around food." },
      { asin: "B0BX4GQF68", label: "Lure traps, 6-pack", reason: "For counters, fruit bowls and trash cans: six apple-shaped traps with a ready-to-use liquid lure." },
    ],
    excluded: [],
  },
  "fungus-gnats": {
    note: null,
    picks: [
      { asin: "B07HCLTXFG", label: "Bti granules, 30 oz", reason: "For houseplants with larvae in the soil: Bti-coated granules to sprinkle on the soil or mix into potting mix." },
      { asin: "B0BM51MQF3", label: "Yellow sticky traps, 60", reason: "For spotting adults around pots: 60 two-sided yellow traps with holders that push into the soil." },
    ],
    excluded: [],
  },
  "german-cockroaches": {
    note: null,
    picks: [
      { asin: "B000KL1LDE", label: "Fipronil bait stations, 18", reason: "For a kitchen with small roaches: eighteen ready-to-use fipronil stations, listed for up to 12 months." },
      { asin: "B000FJRSMO", label: "Hydramethylnon bait stations, 12", reason: "A different active ingredient from the fipronil stations: twelve hydramethylnon stations, listed for 3 months." },
      { asin: "B0CYJMJCQ9", label: "Gel bait with growth regulator", reason: "For cracks and crevices: four syringes of gel combining indoxacarb with the growth regulator pyriproxyfen." },
      { asin: "B0BY3PSWMB", label: "Hydroprene IGR discs, 20", reason: "For spots where sprays don't suit: 20 adhesive growth-regulator discs, each listed to cover 75 square feet." },
    ],
    excluded: [],
  },
  "groundhogs": {
    note: "Trapping and relocation rules differ by state. Read the legal section before setting a cage trap.",
    picks: [
      { asin: "B07KWYM922", label: "32-inch steel cage trap", reason: "For a groundhog-size animal: a 32 x 12 x 12.5 inch cage whose own listing names groundhogs." },
    ],
    excluded: [],
  },
  "house-mice": {
    note: "Store any rodenticide or pesticide out of reach of children and pets, as the sources instruct.",
    picks: [
      { asin: "B0CQ8RSTC9", label: "Wooden snap traps, 12-pack", reason: "For setting several traps at once: twelve reusable metal-pedal wooden traps sized for mice." },
      { asin: "B005F5U686", label: "Glue boards, case of 72", reason: "For lining baseboards and corners: 72 boards at 8 by 4 inches, listed for mice and insects." },
      { asin: "B0GRNS3MXS", label: "1/4 inch hardware cloth", reason: "For sealing many gaps along a foundation: 1/4 inch galvanized mesh in a 36 inch by 50 ft roll." },
    ],
    excluded: [],
  },
  "imported-fire-ants": {
    note: "Follow the bait label rate, and wear chemical-resistant unlined gloves when mixing liquid concentrates.",
    picks: [
      { asin: "B00GRT5E18", label: "Granular bait, hydramethylnon", reason: "For broadcasting over a yard: a 1 lb granular bait with hydramethylnon listed as the active." },
      { asin: "B08YS87GR5", label: "Spinosad bait, OMRI listed", reason: "For vegetable beds or an organic approach: 1 lb of spinosad bait carrying an OMRI listing." },
      { asin: "B015BSWVCU", label: "Two-active bait, 1.5 lb", reason: "A 1.5 lb bait listing both hydramethylnon and the growth regulator methoprene." },
      { asin: "B0DV9W259K", label: "Hand-powered spreader", reason: "For spreading bait thinly by hand: a hand-held spreader of the type the sources name." },
      { asin: "B08MB5VG9M", label: "Hand spreader, 4 lb", reason: "A hand spreader holding up to 4 lb, enough for a typical per-acre bait rate." },
      { asin: "B072KL69L5", label: "Nitrile gloves, 15 mil", reason: "For mixing a liquid mound treatment: unlined, chemical-resistant nitrile at 15 mil." },
      { asin: "B0FDH2LTTN", label: "SHOWA 727 nitrile gloves", reason: "Another unlined, chemical-resistant nitrile glove for handling liquid concentrates." },
      { asin: "B007VR5H3K", label: "SHOWA 737 nitrile, 22 mil", reason: "The thickest glove here at 22 mil, unlined and listed as chemical resistant." },
    ],
    excluded: [],
  },
  "joro-spider-webs": {
    note: null,
    picks: [
      { asin: "B075L7QWP4", label: "Cobweb duster and pole", reason: "For high webs on eaves: a pole extending from 5 to 12 feet with a head that winds up silk." },
    ],
    excluded: [],
  },
  "mole-and-vole-control": {
    note: "The mole bait is a poison. Its label says keep it away from children, domestic animals and pets.",
    picks: [
      { asin: "B00LWDRSRM", label: "Scissor-jaw mole traps, 4-pack", reason: "For moles: four scissor-jaw traps, enough to run the three at once Nebraska Extension suggests." },
      { asin: "B0CQ8RSTC9", label: "Mouse snap traps, 12-pack", reason: "For voles in several runways: twelve mouse-sized snap traps, the tool extension sources name." },
      { asin: "B00C1NN4B6", label: "Mouse snap traps, 4-pack", reason: "For a single vole runway: the same mouse-sized snap trap, supplied as four." },
      { asin: "B004RQCDG2", label: "Castor oil lawn spray", reason: "For moles across a whole lawn: hose-end castor oil the listing states covers 5,000 square feet." },
      { asin: "B012RGU4EQ", label: "Bromethalin worm bait", reason: "For an active mole runway: ten worm baits placed below ground, label use only." },
    ],
    excluded: [],
  },
  "mosquitoes": {
    note: "Yard sprays can harm pollinators: spray in the evening and avoid blooming plants.",
    picks: [
      { asin: "B0002ASQ4A", label: "Bti dunks, 2-pack", reason: "For a pond or trough you can't drain: Bti dunks the listing says release for 30 days or more." },
      { asin: "B0DW3RS3L3", label: "Picaridin spray, 20%", reason: "For skin and clothing: a fragrance-free 20% picaridin continuous spray, 6 oz." },
      { asin: "B00LI6ACUI", label: "Hose-end yard spray", reason: "For shrubs, paths and wooded edges: a quart that sprays through a garden hose." },
    ],
    excluded: [],
  },
  "moths": {
    note: null,
    picks: [
      { asin: "B084DY21D6", label: "Gasket-seal storage bins, 2-pack", reason: "For storing clean woolens: two 47-quart bins with gasket-sealed, buckled lids." },
      { asin: "B00KL7VPWO", label: "Latching gasket boxes, 4-pack", reason: "For a bigger wardrobe clear-out: four 54-quart boxes with gasket seals and latch clips." },
      { asin: "B07H9FZ7QP", label: "Clothes moth traps, 6", reason: "For closets: six pheromone traps that name both clothes moth species and say they're not for pantry moths." },
      { asin: "B092T49YP2", label: "Clothes moth traps, 14", reason: "For a larger home: fourteen pheromone traps for webbing and case-bearing clothes moths." },
      { asin: "B08ZK5WDWN", label: "Gasket food containers, 24", reason: "For restocking a pantry: 24 side-locking containers with silicone gaskets, in four sizes." },
      { asin: "B08NDKDJC5", label: "Gasket food containers, 8", reason: "For a smaller pantry: an eight-piece set with side-locking lids and silicone gaskets." },
      { asin: "B097K4B6Z8", label: "Sealed food containers with labels", reason: "For an organized pantry: 24 locking containers in four sizes, sold with labels and a marker." },
      { asin: "B01GM1LUGS", label: "Pantry moth traps, 6", reason: "For kitchen cupboards: six pheromone traps for Indianmeal moths, listed to last up to three months each." },
      { asin: "B092DFKMYJ", label: "Pantry moth traps, trial 4", reason: "To try before stocking up: a four-trap pack for Indianmeal, flour, grain and seed moths." },
      { asin: "B08R16DSJT", label: "Folded pantry moth traps, 6", reason: "For shelves near food: six folded glue traps designed to keep the glue off food and hands." },
    ],
    excluded: [],
  },
  "no-see-ums": {
    note: "Permethrin is for clothing and screens, not skin. Follow each repellent's label directions.",
    picks: [
      { asin: "B0BS4KH2FH", label: "20x20 screen roll, 25 ft", reason: "For re-screening a few windows: a 36-inch by 25-foot roll of 20 x 20 mesh." },
      { asin: "B01N3BAPJO", label: "20x20 screen roll, 100 ft", reason: "For a porch or many openings: the same 20 x 20 mesh in a 36-inch by 100-foot roll." },
      { asin: "B0DNNY2KJX", label: "Heavy-duty 20x20 screen", reason: "A heavy-duty 20 x 20 roll from a different maker, for windows, doors, porches and patios." },
      { asin: "B002CMQJYU", label: "Picaridin pump spray", reason: "For skin, in a pump: 20% picaridin, an EPA-registered ingredient named in the Arizona publication." },
      { asin: "B0G5VN3GB3", label: "Picaridin aerosol", reason: "Same 20% picaridin as the pump spray, in an aerosol can." },
      { asin: "B001ANQVYU", label: "Permethrin fabric treatment", reason: "For clothing and gear rather than skin: a permethrin spray for fabric." },
    ],
    excluded: [],
  },
  "opossums": {
    note: null,
    picks: [
      { asin: "B0832YDD5B", label: "1/4-inch mesh, 48 in x 50 ft", reason: "For closing off under a deck or shed: a 48-inch by 50-foot roll of quarter-inch hardware cloth." },
      { asin: "B08PPYX999", label: "1/4-inch mesh, 48 in x 100 ft", reason: "For a longer run of decking or vents: 100 feet of 23-gauge quarter-inch mesh." },
      { asin: "B0D1QXZFKJ", label: "PVC-coated mesh, 100 ft", reason: "For anyone who wants a coated finish: 100 feet of black PVC-coated quarter-inch mesh." },
      { asin: "B09W8XZDVS", label: "Narrow 19-gauge mesh, 24 in", reason: "For a buried trench and skirt: a 24-inch roll of 19-gauge, vinyl-coated quarter-inch mesh." },
      { asin: "B0H75HHMDX", label: "Small mesh roll, 8 in x 10 ft", reason: "For one vent or a quick patch: an 8-inch by 10-foot roll of quarter-inch mesh." },
    ],
    excluded: [],
  },
  "palmetto-bugs": {
    note: "Never spray insecticide where bait is placed, into outlets, or on food prep surfaces, per UF/IFAS.",
    picks: [
      { asin: "B001ACMBJK", label: "Large-roach bait stations", reason: "For living areas: eight ready-to-use stations sized for large roaches rather than German ones." },
      { asin: "B0148W0WOE", label: "Gel bait, 4 tubes", reason: "For cracks and crevices: four 30 g syringes of gel, placed in pea-size drops." },
      { asin: "B005F5PRJE", label: "Granular bait, 4 lb", reason: "For the outside perimeter, mulch beds and attics: a 4 lb granular bait to scatter." },
      { asin: "B01N0TGJHB", label: "Perimeter spray, 1.33 gal", reason: "For an outdoor perimeter treatment, kept well away from any bait placements." },
      { asin: "B0CFRN4CF3", label: "Glue boards, 10-pack", reason: "For finding where roaches travel: ten sticky boards used as a monitoring tool." },
    ],
    excluded: [],
  },
  "powderpost-beetles": {
    note: null,
    picks: [
      { asin: "B01HDYAOY2", label: "Borate liquid concentrate", reason: "For bare, unfinished wood: a borate concentrate the listing says penetrates wood fibers." },
      { asin: "B09M2GHBBC", label: "Borate dust, 1.5 lb", reason: "For bare wood, with options: a borate product the listing says applies as dust, liquid or foam." },
      { asin: "B011BLHBBM", label: "Pin moisture meter", reason: "For checking wood against published thresholds: reads 5 to 50 percent moisture as a percentage." },
    ],
    excluded: [],
  },
  "rats": {
    note: "Rat bait belongs in a locked, tamper-resistant station; the station here ships empty, with no poison.",
    picks: [
      { asin: "B00DLKKT1Q", label: "Wooden rat snap traps, 12-pack", reason: "For a heavy infestation: twelve wooden rat traps with an expanded, adjustable trigger." },
      { asin: "B0CTL12488", label: "Plastic pedal rat traps, 3-pack", reason: "For anyone who finds old traps hard to set: three easy-set plastic pedal traps, made in the USA." },
      { asin: "B0725X2WHJ", label: "Locking bait station, 2-pack", reason: "Two weather-resistant outdoor stations with a key-locked lid. Bait is not included." },
      { asin: "B009894CDU", label: "1/2 inch hardware cloth", reason: "For closing vents and gaps: 19 gauge galvanized mesh with 1/2 inch openings, 2 by 10 ft." },
    ],
    excluded: [],
  },
  "silverfish": {
    note: null,
    picks: [
      { asin: "B08ZK5WDWN", label: "Airtight food containers, 24", reason: "For cereal, flour and pet food: 24 containers in four sizes with gasket side-locking lids." },
      { asin: "B08NDKDJC5", label: "Airtight food containers, 8", reason: "For a smaller pantry: eight containers in four sizes with silicone-gasket locking lids." },
      { asin: "B097K4B6Z8", label: "Sealed containers with labels", reason: "For reorganizing a whole pantry: 24 sealed containers, sold with labels and a marker." },
      { asin: "B09TG81M7B", label: "Scented glue traps, 12", reason: "For silverfish and firebrats: 12 sticky traps with an attractant mixed into the glue." },
      { asin: "B0D7M9YPBW", label: "Box glue traps, 12", reason: "For plain monitoring with no lure: 12 dark-interior box traps, listed for up to six months." },
      { asin: "B00WXKSHYQ", label: "Glue traps, 6-pack", reason: "For a quick check in one or two rooms: six glue traps for silverfish and spiders." },
      { asin: "B0FH2Z22R2", label: "Angled monitoring traps, 10", reason: "For damp, tight spots like crawl spaces: ten odorless angled traps with side windows to see a catch." },
      { asin: "B075S9NZJL", label: "Boric acid bait paks, 48", reason: "For books, papers and closets: 48 ready-to-use paks of 20% boric acid, with no mixing or spraying." },
    ],
    excluded: [],
  },
  "snakes": {
    note: "Snake law is set state by state; in Pennsylvania, for one, all snakes are protected.",
    picks: [
      { asin: "B015PD9HGY", label: "1/4 inch fence mesh, 50 ft", reason: "For a snake fence: 1/4 inch hot-dip galvanized mesh in a 36 inch by 50 ft roll." },
      { asin: "B0GRNS3MXS", label: "1/4 inch mesh, galvanized after welding", reason: "The same mesh and roll size, galvanized after welding so the joints are coated too." },
      { asin: "B08PPZL4N7", label: "1/4 inch mesh, 23 gauge", reason: "A heavier 23 gauge 1/4 inch roll, 36 inches by 50 feet, galvanized after welding." },
      { asin: "B08GKYMXST", label: "1/8 inch mesh, 36 inch roll", reason: "For covering vents and small openings: a short 10 ft roll of 1/8 inch galvanized mesh." },
      { asin: "B0CLZC1CYQ", label: "1/8 inch mesh, 24 inch roll", reason: "A narrower 24 inch roll of 1/8 inch hot-dip galvanized mesh for vent screens." },
      { asin: "B0B8QPH3RW", label: "All-purpose silicone", reason: "For cracks too narrow to mesh over: clear all-purpose silicone in a 10 fl oz cartridge." },
      { asin: "B0000CBJ7W", label: "Window and door sealant", reason: "For gaps around doors, windows and pipes: clear silicone in a 10.1 oz cartridge." },
    ],
    excluded: [],
  },
  "social-wasps": {
    note: "Wasp sprays are for outdoor use only. The sources advise treating nests at night and standing well back.",
    picks: [
      { asin: "B000NGR9OG", label: "Jet spray, 20-foot reach", reason: "For nests under eaves: an 18 oz can whose listing states a 20-foot reach and outdoor use only." },
      { asin: "B0019BIED4", label: "Water-based jet spray, 27 ft", reason: "For higher nests near siding: a 14 oz water-based spray listed to reach 27 feet." },
      { asin: "B0050D0XZ4", label: "Jet spray twin pack", reason: "For more than one nest: two 20 oz cans listed to reach 27 feet." },
    ],
    excluded: [],
  },
  "squirrels-in-attic": {
    note: "Check any set trap at least every 24 hours; Alabama Extension says most states require it.",
    picks: [
      { asin: "B0FZL59HWQ", label: "One-way exclusion door", reason: "For getting a squirrel out before sealing up: a one-way steel door with copper mesh and ties." },
      { asin: "B008CJ0EZW", label: "1/2 inch hardware cloth", reason: "For closing the hole afterward: 19 gauge galvanized 1/2 inch mesh in a 2 by 5 ft roll." },
      { asin: "B07DT4Z9FY", label: "Live cage trap, 16 inch", reason: "A 5 by 5 by 16 inch live trap with spring-loaded doors, sized for squirrels." },
    ],
    excluded: [],
  },
  "termites": {
    note: null,
    picks: [
      { asin: "B00AA8WVLI", label: "Detection bait stakes, 15", reason: "For keeping watch around a house: 15 ground stakes of the detection-and-bait type, to be checked yearly." },
      { asin: "B00EORPBQI", label: "Replacement stakes, 8-pack", reason: "For owners already running the stake system: eight replacements for its ongoing upkeep." },
      { asin: "B01HDYAOY2", label: "Borate wood concentrate", reason: "For bare interior wood, usually at the new-construction stage: a one-gallon borate concentrate." },
      { asin: "B00B5WI5VI", label: "Spot-treatment foam, 20 oz", reason: "For one located spot: a foam applied into a crack, void or gallery." },
    ],
    excluded: [],
  },
  "ticks": {
    note: "Permethrin goes on clothing and gear, never skin, and cats are more sensitive to it than dogs or people.",
    picks: [
      { asin: "B001ANQVYU", label: "Permethrin for clothing", reason: "For hikers and gardeners: a permethrin treatment for clothing, boots and gear, not for skin." },
      { asin: "B002CMQJYU", label: "Picaridin pump spray, 20%", reason: "For skin before you head outdoors: a 20% picaridin pump spray." },
      { asin: "B0G5VN3GB3", label: "Picaridin aerosol, 20%", reason: "If you prefer an aerosol: the same 20% picaridin active in a mosquito and tick spray." },
      { asin: "B0F9VQ7J1Q", label: "Extra-fine pointed tweezers", reason: "For removing an attached tick: stainless tweezers with extra-fine points to grip close to the skin." },
      { asin: "B00BAYWOFY", label: "Fine-point tweezers", reason: "Another stainless fine-point pair, the plain tweezer type CDC describes for tick removal." },
      { asin: "B07D2GGYPF", label: "Permethrin tick tubes, 12", reason: "For yards with white-footed mice: 12 tubes of permethrin-treated cotton aimed at young ticks on mice." },
      { asin: "B082LJK8K7", label: "Granular lawn insecticide", reason: "For lawns beside woods: a 20 lb granular lawn product whose title names ticks." },
    ],
    excluded: [],
  },
};
