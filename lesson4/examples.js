// xhr.readyState
/**
 * 0 => object instance / objeto instancia
 * 1 => configured object / objeto configurado
 * 2 => headers were sent and received / headers fueron enviados y recibidos
 * 3 => dowloading / descargando
 * 4 => finished - it could have been unsuccessful / finalizado - no necesariamente fue exitoso
 */

 const xhr = new XMLHttpRequest()
 // methods: GET/POST/PUT/PATCH/DELETE
 // external requests / pedidos externos: CORS - Cross Origin Resource Sharing
 // xhr.open(METHOD, URL, async) => async is a boolean and it is optional
 xhr.open('get', 'texto.txt')
 console.log(xhr.readyState)
 
 //XAMPP - https://www.apachefriends.org/download.html
 
 // xhr events
 // xhr.addEventListener('readystatechange', () => {
 //   console.log(xhr.readyState)
 
 //   if(xhr.readyState === 4) {
 //     console.log('readystatechange response:', xhr.response)
 //   }
 
 //   if(xhr.readyState === 2) {
 //     const headers = xhr.getAllResponseHeaders(); // get all headers as a single string / retorna todas las cabeceras en un solo string
 //     const type = xhr.getResponseHeader('content-type');
 
 //     if(type !== 'text/html') {
 //       xhr.abort()
 //     }
 
 //   }
 // })
 
 xhr.addEventListener('load', () => {
   if(xhr.status === 200) {
     console.log('load response:', xhr.response)
   }
 })
 
 // TIMEOUT
 // xhr.addEventListener('readystatechange', () => {
 //   console.log('TIMEOUT!')
 // })
 // xhr.timeout = 1;
 
 // SEND REQUEST / enviar request
 xhr.send() // error if the app is not in server enviroment /  error si la aplicacion no esta en un entorno de servidor
 console.log(xhr.response) // it's empty, the request haven't finished yet / esta vacio, el pedido no hay terminado
 