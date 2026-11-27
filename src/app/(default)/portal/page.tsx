import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { PatientPortalDashboard } from "@/components/sections/PatientPortalDashboard";

export const metadata: Metadata = buildPageMetadata({
  path: "/portal/",
  lang: "en",
  title: "Patient & Owner Portal — 30-Day Routine, Timer & HSA/FSA Kit",
  description:
    "Access the Evminov Spine Systems Patient & Owner Portal: guided decompression session timer, 30-day progress tracker, 16-inch US wood stud mounting checklist, printable HSA/FSA LMN guide, and 10-year warranty registration.",
});

export default function PatientPortalPage() {
  return <PatientPortalDashboard lang="en" />;
}
