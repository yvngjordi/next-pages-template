import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SparkProvider } from '../components/SparkProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SparkProvider>
      <Head>
        <title>UISpark Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </SparkProvider>
  );
}
