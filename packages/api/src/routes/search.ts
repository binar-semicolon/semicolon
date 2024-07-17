// root/packages/api/src/routes/search.ts
import { publicProcedure, router } from "../trpc";
import { db } from "@semicolon/db";
import { z } from "zod";

const searchSchema = z.object({
  query: z.string(),
  activeTab: z.enum(["top", "latest", "people"]),
});

export const searchRouter = router({
  searchPosts: publicProcedure.input(searchSchema).query(async ({ input }) => {
    const { query, activeTab } = input;

    let postResults = [];
    let userResults = [];

    if (activeTab === "people") {
      userResults = await db.user.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { username: { contains: query, mode: "insensitive" } },
            { bio: { contains: query, mode: "insensitive" } },
          ],
        },
      });
    } else {
      postResults = await db.post.findMany({
        where: {
          content: { contains: query, mode: "insensitive" },
        },
        orderBy:
          activeTab === "top" ? { views: "desc" } : { createdAt: "desc" },
      });
    }

    return { postResults, userResults };
  }),
});
