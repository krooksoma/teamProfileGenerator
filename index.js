const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const cardGenerator = require("./dist/cardGenerator");
const arrayString = [];
let i = 0;

function collectData() {
  // first inquirer prompt. Creates manager to the team
  inquirer
    .prompt([
      {
        type: "input",
        message: "what is the Manager ID?",
        name: "id",
      },
    //   change to manager
      {
        type: "input",
        message: "What is the Manager name?",
        name: "name",
      },
      {
        type: "input",
        message: "what is the Manager email?",
        name: "email",
      },
      {
        type: "input",
        message: "What the Manager number?",
        name: "officeNumber",
      },
    ])
    // call function to create manager card
    .then((val) => {
      const newManager = new Manager(
        val.id,
        val.name,
        val.email,
        val.officeNumber
      );
      console.log("-------manager created--------");
      console.log(newManager);
      
      // ---need to send the data to the newly created member
      createManagerCard(newManager);  

      
      addMember();
    });
  // ---even when no is selected it does not quit execution
  // ---make a function out of this add a member?
}
function addMember() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to add a team member?",
        name: "addMember",
      },
    ])    
    .then((val) => {
      if (val) {
        inquirer
          .prompt([
            {
              type: "list",
              message: "Which team member would you like to add?",
              name: "userChoice",
              choices: ["Engineer", "Intern", "exit"]
            },
          ])
          //   gets the value of the option chosen and send it to data which runs the inquirer for that class
          .then((chosen) => {
              if(chosen.userChoice === "exit"){
                  quit();
              }else{
            data(chosen.userChoice);   
            
              }
          })
        //   where to add the call for function add member? promise after data() is run?
      } 
    });

  function quit() {
    console.log("Session finished!");
    process.exit(0);
  }
}


//  do I add a promise after the inquirer to create the new member?
function data(role) {
  if (role == "Engineer") {
    inquirer.prompt([
      {
        type: "input",
        message: "what is the Engineer ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Engineer name?",
        name: "name",
      },
      {
        type: "input",
        message: "what is the Engineer email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your Engineer github",
        name: "github",
      },
    ])
    .then(eng => {
        let newEngineer = new Engineer(
          eng.id,
          eng.name,
          eng.email,
          eng.github,
        );
        addMember();
    })
    
  } else if (role === "Intern") {
    inquirer.prompt([
      {
        type: "input",
        message: "what is the Intern ID?",
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
    ])
    .then(intern => {
        let newIntern = new Intern(
          intern.id,
          intern.name, 
          intern.email,
          intern.school,
        )
        addMember();
    })
}}

// this one starts the execution
collectData();