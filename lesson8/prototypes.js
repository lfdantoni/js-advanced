// Prototypes
// Object creation types / tipos de creacion de un objeto

// Literal or "automatic"
let myObject = {}
console.log('myObject.__proto__', myObject.__proto__) // __proto__ is an object

// Object.create
let myPrototype = { sayHi: () => console.log('Hello there!') }

let mySecondObject = Object.create(myPrototype)
console.log('mySecondObject.__proto__', mySecondObject.__proto__) // __proto__ is myPrototype
mySecondObject.sayHi()

// configure an object / configurar un objeto
let myConfigObject = Object.create(null, // first param is null, so myConfigObject does not have a prototype / el primer parametro es null, por ende myConfigObject no tiene prototipo
{ 
  myValue: {
    value: 1, // real value / valor real
    writable: false, // allow writing / permite escritura => default: false
    enumerable: false, // allow iteration / permite iteracion => default: false
    configurable: false // allow deletion / permite borrado => default: false
  }
})

console.log('myConfigObject', myConfigObject)

myConfigObject.myValue = 10
console.log('after an update', myConfigObject)

for(prop in myConfigObject) {
  console.log('myConfigObject prop', prop)
}
console.log('after an iteration', myConfigObject)

delete myConfigObject.myValue
console.log('after a deletion', myConfigObject)

console.log('-----------------------------------------------------------------------')

// Functions / funciones
// Variadic / variadica
function foo(p1, p2, p3) {
  console.log('foo', p1, p2, p3)
}

foo(1)

// Scope / ambito
const global1 = 1

function myFunction(p1) {
  const local = 10
  console.log('myFunction', global1, p1, local)
}

myFunction(20)

// Scope / ambito => Closure
function externalFunction(paramExternal) {
  return function internalFunction(paramInternal) {
    console.log('internal function', paramExternal + paramInternal)
  }
}

const result = externalFunction(50)
result(30) // 50 + 30 = 80


// CONTEXT

function ctx(a, b) {
  console.log(this, a, b)
}
// normal
console.log('CONTEXT NORMAL')
ctx(10, 20) // context is window
// apply
console.log('CONTEXT APPLY')
ctx.apply() // context is window
ctx.apply({x: 1}, [10, 20]) // context is {x: 1}
// call
console.log('CONTEXT CALL')
ctx.call() // context is window
ctx.call({x: 1}, 10, 20) // context is {x: 1}

console.log('-----------------------------------------------------------------------')

// Object Factory / funciones contructoras
let person = {
  name: '',
  age: 21
}

let juan = person;
let maria = person;

juan.name = 'juan'
console.log(juan, maria) // juan and maria have the same name // juan y maria tienen el mismo nombre

// funcion constructora
function personFn(name, age) {
  const p = {
    name: name,
    age: age
  }

  return p
  // personFn function is destroyed when its execution has finished / la funcion personFn se destruye cuand su ejecucion haya finalizado
}

let newJuan = personFn('Juan', 21);
let newMaria = personFn('Maria', 20);

console.log('using personFn', newJuan, newMaria)

console.log('-----------------------------------------------------------------------')

// new operator / operador new

function Person(name, age) {
  this.name = name
  this.age = age
}

// actions performed by 'new' operator / acciones realizadas por el operador 'new'
/*
let a = {} // template / plantilla
Person.call(a) // call Person function and override its context with a / llama a la funcion Person y sobrescribe su context con 'a'
return a
*/

let objJuan = new Person('Juan', 21)
let objMaria = new Person('Maria', 20);

console.log('using new operator', objJuan, objMaria)

const Fn = () => {}

const variable = new Fn()