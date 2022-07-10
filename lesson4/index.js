const  btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()
  xhr.open('get', 'template.html')

  xhr.addEventListener('load', () => {
    if(xhr.status === 200) {
      console.log('load response:', xhr.response)
      const div = document.createElement('div');
      div.innerHTML = xhr.response;
      document.body.appendChild(div)
    }
  })

  xhr.send()
})