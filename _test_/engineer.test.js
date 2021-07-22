const Engineer = require("../lib/Engineer");


describe('Engineer', () =>{
    describe('Initialization', () =>{
        it("Should create a profile of an Engineer", () =>{
            const testEmployee = {
                name: 'Jonas',
                id: 1234 ,
                email: 'jonas@email.com',
                github: 'jonasgit'
            }

            const jonas = new Engineer('Jonas', 1234, "jonas@email.com", 'jonasgit');
            expect(jonas).toEqual(testEmployee);
        })
    })
})