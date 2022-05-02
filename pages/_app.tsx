import "../styles/globals.css";
import type { AppProps } from "next/app";
import Global from "../layouts/Global";
import {NextPage} from "next"
import {ReactElement, ReactNode} from "react"



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Global>
      <Component {...pageProps} />
    </Global>
  );
}

export default MyApp;
