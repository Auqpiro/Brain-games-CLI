#!/usr/bin/env node
import generateRandomNumber from '../RNG.js';
import { boolienToResponse } from '../index.js';

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
  const getNumber = generateRandomNumber();
  const correctAnswer = boolienToResponse(isPrime(getNumber));
  return [`${getNumber}`, correctAnswer];
}

export { rule, getRound };
