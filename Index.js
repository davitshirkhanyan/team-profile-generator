const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { writeFile, copyFile } = require("./utils/generate-page");

let teamListArray = [];

// add function to enter team's name
const userPrompt = () => {
    return inquirer.prompt([
        {
            name: "teamName",
            type: "input",
            message: "Please enter your Team's name? (Required)",
            validate: teamName => {
                if (teamName) {
                  return true;
                } else {
                  console.log("Please enter your Team's name!");
                  return false;
                }
            }
        }
    ])
    .then(function(data) {
        const teamName = data.teamName;
        teamListArray.push(teamName);
        addManager();
    });
};

// add function to get manager's data
const addManager = () => {
   return inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please enter your Manager's name (Required)",
            validate: managerName => {
                if (managerName) {
                  return true;
                } else {
                  console.log("Please enter your Manager's name!");
                  return false;
                }
            }
        },
    
        {
            name: "email",
            type: "input",
            message: "Please enter your Manager's email address"
        },

        {
            name: "officeNumber",
            type: "number",
            message: "Please enter your Manager's office number"
        }
    ])
    .then(function(data) {
        const name = data.name;
        const id = 1;
        const email = data.email;
        const officeNumber = data.officeNumber;
        const teamMember = new Manager(name, id, email, officeNumber);
        teamListArray.push(teamMember);
        addTeamMembers();
    });
};

// add function to get engineer's data
const addEngineer = () => {
    return inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please enter the Engineer's name (Required)",
            validate: engineerName => {
                if (engineerName) {
                  return true;
                } else {
                  console.log("Please enter the Engineer's name!");
                  return false;
                }
            }
        },
    
        {
            name: "email",
            type: "input",
            message: "Please enter the Engineer's email address"
        },

        {
            name: "github",
            type: "input",
            message: "Please enter the Engineer's Github profile"
        }
    ])
    .then(function(data) {
        const name = data.name;
        const id = teamListArray.length + 1;
        const email = data.email;
        const github = data.github;
        const teamMember = new Engineer(name, id, email, github);
        teamListArray.push(teamMember);
        addTeamMembers();
    });
};

// add function to get intern's data
const addIntern = () => {
    return inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please enter the Intern's name (Required)",
            validate: InternName => {
                if (InternName) {
                  return true;
                } else {
                  console.log("Please enter the Intern's name!");
                  return false;
                }
            }
        },
    
        {
            name: "email",
            type: "input",
            message: "Please enter the Intern's email address"
        },

        {
            name: "school",
            type: "input",
            message: "Please enter the Intern's School"
        }
    ])
    .then(function(data) {
        const name = data.name;
        const id = teamListArray.length + 1;
        const email = data.email;
        const school = data.school;
        const teamMember = new Intern(name, id, email, school);
        teamListArray.push(teamMember);
        addTeamMembers();
    });
};

// add function to get team members data
const addTeamMembers = () => {
    return inquirer.prompt([
        {
            name: "addMember",
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes, add an Engineer", "Yes, add an Intern", "No, my Team is complete"]
        }
    ])
    .then(function(data) {
        switch (data.addMember) {
            case "Yes, add an Engineer":
                addEngineer();
                break;

            case "Yes, add an Intern":
                addIntern();
                break;

            case "No, my Team is complete":
                break;
        }
    });
};

userPrompt();

