import Head from 'next/head';

import Layout from 'components/_layout';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout title="GAUTHIER Streaming">
      <Head>
        <title>StreamCo</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
