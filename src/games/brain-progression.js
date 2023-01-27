#!/usr/bin/env node
import generateRandomNumber from '../RNG.js';

const rule = 'What number is missing in the progression? ';

function getRound() {
  const arrayProgression = [];
  const firstValueProgression = generateRandomNumber();
  arrayProgression.push(firstValueProgression);
  const minStep = 1;
  const maxStep = 10;
  const stepProgression = generateRandomNumber(minStep, maxStep);
  const minLengthProgression = 5;
  const maxLengthProgression = 10;
  const lengthProgression = generateRandomNumber(minLengthProgression, maxLengthProgression);
  for (let i = 0; i < lengthProgression; i += 1) {
    arrayProgression.push(arrayProgression.at(-1) + stepProgression);
  }
  const correctAnswerPosition = generateRandomNumber(0, lengthProgression - 1);
  const correctAnswer = arrayProgression[correctAnswerPosition];
  arrayProgression[correctAnswerPosition] = '..';
  return [`${arrayProgression.join(' ')}`, correctAnswer];
}

export { rule, getRound };
