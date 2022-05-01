import "../styles/globals.css";
import type { AppProps } from "next/app";
import Global from "../layouts/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Global>
      <Component {...pageProps} />
    </Global>
  );
}

export default MyApp;
