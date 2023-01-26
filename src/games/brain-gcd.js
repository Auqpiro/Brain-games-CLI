#!/usr/bin/env node
import { generateRandomNumber } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  let GCD = 1;
  let a = x;
  let b = y;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  GCD = a + b;
  return GCD;
};

function getRound() {
  const startRange = 1;
  const endRange = 100;
  const firstNumber = generateRandomNumber(startRange, endRange);
  const secondNumber = generateRandomNumber(startRange, endRange);
  const correctAnswer = getGCD(firstNumber, secondNumber);
  return [`${firstNumber} ${secondNumber}`, correctAnswer];
}

export { rule, getRound };
