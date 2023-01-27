#!/usr/bin/env node
import generateRandomNumber from '../RNG.js';
import { startGame } from '../index.js';

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
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const correctAnswer = getGCD(firstNumber, secondNumber);
  return [`${firstNumber} ${secondNumber}`, correctAnswer];
}

export default function runGame() {
  return startGame(rule, getRound);
}
