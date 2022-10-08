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