///////////////////////////////////////////////////////
// callbacks
///////////////////////////////////////////////////////
const foo = () => {
  console.log('foo function')
}

const bar = callback => {
  callback()
  console.log('bar function')
}

// bar(foo) // NOT foo()

const fooParam = param => {
  console.log('fooParam', param)
}

const barParam = callback => {
  callback({data: 'extra data from barParam'})
  console.log('barParam function')
}

// barParam(fooParam) // NOT fooParam()

///////////////////////////////////////////////////////
// Events
///////////////////////////////////////////////////////
const myButton = document.getElementById('myButton')

const clickCallback = () => console.log('mybutton click!')
const clickCallback2 = () => console.log('mybutton click 2!')

// myButton.onclick = clickCallback; // NOT clickCallback()
// myButton.onclick = clickCallback2;

myButton.addEventListener('click', clickCallback) // NOT clickCallback()
myButton.addEventListener('click', clickCallback2)

myButton.removeEventListener('click', clickCallback2) // remove a callback / remover un callback

///////////////////////////////////////////////////////
// Event propagation / propagacion de eventos
///////////////////////////////////////////////////////
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')

box1.addEventListener('click', () => {
  console.log('box1 blue')
})

box2.addEventListener('click', () => {
  console.log('box2 green')
})

box3.addEventListener('click', e => {
  // Frenar la propagacion de eventos
  e.stopPropagation()
  console.log('box3 red')
})


let itemCounter = 0;
const cart = document.getElementById('cart')

cart.addEventListener('click', e => {
  console.log('cart click', e.target.id)
})

const addItem = document.getElementById('addItem')
addItem.addEventListener('click', e => {
  const li = document.createElement('li')
  li.id = itemCounter;
  li.innerText = `item ${itemCounter}`
  cart.appendChild(li)
  ++itemCounter;
})


// stop event default behavior
const link = document.getElementById('link')

link.addEventListener('click', e => {
  e.preventDefault()
})


// some common event / algunos eventos comunes
const input = document.getElementById('input')
input.addEventListener('blur', () => {
  console.log('blur event')
})

const selectElement = document.getElementById('selectElement')
selectElement.addEventListener('change', e => {
  console.log('change event', e.target.value)
})

const formElement = document.getElementById('formElement')
formElement.addEventListener('submit', e => {
  e.preventDefault()
  console.log('submit event', e)

  let isValid = true;
  for (let i = 0; i < e.target.length; i++) {
    const item = e.target[i];
    
    if(item.value === '') {
      item.style.borderColor = 'red'
      isValid = false;
    } else {
      item.style.borderColor = ''
    }
  }

  if(isValid) {
    // e.target.submit()
  }
})

// Custom Events
document.addEventListener('look', event => {
  console.log('LOOK EVENT', event)
})

const evt = new Event('look', {"bubbles": true, "cancelable": false }) // this event is fired in bubbling and cannot be canceled / este evento se dispara en bubbling y no puede ser cancelado
evt.data = { value: 1 }
document.dispatchEvent(evt)