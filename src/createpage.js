
let finalhtml = [];

const engineer = (dataen) =>{
return `<div class="card">
<div class="container">
  <h4><b>${dataen.name}</b></h4>
  <p>${dataen.id}</p>
  <p>${dataen.email}</p>
  <p>${dataen.git}</p>
</div>
</div>`
}
const intern = (dataen) =>{
    return `<div class="card">
    <div class="container">
      <h4><b>${dataen.name}</b></h4>
      <p>${dataen.id}</p>
      <p>${dataen.email}</p>
      <p>${dataen.git}</p>
    </div>
    </div>`
    }
const Manager = (dataen) =>{
        return `<div class="card">
        <div class="container">
          <h4><b>${dataen.name}</b></h4>
          <p>${dataen.id}</p>
          <p>${dataen.email}</p>
          <p>${dataen.git}</p>
        </div>
        </div>`
        }
const totalp = (final) => {
    return `<!doctype html>
    <html>
    <head>
    <title>Team Page</title>
    <meta name="description" content="Our first page">
    <meta name="keywords" content="html tutorial template">
    </head>
    <body>
    ${final}
    </body>
    </html>`
}

// create added html for loop

module.exports = { totalp, engineer, Manager, intern };