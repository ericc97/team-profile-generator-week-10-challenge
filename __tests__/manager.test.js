const Manager = require('../lib/manager');

test('Should get the role of the manager', () => {
    const newManager = new Manager('Eric', 1, 'email@email.com', 'Manager')
    expect(newManager.getRole()).toBe('Manager')
});

test('Should get the office number of the Manager', () =>{
    const newManager = new Manager('Eric', 1, 'email@email.com',4,)
    
    expect(newManager.getOfficeNum()).toBe(4)
});

