


const engineer = (dataen) =>{
return `<div class="card">
<div class="container">
  <h4><b>Engineer: ${dataen.name}</b></h4>
  <p>${dataen.id}</p>
  <p>${dataen.email}</p>
  <p>${dataen.git}</p>
</div>
</div>`
}
const intern = (dataen) =>{
    return `<div class="card">
    <div class="container">
      <h4><b>Intern: ${dataen.name}</b></h4>
      <p>${dataen.id}</p>
      <p>${dataen.email}</p>
      <p>${dataen.git}</p>
    </div>
    </div>`
    }
const Manager = (dataen) =>{
        return `<div class="card">
        <div class="container">
          <h4><b>Manager: ${dataen.name}</b></h4>
          <p>${dataen.id}</p>
          <p>${dataen.email}</p>
          <p>${dataen.git}</p>
        </div>
        </div>`
        }
const totalp = (final) => {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Company Employees</title>
      </head>
      <body>
      <center>
      <h1>FINAL TEAM COMPOSTITION</h1>
      ${final}
      </center>  
      </body>
      </html>
      `
}

// create added html for loop

module.exports = { totalp, engineer, Manager, intern };