import { prisma } from "../seedPrisma";

export const createThemes = async () => {
  await prisma.theme.createMany({
    data: [{ name: "light" }, { name: "dark" }],
  });
};
