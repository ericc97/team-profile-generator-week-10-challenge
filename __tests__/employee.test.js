const Employee = require('../lib/employee');

test('Should create a new employee object', () => {
    const newEmployee = new Employee('Eric', 1, 'email@email.com')
    expect(typeof(newEmployee)).toBe('object')
});

test('Should get the id of the employee', () =>{
    const newEmployee = new Employee('Eric', 1, 'email@email.com')
    expect(newEmployee.getId()).toBe(1)
});

test('Should get the email of the employee', () =>{
    const newEmployee = new Employee('Eric', 1, 'email@email.com')
    expect(newEmployee.getEmail()).toBe('email@email.com')
});