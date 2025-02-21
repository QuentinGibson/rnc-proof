import { prisma } from "../seedPrisma";

export const createCardTypes = async () => {
  await prisma.cardType.createMany({
    data: [{ type: "MultipleChoice" }, { type: "ShortAnswer" }],
  });
};

export const multipleChoiceId = await prisma.cardType.findFirstOrThrow({
  where: {
    type: "MultipleChoice"
  }
})
  .then(type => type.id)
