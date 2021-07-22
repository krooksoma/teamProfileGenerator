const Intern = require("../lib/Intern");

describe('Intern', () =>{
    describe('Initialization', () =>{
        it("Should create a profile of an Intern", () =>{
            const testEmployee = {
                name: 'Jonas',
                id: 1234 ,
                email: 'jonas@email.com',
                school: 'UCF'
            }

            const jonas = new Intern('Jonas', 1234, "jonas@email.com", 'UCF');
            expect(jonas).toEqual(testEmployee);
        })
    })
})