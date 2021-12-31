const Employee = require('../lib/engineer');

test('Should get employees role', () =>{
    const newEmployee = new Employee('Eric', 1, 'email@email.com', 'Engineer')
    expect(newEmployee.getRole()).toBe('Engineer')
});

test('Should get the university of the employee', () =>{
    const newEmployee = new Employee('Eric', 1, 'email@email.com', 'ericc97')
    expect(newEmployee.getGit()).toBe('ericc97')
});