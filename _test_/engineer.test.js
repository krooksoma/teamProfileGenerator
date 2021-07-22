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
    describe('Initialization', ()=>{
        it("should retrieve the name of the Engineer", () =>{
            const testName = "Jebediah";

            const jebediah = new Engineer('Jebediah', 4321, "jeb@email.com", 'jebgit');
            expect(jebediah.getName()).toBe("Jebediah");
        })
    })
    describe('Initialization', ()=>{
        it("should retrieve role", () =>{
            const testName = "Engineer";

            const jebediah = new Engineer('Jebediah', 4321, "jeb@email.com", 'jebgit');
            expect(jebediah.getRole()).toBe("Engineer");
        })
    })
})