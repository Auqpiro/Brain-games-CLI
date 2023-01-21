#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const startRound = () => {
  const ranomNumber = generateRandomNumber();
  const correctAnswer = isEven(ranomNumber);
  const userAnswer = readlineSync.question(`Question: ${ranomNumber}\nYour answer: `);
  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

startGame();
