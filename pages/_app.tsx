import "../styles/globals.css";
import type { AppProps } from "next/app";
import Global from "../layouts/Global";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Global>
        <Component {...pageProps} />
      </Global>
    </ApolloProvider>
  );
}

export default MyApp;
