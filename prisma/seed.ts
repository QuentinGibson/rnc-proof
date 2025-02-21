import { parseArgs } from 'node:util'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const {
    values: { environment },
  } = parseArgs({
    options: {
      environment: { type: "string" },
    },
  });

  await prisma.theme.createMany({
    data: [
        {
            name: "light"
        },
        {
            name: "dark"
        }
    ]
  })

  await prisma.language.createMany({
    data: [
        {
            name: "English"
        },
        {
            name: "Korean"
        }
    ]
  })

  await prisma.cardType.createMany({
    data: [
        {
            type: "MultipleChoice"
        },
        {
            type: "ShortAnswer"
        }
    ]
  })

  const multipleChoiceId = await prisma.cardType.findUniqueOrThrow({
    where: {
        type: "MultipleChoice"
    }
  })
    .then((cardType) => cardType.id)

  const ShortAnswerId = await prisma.cardType.findUniqueOrThrow({
    where: {
        type: "ShortAnswer"
    }
  })
    .then((cardType) => cardType.id)

  await prisma.leagueOfLegendsChampionRole.createMany({
    data: [
        {
            name: "Top"
        },
        {
            name: "Jungle"
        },
        {
            name: "Middle"
        },
        {
            name: "Carry"
        },
        {
            name: "Support"
        },
    ]
  })

  const topRoleId = await prisma.leagueOfLegendsChampionRole.findUniqueOrThrow({
    where: {
        name: "Top"
    }
  })
    .then((role) => role.id)

  const jungleRoleId = await prisma.leagueOfLegendsChampionRole.findUniqueOrThrow({
    where: {
        name: "Jungle"
    }
  })
    .then((role) => role.id)

  const middleRoleId = await prisma.leagueOfLegendsChampionRole.findUniqueOrThrow({
    where: {
        name: "Middle"
    }
  })
    .then((role) => role.id)

  const CarryRoleId = await prisma.leagueOfLegendsChampionRole.findUniqueOrThrow({
    where: {
        name: "Carry"
    }
  })
    .then((role) => role.id)

  const SupportRoleId = await prisma.leagueOfLegendsChampionRole.findUniqueOrThrow({
    where: {
        name: "Support"
    }
  })
    .then((role) => role.id)

  await prisma.leagueOfLegendsChampion.createMany({
    data: [
      {
        name: "Aatrox",
        roleId: topRoleId,
        title: "The Darkin Blade"
      },
      {
        name: "Ahri",
        roleId: middleRoleId,
        title: "The Nine-Tailed Fox"
      },
      {
        name: "Akali",
        roleId: middleRoleId,
        title: "The Rogue Assassin"
      },
      {
        name: "Alistar",
        roleId: SupportRoleId,
        title: "The Minotaur"
      },
      {
        name: "Amumu",
        roleId: jungleRoleId,
        title: "The Sad Mummy"
      },
      {
        name: "Anivia",
        roleId: middleRoleId,
        title: "The Cryophoenix"
      },
      {
        name: "Annie",
        roleId: middleRoleId,
        title: "The Dark Child"
      },
      {
        name: "Aphelios",
        roleId: CarryRoleId,
        title: "The Weapon of the Faithful"
      },
      {
        name: "Ashe",
        roleId: CarryRoleId,
        title: "The Frost Archer"
      },
      {
        name: "Aurelion Sol",
        roleId: middleRoleId,
        title: "The Star Forger"
      },
      {
        name: "Azir",
        roleId: middleRoleId,
        title: "The Emperor of the Sands"
      },
      {
        name: "Bard",
        roleId: SupportRoleId,
        title: "The Wandering Caretaker"
      },
      {
        name: "Blitzcrank",
        roleId: SupportRoleId,
        title: "The Great Steam Golem"
      },
      {
        name: "Brand",
        roleId: SupportRoleId,
        title: "The Burning Vengeance"
      },
      {
        name: "Braum",
        roleId: SupportRoleId,
        title: "The Heart of the Freljord"
      },
      {
        name: "Caitlyn",
        roleId: CarryRoleId,
        title: "The Sheriff of Piltover"
      },
      {
        name: "Camille",
        roleId: topRoleId,
        title: "The Steel Shadow"
      }
    ]
  })

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

  switch (environment) {
    case 'development':
      break
    case 'test':
      break
    default:
      break
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })