import { z } from "zod";
import { procedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userRouter = router({
  addUser: procedure
    .input(z.object({ name: z.string(), race: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;

      await prisma.user.create({
        data: {
          name: input.name,
          race: input.race,
        },
      });
    }),
  getUsers: procedure.query(async () => {
    return await prisma.user.findMany();
  }),
});
