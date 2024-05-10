import * as styles from './styles.css';
import { Component } from './Component'

console.log('test3', styles.component)

// const componentModule = require('./component')

const app = document.getElementById('app')

const component = Component({ text: 'Hello world!!!' })

app.appendChild(component)

// fetch(process.env.API_URL)
//   .then(res => res.text())
//   .then(text => console.log(text))