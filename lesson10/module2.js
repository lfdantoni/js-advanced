(function(window){
  "use strict"
  let position = {x: 0, y: 0}

  const setInternalPosition = (x, y) => {
    position = {
      x: x,
      y: y,
    }

    console.log(position)
  }

  window.module2 = {
    setPosition: setInternalPosition
  }
})(window)