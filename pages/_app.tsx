import "../styles/globals.css";
import type { AppProps } from "next/app";
import Global from "../layouts/Global";

import CommandBar from "../components/kbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useAckee from "use-ackee";

function MyApp({ Component, pageProps }: AppProps) {
  // tracking

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      useAckee(
        url,
        {
          server: "https://ackee.p.kariukigeorge.me",
          domainId: "bba72abc-f3b0-482d-b4ac-5efb2e60f17d",
        },
        {
          detailed: false,
          ignoreLocalhost: true,
          ignoreOwnVisits: true,
        }
      );
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Global>
      <CommandBar>
        <Component {...pageProps} />
      </CommandBar>
    </Global>
  );
}

export default MyApp;
