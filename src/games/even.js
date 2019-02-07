export const description = 'Answer "yes" if number even otherwise answer "no".\n';
const isEven = number => number % 2 === 0;
export const getCorrectAnswer = number => ((isEven(number)) ? 'yes' : 'no');
