const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Can get office number via constructor', () => {
    const testValue = 100;
    const employee = new Manager('John', 1, 'test@example.com', testValue);
    expect(employee.officeNumber).toBe(testValue);
});

test('Can get office number via getOfficeNumber()', () => {
    const testValue = 100;
    const employee = new Manager('John', 1, 'test@example.com', testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
});

test('Can getRole() return "Employee"', () => {
    const testValue = 'Manager';
    const employee = new Manager('John', 1, 'test@example.com', 100);
    expect(employee.getRole()).toBe(testValue);
});

