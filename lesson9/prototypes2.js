/////////////////////////////////////////////
// Example 1
////////////////////////////////////////////

// function Person() { }

// Person.prototype.age = 21;

// const juan = new Person()

// console.dir(Person)
// console.dir(juan)
// console.log(juan.age)

//////////////////////////////////////////////////////////
// Example 2
//////////////////////////////////////////////////////////

// function Person(name) {
//   this.name = name
// }

// Person.prototype.age = 21;

// const julia = new Person()

// console.log(juan.age)
// console.log(julia.age) // both are the same due to age is a prototype property / ambas son iguales debido a que age es una propiedad de prototipo

// age should be an instance property / age deberia ser una propiedad de instancia
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// Person.prototype.greeting = function() {
//   console.log('hello there!', this)
// } 

// const julia = new Person('Julia', 18)
// const juan = new Person('juan', 21)


// console.log(juan.age)
// console.log(julia.age)

// juan.greeting()
// julia.greeting()

//////////////////////////////////////////////////////////
// Example 3
//////////////////////////////////////////////////////////
// const juan = new Person()

// function Person() {}

// // const julia = new Worker() // that will fail / esto va a fallar

// class Worker {}

// const julia = new Worker()

// look at juan and julia prototypes on console / mirar los prototipos de juan y julia en la consola


//////////////////////////////////////////////////////////
// Example 4
//////////////////////////////////////////////////////////
// const juan = new Person('Juan')

// function Person(name) {
//   this.name = name
// }

// // const julia = new Worker() // that will fail / esto va a fallar

// class Worker {
//   constructor(name) {
//     this.name = name
//   }
// }

// const julia = new Worker('Julia')


//////////////////////////////////////////////////////////
// Example 5
//////////////////////////////////////////////////////////
// function Person(name) {
//   this.name = name
// }

// Person.prototype.sayHi = function() {
//   console.log('Hello there!')
// }

// class Worker {
//   constructor(name) {
//     this.name = name
//   }

//   sayHi() {
//     console.log('Hello there!')
//   }
  
// }

// const juan = new Person('Juan')
// const julia = new Worker('Julia')
// look at juan and julia prototypes on console / mirar los prototipos de juan y julia en la consola

//////////////////////////////////////////////////////////
// Example 6
//////////////////////////////////////////////////////////
// function Person(name) {
//   this.name = name
// }

// Person.classMethod = function() {
//   console.log('Person class method!')
// }

// Person.prototype.sayHi = function() {
//   console.log('Hello there!')
// }

// class Worker {
//   constructor(name) {
//     this.name = name
//   }

//   sayHi() {
//     console.log('Hello there!')
//   }

//   static classMethod() {
//     console.log('Worker class method!')
//   }
  
// }

// console.dir(Person)
// console.dir(Worker)
// const juan = new Person('Juan')
// const julia = new Worker('Julia')
// Person.classMethod()
// Worker.classMethod()
// juan.classMethod() // it will fail due to it is not an instance method / esto va a fallar ya que classMethod no es un metodo de instancia


/////////////////////////////////////////////
// Example 7 - Object inheritance with prototypes / herencia de objetos con prototipos
////////////////////////////////////////////
// const person = {
//   greeting: function() {
//     console.log('Hello there!')
//   }
// }

// const julia = Object.create(person)
// // const juan = Object.create(person)

// // show both on the browser console / ver ambos objetos en la consola del browser

// const worker = {
//   working: function() {
//     console.log('I am working...')
//   }
// }

// // const juan = Object.create(worker)

// // worker could be a person, however, now there is no connection between them / worker podria ser una persona, sin embargo, actualmente no tienen ninguna coneccion

// const juan = Object.create(person, {
//   working: {
//     value: function() {
//       console.log('I am working...')
//     }
//   }
// })

/////////////////////////////////////////////
// Example 8 - Class inheritance with prototypes / herencia de clases con prototipos
////////////////////////////////////////////
// // Super class
// function Person(name) {
//   this.name = name
// }

// Person.prototype.sayHi = function() {
//   console.log('Hello there!')
// }

// // Sub class
// function Worker(salary) {
//   this.salary = salary
// }

// // Worker.prototype = Person.prototype
// // Worker.prototype.working = function() {
// //   console.log('I am working...')
// // }

// // console.dir(Worker) // Problem: worker and person methods are mixing in the same prototype / Problema: los metodos the worker y person estan mezclados en el mismo prototipo

// Worker.prototype = Object.create(Person.prototype) // it is creating a new object which its prototype is the Person one / esta creando un nuevo objeto el cual su prototipo es el de persona
// Worker.prototype.working = function() {
//   console.log('I am working...')
// }

// console.dir(Worker)
// console.dir(new Worker(1))

/////////////////////////////////////////////
// Example 9
////////////////////////////////////////////

// // Super class
// function Person(name) {
//   this.name = name
// }

// Person.prototype.sayHi = function() {
//   console.log('Hello there!')
// }

// // Sub class
// function Worker(name, salary) {
//   this.salary = salary
// // Class composition / composition de clases
//   Person.call(this, name) // I am getting the Person properties by calling its constructor / estoy trayendo las propiedades de persona llamando a su constructor
// }

// Worker.prototype = Object.create(Person.prototype)

// const juan = new Worker('Juan', 100)
// console.dir(juan)


/////////////////////////////////////////////
// Example 10
////////////////////////////////////////////

// // Super class
// class Person {
//   constructor(name) {
//     this.name = name
//   }

//   sayHi() {
//     console.log('Hello there!')
//   }
// }

// // Sub class
// class Worker extends Person {
//   constructor(name, salary) {
//     super(name) 
//     this.salary = salary
//   }

//   working() {
//     console.log('I am working...')
//   }
// }

// const juan = new Worker('juan', 200)


/////////////////////////////////////////////
// Example 11
////////////////////////////////////////////

// Problem
// function mySoft() {

// }

// mySoft() // it can be replaced / puede ser remplazado

const program = (function(param) {
  const privateVar = 1
  console.log(param)

  return {
    sayHi: () => {
      console.log('Hello There!', privateVar)
    }
  }
})(2)

program.sayHi()