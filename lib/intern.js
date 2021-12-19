const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, title, id , email, uni){
        super(name, title, id, email)
        this.uni = uni
    }

    getUni() {
        return this.uni;
    }
}

module.exports = Intern 