(function() {
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
})()