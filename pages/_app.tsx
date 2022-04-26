import "../styles/globals.css";
import type { AppProps } from "next/app";
import Global from "../layouts/Global.layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Global>
      <Component {...pageProps} />
    </Global>
  );
}

export default MyApp;
