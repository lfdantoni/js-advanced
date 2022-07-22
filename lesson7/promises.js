// Promise states / estados de una Promise:
// pending -> initial state / estado inicial
// fulfilled -> satisfactorio
// rejected -> rechazado

const myPromise = new Promise((resolved, rejected) => {
  resolved(1)
  // rejected(3) // it won't be executed because resolved was executed first / no va a ejecutarse porque resolved se ejecuto primero
})


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