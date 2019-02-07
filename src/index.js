import readlineSync from 'readline-sync';
import { description, getCorrectAnswer } from './games/even';
import getNumber from './utils';

export const greeting = (rules = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const runEven = () => {
  const user = greeting(description);
  const attempt = 3;
  const askQuestion = (counter) => {
    let message = '';
    if (counter > attempt) {
      message = `Congratulations, ${user}!`;
      return message;
    }
    const question = getNumber(1, 100);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);
    if (userAnswer !== correctAnswer) {
      message = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${user}!`;
      return message;
    }
    console.log('Correct!');
    return askQuestion(counter + 1);
  };
  console.log(askQuestion(1));
};
export default runEven;
