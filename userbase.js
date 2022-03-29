const User = require("./classes");

class UserBase {

  constructor() {
    this.users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
  }

  getNames() {
    return this.users.map(user => user.name)
  }

  getIntroductions() {
    return this.users.map(user => `Hi, my name is ${user.name}`)
  }

}

module.exports = UserBase;