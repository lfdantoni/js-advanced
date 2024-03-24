const form = document.querySelector('form')
const input = form[0];

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(input)
  console.log(input.files)
})


const percentageSpan = document.querySelector('#percentage')
const progressView = document.querySelector('#progressView')
const xhr = new XMLHttpRequest()

// xhr.overrideMimeType("text/plain; charset=x-user-defined");  // force a stream to be treated and parsed as "text/plain" (in this example) / fuerza un stream a ser tratado y parseado como "text/plain" (en este ejemplo)

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
 * responseType values:
 * - arraybuffer
 * - blob
 * - document
 * - json
 * - text
 */

xhr.responseType = 'blob'
xhr.addEventListener('load', () => {
  // decode binary data
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
    const percentageRounded =  Math.round(percentage)
    
    console.log('Downloaded:', percentage, percentageRounded)

    percentageSpan.innerText = percentageRounded
    progressView.value = percentageRounded
  }
})
xhr.open('get', 'https://images.pexels.com/photos/10651558/pexels-photo-10651558.jpeg')
xhr.send()