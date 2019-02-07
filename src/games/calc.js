/* eslint no-eval: 0 */
import getNumber from '../utils';
import { run } from '../index';

const description = 'What is the result of the expression?\n';

const getQuestion = () => {
  const a = getNumber(1, 100);
  const b = getNumber(1, 100);
  const sign = getNumber(0, 3);
  let question;
  switch (sign) {
    case 0:
      question = `${a} + ${b}`;
      break;
    case 1:
      question = `${b} - ${a}`;
      break;
    default:
      question = `${a} * ${b}`;
      break;
  }
  return question;
};
const getCorrectAnswer = string => String(eval(string));

export default () => run(description, getQuestion, getCorrectAnswer);
