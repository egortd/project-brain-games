import readlineSync from 'readline-sync';
import runGame from './gameEngine';
import getEvenGame from './games/even';
import getCalcGame from './games/calc';
import getGCDGame from './games/gcd';
import getProgressionGame from './games/progression';
import getPrimeGame from './games/prime';

const runMenu = () => {
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
    case '1': runGame(...getEvenGame()); break;
    case '2': runGame(...getCalcGame()); break;
    case '3': runGame(...getGCDGame()); break;
    case '4': runGame(...getProgressionGame()); break;
    case '5': runGame(...getPrimeGame()); break;
    case '0': break;
    default:
      console.log(`"${userChoice}" is not found.`);
      console.log();
      runMenu();
  }
};
export default runMenu;
