const Employee = require('./Employee');

class Manager extends Employee{    
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber === undefined ? "No office Number" : officeNumber;
    }

    getRole(){
        return "Manager";
    }

    getofficeNumber(){
        return this.officeNumber;
    }   
    
    createManager(){
        ` <div class="card" style="width: 18rem;">
         <img class="card-img-top" src="..." alt="Card image cap">
         <div class="card-body">
           <h5 class="card-title">Manager</h5>
           <p class="card-text">
           <ul>
           <li>${this.id} </li>
           <li>${this.name} </li>
           <li>${this.email} </li>
           <li>${this.officeNumber}</li>
           </ul>
           </p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
         </div>
       </div>`
     }
}



module.exports = Manager;