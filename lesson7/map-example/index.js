const map = initMap('map')

const getRnd = (min, max) => {
  return Math.random() * (max - min + 1) + min;
}

const getRndPosition = () => ({
  lat: getRnd(-85, 85),
  long: getRnd(-180, 180)
})


const pokemonList = document.getElementById('pokemon-list')
const pokemonThumb = document.getElementById('pokemon-thumb')

// list pokemons
fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(pokemon => {
      const li = document.createElement('option')
      li.value = pokemon.url
      li.innerText = pokemon.name

      pokemonList.appendChild(li)
    });
  })

// get pokemon selected info 
pokemonList.addEventListener('change', () => {
  fetch(pokemonList.value)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      pokemonThumb.src = data.sprites.front_default

      const position = getRndPosition()
      map.setView(position.lat, position.long, 12)
      map.addMarker(position.lat, position.long, `${data.name} <br /> <img src="${data.sprites.front_default}" width="50" height="50" />`)

      map.addCircle(position.lat, position.long, 5000)
    })
})


// my current position
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function showPosition(position) {
    map.setView(position.coords.latitude, position.coords.longitude, 12)

     map.addMarker(position.coords.latitude, position.coords.longitude, "<b>Hello world!</b><br>I am here!")

    map.addCircle(position.coords.latitude, position.coords.longitude, position.coords.accuracy, "<b>or maybe here...</b>")

  });
}