const fina = (lite) =>{
const finalhtml = [];

const engineer = (dataen) =>{
return `<div class="card">
<div class="container">
  <h4><b>${dataen.name}</b></h4>
  <p>${dataen.id}}</p>
  <p>${dataen.email}</p>
  <p>${dataen.git}</p>
</div>
</div>`
}
const intern = (dataen) =>{
    return `<div class="card">
    <div class="container">
      <h4><b>${dataen.name}</b></h4>
      <p>${dataen.id}}</p>
      <p>${dataen.email}</p>
      <p>${dataen.git}</p>
    </div>
    </div>`
    }
const Manager = (dataen) =>{
        return `<div class="card">
        <div class="container">
          <h4><b>${dataen.name}</b></h4>
          <p>${dataen.id}}</p>
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
    ${pagef(final)}
    </body>
    </html>`
}

// create added html for loop
function pagef(lit){

const htmlc = [];
for(i = 0; i > 4; i++){
if(lit.findRole() === 'Manager'){
  htmlc.push(Manager(lit[i]))
}
else if(lit.findRole() === 'Engineer'){
  htmlc.push(engineer(lit[i]))
}
else {
    htmlc.push(intern(lit[i]))
}
finalhtml = htmlc.join('');
return totalp(finalhtml);
}
}

totalp(lite);
}


module.exports = fina();