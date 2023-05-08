function initGame(config) {
  const size = config.mapSize || 25
  const mapView = document.getElementById(config.mapElementId || 'map');

  const drawMap = () => {
    const tableView = document.createDocumentFragment()
    for (let i = 0; i < size; i++) {
      const row = document.createElement('div')
      row.classList.add('row')
      row.dataset.y = i
    
      for (let j = 0; j < size; j++) {
        const colum = document.createElement('div') 
        colum.classList.add('colum')
        colum.dataset.x = j
        colum.dataset.y = i
        colum.id = `cell-${j}-${i}` // cell-x-y
        row.appendChild(colum)
      }
    
      tableView.appendChild(row)
    }
    
    mapView.appendChild(tableView)
  }

  const init = () => {
    drawMap()
  }

  init();
}