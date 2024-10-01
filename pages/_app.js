import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
export default function App({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        {/* Flaticon */}
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
        {/* Bootstrap */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* Magnific Popup */}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        {/* Nice Select */}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        {/* Animate */}
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        {/* Slick */}
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        {/* Main Style */}
        <link rel="stylesheet" href="assets/css/style.css" />

        <meta charSet="utf-8" />
        <meta name="description" content />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>
          Home Maintenance Services Company in Dubai,UAE - ARAB GATE Technical
          Services
        </title>
        <link
          rel="shortcut icon"
          href="assets/images/arab/brand.png"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5945029455161255"
          crossorigin="anonymous"
        ></script>
        <ins
          class="adsbygoogle"
          style="display:block"
          data-ad-format="autorelaxed"
          data-ad-client="ca-pub-5945029455161255"
          data-ad-slot="5378952863"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </Head>
      {!loaded && <PreLoader />}
      {loaded && <Component {...pageProps} />}
    </Fragment>
  );
}
