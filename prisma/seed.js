const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.triviaQuestion.createMany({
    data: [
      { question: 'What is the capital of France?', answer: 'Paris', category: 'Geography', difficulty: 'Easy' },
      { question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci', category: 'Art', difficulty: 'Medium' },
      { question: 'What is the square root of 64?', answer: '8', category: 'Math', difficulty: 'Easy' },
      { question: 'What is the chemical symbol for gold?', answer: 'Au', category: 'Science', difficulty: 'Hard' },
    ],
  });
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
