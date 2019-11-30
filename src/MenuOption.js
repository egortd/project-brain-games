export default class MenuOption {
  constructor(command, option, name) {
    this.command = command;
    this.option = option;
    this.name = name;
  }

  toString() {
    return `[${this.command}] ${this.name}`;
  }

  showName() {
    console.log(`\n${this.name}`);
  }

  select() {
    return this.option;
  }
}
