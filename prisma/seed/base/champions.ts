import {prisma} from "../seedPrisma"
import { topRoleId, middleRoleId, jungleRoleId, carryRoleId, supportRoleId } from "./roles";

export const createChampions = async () => {

  await prisma.leagueOfLegendsChampion.createMany({
    data: [
      {
        name: "Aatrox",
        roleId: topRoleId,
        title: "The Darkin Blade",
      },
      {
        name: "Ahri",
        roleId: middleRoleId,
        title: "The Nine-Tailed Fox",
      },
      {
        name: "Akali",
        roleId: middleRoleId,
        title: "The Rogue Assassin",
      },
      {
        name: "Alistar",
        roleId: supportRoleId,
        title: "The Minotaur",
      },
      {
        name: "Amumu",
        roleId: jungleRoleId,
        title: "The Sad Mummy",
      },
      {
        name: "Anivia",
        roleId: middleRoleId,
        title: "The Cryophoenix",
      },
      {
        name: "Annie",
        roleId: middleRoleId,
        title: "The Dark Child",
      },
      {
        name: "Aphelios",
        roleId: carryRoleId,
        title: "The Weapon of the Faithful",
      },
      {
        name: "Ashe",
        roleId: carryRoleId,
        title: "The Frost Archer",
      },
      {
        name: "Aurelion Sol",
        roleId: middleRoleId,
        title: "The Star Forger",
      },
      {
        name: "Azir",
        roleId: middleRoleId,
        title: "The Emperor of the Sands",
      },
      {
        name: "Bard",
        roleId: supportRoleId,
        title: "The Wandering Caretaker",
      },
      {
        name: "Blitzcrank",
        roleId: supportRoleId,
        title: "The Great Steam Golem",
      },
      {
        name: "Brand",
        roleId: supportRoleId,
        title: "The Burning Vengeance",
      },
      {
        name: "Braum",
        roleId: supportRoleId,
        title: "The Heart of the Freljord",
      },
      {
        name: "Caitlyn",
        roleId: carryRoleId,
        title: "The Sheriff of Piltover",
      },
      {
        name: "Camille",
        roleId: topRoleId,
        title: "The Steel Shadow",
      },
    ],
  });

}