const Employee = require('./employee')

class Manager extends Employee{
    constructor(name,id, email, officeNum){
        super(name, title, id, email)
        this.officeNum = officeNum
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return 'Manager';
    }
} 


module.exports = Manager