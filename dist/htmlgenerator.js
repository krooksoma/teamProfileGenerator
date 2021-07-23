// this function will receive all the data from the populated array and add it to the html body
const fs = require('fs');

function webpage (data){

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
        crossorigin="anonymous">
        <link rel="stylesheet" href="./utils/style.css">
        <title>Document</title>
    </head>
    <header class="jumbotron jumbotron-fluid justify-content-center align-items-center mt-0">
    <div class="d-flex justify-content-center align-items-center">
    <h1 class= "display-4">🌎 Team Management Webpage</h1>
    </div>
    </header>
    
    <body>
    <main>
        ${data.join("")}
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
    crossorigin="anonymous"></script>
    </body>
    </html>`;  
    
    
}

// fs.writeFile("index.html", newWebpage, (err) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('file succesfully created');
//     }
// }
// )    
module.exports = webpage;