import readlineSync from 'readline-sync';

export default class Game {
  constructor(game, userName) {
    this.userName = userName || 'friend';
    this.description = game.description;
    this.getQuestionAndAnswer = game.getQuestionAndAnswer;
    this.attempt = 3;
    this.isWin = null;
  }

  run() {
    console.log(`${this.description}\n`);
    const askQuestion = (counter = 1) => {
      if (counter > this.attempt) {
        console.log(`Congratulations, ${this.userName}!\n`);
        this.isWin = true;
        return;
      }
      const { question, correctAnswer } = this.getQuestionAndAnswer();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer !== correctAnswer) {
        console.log(`\n'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${this.userName}!`);
        return;
      }
      console.log('Correct!');
      askQuestion(counter + 1);
    };
    this.isWin = false;
    askQuestion();
  }
}
