import type { NextPage } from "next";
import type { AppType, AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { trpc } from "@/utils/trpc";
import Providers from "@/utils/providers";
import "@/styles/global.css";
import DefaultLayout from "@/ui/layouts/Default";

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(<Component {...pageProps} />);
  // return (
  //   <Providers>
  //     <Component {...pageProps} />
  //   </Providers>
  // );
}) as AppType;

export default trpc.withTRPC(MyApp);
