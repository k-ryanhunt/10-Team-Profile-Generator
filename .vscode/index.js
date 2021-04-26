const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");
const teamProfile = require("./source/template")

const team = [];

const generateTeam = [
  {
    type: "input",
    name: "managerName",
    message: "What is the Manager's name?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please enter the Manager's name to continue.";
      }
    },
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the Manager's employee ID?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please enter the Manager's ID to continue.";
      }
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the Manager's e-mail?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please enter the Manager's e-mail to continue.";
      }
    },
  },
  {
    type: "input",
    name: "managerPhone",
    message: "What is the Manager's phone number?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please enter the Manager's phone number to continue.";
      }
    },
  },
];

const addNewEmployee = [
  {
    type: "list",
    name: "empAdd",
    message: "Would you like to add more employees?",
    choices: ["Yes", "No"],
  },
];

const addEmpType = [
  {
    type: "list",
    name: "typeEmp",
    message: "What employee position would you like to add?",
    choices: ["Engineer", "Intern"],
  },
];

const engineerQuest = [
  {
    type: "input",
    name: "engName",
    message: "What is the Engineer's name?",
  },
  {
    type: "input",
    name: "engId",
    message: "What is the Engineer's ID Number?",
  },
  {
    type: "input",
    name: "engEmail",
    message: "What is the Engineer's e-mail?",
  },
  {
    type: "input",
    name: "engGithub",
    message: "What is the Engineer's GitHub account?",
  },
];
const internQuest = [
  {
    type: "input",
    name: "intName",
    message: "What is the Intern's name?",
  },
  {
    type: "input",
    name: "intId",
    message: "What is the Intern's ID Number?",
  },
  {
    type: "input",
    name: "intEmail",
    message: "What is the Intern's e-mail?",
  },
  {
    type: "input",
    name: "intSchool",
    message: "What school does the Intern go to?",
  },
];

function writeToFile(fileName, f) {
  fs.writeFileSync(fileName, f, (error) => {
    error ? console.log(err) : console.log("Your team's profile is ready to view!");
  });
}

function createInt() {
  inquirer.prompt(internQuest).then((res) => {
    team.push(new Intern(res.intName, res.intId, res.intEmail, res.intSchool));
    addEmployees();
  });
}

function createEng() {
  inquirer.prompt(engineerQuest).then((res) => {
    team.push(
      new Engineer(res.engName, res.engId, res.engEmail, res.engGithub)
    );
    addEmployees();
  });
}

function createEmp() {
  inquirer.prompt(addEmpType).then((res) => {
    console.log(res);
    res.typeEmp === "Engineer" ? createEng() : createInt();
  });
}

function addEmployees() {
  inquirer.prompt(addNewEmployee).then((res) => {
    res.empAdd === "Yes" ? createEmp() : writeToFile("./index.html", teamProfile(team));
  });
}

function init() {
  inquirer.prompt(generateTeam).then((res) => {
    team.push(
      new Manager(
        res.managerName,
        res.managerId,
        res.managerEmail,
        res.managerPhone
      )
    );
    addEmployees();
  });
}

init();