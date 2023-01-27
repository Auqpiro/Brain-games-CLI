#!/usr/bin/env node
import generateRandomNumber from '../RNG.js';
import startGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const getRound = () => {
  const ranomNumber = generateRandomNumber();
  const correctAnswer = isEven(ranomNumber);
  return [`${ranomNumber}`, correctAnswer];
};

export default function runGame() {
  return startGame(rule, getRound);
}
