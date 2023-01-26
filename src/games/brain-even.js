#!/usr/bin/env node
import { generateRandomNumber, boolienToResponse } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const startRange = 1;
  const endRange = 100;
  const ranomNumber = generateRandomNumber(startRange, endRange);
  const correctAnswer = boolienToResponse(isEven(ranomNumber));
  return [`${ranomNumber}`, correctAnswer];
};

export { rule, getRound };
