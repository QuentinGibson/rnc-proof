import { prisma } from "../seedPrisma";

export const createRoles = async () => {
  await prisma.leagueOfLegendsChampionRole.createMany({
    data: [
      {
        name: "Top",
      },
      {
        name: "Jungle",
      },
      {
        name: "Middle",
      },
      {
        name: "Carry",
      },
      {
        name: "Support",
      },
    ],
  });
};

export const topRoleId = await prisma.leagueOfLegendsChampionRole
  .findFirstOrThrow({
    where: {
      name: "Top",
    },
  })
  .then((role) => role.id);

export const jungleRoleId = await prisma.leagueOfLegendsChampionRole
  .findFirstOrThrow({
    where: {
      name: "Jungle",
    },
  })
  .then((role) => role.id);

export const middleRoleId = await prisma.leagueOfLegendsChampionRole
  .findFirstOrThrow({
    where: {
      name: "Middle",
    },
  })
  .then((role) => role.id);

export const carryRoleId = await prisma.leagueOfLegendsChampionRole
  .findFirstOrThrow({
    where: {
      name: "Carry",
    },
  })
  .then((role) => role.id);

export const supportRoleId = await prisma.leagueOfLegendsChampionRole
  .findFirstOrThrow({
    where: {
      name: "Support",
    },
  })
  .then((role) => role.id);
