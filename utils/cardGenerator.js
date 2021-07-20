
class Card{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    addDataToPage();
    
}

function addDataToPage (){
    let newCard = [];
    let cardTitle = `<h3> ${this.name} </h3>`;
    let cardId = `<p> ${this.id} </p>`;
    let cardEmail = `<p> ${this.email} </p>`;

    newCard.push(cardTitle, cardId, cardEmail);
    
    if(this.github !== null){
        let cardGit = `<p> ${this.github} </p>`;
        newCard.push(cardGit);
    }

    if(this.officeNumber !== null){
        let cardOffice = `<p> ${this.officeNumber} </p>`;
        newCard.push(cardOffice);
    }

    if(this.school !== null){
        let cardSchool = `<p> ${this.school} </p>`;
        newCard.push(cardSchool);
    }
}
