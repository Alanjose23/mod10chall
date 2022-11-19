const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const path = require('./dist/index.html');
const emplarr = [];
const inq2 = [{
    type: 'input',
    name: 'name',
   message: 'what is your name'
},{
    type: 'input',
    name: 'id',
    message: 'What is your id'
},{
    type: 'input',
    name: 'email',
    message: 'what is your email?'
},{
    type: 'input',
    name: 'manoffnum',
    message: 'What is your office number?'
}]
// engineer
const inq4 = [{
    type: 'input',
    name: 'name2',
   message: 'what is your name'
},{
    type: 'input',
    name: 'id2',
    message: 'What is your engineer id'
},{
    type: 'input',
    name: 'email2',
    message: 'what is your engineer email?'
},{
    type: 'input',
    name: 'git',
    message: 'What is your engineer github?'
}]
// intern
const inq5 = [{
    type: 'input',
    name: 'name3',
   message: 'what is your name'
},{
    type: 'input',
    name: 'id3',
    message: 'What is your intern id'
},{
    type: 'input',
    name: 'email3',
    message: 'what is your intern email?'
},{
    type: 'input',
    name: 'sch',
    message: 'What is your school?'
}]

const inq3 = [{
    type:'list',
    name: 'membername',
    message: 'What is the role of the member',
    choices: ['Engineer','Intern']
}]


inquirer.prompt(inq2).then(data =>{
    // createManager(data.name,data.email,data.email,data.offnum);
    newlist()

})

function newlist(){
    inquirer.prompt(inq3).then(data =>{ 
        if (data.membername === 'Engineer'){ 
            addEng()
// create prompt for 4
        }
        else {
// create prompt for 5
            addInt()
        }
// create call for new engineer
    })}
function addEng() {
inquirer.prompt(inq4).then(data =>{
// createManager(data.name,data.email,data.email,data.offnum);
newlist()

    })}
function addInt() {
inquirer.prompt(inq5).then(data =>{
// createManager(data.name,data.email,data.email,data.offnum);
})}


function createManager(n,e,){

}