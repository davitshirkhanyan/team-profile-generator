const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('Can get github username via constructor', () => {
    const testValue = 'githubUsername';
    const employee = new Engineer('John', 1, 'test@example.com', testValue);
    expect(employee.github).toBe(testValue);
});

test('Can get github username via getGithub() method', () => {
    const testValue = 'githubUsername';
    const employee = new Engineer('John', 1, 'test@example.com', testValue);
    expect(employee.getGithub()).toBe(testValue);
});

test('Can getRole() return "Engineer"', () => {
    const testValue = 'Engineer';
    const employee = new Engineer('John', 1, 'test@example.com', 'githubUsername');
    expect(employee.getRole()).toBe(testValue);
});