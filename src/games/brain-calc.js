#!/usr/bin/env node
import generateRandomNumber from '../RNG.js';
import { startGame } from '../index.js';

const rule = 'What is the result of the expression?';

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
