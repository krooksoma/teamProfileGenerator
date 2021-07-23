const createManagerCard = (data) => {
   return `
   <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"> 💼 ${data.getRole()}</h5>
      <p class="card-text">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id} </li>
      <li class="list-group-item">Name: ${data.name} </li>
      <li class="list-group-item">E-mail:<a href="mailto: ${data.email}?subject=your title&body=TThe message">
        <button class="btn" id="btnOutlook">${data.email}</button>
    </a></li>
      <li class="list-group-item">Office Number: ${data.officeNumber}</li>
      </ul>
      </p>      
    </div>
  </div>`;
}


const createEngineerCard = (data) => {
   return `
   <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">🛠️ ${data.getRole()}</h5>
      <p class="card-text">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id} </li>
      <li class="list-group-item">Name: ${data.name} </li>
      <li class="list-group-item">E-mail:<a href="mailto: ${data.email}?subject=your title&body=TThe message">
        <button class="btn" id="btnOutlook">${data.email}</button>
    </a></li>
      <li class="list-group-item">Github: <a href="https://github.com/${data.github}">${data.github} </a></li>
      </ul>
      </p>      
    </div>
  </div>`;
}

const createInternCard = (data) => {
   return `
   <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"> 🧑‍🎓 ${data.getRole()}</h5>
      <p class="card-text">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id} </li>
      <li class="list-group-item">Name: ${data.name} </li>
      <li class="list-group-item">E-mail:<a href="mailto: ${data.email}?subject=your title&body=TThe message">
        <button class="btn" id="btnOutlook">${data.email}</button>
    </a></li>
      <li class="list-group-item">School: ${data.school}</li>
      </ul>
      </p>      
    </div>
  </div>`;
}


  


module.exports = {createManagerCard, createEngineerCard, createInternCard};