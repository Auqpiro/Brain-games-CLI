#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateRandomNumber, checkRound } from '../src/index.js';

function calculateAnswer(firstOperand, secondOperand, operator) {
  let resultCalculate = 0;
  switch (operator) {
    case '+':
      resultCalculate = firstOperand + secondOperand;
      break;
    case '-':
      resultCalculate = firstOperand - secondOperand;
      break;
    case '*':
      resultCalculate = firstOperand * secondOperand;
      break;
    default:
  }
  return resultCalculate;
}

function getRound() {
  const operand1 = generateRandomNumber(100);
  const operand2 = generateRandomNumber(100);
  const arrayOperator = ['+', '-', '*'];
  const operator = arrayOperator[generateRandomNumber(2)];
  const correctAnswer = calculateAnswer(operand1, operand2, operator);
  const userAnswer = readlineSync.question(`Question: ${operand1} ${operator} ${operand2}\nYour answer: `);
  return checkRound(userAnswer, correctAnswer.toString());
}

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nWhat is the result of the expression?`);
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = getRound();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

startGame();
