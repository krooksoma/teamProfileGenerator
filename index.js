// >>> line 87 here

// const htmlGenerator = require("htmlGenerator");
const inquirer = require("inquirer");


function collectData() {
  inquirer.prompt([
    {
      type: "confirm",
      message: "Would you like to add a team member?",
      name: "addMember",
    },    
  ])
  .then(val =>{
    if(val) {
        inquirer.prompt([
            {
                input: "choice",
                message: "What type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Manager",
                    "Intern"],
                name: "userChoice",
            }
        ])
        .then(chosen => data(chosen));

    }else{
        this.quit();
    }
  });


}

collectData();
// function quit(){
//     console.log("Session finished!");
//     process.exit(0);
// }

// function data (role){
//     if(role == "Manager"){
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "what is the team member ID?",
//                 name: "id",
//             },
//             {
//                 type: "input",
//                 message: "What is the team member name?",
//                 name: "name",
//             },
//             {
//                 type: "input",
//                 message: "what is the team member email?",
//                 name: "email",
//             },
//             {
//                 type: "input",
//                 message: "what is the team member office number?",
//                 name: "officeNumber",
//             }
//         ]);
//     }else if(role == "Engineer"){
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "what is the team member ID?",
//                 name: "id",
//             },
//             {
//                 type: "input",
//                 message: "What is the team member name?",
//                 name: "name",
//             },
//             {
//                 type: "input",
//                 message: "what is the team member email?",
//                 name: "email",
//             },
//             {
//                 type: "input",
//                 message: "What is your github",
//         ]);
//         // Answer about approach taken below
//     }else{
//         employeeQuestions();        
//         inquirer.prompt([            
//             {
//                 type: "input", 
//                 message: "what is your school?",
//                 name: "school",            
//             },
//         ]);
//     }
// }


// // Can I Do this???

// function employeeQuestions (){
//     inquirer.prompt([
//         {
//             type: "input",
//             message: "what is the team member ID?",
//             name: "id",
//         },
//         {
//             type: "input",
//             message: "What is the team member name?",
//             name: "name",
//         },
//         {
//             type: "input",
//             message: "what is the team member email?",
//             name: "email",
//         },
//     ])
// }