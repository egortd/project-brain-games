import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import runEvenGame from './games/even';
import runCalcGame from './games/calc';
import runGCDGame from './games/gcd';
import runProgressionGame from './games/progression';
import runPrimeGame from './games/prime';

const greeting = (title) => {
  console.log('Welcome to the Brain Games!');
  console.log(title);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const attempt = 3;
const runGame = (description, getQuestionAndAnswer) => {
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
export default runGame;

export const runMenu = () => {
  console.log('Choose the game:');
  console.log('1. Even number');
  console.log('2. Calculate the expression');
  console.log('3. Greatest common divisor');
  console.log('4. Guess missing number');
  console.log('5. Prime number');
  console.log('0. Exit');
  const userChoice = readlineSync.question('Your choice: ');
  console.log();
  switch (userChoice) {
    case '1': runEvenGame(); break;
    case '2': runCalcGame(); break;
    case '3': runGCDGame(); break;
    case '4': runProgressionGame(); break;
    case '5': runPrimeGame(); break;
    case '0': break;
    default:
      console.log(`"${userChoice}" is not found.`);
      console.log();
      runMenu();
  }
};
