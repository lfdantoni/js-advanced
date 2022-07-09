const noFormInput = document.getElementById('no-form-input')
const sendBtn = document.getElementById('send')

sendBtn.addEventListener('click', () => {
  // checkValidity 
  const inputValid = noFormInput.checkValidity()

  console.log('noFormInput validation:', inputValid)
})


const form = document.getElementById('form')
const nameInput = document.getElementById('name')

// reset the custom validity when a key is pressed otherwise submit event is not executed
// resetea el error custom cuando una tecla es presionada, de lo contrario el evento submit no se ejecutara
nameInput.addEventListener('keypress', () => nameInput.setCustomValidity(''))

form.addEventListener('submit', e => {
  e.preventDefault();

  // input - select - textarea
  const name = nameInput.value;

  console.log(name)

  // setCustomValidity
  // if(name.length < 5) {
  //   nameInput.setCustomValidity('min lenght is 5')
  //   nameInput.reportValidity()
  // }

  // form.reportValidity()

  // util functions / funciones utiles
  // trim => remove intial and end spaces of a string / remueve espacios al inicio y final de un string
  console.log('   text   =>', '   text   '.trim(), '   text   '.trim().length === 4)
  // includes / indexOf => find a text in a string / encontrar un texto en un string
  console.log('inludes: ', 'text'.includes('t'))
  console.log('indexOf: ', 'text'.indexOf('t'))
  // encodeURIComponent => scape sensitive caracters, prevents XSS atacks / escapea caracteres sensibles, previene ataques XSS
  console.log('encodeURIComponent: ',encodeURIComponent('https://google.com'))

  /////////////////////////////////
  // REGEXP
  /////////////////////////////////

  const regexpInput = document.getElementById('regexp')
  const regexpValue = regexpInput.value

  // find a string
  console.log('regexp - find a string: ', /te/.test(regexpValue))

  // aphanumeric characters / caracteres alfanumericos
  console.log('regexp - aphanumeric characters: ', /\w/.test(regexpValue))

  // no aphanumeric characters / ningun caracter alfanumerico
  console.log('regexp - no aphanumeric characters: ', /\W/.test(regexpValue))

  // digits / digitos
  console.log('regexp - digits: ', /\d/.test(regexpValue))

  // no digits / ningun digito
  console.log('regexp - no digits: ', /\D/.test(regexpValue))

  // spaces, break lines, etc / espacios, saltos de linea, etc
  console.log('regexp - spaces, break lines, etc: ', /\s/.test(regexpValue))

  // no spaces, no break lines, etc / ningun espacio, ningun salto de linea, etc
  console.log('regexp - no spaces, break lines, etc: ', /\S/.test(regexpValue))

  // repetitions / repeticiones
  // {N}
  console.log('regexp - repations a{2}: ', /a{2}/.test(regexpValue))
  // {N, M}
  console.log('regexp - repations a{2, 5}: ', /a{2,5}/.test(regexpValue))
  // groups / grupos => ()
  console.log('regexp - repations with group (abc){2}: ', /(abc){2}/.test(regexpValue))
  // * => 0 or many repetitions
  console.log('regexp - repations with * -> (abc)*: ', /(abc)*/.test(regexpValue))
  // + => 1 or many repetitions
  console.log('regexp - repations with + -> (abc)+: ', /(abc)+/.test(regexpValue))

  // position characters / caracteres de posicion
  // ^ => initial position / posicion inicial
  console.log('regexp - initial postion -> ^(abc): ', /^(abc)/.test(regexpValue))
  // $ => end position / posicion final
  console.log('regexp - end postion -> (abc)$: ', /(abc)$/.test(regexpValue))
  // \b => end, initial or between position / posicion final, inicial o intermedio
  // /\b(abc)\b/ matchs with
  // asdasdasdas abc asdasdasd
  // abc asdasdasd
  // asdasdas abc
  // abc
  //  abc  ([space]abc[space])
  console.log('regexp - end or initial position -> (abc)\\b: ', /\b(abc)\b/.test(regexpValue))
})