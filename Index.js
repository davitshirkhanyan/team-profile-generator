const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
        const id = teamListArray.length;
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
        const id = teamListArray.length;
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
                pageGenerator();
                break;
        }
    });
};

// add function to generate the html page
let pageGenerator = function() {
    const htmlArray = [];
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <header>
        <h1>${teamListArray[0]}</h1>
    </header>

    <main>
    `
    htmlArray.push(htmlBeginning);
    for (let i = 1; i < teamListArray.length; i++) {
        let obj = `
        <section class="member-card">
            <div class="card-top">
                <h2>${teamListArray[i].name}</h2>
                `
                if (teamListArray[i].title === "Manager") {
                    obj += `
                <h2><i class="fa fa-coffee"> ${teamListArray[i].title}</i></h2>
                `
                }
                if (teamListArray[i].title === "Engineer") {
                    obj += `
                <h2><i class="fa fa-id-badge"> ${teamListArray[i].title}</i></h2>
                `
                }
                if (teamListArray[i].title === "Intern") {
                    obj += `
                <h2><i class="fa fa-graduation-cap"> ${teamListArray[i].title}</i></h2>
                `
                }
                obj += `
                </div>
            <ul class="card-bottom">
                <li>Employee ID: ${teamListArray[i].id}</li>
                <li>Email: <a href="mailto:${teamListArray[i].email}">${teamListArray[i].email}</a></li>
                `
                if (teamListArray[i].officeNumber) {
                    obj += `
                    <li>Office Number: ${teamListArray[i].officeNumber}</li>
                    `
                }
                if (teamListArray[i].github) {
                    obj += `
                    <li>Github: <a href="https://github.com/${teamListArray[i].github}" target="_blank">${teamListArray[i].github}</a></li>
                    `
                }
                if (teamListArray[i].school) {
                    obj += `
                    <li>School: ${teamListArray[i].school}</li>
                    `
                }
                obj += `  
            </ul>
        </section>
        `
        htmlArray.push(obj);
     }
     
     const htmlEnd = `
    </main>
  </body>
</html>
`
htmlArray.push(htmlEnd);
fs.writeFile(`./dist/index.html`, htmlArray.join(""), function (err) {

});
fs.copyFile('./src/style.css', './dist/style.css', err => { 

});
};

userPrompt()
.catch(err => {
console.log(err);
});

