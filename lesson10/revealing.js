let myProgram = (function() {
  let x = 1;

  return {
    getX: () => {
      console.log(x)
      return x
    }
  }
})()