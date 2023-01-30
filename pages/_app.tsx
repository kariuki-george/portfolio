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
          domainId: "f7cb3d78-c173-4c08-a4b8-9a9fbc418d65",
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
