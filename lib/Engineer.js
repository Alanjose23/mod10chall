const inquirer = require("inquirer");
const Employee = require('./Employee');

// create extended class with methods
class Engineer extends Employee {
  constructor(name,email,id,git) {
    super(name,id,email);
    this.git = git;
  }
  getGithub() {
    return this.git;
  }
  getRole() {
    return 'Engineer';
  }

}

module.exports = Engineer;