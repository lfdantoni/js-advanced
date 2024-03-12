const xmlHttpRequest = new XMLHttpRequest();

// https://jsonplaceholder.typicode.com/
// xmlHttpRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')

// xmlHttpRequest.addEventListener('load', () => {
//   const type = xmlHttpRequest.getResponseHeader('content-type');

//   if(type === 'application/json; charset=utf-8') {
//     console.log('response', JSON.parse(xmlHttpRequest.response))
//   }
// })

// xmlHttpRequest.send()


xmlHttpRequest.open('POST', 'https://jsonplaceholder.typicode.com/posts')

xmlHttpRequest.addEventListener('load', () => {
  const type = xmlHttpRequest.getResponseHeader('content-type');

  if(type === 'application/json; charset=utf-8') {
    console.log('response', JSON.parse(xmlHttpRequest.response))
  }
})

xmlHttpRequest.send(JSON.stringify({
  userId: 1,
  title: "title",
  body: "test"
}))