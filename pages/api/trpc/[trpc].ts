import { appRouter } from "@/backend/routers/_app";
import * as trpcNext from "@trpc/server/adapters/next";
import { createContext } from "@/backend/context";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      // Can add sentry
      console.error("Something went wrong", error);
    }
  },
  /**
   * Enable query batching
   */
  batching: {
    enabled: true,
  },
});
