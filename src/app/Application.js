import readlineSync from 'readline-sync';
import MenuOption from './MenuOption';
import Game from './Game';

export default class Application {
  constructor() {
    this.userChoice = null;
    this.selected = null;
    this.game = null;
    this.menu = [];
    this.userName = '';
  }

  addGame(game, name) {
    const order = this.menu.length + 1;
    this.menu = [...this.menu, new MenuOption(order, game, name)];
    return this;
  }

  addExitOption() {
    this.menu = [...this.menu, new MenuOption(0, null, 'Exit')];
    return this;
  }

  executeGame() {
    if (this.userChoice === '0') {
      return;
    }
    this.selected.showName();
    this.game = new Game(this.selected.game, this.userName);
    this.game.run();
    if (this.game.isWin) {
      this.replay();
    }
  }

  replay() {
    console.log('Do you want to play more? [Y/n]');
    const answer = readlineSync.question('Answer: ');
    switch (answer) {
      case 'Y': this.runMenu();
        break;
      case 'n': break;
      default: this.replay();
    }
  }

  addMeet() {
    console.log('\nWelcome to the Brain Games! \n');
    this.userName = readlineSync.question('- May I have your name? \n- ');
    console.log(`- Hello, ${this.userName}!`);
    return this;
  }

  runMenu() {
    console.log(
      this.menu
        .reduce((menuText, option) => `${menuText}\n${option.toString()}`, '\nChoose the game:'),
    );
    this.userChoice = readlineSync.question('Your choice: ');
    this.selected = this.menu.find(({ command }) => `${command}` === this.userChoice);
    if (!this.selected) {
      console.log(`\n'${this.userChoice}' is not a valid command.`);
      this.runMenu();
    } else {
      this.executeGame();
    }
  }

  run() {
    this
      .addExitOption()
      .addMeet()
      .runMenu();
  }
}
