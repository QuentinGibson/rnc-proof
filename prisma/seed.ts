import { parseArgs } from "node:util";
import { prisma } from "./seed/seedPrisma";
import { createAatrox } from "./seed/Aatrox";
import { createThemes } from "./seed/base/themes";
import { createLanguages } from "./seed/base/languages";
import { createCardTypes } from "./seed/base/cardTypes";
import { createRoles } from "./seed/base/roles";

async function main() {
  const {
    values: { environment },
  } = parseArgs({ options: { environment: { type: "string" } } });

  async function generateBaseData() {
    await createThemes();
    await createLanguages();
    await createCardTypes();
    await createRoles();
  }

  await generateBaseData();
  
  // Aatrox is being added to create UI/UX for quiz
  await createAatrox();

  if (environment !== "production") {
      // TODO: Create users with feedback, main champions and roles, user settings

  }

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
