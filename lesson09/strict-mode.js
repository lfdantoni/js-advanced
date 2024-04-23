"use strict"

// TEST EXAMPLES with and without "use strict"

/////////////////////////////////////////////
// Example 12
////////////////////////////////////////////
// more info in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

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

(function() {
  'use strict'
  const staticObjectAux = Object.create(null, {
    x: {
      value: 1
    }
  })

  // delete staticObjectAux.x // it will fail
  // staticObjectAux.x = 2 // it will fail
})()

/////////////////////////////////////////////
// Example 13
////////////////////////////////////////////
class C1 {
  // All code here is evaluated in strict mode (with or without "use strict")
  test() {
    delete Object.prototype;
  }
}
new C1().test(); // TypeError, because test() is in strict mode (with or without "use strict")

const C2 = class {
  // All code here is evaluated in strict mode (with or without "use strict")
};


/////////////////////////////////////////////
// Example 14
////////////////////////////////////////////

// Assignment to a non-writable property
const obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // TypeError

// Assignment to a getter-only property
const obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // TypeError