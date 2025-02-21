import { prisma } from "../seedPrisma";

export const createLanguages = async () => {
  await prisma.language.createMany({
    data: [{ name: "English" }, { name: "Korean" }],
  });
};
