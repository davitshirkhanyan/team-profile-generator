const Employee = require('../lib/Employee');

test('How to get Employee instance', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('Can get name via constructor', () => {
    const name = 'Davit';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('Can get id via constructor', () => {
    const testValue = 100;
    const employee = new Employee('John', testValue);
    expect(employee.id).toBe(testValue);
});

test('Can get email via constructor', () => {
    const testValue = 'test@example.com';
    const employee = new Employee('John', 1, testValue);
    expect(employee.email).toBe(testValue);
});

test('Can get name via getName()', () => {
    const name = 'Davit';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test('Can get id via getId()', () => {
    const testValue = 100;
    const employee = new Employee('John', testValue);
    expect(employee.getId()).toBe(testValue);
});

test('Can get email via getEmail()', () => {
    const testValue = 'test@example.com';
    const employee = new Employee('John', 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
});

test('Can getRole() return "Employee"', () => {
    const testValue = 'Employee';
    const employee = new Employee('Davit', 1, 'test@example.com');
    expect(employee.getRole()).toBe(testValue);
});