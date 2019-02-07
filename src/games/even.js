import getNumber from '../utils';
import { run } from '../index';

const description = 'Answer "yes" if number even otherwise answer "no".\n';
const getQuestion = () => getNumber(0, 100);
const isEven = number => number % 2 === 0;
const getCorrectAnswer = number => ((isEven(number)) ? 'yes' : 'no');

export default () => run(description, getQuestion, getCorrectAnswer);
