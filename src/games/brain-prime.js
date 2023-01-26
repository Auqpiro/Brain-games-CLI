#!/usr/bin/env node
import { generateRandomNumber, boolienToResponse } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

function isPrime(number) {
  let result = true;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      result = false;
    }
  }
  return result;
}

function getRound() {
  const startRange = 1;
  const endRange = 100;
  const getNumber = generateRandomNumber(startRange, endRange);
  const correctAnswer = boolienToResponse(isPrime(getNumber));
  return [`${getNumber}`, correctAnswer];
}

export { rule, getRound };
