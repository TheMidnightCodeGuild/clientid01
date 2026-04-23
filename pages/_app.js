import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { LanguageProvider } from "@/lib/LanguageContext";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const siteUrl = "https://www.sankalpashreewealth.in";
  const currentPath = router.asPath?.split("#")[0]?.split("?")[0] || "/";
  const canonicalUrl = `${siteUrl}${currentPath === "/" ? "" : currentPath}`;

  return (
    <LanguageProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta name="theme-color" content="#0B2C4D" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:site_name" content="Sankalpashree Wealth" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
