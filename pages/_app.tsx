import "../styles/globals.css";
import type { AppProps } from "next/app";
import Global from "../layouts/Global";

import CommandBar from "../components/kbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Global>
        <CommandBar>
          <Component {...pageProps} />
        </CommandBar>
      </Global>
  );
}

export default MyApp;
