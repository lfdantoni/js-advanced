console.log('test2')

const componentModule = require('./component')

const app = document.getElementById('app')

app.appendChild(componentModule.Component())

fetch('http://localhost:3000')
  .then(res => res.text())
  .then(text => console.log(text))