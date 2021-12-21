const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id , email, uni){
        super(name, id, email,)
        this.uni = uni;
        this.role = 'Intern';
    }

    getRole() {
        return this.role
    }

    getUni() {
        return this.uni;
    }
}

module.exports = Intern;