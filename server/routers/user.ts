import { z } from "zod";
import { procedure, router } from "../trpc";

export const userRouter = router({
  addUser: procedure
    .input(z.object({ name: z.string(), age: z.number() }))
    .mutation((opts) => {
      const { input } = opts;
      // TODO Call prisma add user method
    }),
  getUsers: procedure.query(() => {
    return [
      { name: "Lucas", age: 24 },
      { name: "mateus", age: 23 },
    ];
  }),
});
