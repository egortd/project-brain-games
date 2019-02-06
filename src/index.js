import readlineSync from 'readline-sync';
import { rulesEven, getCorrectAnswer } from './games/even';
import { getNumber } from './utils';

export const greeting = (rules = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const runEven = () => {
  const user = greeting(rulesEven);
  const askQuestion = (counter = 1) => {
    if (counter > 3) {
      console.log(`Congratulations, ${user}!`);
      return null;
    }
    const randomNumber = getNumber();
    const userAnswer = getAnswer(randomNumber);
    const correctAnswer = getCorrectAnswer(randomNumber);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${user}!`);
      return null;
    }
    console.log('Correct!');
    return askQuestion(counter + 1);
  };
  askQuestion();
};
export default runEven;
