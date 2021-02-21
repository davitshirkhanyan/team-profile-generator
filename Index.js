const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { writeFile, copyFile } = require("./utils/generate-page");

let teamListArray = [];

// add function to enter team's name
function userPrompt() {
    inquirer.prompt([
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
function addManager() {
    inquirer.prompt([
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
        const name = name;
        const id = 1;
        const email = data.email;
        const officeNumber = data.officeNumber;
        const teamMember = new Manager(name, id, email, officeNumber);
        teamListArray.push(teamMember);
    });
};