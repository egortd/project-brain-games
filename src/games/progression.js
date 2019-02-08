import { cons } from 'hexlet-pairs';
import getNumber from '../utils';
import { run } from '..';

const description = 'What number is missing in the progression?\n';

const getProgression = (start, step, position) => {
  let result = start;
  for (let i = 0; i < position; i += 1) {
    result += step;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getNumber(1, 100);
  const progressionStep = getNumber(1, 100);
  const lostNumberPosition = getNumber(0, 9);
  const progressionLength = 10;
  let question = '';
  let stepNumber = firstNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    question += (i === lostNumberPosition) ? ' ..' : ` ${stepNumber}`;
    stepNumber += progressionStep;
  }
  const correctAnswer = String(getProgression(firstNumber, progressionStep, lostNumberPosition));
  return cons(question, correctAnswer);
};

export default () => run(description, getQuestionAndAnswer);
