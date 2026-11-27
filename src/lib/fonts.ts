import { Inter, Plus_Jakarta_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});
