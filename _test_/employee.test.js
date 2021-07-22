const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should retrieve the name of the Employee", () => {
      const bella = new Employee("Bella", 8688, "bella@email.com");
      expect(bella.getId()).toBe(8688);
    });
  });

  describe("Initialization", () => {
    it("should retrieve role", () => {
      const bella = new Employee("Bella", 8688, "bela@email.com");
      expect(bella.getEmail()).toBe("bela@email.com");
    });
  });
  describe("Initialization", () => {
    it("should retrieve role", () => {
      const bella = new Employee("Bella", 8688, "bela@email.com");
      expect(bella.getName()).toBe("Bella");
    });
  });
});
