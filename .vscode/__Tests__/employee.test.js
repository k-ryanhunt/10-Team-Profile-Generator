const Employee = require("../library/Employee");

describe("Employee", () => {
  describe("getName", () => {
    it("Name is generated.", () => {
      const name = "Kelsea";
      const nameTest = new Employee(name, "123", "test@gmail.com");
      expect(nameTest.getName()).toBe(name);
    });
  });

  describe("getID", () => {
    it("ID is generated.", () => {
      const eId = "123";
      const idTest = new Employee("Kelsea", eId, "test@gmail.com");
      expect(idTest.getId()).toBe(eId);
    });
  });

  describe("getEmail", () => {
    it("Email is generated.", () => {
      const email = "test@gmail.com";
      const idTest = new Employee("Kelsea", "123", email);
      expect(idTest.getEmail()).toBe(email);
    });
  });

  describe("getRole", () => {
    it("Role is generated", () => {
      const roleString = "Employee";
      const roleTest = new Employee("Kelsea", 1, "test@gmail.com");
      expect(roleTest.getRole()).toBe(roleString);
    });
  });
});