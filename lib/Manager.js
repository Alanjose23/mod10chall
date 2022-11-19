const inquirer = require("inquirer");
const Employee = require('./Employee');


class Manager extends Employee {
  constructor(name,email,id,offnum) {
    super(name,id,email);
    this.offnum = offnum;
  }
  getOfficeNumber() {
    return this.offnum;
  }
  getRole() {
    return 'Manager';
  }

}

module.exports = Manager;