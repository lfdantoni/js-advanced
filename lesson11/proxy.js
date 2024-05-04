// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// const target = {
//   prop1: "hello",
//   prop2: "everyone",
// };

// const handler = {}

// const proxy = new Proxy(target, handler)

// console.log(proxy.prop1) // hello
// console.log(proxy.prop2) // everyone

// const target2 = {
//   prop1: "hello",
//   prop2: "everyone",
// };

// const handler2 = {
//   get(target, prop) {
//     console.log('target', target)
//     console.log('prop', prop)

//     return target[prop] + '1'
//   }
// }

// const proxy2 = new Proxy(target2, handler2)

// console.log(proxy2.prop1) // hello1
// console.log(proxy2.prop2) // everyone1


const target3 = {
  prop1: "hello",
  prop2: "everyone",
  myFn: function(param) {
    console.log('my function', param, this)
  }
};

const handler3 = {
  get(target, prop) {
    console.log('target', target)
    console.log('prop', prop)

    const value = target[prop]

    if(value instanceof Function) {
      return function (...args) {
        console.log('interceptor', args)
        return value.apply(target, args)
      }
    }

    return value + '1'
  }
}

const proxy3 = new Proxy(target3, handler3)

console.log(proxy3.myFn(123)) // my function 1234