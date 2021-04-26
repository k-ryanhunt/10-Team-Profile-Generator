const Engineer = require("../library/Engineer");

describe("Engineer", () => {
  describe("getName", () => {
    it("Name is generated.", () => {
      const name = "Kelsea";
      const nameTest = new Engineer(name, "234", "email", "github");
      expect(nameTest.getName()).toBe(name);
    });
  });

  describe("getID", () => {
    it("ID is generated.", () => {
      const eId = "234";
      const idTest = new Engineer("Kelsea", eId, "email", "github");
      expect(idTest.getId()).toBe(eId);
    });
  });

  describe("getEmail", () => {
    it("Email is generated.", () => {
      const email = "test@gmail.com";
      const emailTest = new Engineer("Kelsea", "234", email, "github");
      expect(emailTest.getEmail()).toBe(email);
    });
  });
  
  describe("getGithub", () => {
    it("GitHub is generated.", () => {
      const github = "k-ryanhunt";
      const githubTest = new Engineer("Kelsea", 234, "email", github);
      expect(githubTest.getGithub()).toBe(github);
    });
  });

  describe("getRole", () => {
    it("Role is generated.", () => {
      const roleString = "Engineer";
      const roleTest = new Engineer("Kelsea", 1, "test@gmail.com", "github");
      expect(roleTest.getRole()).toBe(roleString);
    });
  });
});