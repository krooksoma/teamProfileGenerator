const Employee = require("../lib/Employee");

test('Employee', () =>{
    const e = new Employee("Algoz");
    expect(e.getName()).toBe("Algoz");
})