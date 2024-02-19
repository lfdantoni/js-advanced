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
 * - object: {key: value} -> value can be a primitive or object type.
 *                           value puede ser del tipo primitivo u objeto.
 * - array: [ valor1, valor2, ... ]
 * - function/funcion
 * ...
 */

var isBoolean = true;
console.log('isBoolean: ', typeof isBoolean)
var isNumber = 12;
console.log('isNumber: ', typeof isNumber)
var isUndefined = undefined;
console.log('isUndefined: ', typeof isUndefined)
var isNull = null;
console.log('isNull: ', typeof isNull) // it will show object, but it is for legacy reasons, it should not manage as an object.
var isString = "Hello world!";
console.log('isString: ', typeof isString)
var isSymbol = Symbol("description"); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
console.log('isSymbol: ', typeof isSymbol)

var isObject = { x: "test", y: 123 }
console.log('isObject: ', typeof isObject)
var isArray = [12, 5, "test"]
console.log('isArray: ', typeof isArray)
var isFunction = function() { }
console.log('isFunction: ', typeof isFunction)
var isLambdaFunction = () => { }
console.log('isLambdaFunction: ', typeof isLambdaFunction)

////////////////////////////////////////////
// constructors / constructores
////////////////////////////////////////////

// var
// can be redeclared  / puede ser redeclarado
var myVariable = 12
var myVariable = 13
// can be redefined / puede ser redefinido
myVariable = "test"
// global scope / admite alcance global
if(true) {
  var myVariable2 = 14
}
// console.log(myVariable2)

// let
// cannot be redeclared  / NO puede ser redeclarado

let myLetVariable = true;
// let myLetVariable = true; //ERROR!!

// can be redefined / puede ser redefinido
myLetVariable = "test";

// NO global scope / NO admite alcance global
if(true) {
  let myLetVariable2 = 14
}
// console.log(myLetVariable2) // ERROR!!!

// const
// cannot be redeclared  / NO puede ser redeclarado
const myConstVariable = true;
// const myConstVariable = true; //ERROR!!

// cannot be redefined / NO puede ser redefinido
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
// console.log(obj[0]) // OK!

// bracket / corchete
// console.log(obj["x"])  // OK!
// console.log(obj[0])  // OK!

// dynamic index / indice dinamico o variable
const index = "x"
// console.log(obj[variable]) // OK!

/////////////////////////////////////////////////////////
// arrow functions / lambda functions / functiones flecha
/////////////////////////////////////////////////////////

// classic function / funcion clasica en JS
console.log(foo2()) // OK!
console.log(window.foo2()) // OK!
function foo2() {
  // JS hoisting, it will be available before the declaration
  console.log("Foo2!")
}

// console.log(foo) // ERROR!!
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

// create a DOM element / crear un elemento DOM
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