export const getNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const isCorrectAnswer = predicateFunction => (predicateFunction ? 'yes' : 'no');
