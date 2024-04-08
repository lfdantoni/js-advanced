const url = 'https://jsonplaceholder.typicode.com'

// Fetch = XHR + Promise + Header + Request + Response + Body
const usersPromise = fetch(`${url}/users`) // Async Request GET
// const usersPromise = fetch(`${url}/users2`) // Async Request GET => Fail

usersPromise
  .then(response => {
    // console.log(response) // Response
    // console.log('response.json()', response.json()) // Promise
    if(!response.ok) {
      return Promise.reject(response.status)
    }
  
    return response.json()
  })
  .then(users => {
    console.log(users)
    const user = users[4]
    return fetch(`${url}/posts?userId=${user.id}`)
  })
  .then(response => response.json())
  .then(posts => {
    console.log(posts)
  })
  .catch((error) => console.log('error', error))


fetch(`${url}/posts`, {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo2',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json',
  },
})
.then((response) => response.json())
.then((json) => console.log(json));