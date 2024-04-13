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

/*
  // it is similar to:

  let myConfigObject = Object.create(null)
  Object.defineProperty(myConfigObject, 'myValue', {
    value: 1, // real value / valor real
    writable: false, // allow writing / permite escritura => default: false
    enumerable: false, // allow iteration / permite iteracion => default: false
    configurable: false // allow deletion / permite borrado => default: false
  })

*/

console.log('myConfigObject descriptor', Object.getOwnPropertyDescriptor(myConfigObject, 'myValue')) // {value: 1, writable: false, enumerable: false, configurable: false}

console.log('myConfigObject', myConfigObject)

myConfigObject.myValue = 10
console.log('after an update', myConfigObject)

for(prop in myConfigObject) {
  console.log('myConfigObject prop', prop)
}
console.log('after an iteration', myConfigObject)

delete myConfigObject.myValue
console.log('after a deletion', myConfigObject)

const objNoWritable = Object.create(Object.prototype, {myValue: {value: 1, configurable: true, writable: false} } )
console.log('objNoWritable.myValue', myConfigObject.myValue) // 1

Object.defineProperty(objNoWritable, 'myValue', {value: 2, configurable: true, writable: false})
console.log('objNoWritable.myValue', myConfigObject.myValue) // 2

console.log('-----------------------------------------------------------------------')

const obj = {
  prop: 123,
  get current() {
    return this._internalCurrent
  },
  set current(value) {
    this._internalCurrent = value
  },
}

console.log(obj.current) // undefined - get current()
console.log(obj._internalCurrent) // undefined

obj.current = 333 // calls to set current(333) / llama a set current(333)

console.log(obj.current) // 333 - get current()
console.log(obj._internalCurrent) // 333

console.log(obj) // {prop: 123, _internalCurrent: 333}
/**
  current: (...)
  _internalCurrent : 333
  prop : 123
  get current : ƒ current()
  set current : ƒ current(value)
*/

// read-only property / propiedad de solo lectura

const obj2 = {
  prop: 222,
  get autoCalculated() {
    return this.prop / 2
  },
}

console.log(obj2.autoCalculated) // 111

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

console.dir(result) // [[Scopes]] => Closure (externalFunction) {paramExternal: 50}


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

ctx.bind({x: 1}) // set context {x: 1} but it is not executed / setea el contexto pero no ejecuta la funcion

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
Person.call(a, param1, param2, ...) // call Person function and override its context with a / llama a la funcion Person y sobrescribe su context con 'a'
return a
*/

let objJuan = new Person('Juan', 21)
let objMaria = new Person('Maria', 20);

console.log('using new operator', objJuan, objMaria)

const Fn = () => {}

const variable = new Fn() // ERROR
