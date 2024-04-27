(function(window) {
  let instance = null

  function App() {
    if(instance !== null) {
      return instance
    } else {
      this.id = Math.random()
      instance = this
    }
  }

  window.app = App;

  /**
   * 
   * const a = new app()
   * const b = new app() // should be the first one
   */
})(window)

const a = new app()
const b = new app() // should be the first one
console.log('a', a.id)
console.log('b', b.id)

// V2 - alternative

const singleton = (function() {
  let instance;

  function init() {
    const privateNumber = Math.random()
    return {
      publicMethod: () => {
        console.log('Public method')
      },
      publicProperty: 'public property',
      getNumber: () => {
        return privateNumber;
      }
    }
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = init();
      }

      return instance;
    }
  }

})()

console.log(singleton.getInstance().getNumber())
console.log(singleton.getInstance().getNumber())