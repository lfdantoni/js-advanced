const ajax = (url, method = 'get') => {
  // method = 'get' is the same as / method = 'get' es lo mismo que
  // const ajax = (url, method) => {
  //  const httpMethod = method || 'get'
  //  ...
  const xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.send()
  return xhr
}

const links = document.querySelectorAll('#menu a')
const content = document.querySelector('#content')

links.forEach(link => {
  link.addEventListener('click', () => {
    // e.preventDefault()
    const id = link.id
    // location.hash = id

    // history.pushState(null, '',  id)

    const xhr = ajax(id + '.html')
    xhr.addEventListener('load', () => {
      if(xhr.status === 200) {
        content.innerHTML = xhr.response;
        history.pushState({
          template: xhr.response
        }, "", id)
      }
    })
  })
})

const xhr = ajax('home.html');
xhr.addEventListener('load', () => {
  if(xhr.status === 200) {
    content.innerHTML = xhr.response;
  }
})

// window.addEventListener('hashchange', () => {
//   // location.hash.split('#')  - ['', 'profile']
//   const xhr = ajax(location.hash.split('#')[1] + '.html')
//   xhr.addEventListener('load', () => {
//     if(xhr.status === 200) {
//       content.innerHTML = xhr.response;
//     }
//   })
// })

window.addEventListener('popstate', e => {
  // location.pathname.split('/')  - ['', 'profile']

  if(e.state && e.state.template) {
    content.innerHTML = e.state.template;
  }else{
    const xhr = ajax(location.pathname.split('/')[1] + '.html')
    xhr.addEventListener('load', () => {
      if(xhr.status === 200) {
        content.innerHTML = xhr.response;
      }
    })
  }
})


//////////////////////////////////////////////////////
// JSONP
////////////////////////////////////////////////////
const myCallback = data => { console.log('myCallback', data) }
const script = document.createElement('script')
script.src = 'https://book-store-server2020.herokuapp.com/jsonp?callback=myCallback'

document.body.appendChild(script)