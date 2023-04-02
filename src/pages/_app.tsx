import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { AppContainer } from "@/components/AppContainer";
import { HeaderSimple } from "@/components/Layout/AppHeader";

const links = [
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/pricing",
    label: "Pricing",
  },
  {
    link: "/learn",
    label: "Learn",
  },
  {
    link: "/contactus",
    label: "Contact",
  },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <AppContainer>
          <HeaderSimple links={links} />
          <Component {...pageProps} />
        </AppContainer>
      </MantineProvider>
    </>
  );
}
