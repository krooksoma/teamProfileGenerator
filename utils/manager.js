const employee = require('employee');

class Manager extends Employee{    
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }

    getOffice(){
        return this.officeNumber;
    }

}


// Manager.prototype.getRole = () =>{
//     return "Manager";
// }
module.exports = Manager;