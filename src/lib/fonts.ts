import { Oswald, Open_Sans } from "@next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
