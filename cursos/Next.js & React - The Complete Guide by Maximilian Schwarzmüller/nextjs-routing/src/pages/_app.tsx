import Head from "next/head";

import type { AppProps } from "next/app";
import Layout from "components/layout/Layout";
import { NotificationContextProvider } from "store/NotificationContext";
import "styles/globals.scss";
import { ThemeContextProvider } from "store/ThemeContex";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <NotificationContextProvider>
        <Layout>
          <Head>
            <title>Next Events</title>
            <meta name="description" content="NextJS Events" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
