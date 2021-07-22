const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const {createManagerCard, createEngineerCard, createInternCard} = require("./dist/cardGenerator");
const webpage =require("./dist/htmlgenerator");
const fs = require("fs");
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
      
      // send the data to the newly created member and push to string     
      arrayString.push(createManagerCard(newManager))  
      
      addMember();
    });
  
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
      if (val.addMember) {
        inquirer
          .prompt([
            {
              type: "list",
              message: "Which team member would you like to add?",
              name: "userChoice",
              choices: ["Engineer", "Intern"]
            },
          ])
          //   gets the value of the option chosen and send it to data which runs the inquirer for that class
          .then((chosen) => {
              
            data(chosen.userChoice);   
            
              
          })
        // if receives no calls for function to quit
      } else {
        quit();
      }
    });

  function quit() {
    // creates the index.html file and populate it with the array of members
    fs.writeFile("index.html", webpage(arrayString), (err) =>{
      if(err){
          console.log(err);
      }else{
          console.log('file succesfully created');
          console.log("Session finished!");
          process.exit(0);
      }
  })  
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

        arrayString.push(createEngineerCard(newEngineer));
        console.log(arrayString);
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
        message: "What is the Intern name?",
        name: "name",
      },
      {
        type: "input",
        message: "what is the Intern email?",
        name: "email",
      },
      {
        type: "input",
        message: "what is the Intern school?",
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
        arrayString.push(createInternCard(newIntern));
        console.log(arrayString);
        addMember();
    })
}}

// this one starts the execution
collectData();