// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Promise states / estados de una Promise:
// pending -> initial state / estado inicial
// fulfilled -> satisfactorio
// rejected -> rechazado

console.log('main app 1')

const myPromise = new Promise(/* executor */(resolved, rejected) => {
  console.log('myPromise executor')
  resolved(1)
  // rejected(3) // it won't be executed because resolved was executed first / no va a ejecutarse porque resolved se ejecuto primero
})

myPromise
  .then(result => console.log('myPromise result', result))

  console.log('main app 2')

const usersPromise = new Promise((resolved, rejected) => {
  const url = 'https://jsonplaceholder.typicode.com'
  const xhr = new XMLHttpRequest()
  xhr.addEventListener('load', () => {
    if(xhr.status === 200) {
      resolved(JSON.parse(xhr.response))
    
  }})
  xhr.addEventListener('error', error => rejected(error))
  xhr.open('get', `${url}/users`)
  xhr.send()
})

usersPromise
  .then(users => {
    console.log(users)
    return new Promise((resolved, rejected) => {
      const url = 'https://jsonplaceholder.typicode.com'
      const user = users[4]
      const xhr = new XMLHttpRequest()
      xhr.addEventListener('load', () => {
        if(xhr.status === 200) {
          resolved(JSON.parse(xhr.response))
        
      }})
      xhr.addEventListener('error', error => rejected(error))
      xhr.open('get', `${url}/posts?userId=${user.id}`)
      xhr.send()
    })
  })
  .then(posts => {
    console.log(posts)
  })
  .catch(error => {
    console.log(error)
  })

// usersPromise.catch(error => {
//   console.log('1',error)
// })


////////////////////////////////////////////////////////////////////////////
// Promise utils
////////////////////////////////////////////////////////////////////////////////

// Promise.resolve()
// const promiseAutoResolved = Promise.resolve(123)
// similar to...
// const promiseAutoResolved2 = new Promise(resolve => resolve(123))

// Promise.reject()
// const promiseAutoRejected = Promise.reject(123)
// similar to...
// const promiseAutoRejected2 = new Promise((resolve, reject) => reject(123))


// Promise.all() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

const p1 = Promise.resolve('promise 1')
const p2 = Promise.resolve('promise 2')
const p3 = Promise.resolve('promise 3')

Promise.all([p1, p2, p3])
  .then(([r1, r2, r3]) => console.log(r1, r2, r3))

// similar to...
Promise.all([p1, p2, p3]) 
  .then(results => {
    const r1 = results[0]
    const r2 = results[1]
    const r3 = results[2]

    console.log(r1, r2, r3)
  })

// One rejected
const pOk = Promise.resolve('promise resolved/fulfilled')
const pFail = Promise.reject('promise rejected')

Promise.all([pOk, pFail])
  .then(([r1, r2]) => console.log(r1, r2)) // then won't be executed / then no va a ejecutarse
  .catch(error => console.error(error))

// Promise.allSettled() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled 
const p4 = Promise.resolve('promise 4')
const p5 = Promise.reject('promise 5 rejected')

Promise.allSettled([p4, p5])
  .then(results => console.log(results))

// Promise.any() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
const p6 = Promise.reject(0);
const p7 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const p8 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

Promise.any([p6, p7, p8])
  .then((value) => console.log(value)); // return the first fulfilled result / retorna el primer resultado en estado fulfilled (resuelta)

Promise.any([p6])
  .then((value) => console.log(value))
  .catch(error => console.error(error)) // no promise is fulfilled, so it returns an AggregateError error / ninguna promesa esta en estado fulfilled, entonces retorna un AggregateError error

// Promise.race() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

const p9 = new Promise((resolve) => setTimeout(resolve, 100, 'quick promise 9'));
const p10 = new Promise((resolve) => setTimeout(resolve, 500, 'slow promise 10'));

Promise.race([p9, p10])
  .then(result => console.log(result)) // both are fulfilled, takes the fastest one / ambos son fulfilled, toma el mas "rapido"

const p11 = new Promise((resolve, reject) => setTimeout(reject, 100, 'quick promise 11 rejected'));
const p12 = new Promise((resolve) => setTimeout(resolve, 500, 'slow promise 12'));

Promise.race([p11, p12])
  .then(result => console.log(result)) 
  .catch(error => console.error(error)) // takes the rejected one due to it is the fastest one / toma el rejecteado debido a que es el mas rapido


console.log('-----------------------------------------------------------------------')
// Generator function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield

function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
// Expected output: 20

console.log(gen.next());
// {value: undefined, done: true}

// Id generator

function* idGen() {
  let i = 0;

  while(true) {
    yield i++;
  }
}

const idGenInstance = idGen();

console.log(idGenInstance.next().value);
// Expected output: 0

console.log(idGenInstance.next().value);
// Expected output: 1

console.log('-----------------------------------------------------------------------')