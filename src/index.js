import isEven from './games/even';
import calc from './games/calc';
import GCD from './games/gcd';
import progression from './games/progression';
import isPrime from './games/prime';
import Application from './Application';

export default new Application()
  .addGame(isEven, 'Even number')
  .addGame(calc, 'Calculate the expresion')
  .addGame(GCD, 'Greatest common divisor')
  .addGame(progression, 'Guess missing number')
  .addGame(isPrime, 'Prime number');
