import { getRandomNumberWithin } from '../utils';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, position) => {
  let result = start;
  for (let i = 0; i < position; i += 1) {
    result += step;
  }
  return result;
};

const progressionLength = 10;
const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumberWithin(1, 100);
  const progressionStep = getRandomNumberWithin(1, 100);
  const lostNumberPosition = getRandomNumberWithin(0, progressionLength - 1);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    question += (i === lostNumberPosition) ? '.. ' : `${firstNumber + progressionStep * i} `;
  }
  const correctAnswer = String(getProgression(firstNumber, progressionStep, lostNumberPosition));
  return { question, correctAnswer };
};

export default { description, getQuestionAndAnswer };
