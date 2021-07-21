class Employee{
    constructor(name, id, email){
        this.name = name === undefined? "Anonymous" : name;
        this.id = id === undefined? 0 : id;
        this.email = email === undefined? "no email" : email;
    }  

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee"
    }

}

module.exports = Employee;
