import Head from "next/head";
import { SmoothScrollProvider } from "../src/utils/SmoothScroll";
import Layout, { siteTitle } from "../src/components/Layout";
import Hero from "../src/components/Hero";
import One from "../src/components/One";
import Partnership from "../src/components/Partnerships";
import Two from "../src/components/Two";
import Three from "../src/components/Three";
import Price from "../src/components/Price";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Layout>
        <Head>
          <title>{siteTitle}</title>

          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="description"
            content="The most trustworthy travel agency"
          />
        </Head>
        <Hero />
        <Partnership />
        <One />
        <Two />
        <Three />
        <Price />
        <Footer />
      </Layout>
    </SmoothScrollProvider>
  );
}
