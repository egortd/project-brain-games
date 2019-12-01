import { getRandomNumberWithin, isCorrectAnswer } from '../utils/utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumberWithin(0, 100);
  const answer = isPrime(question);
  const correctAnswer = isCorrectAnswer(answer);
  return { question, correctAnswer };
};

export default { description, getQuestionAndAnswer };
