export default class MenuOption {
  constructor(command, game, name) {
    this.command = command;
    this.game = game;
    this.name = name;
  }

  toString() {
    return `[${this.command}] ${this.name}`;
  }

  showName() {
    console.log(`\n${this.name}`);
  }
}
