import { feed } from "./routes/feed";
import { post } from "./routes/post";
import { searchRouter } from "./routes/search";
import { user } from "./routes/user";
import { router, t } from "./trpc";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export const appRouter = router({
  user,
  post,
  feed,
  search: searchRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = t.createCallerFactory(appRouter);
export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
export { createContext } from "./trpc";
