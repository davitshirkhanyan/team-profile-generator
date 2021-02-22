const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('Can get school via constructor', () => {
    const testValue = 'LAVC';
    const employee = new Intern('John', 1, 'test@example.com', testValue);
    expect(employee.school).toBe(testValue);
});

test('Can get school via getSchool() method', () => {
    const testValue = 'LAVC';
    const employee = new Intern('John', 1, 'test@example.com', testValue);
    expect(employee.getSchool()).toBe(testValue);
});

test('Can getRole() method return "Intern"', () => {
    const testValue = 'Intern';
    const employee = new Intern('John', 1, 'test@example.com', 'LAVC');
    expect(employee.getRole()).toBe(testValue);
});