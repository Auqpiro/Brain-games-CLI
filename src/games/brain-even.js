#!/usr/bin/env node
import generateRandomNumber from '../RNG.js';
import { boolienToResponse } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const ranomNumber = generateRandomNumber();
  const correctAnswer = boolienToResponse(isEven(ranomNumber));
  return [`${ranomNumber}`, correctAnswer];
};

export { rule, getRound };
