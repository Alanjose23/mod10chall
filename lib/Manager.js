const inquirer = require("inquirer");
const Employee = require('./Employee');


class Manager extends Employee {
// created extended constructor
  constructor(name,email,id,offnum) {
    super(name,id,email);
    this.offnum = offnum;
  }
  // ceated office number and role 
  getOfficeNumber() {
    return this.offnum;
  }
  getRole() {
    return 'Manager';
  }

}

module.exports = Manager;