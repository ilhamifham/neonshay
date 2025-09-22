import { Outfit, Poppins } from "next/font/google";

export const headingFont = Outfit({
  variable: "--font-heading",
  weight: ["600"],
  subsets: ["latin"],
});

export const bodyFont = Poppins({
  variable: "--font-body",
  weight: ["400", "500"],
  subsets: ["latin"],
});
