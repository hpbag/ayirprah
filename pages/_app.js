import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import '../css/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png"/>
        <link rel="manifest" href="../public/site.webmanifest"/>
        <link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#ffc40d"/>
        <meta name="theme-color" content="#ffffff"/>

        <title>Harpriya writes essays</title>
        <meta
          name="Description"
          content="Harpriya prublishes her bi-weekly essays here."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
