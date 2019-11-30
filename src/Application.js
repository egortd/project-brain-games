import readlineSync from 'readline-sync';
import MenuOption from './MenuOption';
import Game from './Game';

export default class Application {
  constructor() {
    this.userChoice = null;
    this.selected = null;
    this.menu = [];
    this.userName = '';
  }

  addGame(option, name) {
    const order = this.menu.length + 1;
    this.menu = [...this.menu, new MenuOption(order, option, name)];
    return this;
  }

  addExitOption() {
    this.menu = [...this.menu, new MenuOption(0, () => {}, 'Exit')];
    return this;
  }

  executeGame() {
    if (this.userChoice === '0') {
      this.selected.select();
    } else {
      this.selected.showName();
      new Game(this.selected.select(), this.userName).run();
    }
  }

  meet() {
    console.log('\nWelcome to the Brain Games! \n');
    this.userName = readlineSync.question('- May I have your name? \n- ');
    console.log(`- Hello, ${this.userName}!\n`);
    return this;
  }

  init() {
    console.log(
      this.menu
        .reduce((text, value) => `${text}\n${value.toString()}`, 'Choose the game:'),
    );
    this.userChoice = readlineSync.question('Your choice: ');
    this.selected = this.menu.find(option => `${option.command}` === this.userChoice);
    if (!this.selected) {
      console.log(`\n"${this.userChoice}" is not a valid command.\n`);
      this.init();
    } else {
      this.executeGame();
    }
  }

  run() {
    this
      .addExitOption()
      .meet()
      .init();
  }
}
