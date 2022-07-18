const percentageSpan = document.querySelector('#percentage')
const xhr = new XMLHttpRequest()
xhr.responseType = 'blob'
xhr.addEventListener('load', () => {
  if(xhr.status === 200) {
    const imageBlob = xhr.response
    const url = URL.createObjectURL(imageBlob)

    const img = document.createElement("img")
    img.src = url
    document.body.appendChild(img)
  }
})
xhr.addEventListener('progress', (e) => {
  if(e.lengthComputable) {
    const percentage = e.loaded * 100 / e.total
    console.log('Downloaded:', percentage)
    percentageSpan.innerText = Math.round(percentage)
  }
})
xhr.open('get', 'landscape.jpg')
xhr.send()

const form = document.querySelector('form')
const input = form[0];

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(input)
})
