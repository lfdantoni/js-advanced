navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
  console.log(`https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},15z`)
});

navigator.geolocation.watchPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
  console.log(`https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},15z`)
});