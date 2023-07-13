import "../styles/globals.css";
import type { AppProps } from "next/app";
import Global from "../layouts/Global";

import CommandBar from "../components/kbar";

import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Global>
      <CommandBar>
        <Component {...pageProps} />
      </CommandBar>
      <Analytics />
    </Global>
  );
}

export default MyApp;
