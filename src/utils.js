var fs = require('fs');
const path = require('path');

var inquirer = require('inquirer');


// require lib files
var Employee = require('../lib/employee');
var Intern = require('../lib/intern');
var Manager = require('../lib/engineer');
var Engineer = require('../lib/manager');
const employeeTemplate = require('./employeeTemplate');

let employeeDb = [];


const addAnIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?",
            validate: answer => {
                if (answer === ""){
                    return 'Please enter a name'
                }
                return true;
            },
            type: 'input',
            name: 'id',
            message: "What is the Engineer's id number?",
            validate: answer => {
                if (answer === Number){
                    return 'Please enter a Id number'
                }
                return true;
            },
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email?",
            validate: answer => {
                if (answer === ""){
                    return 'Please enter an email'
                }
                return true;
            },
            type: 'input',
            name: 'uni',
            message: "What is school did the Intern attend?",
            validate: answer => {
                if (answer === ""){
                    return 'Please enter the name of a university'
                }
                return true;
            }
        }        
    ]) .then(answers => {
        const {name, id, email, uni} = answers;
        let newIntern = new Employee(name, id, email, uni);
        employeeDb.push(newIntern);
        getUserInput();

    });
}

const addAnEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?",
            validate: answer => {
                if (answer === ""){
                    return 'Please enter a name'
                }
                return true;
            },
            type: 'input',
            name: 'id',
            message: "What is the Engineer's id number?",
            validate: answer => {
                if (answer ===Number){
                    return 'Please enter a Id number'
                }
                return true;
            },
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email?",
            validate: answer => {
                if (answer === ""){
                    return 'Please enter an email'
                }
                return true;
            },
            type: 'input',
            name: 'uni',
            message: "What is the Engineer's github username?",
            validate: answer => {
                if (answer === ""){
                    return 'Please enter a github username'
                }
                return true;
            }
        }        
    ]) .then(answers => {
        const {name, id, email, git} = answers;
        let newEngineer = new Employee(name, id, email, git);
        employeeDb.push(newEngineer);
        getUserInput();

    });
}

const addAnManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Manager's name?",
            validate: answer => {
                if (answer === ""){
                    return 'Please enter a name'
                }
                return true;
            },
            type: 'input',
            name: 'id',
            message: "What is the Manager's id number?",
            validate: answer => {
                if (answer === Number){
                    return 'Please enter a Id number'
                }
                return true;
            },
            type: 'input',
            name: 'email',
            message: "What is the Manager's email?",
            validate: answer => {
                if (answer === ""){
                    return 'Please enter an email'
                }
                return true;
            },
            type: 'input',
            name: 'officeNum',
            message: "What is the Manager's office number?",
            validate: answer => {
                if (answer === Number){
                    return 'Please enter an office number'
                }
                return true;
            }
        }        
    ]) .then(answers => {
        const {name, id, email, officeNum} = answers;
        let newManager = new Employee(name, id, email, officeNum);
        employeeDb.push(newManager);
        getUserInput();

    });
}

const getUserInput = () => {
    inquirer
        .prompt([
        {
            type: 'list',
            message: 'What type of employee would you like to add?',
            choices: ['Add an Intern', 'Add an Engineer', 'Add a manager', 'Done'],
        },
        
    ]) .then(({ choices }) => {
        switch (choices) {
            case "Add an Intern":
                addAnIntern()
                return 'Add a new Intern selected'
            
            case "Add an Engineer":
                addAnEngineer()
                return 'Add a new Engineer selected'

            case "Add a Manager":
                addAnManager()
                return 'Add a new Manager selected'
        }
    })
}


module.exports = {addAnManager, addAnIntern, addAnEngineer, getUserInput};