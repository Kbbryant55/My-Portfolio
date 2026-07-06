import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen bg-mosaic bg-cover bg-fixed bg-center">
      {/* Scrim improves text contrast over mosaic texture */}
      <div className="absolute inset-0 bg-scrim pointer-events-none" aria-hidden />
      <div className="relative z-10">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
  );
}
