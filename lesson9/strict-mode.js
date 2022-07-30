"use strict"

/////////////////////////////////////////////
// Example 12
////////////////////////////////////////////

const dynamicObject = { x: 1 }
const staticObject = Object.create(null, {
  x: {
    value: 1
  }
})

// a = 1 // it will fail due to "a" should be declared / esto va a fallar debido a que "a" debe estar declarado

let a

a = 1 // OK!

// delete staticObject.x // this will throw an error on strict mode / esto va a lanzar un error en modo estricto

// more info in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode