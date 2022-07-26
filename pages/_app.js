import "../styles/styles.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Amy Thiel</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The website of Amy Thiel" />
        <link rel="home" href="https://amythiel.com" />
        <meta name="author" content="Amy Thiel" />
        <meta name="robots" content="index,follow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
