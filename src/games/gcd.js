import { getRandomNumberWithin } from '../utils/utils';

const description = 'Find the greatest common divisor of given numbers.';

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
  const a = getRandomNumberWithin(0, 100);
  const b = getRandomNumberWithin(0, 100);
  const question = `${a} ${b}`;
  const correctAnswer = String(getGcd(a, b));
  return { question, correctAnswer };
};

export default { description, getQuestionAndAnswer };
