const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Should create a profile of an Intern", () => {
      const testEmployee = {
        name: "Jonas",
        id: 1234,
        email: "jonas@email.com",
        school: "UCF",
      };

      const jonas = new Intern("Jonas", 1234, "jonas@email.com", "UCF");
      expect(jonas).toEqual(testEmployee);
    });
  });

  describe("Initialization", () => {
    it("should retrieve the name of the Intern", () => {
      const testName = "Sarah";

      const sarah = new Intern("Sarah", 666, "sarah666@email.com", "Sarahfim");
      expect(sarah.getName()).toBe("Sarah");
    });
  });

  describe("Initialization", () => {
    it("should retrieve role", () => {
      const testRole = "Intern";

      const sarah = new Intern("Sarah", 666, "sarah666@email.com", "Sarahfim");
      expect(sarah.getRole()).toBe("Intern");
    });
  });
});
