const fs = require('fs');
const path = require('path');

const inquirer = require('inquirer');


// require lib files
const Intern = require('../lib/intern');
const Engineer = require('../lib/engineer');
const Manager = require('../lib/manager');
const employeeTemplate = require('./employeeTemplate');

let employeeDb = [];


const addAnIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?",
            validate: answer => {
                if (answer === ""){
                    return "Please enter the Intern's name"
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Intern's id number?",
            validate: answer => {
                if(!answer.match(/^\d+$/)) {
					return 'Please enter a number'
				}
				return true
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email?",
            validate: answer => {
                if (answer === ""){
                    return 'Please enter a email'
                }
                return true;
            }
        },
        {
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
    ]).then(answers => {
        const {name, id, email, uni} = answers;
        let newIntern = new Intern(name, id, email, uni);
        employeeDb.push(newIntern);
        console.log(newIntern);
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
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Engineer's id number?",
            validate: answer => {
                if(!answer.match(/^\d+$/)) {
					return 'Please enter a number'
				}
				return true
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email?",
            validate: answer => {
                if (answer === ""){
                    return 'Please enter an email'
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'git',
            message: "What is the Engineer's github username?",
            validate: answer => {
                if (answer === ""){
                    return 'Please enter a github username'
                }
                return true;
            }
        },        
    ]).then(answers => {
        const {name, id, email, git} = answers;
        let newEngineer = new Engineer(name, id, email, git);
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
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's id number?",
            validate: answer => {
                if(!answer.match(/^\d+$/)) {
					return 'Please enter a number'
				}
				return true
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email?",
            validate: answer => {
                if (answer === ""){
                    return 'Please enter an email'
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is the Manager's office number?",
            validate: answer => {
                if (answer === 'Number'){
                    return 'Please enter an office number'
                }
                return true;
            }
        }      
    ]) .then(answers => {
        const {name, id, email, officeNum} = answers;
        let newManager = new Manager(name, id, email, officeNum);
        employeeDb.push(newManager);
        getUserInput();
        

    });

}

const getUserInput = () => {
    inquirer
        .prompt({
        
            type: 'list',
            message: 'What type of employee would you like to add?',
            name: 'choice',
            choices: ["Add an Intern", "Add an Engineer", "Add a Manager", "Done"]
    }) 
    .then(({ choice }) => {
        switch (choice) {
            
            case "Add an Intern":
                addAnIntern();
                return 'Add a new Intern selected'
            
            case "Add an Engineer":
                addAnEngineer();
                return 'Add a new Engineer selected'

            case "Add a Manager":
                console.log("selected add a manager")
                addAnManager();
                return 'Add a new Manager selected'

            case "Done":
                generateEmployees();
                process.exit();
        }
    })
    
}

const generateEmployees = () => {
    console.log('Writing file');
    fs.writeFileSync(`${path.join(process.cwd())}/dist/myEmployees.html`, employeeTemplate(employeeDb), err => {
        if (err) console.log(err);
    })
}


module.exports = {addAnIntern, addAnEngineer, addAnManager, getUserInput};