const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, git){
        super(name, id, email,)

        this.git = git;

        this.role = 'Engineer';

    }

    getRole() {
        return this.role;
    }

    getGit() {
        return this.git;
    }
    
}


module.exports = Engineer;