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
            type: "input",
            message: "What is your Team's Name?",
            name: "teamName"
        }
    ])
    .then(function(data) {
        const teamName = data.teamName;
        teamListArray.push(teamName);
    });
};