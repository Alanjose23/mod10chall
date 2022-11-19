const fs = require('fs');
const inquirer = require('inquirer');


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
}, 
{
    type:'list',
    name: 'membername',
    message: 'What is the role of the member',
    choices: ['Engineer','Intern']
},
]
