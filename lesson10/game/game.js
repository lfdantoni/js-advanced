function initGame(config) {
  let playerObj;
  let enemyObj;
  const size = config.mapSize || 25
  const mapView = document.getElementById(config.mapElementId || 'map')

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
  
    playerObj.player.x = playerObj.player.x || 10
    playerObj.player.y = playerObj.player.y || 10

    document.getElementById(`cell-${playerObj.player.x}-${playerObj.player.y}`)
      .appendChild(playerObj.domElem)
  } 

  const addEnemy = (enemy) => {
    enemyObj = {
      enemy,
      domElem: document.createElement('div')
    }

    enemyObj.enemy.x = enemyObj.enemy.x || 10
    enemyObj.enemy.y = enemyObj.enemy.y || 20

    enemyObj.domElem.classList.add('enemy')
    enemyObj.domElem.id = enemyObj.enemy.id || 'enemy1'
    document.getElementById(`cell-${enemyObj.enemy.x}-${enemyObj.enemy.y}`)
      .appendChild(enemyObj.domElem)
  }

  const getPlayerCheckSum = () => playerObj.player.x + playerObj.player.y + playerObj.player.hp

  const paintPlayer = () => {
    if(!playerObj || 
      (playerObj.lastChanges && playerObj.lastChanges === getPlayerCheckSum())){
        return;
      }

    const currentCell = playerObj.domElem.parentElement

    currentCell.removeChild(playerObj.domElem)
    const newCell = document.getElementById(`cell-${playerObj.player.x}-${playerObj.player.y}`)
    
    if(!newCell) return
    
    const playerHp = playerObj.player.hp >= 0 ? playerObj.player.hp : 100
    playerObj.domElem.style.setProperty("--playerHp", playerHp + '%');
    newCell.appendChild(playerObj.domElem)


    playerObj.lastChanges = getPlayerCheckSum();
  }

  const getEnemyCheckSum = () => enemyObj.enemy.x + enemyObj.enemy.y + enemyObj.enemy.hp

  const paintEnemy = () => {

    if(!enemyObj || 
      (enemyObj.lastChanges && enemyObj.lastChanges === getEnemyCheckSum())){
        return;
      }

    const currentCell = enemyObj.domElem.parentElement

    currentCell.removeChild(enemyObj.domElem)
    const newCell = document.getElementById(`cell-${enemyObj.enemy.x}-${enemyObj.enemy.y}`)
    
    if(!newCell) return
    
    const enemyHp = enemyObj.enemy.hp >= 0 ? enemyObj.enemy.hp : 100
    enemyObj.domElem.style.setProperty("--enemyHp", enemyHp + '%');
    newCell.appendChild(enemyObj.domElem)


    enemyObj.lastChanges = getEnemyCheckSum();
  }

  const rePaint = () => {
    requestAnimationFrame(() => {
      paintPlayer()
      paintEnemy()

      rePaint()
    })
  }


  const init = () => {
    drawMap()
    registerKeyListener()
    rePaint()
  }

  init();

  return {
    addPlayer,
    addEnemy
  }
}