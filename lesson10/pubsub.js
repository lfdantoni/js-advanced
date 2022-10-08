/////////////////////////////////////////////
// Example 4
////////////////////////////////////////////

// Problem
// const Mailer = (function() {
//   const MailerClass = function() { }

//   MailerClass.prototype.sendEmail = (email, data) => {
//     console.log('Email sent!', email, data)
//   }

//   return MailerClass;
// })()

// const Order = (function() {
//   let order = null;
//   let email = null;
//   const mailer = new Mailer()

//   const OrderClass = function(userEmail, newOrder) {
//     order = newOrder
//     email = userEmail
//   }

//   OrderClass.prototype.saveOrder = () => {
//     console.log('order saved!')
//     mailer.sendEmail(email, order) // there is a problem here if we want to delete Mailer class... / hay un problema aqui si queremos borrar la clase Mailer
//   }

//   return OrderClass;
// })()

// const newOrder = new Order('test@mail.com', { product: 123 })

// newOrder.saveOrder()

// Observer solution
// const Mailer = (function() {
//   const MailerClass = function(newOrder) {
//     newOrder.subscribe(this.sendEmail)
//   }

//   MailerClass.prototype.sendEmail = (email, data) => {
//     console.log('Email sent!', email, data)
//   }

//   return MailerClass;
// })()

// const Order = (function() {
//   let order = null;
//   let email = null;
//   const observers = []

//   const OrderClass = function(userEmail, newOrder) {
//     order = newOrder
//     email = userEmail
//   }

//   OrderClass.prototype.subscribe = callback => observers.push(callback)

//   OrderClass.prototype.saveOrder = () => {
//     console.log('order saved!')
//     observers.forEach(callback => callback(email, order))
//   }

//   return OrderClass;
// })()


// const newOrder = new Order('test@mail.com', { product: 123 })
// const mailer = new Mailer(newOrder) 
// // Order knows mailer via its observers private property, and Mailer knows Order via its constructor
// // however, we can easily remove Mailer entity without affecting Order
// // Order conoce a Mailer a traves de la propiedad privada observers, y Mailer conoce a Order por su constructor
// // sin embargo podemos quitar Mailer sin afectar a Order
// // Problem: we can't remove Order without affecting Mailer / Problema: no podemos quitar orden sin afectar a Mailer

// newOrder.saveOrder();



// Pub Sub solution

const broker = (function() {
  const topics = {}

  this.subscribe = (topic, callback) => {
    if(!topics[topic]) {
      topics[topic] = [callback]
    } else {
      topics[topic].push(callback)
    }
  }

  this.publish = (topic, data) => {
    if(!topics[topic]) {
      return
    } else {
      topics[topic].forEach(cb => cb(data))
    }
  }

  return this;
})()

const Mailer = (function() {
  const MailerClass = function() {
    broker.subscribe('new/order', this.sendEmail)
  }

  MailerClass.prototype.sendEmail = (data) => {
    console.log('Email sent!', data.email, data.order)
  }

  return MailerClass;
})()

const Order = (function() {
  let order = null;
  let email = null;
  const observers = []

  const OrderClass = function(userEmail, newOrder) {
    order = newOrder
    email = userEmail
  }

  OrderClass.prototype.subscribe = callback => observers.push(callback)

  OrderClass.prototype.saveOrder = () => {
    console.log('order saved!')
    broker.publish('new/order', {email, order})
  }

  return OrderClass;
})()

const mailer = new Mailer()

const newOrder = new Order('test@mail.com', { product: 123 })

newOrder.saveOrder()