const drag = document.getElementById('drag')
const file = document.getElementById('my-file')

const filesToProcess = files => {
  console.log(files)

  const data = new FormData()
  
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    data.append(`image-${index}`, file)
  }

  const xhr = new XMLHttpRequest()
  // xhr.setRequestHeader('content-type', '?')
  xhr.open('post', 'url')
  xhr.send(data)
}

file.addEventListener('change', () => {
  filesToProcess(file.files)
})

drag.addEventListener('dragenter', e => {
  e.preventDefault()
  console.log('Drag enter')
})

drag.addEventListener('dragleave', e => {
  e.preventDefault()
  console.log('Drag leave')
})

drag.addEventListener('dragover', e => {
  e.preventDefault()
  console.log('Drag over')
})

drag.addEventListener('drop', e => {
  e.preventDefault()
  console.log('Drop')
  filesToProcess(e.dataTransfer.files)
})