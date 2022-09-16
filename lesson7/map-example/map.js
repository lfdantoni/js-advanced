const initMap = (domeElementId) => {
  const circleConfigDefault = {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5,
  }

  const map = L.map(domeElementId)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);


  const addMarker = (lat, long, message) => {
    const marker = L.marker([lat, long]).addTo(map);
    
    if(message) {
      marker.bindPopup(message)
    }

    return marker;
  }

  const addCircle = (lat, long, radius, message) => {
    const circle = L.circle([lat, long], {
      ...circleConfigDefault,
      radius
    }).addTo(map);
    
    if(message) {
      circle.bindPopup(message)
    }

    return circle;
  }

  const removeLayer = (layer) => map.removeLayer(layer)

  return {
    addMarker,
    setView: (lat, long, zoom) => map.setView([lat, long], zoom || 15),
    addCircle,
    removeCircle: removeLayer,
    removeMarker: removeLayer,
  }
}