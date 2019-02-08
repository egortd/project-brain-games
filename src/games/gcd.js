import { cons } from 'hexlet-pairs';
import getNumber from '../utils';
import { run } from '..';

const description = 'Find the greatest common divisor of given numbers.\n';

const getGcd = (number, number2) => {
  if (number < number2) {
    return getGcd(number2, number);
  }
  if (number2 === 0) {
    return number;
  }
  return getGcd(number2, number % number2);
};

const getQuestionAndAnswer = () => {
  const a = getNumber(0, 100);
  const b = getNumber(0, 100);
  const question = `${a} ${b}`;
  const correctAnswer = String(getGcd(a, b));
  return cons(question, correctAnswer);
};

export default () => run(description, getQuestionAndAnswer);
