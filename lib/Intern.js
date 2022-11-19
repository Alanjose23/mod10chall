const inquirer = require("inquirer");
const Employee = require('./Employee');


class Intern extends Employee {
  constructor(name,id,email,sch) {
    super(name,id,email);
    this.sch = sch;
  }
  getSchool() {
    return this.sch;
  }
  getRole() {
    return 'Intern';
  }

}

module.exports = Intern;