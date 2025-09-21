import { Montserrat, Open_Sans } from "next/font/google";

export const headingFont = Montserrat({
  variable: "--font-montserrat",
  weight: ["700"],
  subsets: ["latin"],
});

export const bodyFont = Open_Sans({
  variable: "--font-openSans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});
