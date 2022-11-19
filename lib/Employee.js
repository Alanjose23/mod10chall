const inquirer = require("inquirer");

class Employee {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor(name, id, email) {
      this.email = email;
      this.id = id;
      this.name = name;
  }
  // Sets the guesses to 10 and gets the next word
  getEmail() {
    return this.email;
  }

  // Creates a new Word object using a random word from the array, asks the user for their guess
  getID() {
    return this.id
  }

  // Uses inquirer to prompt the user for their guess
  getName() {
    return this.name;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;