import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greeting = (title) => {
  console.log('Welcome to the Brain Games!');
  console.log(title);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const attempt = 3;
const run = (description, getQuestionAndAnswer) => {
  const user = greeting(description);
  const askQuestion = (counter) => {
    if (counter > attempt) {
      console.log(`Congratulations, ${user}!`);
      return;
    }
    const questionAndAnswer = getQuestionAndAnswer();
    const question = car(questionAndAnswer);
    console.log(`Question: ${question}`);
    const correctAnswer = cdr(questionAndAnswer);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
    console.log('Correct!');
    askQuestion(counter + 1);
  };
  askQuestion(1);
};
export default run;
