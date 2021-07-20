const employee = require('employee');

class Engineer extends Employee{
    constructor(github){
        this.super(name, id, email);
        this.github = github;
    }



    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }

}



module.exports = Engineer;