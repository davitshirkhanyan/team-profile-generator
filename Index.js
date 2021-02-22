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
            type: "number",
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
    });
};

userPrompt();

