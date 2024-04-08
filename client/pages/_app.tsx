import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

import { DesignSystemProvider } from "../site/design-system/providers/DesignSystemProvider";

import Fonts from "../site/components/base/Fonts";
import "../site/style/global.css";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pathname: string) => ReactNode;
};

type MyAppProps = {
  Component: NextPageWithLayout;
} & AppProps;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      // five seconds to allow quick navigation around the app without refetch
      staleTime: 5 * 1000,
    },
  },
});

if (!process.env.NEXT_PUBLIC_EL_ZOOT_GAME_SOCKET_URL) {
  throw new Error("Env variable NEXT_PUBLIC_EL_ZOOT_GAME_SOCKET_URL missing");
}

function MyApp(props: MyAppProps) {
  const { Component, pageProps, router } = props;
  const { pathname } = router;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <DesignSystemProvider tokenSet="enigma">
      <Head>
        <title>Zoot Game Template</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-238012206-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-todo-1');
        `}
      </Script>
      <Fonts />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            {getLayout(<Component {...pageProps} />, pathname)}
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </DesignSystemProvider>
  );
}

export default MyApp;
