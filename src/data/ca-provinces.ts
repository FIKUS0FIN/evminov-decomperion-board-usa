import type { UsStateShippingData } from "@/data/us-states";

export type CaProvinceShippingData = Omit<UsStateShippingData, "region"> & {
  region:
    | "Central Canada"
    | "Western Canada"
    | "Prairies"
    | "Atlantic Canada"
    | "Northern Territories";
};

const RAW_PROVINCES: Array<Omit<CaProvinceShippingData, "slug">> = [
  {
    code: "ON",
    name: "Ontario",
    region: "Central Canada",
    expressDays: "~2 weeks direct (faster express in New Year)",
    carrier: "UPS Canada / Canada Post Tracked",
    majorCities: ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London"],
    housingNote:
      "2-Piece Folding Board includes the dedicated Support Stand — ideal for Toronto condos and Ontario homes with zero wall drilling required.",
  },
  {
    code: "QC",
    name: "Quebec",
    region: "Central Canada",
    expressDays: "~2 weeks direct (faster express in New Year)",
    carrier: "UPS Canada / Purolator / Canada Post",
    majorCities: ["Montréal", "Québec City", "Laval", "Gatineau", "Sherbrooke"],
    housingNote:
      "Full bilingual (English & Français) onboarding guides included. Fits Montréal apartments and duplexes neatly when folded.",
  },
  {
    code: "BC",
    name: "British Columbia",
    region: "Western Canada",
    expressDays: "~2 weeks direct (faster express in New Year)",
    carrier: "UPS Canada / Purolator Ground",
    majorCities: ["Vancouver", "Victoria", "Surrey", "Kelowna", "Burnaby"],
    housingNote:
      "Popular across Vancouver, Whistler, and Victoria with runners, skiers, and remote tech professionals — Wide Heavy-Duty (330 lbs) available.",
  },
  {
    code: "AB",
    name: "Alberta",
    region: "Western Canada",
    expressDays: "~2 weeks direct (faster express in New Year)",
    carrier: "UPS Canada / Purolator",
    majorCities: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Banff"],
    housingNote:
      "Insured doorstep delivery across Calgary and Edmonton with itemized receipt for Extended Health Benefits / HSA claims.",
  },
  {
    code: "MB",
    name: "Manitoba",
    region: "Prairies",
    expressDays: "~2 weeks direct (faster express in New Year)",
    carrier: "UPS Canada / Canada Post",
    majorCities: ["Winnipeg", "Brandon", "Steinbach"],
    housingNote:
      "Skip winter commutes to physio clinics — enjoy 10–15 minutes of daily head-up decompression indoors year-round.",
  },
  {
    code: "SK",
    name: "Saskatchewan",
    region: "Prairies",
    expressDays: "~2 weeks direct (faster express in New Year)",
    carrier: "UPS Canada / Canada Post",
    majorCities: ["Saskatoon", "Regina", "Prince Albert"],
    housingNote:
      "Ships in reinforced protective packaging with free Glisson Cervical Loop and 1-year structural frame warranty.",
  },
  {
    code: "NS",
    name: "Nova Scotia",
    region: "Atlantic Canada",
    expressDays: "~2 weeks direct (faster express in New Year)",
    carrier: "UPS Canada / Canada Post",
    majorCities: ["Halifax", "Dartmouth", "Sydney"],
    housingNote:
      "Sealed water-based finish resists coastal humidity; available in Natural Warm Amber Alder or Dark Walnut Pine.",
  },
  {
    code: "NB",
    name: "New Brunswick",
    region: "Atlantic Canada",
    expressDays: "~2 weeks direct (faster express in New Year)",
    carrier: "UPS Canada / Canada Post",
    majorCities: ["Moncton", "Saint John", "Fredericton"],
    housingNote:
      "Bilingual EN/FR setup guides and 60-day home trial included with every folding Evminov Board.",
  },
  {
    code: "NL",
    name: "Newfoundland and Labrador",
    region: "Atlantic Canada",
    expressDays: "~2 weeks direct (faster express in New Year)",
    carrier: "Canada Post Expedited / UPS Canada",
    majorCities: ["St. John's", "Corner Brook", "Mount Pearl"],
    housingNote:
      "Compact 2-Piece and 3-Piece folding formats simplify parcel delivery and indoor home storage.",
  },
  {
    code: "PE",
    name: "Prince Edward Island",
    region: "Atlantic Canada",
    expressDays: "~2 weeks direct (faster express in New Year)",
    carrier: "Canada Post Expedited / UPS Canada",
    majorCities: ["Charlottetown", "Summerside"],
    housingNote:
      "Direct tracked residential delivery with full transit insurance and 1-year timber frame warranty.",
  },
  {
    code: "YT",
    name: "Yukon",
    region: "Northern Territories",
    expressDays: "~2–3 weeks tracked air/ground",
    carrier: "Canada Post Expedited Air",
    majorCities: ["Whitehorse", "Dawson City"],
    housingNote:
      "3-Piece Travel Folding Board minimizes parcel length for smooth tracked northern delivery.",
  },
  {
    code: "NT",
    name: "Northwest Territories",
    region: "Northern Territories",
    expressDays: "~2–3 weeks tracked air/ground",
    carrier: "Canada Post Expedited Air",
    majorCities: ["Yellowknife", "Hay River", "Inuvik"],
    housingNote:
      "Ultra-compact 3-Piece Folding model arrives ready to assemble in under 60 seconds.",
  },
  {
    code: "NU",
    name: "Nunavut",
    region: "Northern Territories",
    expressDays: "~2–3 weeks tracked air parcel",
    carrier: "Canada Post Air Parcel",
    majorCities: ["Iqaluit", "Rankin Inlet"],
    housingNote:
      "Reinforced compact parcel packaging with full tracking and 60-day home trial.",
  },
];

export const CA_PROVINCES: CaProvinceShippingData[] = RAW_PROVINCES.map((p) => ({
  ...p,
  slug: p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
}));

export function getCaProvinceBySlug(
  slug: string
): CaProvinceShippingData | undefined {
  return CA_PROVINCES.find((p) => p.slug === slug);
}
