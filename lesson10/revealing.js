// myProgram is the namespace
let myProgram = (function() {
  let x = 1;

  function setX(value) {
    x = value;
  }

  const getX = () => {
    console.log(x)
    return x
  }

  return {
    setX,
    getX,
  }
})()

myProgram.getX()
myProgram.setX(4)
myProgram.getX()