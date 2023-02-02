import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={"bg-mosaic bg-repeat-y bg-cover h-full w-full"}>
      <Layout />
      <Component {...pageProps} />
    </div>
  );
}
