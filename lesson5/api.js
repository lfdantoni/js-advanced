const xhrUsers = new XMLHttpRequest()
xhrUsers.open('get', 'https://jsonplaceholder.typicode.com/users')
xhrUsers.send()

xhrUsers.addEventListener('load', () => {
  if(xhrUsers.status === 200) {
    console.log(typeof xhrUsers.response)
    const jsonResponse = JSON.parse(xhrUsers.response)

    console.log(jsonResponse)
  }
})