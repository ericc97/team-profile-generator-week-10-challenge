const Employee = require('./employee')

class Manager extends Employee{
    constructor(name,id, email, officeNum){
        super(name, id, email)
        this.officeNum = officeNum;
        this.role = 'Manager';

    }
    getRole() {
        
        return this.role;
    }

    getOfficeNum() {
        return this.officeNum;
    }

    setOfficeNum(num) {
        this.officeNum = num
        return this.officeNum;
    }
} 


module.exports = Manager;