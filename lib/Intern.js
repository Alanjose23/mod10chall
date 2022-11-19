const inquirer = require("inquirer");
const Employee = require('./Employee');

// extending the class to create the next object and getting the result required back
class Intern extends Employee {
  constructor(name,id,email,school) {
    super(name,id,email);
    this.school = school;
    // created methods and roles
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return 'Intern';
  }

}

module.exports = Intern;