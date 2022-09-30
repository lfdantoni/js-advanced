function initGame(config) {
  let playerObj;
  const size = 25
  const mapView = document.getElementById(config.mapElementId || 'map')
  const moveSize = 20

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

      // currentCell.removeChild(playerObj.domElem)
      // const newCell = document.getElementById(`cell-${newX}-${newY}`)
      
      // if(!newCell) return
      
      // newCell.appendChild(playerObj.domElem)
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
    playerObj.domElem.id = 'player'
  
    playerObj.player.x = playerObj.player.x || 10
    playerObj.player.y = playerObj.player.y || 10

    document.getElementById(`cell-${playerObj.player.x}-${playerObj.player.y}`)
      .appendChild(playerObj.domElem)
  } 

  const addEnemy = () => {
    const enemy = document.createElement('div')
    enemy.classList.add('enemy')
    enemy.id = 'enemy1'
    document.getElementById('cell-20-10')
      .appendChild(enemy)
  }

  const rePaint = () => {
    requestAnimationFrame(() => {
      if(!playerObj || 
        (playerObj.lastChanges 
        && playerObj.lastChanges.x === playerObj.player.x 
        && playerObj.lastChanges.y === playerObj.player.y
        && playerObj.lastChanges.hp === playerObj.player.hp)){
          rePaint()
          return;
        }

      const currentCell = playerObj.domElem.parentElement

      currentCell.removeChild(playerObj.domElem)
      const newCell = document.getElementById(`cell-${playerObj.player.x}-${playerObj.player.y}`)
      
      if(!newCell) return
      
      const playerHp = playerObj.player.hp >= 0 ? playerObj.player.hp : 100
      playerObj.domElem.style.setProperty("--playerHp", playerHp + '%');
      newCell.appendChild(playerObj.domElem)


      playerObj.lastChanges = {
        x: playerObj.player.x,
        y: playerObj.player.y,
        hp: playerObj.player.hp,
      }

      rePaint()
    })
  }


  const init = () => {
    drawMap()
    registerKeyListener()
    addEnemy()
    rePaint()
  }

  init();

  return {
    addPlayer
  }
}
