import '../styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>StreamCo</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
