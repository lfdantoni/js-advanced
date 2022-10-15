/////////////////////////////////////////////////////////
// Example 1
///////////////////////////////////////////////////////
// let myNumber = 1

// const changeNumber = newNumber => myNumber = newNumber

// console.log(myNumber) // 1

// call to changeNumber(10) from the browser console / llamar a changeNumber(10) desde la consola del browser

// call to console.log(myNumber) and it should be 10 // llamar a console.log(myNumber) y este debe ser 10

// after a page reload, myNumber will be 1 again / luego de recargar la pagina, myNumber va a ser 1 nuevamente

/////////////////////////////////////////////////////////
// Example 2
///////////////////////////////////////////////////////

// localStorage.setItem('number', 1)

// localStorage.setItem('object', {x: 2})

// // Check on Application => LocalStorage how the "object" key was saved / checkear en Application => LocalStorage como la clave "object" fue guardada

// localStorage.setItem('objectStr', JSON.stringify({x: 2}))

// const myNumber = localStorage.getItem('number')
// console.log('myNumber', myNumber)

// const myObject = JSON.parse(localStorage.getItem('objectStr'))
// console.log('myObject', myObject)

// // localStorage.clear() // clean all localStorage / borro todo el localStorage

// // localStorage.removeItem('objectStr') // remove 'objectStr' key and its value / borro la clave 'objectStr' y su value


/////////////////////////////////////////////////////////
// Example 3
///////////////////////////////////////////////////////

// sessionStorage.setItem('number', 1)

// sessionStorage.setItem('object', {x: 2})

// // Check on Application => SessionStorage how the "object" key was saved / checkear en Application => SessionStorage como la clave "object" fue guardada

// sessionStorage.setItem('objectStr', JSON.stringify({x: 2}))

// const myNumber = sessionStorage.getItem('number')
// console.log('myNumber', myNumber)

// const myObject = JSON.parse(sessionStorage.getItem('objectStr'))
// console.log('myObject', myObject)

// // sessionStorage.clear() // clean all localStorage / borro todo el localStorage

// // sessionStorage.removeItem('objectStr') // remove 'objectStr' key and its value / borro la clave 'objectStr' y su value

// HOW IT WORKS
// The browser will create a session object in which will save our key/values, that session is attached to the browser tab we are using.
// When the tab is closed, its session object will be removed.
// El browser va a crear un objeto de session en el cual va a guardar nuestros key/values, esta session esta vinculada al tab del browser que estamos usando.
// Cuando el tab se cierra, su objeto de session es borrado.


/////////////////////////////////////////////////////////
// Example 4
///////////////////////////////////////////////////////

window.addEventListener('storage', e => {
  console.log(e)
})