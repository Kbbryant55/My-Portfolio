import { Html, Head, Main, NextScript } from "next/document";
import { oswald, openSans } from "@/lib/fonts";

export default function Document() {
  return (
    <Html lang="en" className={`${openSans.variable} ${oswald.variable}`}>
      <Head />
      <body className={openSans.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
