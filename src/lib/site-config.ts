import { REGION_CONFIG } from "@/lib/region-config";

export const SITE_CONFIG = {
  brandName: "Evminov Spine Systems",
  shortName: REGION_CONFIG.shortName,
  legalName: REGION_CONFIG.legalName,
  canonicalOrigin: REGION_CONFIG.origin,
  hostname: REGION_CONFIG.hostname,
  currency: REGION_CONFIG.currency,
  foundingYear: 1996,
  yearsHeritage: 30,
  phoneDisplay: "+1 (747) 306-0140",
  phoneHref: "tel:+17473060140",
  whatsappNumber: "17473060140",
  whatsappHref:
    "https://wa.me/17473060140?text=Hello%20Evminov%20Spine%20Systems!%20I%20have%20a%20question%20about%20the%20Evminov%20Board.",
  supportEmail: REGION_CONFIG.supportEmail,
  ordersEmail: REGION_CONFIG.ordersEmail,
  address: {
    street: "4525 San Fernando Rd, Unit H",
    city: "Glendale",
    state: "CA",
    postalCode: "91204",
    country: "US",
    full: "4525 San Fernando Rd, Unit H, Glendale, CA 91204, USA",
  },
  hours: "Monday – Friday, 9:00 AM – 6:00 PM PST",
  youtubeChannelUrl: "https://www.youtube.com/channel/UCwsC2K28uWYijzAKnZljzsw",
  youtubeHandle: "@evminoviusa",
  videos: {
    methodDemo: {
      id: "GDLVNWynWF0",
      title: "Evminov Method Official Spine Decompression & Exercise Demonstration",
      duration: "PT4M15S",
      thumbnail: "/images/authentic/hero-full-device-traction.jpg",
    },
    wallMounting: {
      id: "fP-biAHusGs",
      title: "Evminov Board 16-Inch US Wood Stud Wall Mounting & Setup Guide",
      duration: "PT3M40S",
      thumbnail: "/images/products/board-door-mount-setup.jpg",
    },
  },
  compliance: {
    classification: "General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030)",
    hsaFsaNote: REGION_CONFIG.hsaFsaNote,
    hsaEstimatedSavingsRate: 0.3,
    trialDays: 60,
    warrantyYears: 1,
    patentsSummary: "US Patent 6,869,387 B2 • European Patent EP 1 038 512 B1 • WIPO WO 1999/043288 • UA Patent 27976 / 28849A",
  },
  socialProfiles: [
    "https://www.youtube.com/channel/UCwsC2K28uWYijzAKnZljzsw",
    "https://evminovusa.com/",
  ],
  indexNowKey: "e7f4b29c1a8345d0b6e9c2f1a8d7304b",
} as const;
