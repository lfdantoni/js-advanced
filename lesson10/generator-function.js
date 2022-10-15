function* generatorNumbers(value = 0) {
  let number;
  console.log('start value', value)

  while(true) {
    number = yield value // number puede tener el valor proporcionado en next()
    ++value

    console.log('value - number', value, number)
    if (number) {
      value += number;
    }
  }
}

const iterator = generatorNumbers(0)
iterator.next() // {value: 0, done: false} => number es undefined ahora en generatorNumbers
iterator.next() // {value: 1, done: false} => number es undefined ahora en generatorNumbers
iterator.next(10) // {value: 12, done: false} => number es 10 ahora en generatorNumbers



async function* simpsonsQuoteGenerator(count = 1) {
  let currentCounts = count

  while(true) {
    const res = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${currentCounts}`);
    const json = await res.json()
    const newCount = yield json

    if(newCount) {
      currentCounts = newCount
    }
  }
}

const simpsonsQuotesIterator = simpsonsQuoteGenerator()

async function nextQuotes(count) {
  console.log(await simpsonsQuotesIterator.next(count))
}
