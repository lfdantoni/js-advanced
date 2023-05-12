function initGame(config) {
  const size = config.mapSize || 25
  const mapView = document.getElementById(config.mapElementId || 'map');
  let playerObj;

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

  const registerKeyListener = () => {
    window.addEventListener('keyup', e => {
      if(!playerObj) return;

      const currentCell = playerObj.domElem.parentElement
  
      if(!currentCell) return
  
      let newY, newX
      
      switch(e.code) {
        case 'ArrowRight':
          newX = parseInt(currentCell.dataset.x) + 1
          newY = parseInt(currentCell.dataset.y)
          break;
        case 'ArrowUp':
          newX = parseInt(currentCell.dataset.x)
          newY = parseInt(currentCell.dataset.y) - 1
          break;
        case 'ArrowLeft':
          newX = parseInt(currentCell.dataset.x) - 1
          newY = parseInt(currentCell.dataset.y)
          break;
        case 'ArrowDown':
          newX = parseInt(currentCell.dataset.x)
          newY = parseInt(currentCell.dataset.y) + 1
          break;
        default:
          return;
      }
  
      if(newX >= size || newY >= size || newX < 0 || newY < 0) return;
  
      playerObj.domElem.dataset.move = e.code
      playerObj.player.x = newX;
      playerObj.player.y = newY;

      console.log('playerObj position updated', playerObj);
    })
  }

  const addPlayer = (player) => {
    playerObj = {
      player,
      domElem: document.createElement('div')
    }
    playerObj.domElem.classList.add('player')
    const playerClass = playerObj.player.playerClass || 'warrior'
    playerObj.domElem.style.backgroundImage = `url(assets/${playerClass}.png)`
    playerObj.domElem.dataset.move = 'ArrowDown'
    playerObj.domElem.id = playerObj.player.id || 'player'
  
    playerObj.player.x = !isNaN(playerObj.player.x) ? playerObj.player.x : 10
    playerObj.player.y = !isNaN(playerObj.player.y) ? playerObj.player.y : 10

    document.getElementById(`cell-${playerObj.player.x}-${playerObj.player.y}`)
      .appendChild(playerObj.domElem)
  }

  const init = () => {
    drawMap();
    registerKeyListener();
  }

  init();

  return {
    addPlayer,
  }
}
