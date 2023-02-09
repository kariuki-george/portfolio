import { z } from "zod";

import { publicProcedure, router } from "@/backend/trpc";

export const notesRouter = router({
  get: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.notes.findMany();
  }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        parentId: z.string().optional(),
        notesGroupId: z.number().int(),
        orderNo: z.number().int(),
        content: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.notes.create({ data: input });
    }),
});

export type NotesRouter = typeof notesRouter;
