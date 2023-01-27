#!/usr/bin/env node
import readlineSync from 'readline-sync';

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

export default startGame;
