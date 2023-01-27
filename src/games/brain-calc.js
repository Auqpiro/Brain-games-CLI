#!/usr/bin/env node
import generateRandomNumber from '../RNG.js';
import startGame from '../index.js';

const rule = 'What is the result of the expression?';

function calculateAnswer(firstOperand, secondOperand, operator) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return console.log(`Unknown operator: ${operator}`);
  }
}

function getRound() {
  const firstOperand = generateRandomNumber();
  const secondOperand = generateRandomNumber();
  const arrayOfOperators = ['+', '-', '*'];
  const operator = arrayOfOperators[generateRandomNumber(0, arrayOfOperators.length - 1)];
  const correctAnswer = calculateAnswer(firstOperand, secondOperand, operator);
  return [`${firstOperand} ${operator} ${secondOperand}`, correctAnswer];
}

export default function runGame() {
  return startGame(rule, getRound);
}
