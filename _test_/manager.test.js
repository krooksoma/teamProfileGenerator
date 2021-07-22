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
    describe('Initialization', ()=>{
        it("should retrieve the name of the Manager", () =>{
            const testName = "Matthew";

            const matthew = new Manager('Matthew', 4321, "jeb@email.com", 335568);
            expect(matthew.getName()).toBe("Matthew");
        })
    })
    describe('Initialization', ()=>{
        it("should retrieve role", () =>{
            const testOfficeNumber = "Manager";

            const matthew = new Manager('Matthew', 4321, "jeb@email.com", 335568);
            expect(matthew.getofficeNumber()).toBe(335568);
        })
    })
})