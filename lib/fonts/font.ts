import { Raleway, Kanit, Anonymous_Pro } from "next/font/google";

export const rale = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-Raleway",
});
export const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-Kanit",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const anonymous = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-Anonymous_Pro",
});
