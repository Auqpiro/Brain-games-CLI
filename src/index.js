import readlineSync from 'readline-sync';

const generateRandomNumber = (startRange, endRange) => {
  const min = Math.ceil(startRange);
  const max = Math.floor(endRange);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const boolienToResponse = (Response) => ((Response) ? 'yes' : 'no');

function checkRound(current, correct) {
  if (current === correct) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${current}' is wrong answer ;(. Correct answer was '${correct}'.`);
  return false;
}

function startGame(rules, getRound) {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n${rules}`);
  for (let i = 0; i < 3; i += 1) {
    const [getQuestion, correctAnswer] = getRound();
    const userAnswer = readlineSync.question(`Question: ${getQuestion}\nYour answer: `);
    const isCorrect = checkRound(userAnswer, correctAnswer.toString());
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export { generateRandomNumber, boolienToResponse, startGame };
