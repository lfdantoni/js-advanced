/**
 * data types / tipos de datos
 * Primitives/primitivos
 * - boolean: true or false
 * - number / numero
 * - null
 * - undefined
 * - string / texto: "hola", 'hola', `hola`
 * - symbol
 * 
 * Object / objeto
 * - object: {key: value} -> value can be primitive or object type.
 *                           value puede ser del tipo primitivo u objeto.
 * - array: [ valor1, valor2, ... ]
 * - function/funcion
 * ...
 */

var isBoolean = true;
var isNumber = 12;
var isUndefined = undefined;
var isNull = null;
var isString = "Hello world!";
var isSymbol = Symbol("description");

var isObject = { x: "test", y: 123 }
var isArray = [12, 5, "test"]
var isFunction = function() { }
var isLambdaFunction = () => { }

////////////////////////////////////////////
// constructors / constructores
////////////////////////////////////////////

// var
// can be redeclareted  / puede ser redeclarado
var myVariable = 12
var myVariable = 13
// can be redifined / puede ser redefinido
myVariable = "test"
// global scope / admite alcance global
if(true) {
  var myVariable2 = 14
}
// console.log(myVariable2)

// let
// cannot be redeclareted  / NO puede ser redeclarado

let myLetVariable = true;
// let myLetVariable = true; //ERROR!!

// can be redifined / puede ser redefinido
myLetVariable = "test";

// NO global scope / NO admite alcance global
if(true) {
  let myLetVariable2 = 14
}
// console.log(myLetVariable2) // ERROR!!!

// const
// cannot be redeclareted  / NO puede ser redeclarado
const myConstVariable = true;
// const myConstVariable = true; //ERROR!!

// cannot be redifined / NO puede ser redefinido
// myConstVariable = ""; // ERROR!!

// NO global scope / NO admite alcance global
if(true) {
  const myConstVariable2 = 14
}
// console.log(myConstVariable2) // ERROR!!!

// internal properties can be modified / propiedades internas pueden ser modificadas
const myConstVariable3 = { prop: "test" };
myConstVariable3.prop = "hello"
// console.log(myConstVariable3) // OK!

/////////////////////////////////////////////////////////
// object access types / tipos de accesos a objetos
/////////////////////////////////////////////////////////
const obj = { x:1, y:2, 0:true }

// string index
// console.log(obj.x)

// number index / indice numerico
// console.log(obj.0) // ERROR!!

// bracket / corchete
// console.log(obj["x"])
// console.log(obj[0])

// dynamic index / indice dinamico o variable
const index = "x"
// console.log(obj[variable])

/////////////////////////////////////////////////////////
// arrow functions / lambda functions / functiones flecha
/////////////////////////////////////////////////////////

// classic function / funcion clasica en JS
const foo = function() {
  console.log("Foo!")
}

// arrow function / function flecha
const lambdaFoo = () => { console.log("Lambda Foo!") }

// only one param / un solo parametro
const oneParamFunction = function(param) { 
  console.log(param)
}

const lambdaOneParamFunction = param => { 
  console.log(param)
}

// multiple params / multiple parametros
const lambdaMultipleParamsFunction = (param1, param2) => { 
  console.log(param1, param2)
}

// BOM (Browser Object Model) / window object
console.log(window.innerWidth)

// DOM (Domain Object Model) / document object
console.log(window.document.getElementsByTagName("h1"))
console.log(document.getElementsByTagName("h1"))

// create a DOM element / creaar un elemento DOM
const divElement = document.createElement("div")
const elements = document.getElementById('elements')
elements.appendChild(divElement)

// modify an element / modificar un elemento
const header = document.getElementsByTagName("h1")[0]
header.innerText = "From JS!"

// add a css class / agregar una clase css
header.classList.add('my-class')
// remove a css class / quitar una clase css
header.classList.remove('my-class')
// toggle a css class / alternar una clase css
header.classList.toggle('my-class')

// create data-* attributes / crear atributos data-*
console.log(header.dataset)
header.dataset.type = "test2"

// remove DOM elements / quitar elementos del DOM elementToRemove
const elementToRemove = document.getElementById('elementToRemove')
const parent = elementToRemove.parentNode;
parent.removeChild(elementToRemove)

