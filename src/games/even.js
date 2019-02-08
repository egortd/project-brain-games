import { cons } from 'hexlet-pairs';
import getNumber from '../utils';
import run from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const getQuestionAndAnswer = () => {
  const question = getNumber(0, 100);
  const correctAnswer = (isEven(question) ? 'yes' : 'no');
  return cons(question, correctAnswer);
};

export default () => run(description, getQuestionAndAnswer);
