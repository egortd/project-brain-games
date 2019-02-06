import { isEven } from '../utils';

export const rulesEven = 'Answer "yes" if number even otherwise answer "no".\n';
export const getCorrectAnswer = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};
