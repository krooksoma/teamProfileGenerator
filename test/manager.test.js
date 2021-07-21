const Manager = require("../lib/Manager");

describe('Manager', () =>{
    describe('Initialization', () =>{
        it("Should create a profile of a Manager", () =>{
            const testEmployee = {
                name: 'Jonas',
                id: 1234 ,
                email: 'jonas@email.com',
                officeNumber: '321'
            }

            const jonas = new Manager('Jonas', 1234, "jonas@email.com", '321');
            expect(jonas).toEqual(testEmployee);
        })
    })
})