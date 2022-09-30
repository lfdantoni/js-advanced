const game = initGame({mapElementId: 'map'})

// player classes: 'warrior' or 'wizard'
// hp: 0 - 100

// const player = {
//   x: 5,
//   y: 10,
//   class: 'warrior',
//   hp: 75
// }


/////////////////////////////////////////////
// Example 1
////////////////////////////////////////////

// function Player() { }

// Player.prototype.hp = 70;

// const player = new Player()

// console.dir(Player)
// console.dir(player)
// console.log(player.hp)

//////////////////////////////////////////////////////////
// Example 2
//////////////////////////////////////////////////////////

// function Player(x, y) {
//   this.x = x
//   this.y = y
// }

// Player.prototype.hp = 20;

// const player = new Player()
// const player2 = new Player()

// console.log(player.hp)
// console.log(player2.hp) // both are the same due to hp is a prototype property / ambas son iguales debido a que hp es una propiedad de prototipo

// hp should be an instance property / hp deberia ser una propiedad de instancia
// function Player(x, y, hp) {
//   this.x = x
//   this.y = y
//   this.hp = hp
// }

// Player.prototype.attack = function() {
//   console.log('Attacking!', this)
// } 

// const player = new Player(10, 10, 100)
// const player2 = new Player(10, 15, 80)


// console.log(player.hp)
// console.log(player2.hp)

// player.attack()
// player2.attack()

//////////////////////////////////////////////////////////
// Example 3
//////////////////////////////////////////////////////////
// const player = new Player()

// function Player() {}

// // const playerClass = new Wizard() // that will fail / esto va a fallar

// class PlayerClass {}

// const playerClass = new PlayerClass()

// look at Player and playerClass prototypes on console / mirar los prototipos de juan y julia en la consola


//////////////////////////////////////////////////////////
// Example 4
//////////////////////////////////////////////////////////
// const player = new Player(10, 10, 100)

// function Player(x, y, hp) {
//   this.x = x
//   this.y = y
//   this.hp = hp
// }

// // const playerClass = new PlayerClass() // that will fail / esto va a fallar

// class PlayerClass {
//   constructor(classType) {
//     this.playerClass = classType
//   }
// }

// const wizardClass = new PlayerClass('wizard')

//////////////////////////////////////////////////////////
// Example 4.1 - Class declaration / Declaracion de clase
//////////////////////////////////////////////////////////

// class PlayerClass {
//   constructor(classType) {
//     this.playerClass = classType
//   }
// }

//////////////////////////////////////////////////////////
// Example 4.2 - Class expression / Expresion de clase
//////////////////////////////////////////////////////////

// const PlayerClass = class {
//   constructor(classType) {
//     this.playerClass = classType
//   }
// }

//////////////////////////////////////////////////////////
// Example 4.3 - getters / setters
//////////////////////////////////////////////////////////

// class PlayerClass {
//   constructor(classType) {
//     this.playerClass = classType
//   }

//   set description(value) {
//     this.descriptionValue = value
//   }

//   get description() {
//     return this.descriptionValue
//   }
// }

//////////////////////////////////////////////////////////
// Example 5
//////////////////////////////////////////////////////////
// function Player(x, y, hp) {
//   this.x = x
//   this.y = y
//   this.hp = hp
// }

// Player.prototype.attack = function() {
//   console.log('Attacking!', this)
// } 

// class PlayerClass {
//   constructor(classType) {
//     this.playerClass = classType
//   }
// }

// const player = new Player(10, 10, 80)
// const playerClass = new PlayerClass('wizard')
// // look at player and playerClass prototypes on console / mirar los prototipos de player y playerClass en la consola

// const descriptor = Object.getOwnPropertyDescriptor(PlayerClass, 'prototype') // {value: {…}, writable: false, enumerable: false, configurable: false}
// console.log('descriptor', descriptor)
// PlayerClass.prototype = {}
// console.log(PlayerClass.prototype)  // no change


//////////////////////////////////////////////////////////
// Example 6
//////////////////////////////////////////////////////////
// function Player(x, y, hp) {
//   this.x = x
//   this.y = y
//   this.hp = hp
// }

// Player.classMethod = function() {
//   console.log('Player class method!')
// }

// Player.prototype.attack = function() {
//   console.log('Attacking!', this)
// } 

// class PlayerClass {
//   constructor(classType) {
//     this.playerClass = classType
//   }

//   addNewSkill() {
//     console.log('New skill added!')
//   }

//   static classMethod() {
//     console.log('PlayerClass class method!')
//     console.dir(this)
//   }
// }

// console.dir(Player)
// console.dir(PlayerClass)
// const player = new Player(10, 10, 80)
// const playerClass = new PlayerClass('wizard')
// Player.classMethod()
// PlayerClass.classMethod()
// player.classMethod() // it will fail due to it is not an instance method / esto va a fallar ya que classMethod no es un metodo de instancia


/////////////////////////////////////////////
// Example 7 - Object inheritance with prototypes / herencia de objetos con prototipos
////////////////////////////////////////////
// const playerPrototype = {
//   x: 10,
//   y: 10, 
//   hp: 80
// }

// // const player = Object.create(playerPrototype)
// const player2 = Object.create(playerPrototype)

// // show both on the browser console / ver ambos objetos en la consola del browser

// const wizardPrototype = {
//   playerClass: 'wizard'
// }

// const wizard = Object.create(wizardPrototype)

// // player could be a wizard, however, now there is no connection between them / player podria ser un mago, sin embargo, actualmente no tienen ninguna coneccion

// const player = Object.create(playerPrototype, {
//   playerClass: {
//     value: 'wizard'
//   }
// })

/////////////////////////////////////////////
// Example 8 - Class inheritance with prototypes / herencia de clases con prototipos
////////////////////////////////////////////
// // Super class
// function PlayerClass(classType) {
//   this.playerClass = classType
// }

// // // Sub class
// function Player(x, y, hp) {
//   this.x = x
//   this.y = y
//   this.hp = hp
// }

// // PlayerClass.prototype.addSkill = function() {
// //   console.log('Skill added!')
// // }

// // Player.prototype = PlayerClass.prototype
// // Player.prototype.attack = function() {
// //   console.log('Attacking!', this)
// // } 


// // console.dir(Player) // Problem: Player and PlayerClass methods are mixing in the same prototype / Problema: los metodos the player y playerClass estan mezclados en el mismo prototipo

// Player.prototype = Object.create(PlayerClass.prototype) // it is creating a new object which its prototype is the PlayerClass one / esta creando un nuevo objeto el cual su prototipo es el de PlayerClass
// Player.prototype.attack = function() {
//   console.log('Attacking!', this)
// }
// PlayerClass.prototype.addSkill = function() {
//   console.log('Skill added!')
// }

// console.dir(Player)
// console.dir(new Player(10, 10, 80))

/////////////////////////////////////////////
// Example 9
////////////////////////////////////////////

// // // Super class
// function PlayerClass(classType) {
//   this.playerClass = classType
// }

// PlayerClass.prototype.addSkill = function() {
//   console.log('Skill added!')
// }

// // // Sub class
// function Player(x, y, hp, classType) {
//   this.x = x
//   this.y = y
//   this.hp = hp
//   PlayerClass.call(this, classType)
// }


// Player.prototype = Object.create(PlayerClass.prototype)

// const player = new Player(10, 10, 80, 'wizard')
// console.dir(player)

/////////////////////////////////////////////
// Example 10
////////////////////////////////////////////

// // Super class
// class PlayerClass {
//   constructor(classType) {
//     this.playerClass = classType
//   }

//   addSkill() {
//     console.log('Skill added!')
//   }
// }

// // // Sub class
// class Player extends PlayerClass {
//   constructor(x, y, hp, classType) {
//     super(classType)
//     this.x = x
//     this.y = y
//     this.hp = hp
//   }

//   attack() {
//     console.log('Attacking!', this)
//   }
// }

// const player = new Player(10, 10, 80, 'wizard')



// game.addPlayer(player)



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
