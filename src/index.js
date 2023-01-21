#!import readlineSync from 'readline-sync';

const generateRandomNumber = (range) => Math.round(Math.random() * range);

const checkRound = (current, correct) => {
  if (current === correct) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${current}' is wrong answer ;(. Correct answer was '${correct}'.`);
  return false;
};

export { generateRandomNumber, checkRound };
