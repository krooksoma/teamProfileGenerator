const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const cardGenerator = require("./dist/cardGenerator");
const arrayString = [];

function collectData() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "what is the team member ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team member name?",
        name: "name",
      },
      {
        type: "input",
        message: "what is the team member email?",
        name: "email",
      },
      {
        type: "input",
        message: "What the member office number?",
        name: "officeNumber",
      },
    ])
    // call function to create manager card
    .then((val) => {
      const newManager = new Manager(val.id, val.name, val.email, val.officeNumber);
      console.log("-------manager created--------");     
      console.log(newManager.createManager());
      
    // need to send the date to the newly created member
    // get back the whole string 
    // JSON.stringify the data and add to the array.
    })
    .then(() =>
      inquirer.prompt([
        {
          type: "confirm",
          message: "Would you like to add a team member?",
          name: "addMember",
        },
      ])
    )
    // add while loop here for add member inquirer?
    .then((val) => {
      if (val) {
        inquirer
          .prompt([
            {
              type: "list",
              message: "What type of team member would you like to add?",
              name: "userChoice",
              choices: ["Engineer", "Intern", "Employee"],
            },
          ])
          .then((chosen) => {
            data(chosen.userChoice);
            console.log(chosen);
          });
      } else {
        this.quit();
      }
    });

  function quit() {
    console.log("Session finished!");
    process.exit(0);
  }
}

collectData();

function data(role) {
  if (role == "Employee") {
    inquirer.prompt([
      {
        type: "input",
        message: "what is the team member ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team member name?",
        name: "name",
      },
      {
        type: "input",
        message: "what is the team member email?",
        name: "email",
      },
    ]);
  } else if (role == "Engineer") {
    inquirer.prompt([
      {
        type: "input",
        message: "what is the team member ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team member name?",
        name: "name",
      },
      {
        type: "input",
        message: "what is the team member email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your github",
        name: "github",
      },
    ]);
    // Answer about approach taken below
  } else if (role === "Intern") {
    inquirer.prompt([
      {
        type: "input",
        message: "what is the team member ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team member name?",
        name: "name",
      },
      {
        type: "input",
        message: "what is the team member email?",
        name: "email",
      },
      {
        type: "input",
        message: "what is your school?",
        name: "school",
      },
    ]);
  }
}

// // Can I Do this???
