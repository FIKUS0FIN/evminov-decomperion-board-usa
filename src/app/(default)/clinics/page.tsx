import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { CLINICS_B2B_COPY } from "@/i18n/locales/clinics";
import { ClinicsB2bPage } from "@/components/pages/ClinicsB2bPage";

export const metadata: Metadata = buildPageMetadata({
  path: "/clinics/",
  lang: "en",
  title: CLINICS_B2B_COPY.en.metaTitle,
  description: CLINICS_B2B_COPY.en.metaDescription,
  image: "/images/authentic/clinic-rehab-center-1.jpg",
});

export default function ClinicsPage() {
  return <ClinicsB2bPage lang="en" />;
}
