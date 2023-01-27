#!/usr/bin/env node

export default function generateRandomNumber(startRange = 1, endRange = 100) {
  const min = Math.ceil(startRange);
  const max = Math.floor(endRange);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
