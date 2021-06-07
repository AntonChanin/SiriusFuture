import Head from 'next/head';
import '../styles/style.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=1024" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
