import readlineSync from 'readline-sync';

export const greeting = (title = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(title);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const run = (description, getQuestion, getCorrectAnswer) => {
  const user = greeting(description);
  const attempt = 3;
  const askQuestion = (counter) => {
    let message = '';
    if (counter > attempt) {
      message = `Congratulations, ${user}!`;
      return message;
    }
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const correctAnswer = getCorrectAnswer(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      message = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${user}!`;
      return message;
    }
    console.log('Correct!');
    return askQuestion(counter + 1);
  };
  console.log(askQuestion(1));
};
