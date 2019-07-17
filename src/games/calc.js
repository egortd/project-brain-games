import { getNumber } from '../utils';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const a = getNumber(1, 100);
  const b = getNumber(1, 100);
  const sign = getNumber(0, 2);
  let question;
  let result;
  switch (sign) {
    case 0:
      question = `${a} + ${b}`;
      result = a + b;
      break;
    case 1:
      question = `${a} - ${b}`;
      result = a - b;
      break;
    default:
      question = `${a} * ${b}`;
      result = a * b;
      break;
  }
  const correctAnswer = String(result);
  return { question, correctAnswer };
};

export default () => ([description, getQuestionAndAnswer]);
