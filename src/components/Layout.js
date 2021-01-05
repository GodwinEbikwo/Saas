import styles from "./layout.module.scss";
import Head from "next/head";
import Navbar from "./Navbar";
import Banner from "./Banner";

export const siteTitle = "Logoipsum";
export const url = "https://logoipsum.vercel.app/";
export const description = "SaaS landing page";
// const previewImage = "Plannify.png";

export default function Layout({ children, description }) {
  return (
    <div className={styles.lc}>
      <Head>
        {/* <link rel="manifest" href="/site.webmanifest" />
        <link rel="manifest" href="/site.webmanifest" /> */}
        <meta property="og:locale" content="en_GB" />
        {/* <meta property="og:image" content={previewImage} key="ogimage" /> */}
        {/* <meta property="og:url" content={url} key="ogurl" />
        <meta name="description" content={description} />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" /> */}
        <title>{siteTitle}</title>
      </Head>
      {/* <Banner /> */}
      <Navbar />
      <div className={styles.main}>{children}</div>
    </div>
  );
}
