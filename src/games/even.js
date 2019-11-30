import { getRandomNumberWithin, isCorrectAnswer } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const getQuestionAndAnswer = () => {
  const question = getRandomNumberWithin(0, 100);
  const answer = isEven(question);
  const correctAnswer = isCorrectAnswer(answer);
  return { question, correctAnswer };
};

export default { description, getQuestionAndAnswer };
