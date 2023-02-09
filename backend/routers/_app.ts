import { publicProcedure, router } from "../trpc";
import { notesRouter } from "./notes";

export const appRouter = router({
  healthCheck: publicProcedure.query(() => "yay"),
  notes: notesRouter,
});

export type AppRouter = typeof appRouter;
