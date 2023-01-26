#!/usr/bin/env node
import { rule, getRound } from '../src/games/brain-even.js';
import { startGame } from '../src/index.js';

startGame(rule, getRound);
