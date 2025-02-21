import { prisma } from "../seedPrisma"
import { multipleChoiceId } from "../base/cardTypes"

export const createAatrox = async () => {

  const aatroxId = await prisma.leagueOfLegendsChampion.findUniqueOrThrow({
    where: {
      name: "Aatrox"
    }
  }).then((champion) => champion.id)

  await prisma.deck.createMany({
    data: [
      {
        name: "Deathbringer Stance",
        subject: aatroxId,
        released: true,
        description: "Damage, Cooldowns, and important information about Deathbringer Stance",
      },
      {
        name: "The Darkin Blade",
        subject: aatroxId,
        description: "Damage, Cooldowns, and important information about The Darkin Blade",
      },
      {
        name: "Infernal Chains",
        subject: aatroxId,
        description: "Damage, Cooldowns, and important information about Infernal Chains",
      },
      {
        name: "Umbral Dash",
        subject: aatroxId,
        description: "Damage, Cooldowns, and important information about Umbral Dash",
      },
      {
        name: "World Ender",
        subject: aatroxId,
        description: "Damage, Cooldowns, and important information about World Ender",
      }
    ]
  })

  const deathbringerDeckId = await prisma.deck.findFirstOrThrow({
    where: {
      name: "Deathbringer Stance"
    }
  }).then((deck) => deck.id)

  await prisma.card.createMany({
    data: [
      {
        question: "What is the cooldown range of Deathbringer Stance?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "What is the bonus attack range of Deathbringer Stance?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "Deathbringer Stance is bonus magic damage. True or False?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "What is the bonus health damage of Deathbringer Stance?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "What is the scaling of the bonus health damage of Deathbringer Stance?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "How much of the post-mitigation damage of Deathbringer Stance is converted into a heal?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "How much less does Deathbringer Stance heal for against minions?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "When Aatrox lands an attack or an ability on a Champion or a large monster (not a Sweetspot), how much is the cooldown of Deathbringer Stance reduced by?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "When Aatrox lands an Sweetspot attack or ability on a Champion or a large monster, how much is the cooldown of Deathbringer Stance reduced by?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "What is the cooldown of Deathbringer Stance at level 1?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "What rate does Deathbringer Stance's cooldown decrease by per level?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "What is the cooldown of Deathbringer Stance at level 5?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "What is the cooldown of Deathbringer Stance at level 11?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      },
      {
        question: "What is the cooldown of Deathbringer Stance at level 16?",
        typeId: multipleChoiceId,
        deckId: deathbringerDeckId,
      }
    ]
  })

  const cooldownRangeDeathBringerCardId = await prisma.card.findFirstOrThrow({
    where: {
      question: "What is the cooldown range of Deathbringer Stance?",
    }
  })
    .then(question => question.id)

  const paragraphType = await prisma.cardChoiceType.create({
    data: {
      name: "paragraph",
    }
  })

  await prisma.cardChoice.create({
    data: {
      content: "22-10",
      isCorrect: true,
      typeId: paragraphType.id,
      cardId: cooldownRangeDeathBringerCardId
    }
  })

  await prisma.cardChoice.create({
    data: {
      content: "20-10",
      isCorrect: false,
      typeId: paragraphType.id,
      cardId: cooldownRangeDeathBringerCardId
    }
  })

  await prisma.cardChoice.create({
    data: {
      content: "18-10",
      isCorrect: false,
      typeId: paragraphType.id,
      cardId: cooldownRangeDeathBringerCardId
    }
  })

  await prisma.cardChoice.create({
    data: {
      content: "22-16",
      isCorrect: false,
      typeId: paragraphType.id,
      cardId: cooldownRangeDeathBringerCardId
    }
  })

  await prisma.cardChoice.create({
    data: {
      content: "24-14",
      isCorrect: false,
      typeId: paragraphType.id,
      cardId: cooldownRangeDeathBringerCardId
    }
  })

  await prisma.cardChoice.create({
    data: {
      content: "30-20",
      isCorrect: false,
      typeId: paragraphType.id,
      cardId: cooldownRangeDeathBringerCardId
    }
  })

  await prisma.cardChoice.create({
    data: {
      content: "30-10",
      isCorrect: false,
      typeId: paragraphType.id,
      cardId: cooldownRangeDeathBringerCardId
    }
  })

  await prisma.cardChoice.create({
    data: {
      content: "30-22",
      isCorrect: false,
      typeId: paragraphType.id,
      cardId: cooldownRangeDeathBringerCardId
    }
  })

  await prisma.cardChoice.create({
    data: {
      content: "16-4",
      isCorrect: false,
      typeId: paragraphType.id,
      cardId: cooldownRangeDeathBringerCardId
    }
  })
}