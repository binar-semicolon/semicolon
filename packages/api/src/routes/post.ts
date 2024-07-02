import { PrismaClient } from "@prisma/client";
import { router, publicProcedure, userProcedure } from "@semicolon/api/trpc";
import { PostSchema } from "@semicolon/db";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const prisma = new PrismaClient();

export const post = router({
  id: publicProcedure
    .meta({ openapi: { method: "GET", path: "/posts/id/{id}" } })
    .input(z.object({ id: z.string().uuid() }))
    .output(PostSchema.omit({ createdAt: true }))
    .query(async ({ input: { id } }) => {
      const post = await prisma.post.findUnique({
        where: { id },
      });

      if (!post) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "The requested post does not exist",
        });
      }
      return post;
    }),

  create: userProcedure
    .meta({ openapi: { method: "POST", path: "/posts/" } })
    .input(z.object({ userId: z.string(), content: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.post.create({
        data: input,
      });
    }),

  update: userProcedure
    .meta({ openapi: { method: "PUT", path: "/posts/id/{id}" } })
    .input(
      z.object({
        id: z.string(),
        content: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      await prisma.post.update({
        where: { id: input.id },
        data: input,
      });
    }),

  delete: userProcedure
    .meta({ openapi: { method: "DELETE", path: "/posts/id/{id}" } })
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      await prisma.post.delete({
        where: { id: input.id },
      });
    }),
});
