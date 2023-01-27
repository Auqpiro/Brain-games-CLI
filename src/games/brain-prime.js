#!/usr/bin/env node
import generateRandomNumber from '../RNG.js';
import startGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function getRound() {
  const getNumber = generateRandomNumber();
  const correctAnswer = isPrime(getNumber);
  return [`${getNumber}`, correctAnswer];
}

export default function runGame() {
  return startGame(rule, getRound);
}
