const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const htmlfinish = require('./createpage');
var emplarr = [];
// inital prompt
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
// prompt on engineer
const inq4 = [{
    type: 'input',
    name: 'name',
   message: 'what is your name'
},{
    type: 'input',
    name: 'id',
    message: 'What is your engineer id'
},{
    type: 'input',
    name: 'email',
    message: 'what is your engineer email?'
},{
    type: 'input',
    name: 'git',
    message: 'What is your engineer github?'
}]
// intern
// third prompt on intern
const inq5 = [{
    type: 'input',
    name: 'name',
   message: 'what is your name'
},{
    type: 'input',
    name: 'id',
    message: 'What is your intern id'
},{
    type: 'input',
    name: 'email',
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

// call inital prompt and then do prompt listed by newlist
inquirer.prompt(inq2).then(data =>{
   var newm = new Manager(data.name,data.email,data.id,data.offnum);
    emplarr.push(newm);
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
var newe = new Engineer(data.name,data.email,data.id,data.git);
emplarr.push(newe);
newlist()
    })}
function addInt() {
inquirer.prompt(inq5).then(data =>{
var newi = new Intern(data.name,data.id,data.email,data.sch);
emplarr.push(newi);
finishhtml()
})}

const finishhtml = () => {
    console.log(htmlfinish.totalp(emplarr))
    // fs.writeFile('./dist/index.html', htmlfinish.fina(emplarr).toString(),function(err, result) {
    //     if(err) console.log('error', err);
    //   })
}
// create fs file with page to outside html doc
// pass in data using logic with type of call being used by callRole()
// pass in outside informatio to make the proper call