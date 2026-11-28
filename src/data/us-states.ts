export interface UsStateShippingData {
  code: string;
  slug: string;
  name: string;
  region: "West Coast" | "Mountain West" | "Midwest" | "South" | "Northeast" | "Non-Contiguous";
  expressDays: string;
  carrier: string;
  majorCities: string[];
  housingNote: string;
}

const RAW_STATES: Array<Omit<UsStateShippingData, "slug">> = [
  { code: "AL", name: "Alabama", region: "South", expressDays: "2–3 business days", carrier: "FedEx Home Delivery", majorCities: ["Birmingham", "Huntsville", "Montgomery"], housingNote: "Standard 16-inch wood-stud drywall bracket included for single-family homes; renter stand optional." },
  { code: "AK", name: "Alaska", region: "Non-Contiguous", expressDays: "4–5 business days", carrier: "Tracked Air Freight", majorCities: ["Anchorage", "Fairbanks", "Juneau"], housingNote: "3-Piece Folding model minimizes parcel size for fast tracked air shipping across Alaska." },
  { code: "AZ", name: "Arizona", region: "Mountain West", expressDays: "1–2 business days", carrier: "UPS Ground", majorCities: ["Phoenix", "Scottsdale", "Tucson", "Mesa"], housingNote: "Overnight/2-day ground transit directly from our Glendale, California hub." },
  { code: "AR", name: "Arkansas", region: "South", expressDays: "2–3 business days", carrier: "FedEx Home Delivery", majorCities: ["Little Rock", "Fayetteville", "Bentonville"], housingNote: "Includes 16-inch stud wall bracket and concrete anchors for home gyms and garages." },
  { code: "CA", name: "California", region: "West Coast", expressDays: "1–2 business days", carrier: "Local Express / UPS Ground", majorCities: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento"], housingNote: "Fastest delivery from our Glendale, CA warehouse. Apartment renters love the zero-drill Free-Standing Stand." },
  { code: "CO", name: "Colorado", region: "Mountain West", expressDays: "2–3 business days", carrier: "UPS Ground", majorCities: ["Denver", "Boulder", "Colorado Springs", "Fort Collins"], housingNote: "Popular with runners, skiers, and strength athletes across the Front Range — Wide 330 lb board available." },
  { code: "CT", name: "Connecticut", region: "Northeast", expressDays: "3–4 business days", carrier: "FedEx Ground", majorCities: ["Stamford", "Hartford", "New Haven"], housingNote: "Mounts cleanly on plaster-over-studs or modern 16\" drywall; 2-Piece Folding stores flat in closets." },
  { code: "DE", name: "Delaware", region: "Northeast", expressDays: "3–4 business days", carrier: "FedEx Ground", majorCities: ["Wilmington", "Dover", "Newark"], housingNote: "Tax-free state delivery with full transit insurance from California." },
  { code: "FL", name: "Florida", region: "South", expressDays: "3–4 business days", carrier: "FedEx Home Delivery", majorCities: ["Miami", "Tampa", "Orlando", "Jacksonville", "Naples"], housingNote: "Includes masonry anchors for concrete-block (CBS) Florida walls alongside standard wood-stud hardware." },
  { code: "GA", name: "Georgia", region: "South", expressDays: "3–4 business days", carrier: "FedEx Home Delivery", majorCities: ["Atlanta", "Savannah", "Augusta"], housingNote: "Insured UPS/FedEx delivery with itemized HSA/FSA receipt emailed immediately." },
  { code: "HI", name: "Hawaii", region: "Non-Contiguous", expressDays: "4–5 business days", carrier: "Air Cargo Express", majorCities: ["Honolulu", "Maui", "Kailua"], housingNote: "Compact 2-Piece and 3-Piece Folding boards make Hawaii condo storage and air transit effortless." },
  { code: "ID", name: "Idaho", region: "Mountain West", expressDays: "2–3 business days", carrier: "UPS Ground", majorCities: ["Boise", "Meridian", "Coeur d'Alene"], housingNote: "Quick West-corridor transit from California with full 16\" wood-stud kit." },
  { code: "IL", name: "Illinois", region: "Midwest", expressDays: "2–3 business days", carrier: "FedEx Home Delivery", majorCities: ["Chicago", "Naperville", "Evanston"], housingNote: "Great fit for Chicago high-rises and condos when paired with the no-drill Free-Standing Stand." },
  { code: "IN", name: "Indiana", region: "Midwest", expressDays: "2–3 business days", carrier: "FedEx Ground", majorCities: ["Indianapolis", "Fort Wayne", "Carmel"], housingNote: "Delivered in custom reinforced packaging with 60-day home trial." },
  { code: "IA", name: "Iowa", region: "Midwest", expressDays: "2–3 business days", carrier: "UPS Ground", majorCities: ["Des Moines", "Cedar Rapids", "Iowa City"], housingNote: "Full 16\" stud kit plus digital 30-day conditioning program included." },
  { code: "KS", name: "Kansas", region: "Midwest", expressDays: "2–3 business days", carrier: "UPS Ground", majorCities: ["Wichita", "Overland Park", "Kansas City"], housingNote: "Direct insured delivery with 1-year structural timber warranty." },
  { code: "KY", name: "Kentucky", region: "South", expressDays: "3–4 business days", carrier: "FedEx Ground", majorCities: ["Louisville", "Lexington", "Bowling Green"], housingNote: "Mounts in 15 minutes using any household stud finder and included lag bolts." },
  { code: "LA", name: "Louisiana", region: "South", expressDays: "2–3 business days", carrier: "FedEx Home Delivery", majorCities: ["New Orleans", "Baton Rouge", "Lafayette"], housingNote: "Multi-layer lacquered Carpathian pine resists humid Gulf Coast indoor environments." },
  { code: "ME", name: "Maine", region: "Northeast", expressDays: "3–4 business days", carrier: "FedEx Ground", majorCities: ["Portland", "Bangor", "Augusta"], housingNote: "Zero winter commute to clinics — enjoy 10 minutes of daily spine relief indoors." },
  { code: "MD", name: "Maryland", region: "Northeast", expressDays: "3–4 business days", carrier: "FedEx Ground", majorCities: ["Baltimore", "Bethesda", "Rockville", "Annapolis"], housingNote: "Popular across the DC/MD federal and remote-tech corridor with HSA/FSA itemized invoice." },
  { code: "MA", name: "Massachusetts", region: "Northeast", expressDays: "3–4 business days", carrier: "UPS Ground", majorCities: ["Boston", "Cambridge", "Worcester"], housingNote: "Ideal for Boston brownstones and apartments via 2-Piece Folding or Free-Standing Stand." },
  { code: "MI", name: "Michigan", region: "Midwest", expressDays: "2–3 business days", carrier: "FedEx Ground", majorCities: ["Detroit", "Ann Arbor", "Grand Rapids"], housingNote: "Ships insured from Glendale, CA with tracking emailed on dispatch." },
  { code: "MN", name: "Minnesota", region: "Midwest", expressDays: "2–3 business days", carrier: "UPS Ground", majorCities: ["Minneapolis", "St. Paul", "Rochester"], housingNote: "Home spine conditioning station built for year-round indoor comfort." },
  { code: "MS", name: "Mississippi", region: "South", expressDays: "2–3 business days", carrier: "FedEx Ground", majorCities: ["Jackson", "Gulfport", "Oxford"], housingNote: "Standard 16\" stud kit + free Glisson cervical traction loop included." },
  { code: "MO", name: "Missouri", region: "Midwest", expressDays: "2–3 business days", carrier: "FedEx Home Delivery", majorCities: ["Kansas City", "St. Louis", "Springfield"], housingNote: "Fast central-corridor shipping with 60-day home trial." },
  { code: "MT", name: "Montana", region: "Mountain West", expressDays: "2–3 business days", carrier: "UPS Ground", majorCities: ["Bozeman", "Billings", "Missoula"], housingNote: "Heavy-duty Wide model favored by outdoor athletes, ranchers, and lifters." },
  { code: "NE", name: "Nebraska", region: "Midwest", expressDays: "2–3 business days", carrier: "UPS Ground", majorCities: ["Omaha", "Lincoln", "Bellevue"], housingNote: "Direct insured delivery with full tracking and 1-year frame warranty." },
  { code: "NV", name: "Nevada", region: "West Coast", expressDays: "1–2 business days", carrier: "UPS Ground", majorCities: ["Las Vegas", "Reno", "Henderson"], housingNote: "Next-day/2-day transit directly from our Glendale, California fulfillment center." },
  { code: "NH", name: "New Hampshire", region: "Northeast", expressDays: "3–4 business days", carrier: "FedEx Ground", majorCities: ["Manchester", "Nashua", "Concord"], housingNote: "Tax-free state delivery with full transit protection." },
  { code: "NJ", name: "New Jersey", region: "Northeast", expressDays: "3–4 business days", carrier: "FedEx Home Delivery", majorCities: ["Jersey City", "Newark", "Hoboken", "Princeton"], housingNote: "Folds to 2.4\" flat against any wall or stands drill-free in NJ apartments." },
  { code: "NM", name: "New Mexico", region: "Mountain West", expressDays: "2–3 business days", carrier: "UPS Ground", majorCities: ["Albuquerque", "Santa Fe", "Las Cruces"], housingNote: "Fast Southwest ground delivery with masonry & wood-stud hardware included." },
  { code: "NY", name: "New York", region: "Northeast", expressDays: "3–4 business days", carrier: "FedEx Home Delivery", majorCities: ["New York City", "Brooklyn", "Buffalo", "Rochester", "Albany"], housingNote: "NYC apartment favorite: Free-Standing Stand requires zero drilling and under 3.5 sq ft." },
  { code: "NC", name: "North Carolina", region: "South", expressDays: "3–4 business days", carrier: "FedEx Home Delivery", majorCities: ["Charlotte", "Raleigh", "Durham", "Asheville"], housingNote: "Fast East Coast transit for Research Triangle desk professionals and athletes." },
  { code: "ND", name: "North Dakota", region: "Midwest", expressDays: "2–3 business days", carrier: "UPS Ground", majorCities: ["Fargo", "Bismarck", "Grand Forks"], housingNote: "Reliable tracked ground delivery directly to residential addresses." },
  { code: "OH", name: "Ohio", region: "Midwest", expressDays: "2–3 business days", carrier: "FedEx Home Delivery", majorCities: ["Columbus", "Cleveland", "Cincinnati"], housingNote: "Includes Glisson neck harness, 16\" stud kit, and itemized HSA/FSA receipt." },
  { code: "OK", name: "Oklahoma", region: "South", expressDays: "2–3 business days", carrier: "FedEx Ground", majorCities: ["Oklahoma City", "Tulsa", "Norman"], housingNote: "Insured reinforced packaging from our California warehouse." },
  { code: "OR", name: "Oregon", region: "West Coast", expressDays: "1–2 business days", carrier: "UPS Ground", majorCities: ["Portland", "Eugene", "Bend", "Salem"], housingNote: "1–2 day Pacific corridor delivery with zero state sales tax." },
  { code: "PA", name: "Pennsylvania", region: "Northeast", expressDays: "3–4 business days", carrier: "FedEx Home Delivery", majorCities: ["Philadelphia", "Pittsburgh", "Allentown"], housingNote: "Wood-stud and brick/masonry anchors included for historic PA homes." },
  { code: "RI", name: "Rhode Island", region: "Northeast", expressDays: "3–4 business days", carrier: "FedEx Ground", majorCities: ["Providence", "Warwick", "Newport"], housingNote: "Compact 2-Piece Folding and wall-fold designs fit coastal New England rooms." },
  { code: "SC", name: "South Carolina", region: "South", expressDays: "3–4 business days", carrier: "FedEx Home Delivery", majorCities: ["Charleston", "Columbia", "Greenville"], housingNote: "Sealed multi-layer natural timber finish built for coastal humidity." },
  { code: "SD", name: "South Dakota", region: "Midwest", expressDays: "2–3 business days", carrier: "UPS Ground", majorCities: ["Sioux Falls", "Rapid City", "Aberdeen"], housingNote: "Direct tracked ground shipping with 60-day home trial." },
  { code: "TN", name: "Tennessee", region: "South", expressDays: "2–3 business days", carrier: "FedEx Home Delivery", majorCities: ["Nashville", "Memphis", "Knoxville", "Chattanooga"], housingNote: "Fast 2–3 day shipping with full 16\" drywall stud bracket." },
  { code: "TX", name: "Texas", region: "South", expressDays: "2–3 business days", carrier: "FedEx Home Delivery", majorCities: ["Austin", "Dallas", "Houston", "San Antonio", "Fort Worth"], housingNote: "One of our largest US customer states — 2–3 day delivery from California for home gyms and remote offices." },
  { code: "UT", name: "Utah", region: "Mountain West", expressDays: "1–2 business days", carrier: "UPS Ground", majorCities: ["Salt Lake City", "Provo", "Park City"], housingNote: "Rapid 1–2 day Mountain West dispatch from Glendale, CA." },
  { code: "VT", name: "Vermont", region: "Northeast", expressDays: "3–4 business days", carrier: "FedEx Ground", majorCities: ["Burlington", "Montpelier", "Stowe"], housingNote: "Sustainable kiln-dried Carpathian pine and Ukrainian alder craftsmanship." },
  { code: "VA", name: "Virginia", region: "South", expressDays: "3–4 business days", carrier: "FedEx Home Delivery", majorCities: ["Arlington", "Richmond", "Virginia Beach", "Alexandria"], housingNote: "Popular with Northern Virginia professionals, military families, and veterans." },
  { code: "WA", name: "Washington", region: "West Coast", expressDays: "2–3 business days", carrier: "UPS Ground", majorCities: ["Seattle", "Bellevue", "Tacoma", "Spokane"], housingNote: "Top Pacific Northwest hub for tech workers reversing 9-hour seated posture." },
  { code: "WV", name: "West Virginia", region: "South", expressDays: "3–4 business days", carrier: "FedEx Ground", majorCities: ["Charleston", "Morgantown", "Huntington"], housingNote: "Insured doorstep delivery with 1-year structural timber warranty." },
  { code: "WI", name: "Wisconsin", region: "Midwest", expressDays: "2–3 business days", carrier: "FedEx Ground", majorCities: ["Milwaukee", "Madison", "Green Bay"], housingNote: "Full winter-ready home spine studio with Glisson Loop included free." },
  { code: "WY", name: "Wyoming", region: "Mountain West", expressDays: "2–3 business days", carrier: "UPS Ground", majorCities: ["Cheyenne", "Jackson", "Casper"], housingNote: "Fast Western dispatch with optional Heavy-Duty 330 lb Wide board." },
];

export const US_STATES: UsStateShippingData[] = RAW_STATES.map((s) => ({
  ...s,
  slug: s.name.toLowerCase().replace(/\s+/g, "-"),
}));

export function getStateBySlug(slug: string): UsStateShippingData | undefined {
  return US_STATES.find((s) => s.slug === slug);
}

export function getAllStateSlugs(): string[] {
  return US_STATES.map((s) => s.slug);
}
