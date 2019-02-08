import { cons } from 'hexlet-pairs';
import getNumber from '../utils';
import run from '..';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const a = getNumber(1, 100);
  const b = getNumber(1, 100);
  const sign = getNumber(0, 3);
  let question;
  let correctAnswer;
  switch (sign) {
    case 0:
      question = `${a} + ${b}`;
      correctAnswer = a + b;
      break;
    case 1:
      question = `${a} - ${b}`;
      correctAnswer = a - b;
      break;
    default:
      question = `${a} * ${b}`;
      correctAnswer = a * b;
      break;
  }
  return cons(question, String(correctAnswer));
};

export default () => run(description, getQuestionAndAnswer);
