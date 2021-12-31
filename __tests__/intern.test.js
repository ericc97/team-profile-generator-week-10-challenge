const Intern = require('../lib/intern');

test('Should get Intern role', () => {
    const newIntern = new Intern('Eric', 1, 'email@email.com', 'Intern')
    expect(newIntern.getRole()).toBe('Intern')
});

test('Should get the id of the Intern', () =>{
    const newIntern = new Intern('Eric', 1, 'email@email.com', 'College')
    expect(newIntern.getUni()).toBe('College')
});

