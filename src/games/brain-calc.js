#!/usr/bin/env node
import { generateRandomNumber } from '../index.js';

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
  const startRange = 1;
  const endRange = 100;
  const operand1 = generateRandomNumber(startRange, endRange);
  const operand2 = generateRandomNumber(startRange, endRange);
  const arrayOfOperators = ['+', '-', '*'];
  const operator = arrayOfOperators[generateRandomNumber(0, arrayOfOperators.length - 1)];
  const correctAnswer = calculateAnswer(operand1, operand2, operator);
  return [`${operand1} ${operator} ${operand2}`, correctAnswer];
}

export { rule, getRound };