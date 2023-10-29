import { Raleway, Open_Sans as OpenSans, } from "next/font/google";

export const kanit = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-Raleway",
  display: "swap",
  adjustFontFallback: false,
});
export const sans = OpenSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
