console.log('test2')

const componentModule = require('./component')

const app = document.getElementById('app')

console.log(process.env.MY_VAR)

app.appendChild(componentModule.Component())

fetch(process.env.API_URL)
  .then(res => res.text())
  .then(text => console.log(text))