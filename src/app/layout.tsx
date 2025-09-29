import type { Metadata } from "next";
import "@/assets/globals.css";
import { headingFont, bodyFont } from "@/assets/fonts";

export const metadata: Metadata = {
  title: {
    default: "Neonshay",
    template: "%s | Neonshay",
  },
  description: "A Sri Lankan brand that specializes in handcrafted crochet and fabric creations, including handmade bags, accessories, and home decor items, with an emphasis on elegance and unique design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
