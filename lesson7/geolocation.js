navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude, position.coords.accuracy);
  console.log(`https://www.google.com/maps/search/?api=1&query=${position.coords.latitude},${position.coords.longitude}`)
});

navigator.geolocation.watchPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude, position.coords.accuracy);
  console.log(`https://www.google.com/maps/search/?api=1&query=${position.coords.latitude},${position.coords.longitude}`)
});