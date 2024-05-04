const enemyTypes = {
  skull: 'skull',
  ghost: 'ghost'
}

class Enemy {
  constructor(type, x, y, hp) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.hp = hp;
  }

  attack(player) {}

  attacked(damage) {}
}

class SkullEnemy extends Enemy {
  constructor(x, y, hp) {
    super(enemyTypes.skull, x, y, hp || 200)
  }

  attack(player) {}

  damage(damage) {
    this.hp -= damage * 0.8;
  }
}

class GhostEnemy extends Enemy {
  constructor(x, y, hp) {
    super(enemyTypes.ghost, x, y, hp || 150)
  }

  attack(player) {}

  damage(damage) {
    this.hp -= damage * 0.6;
  }
}

// Factory pattern
class EnemyFactory {
  static create(type, x, y) {
    let enemy;

    switch(type) {
      case enemyTypes.ghost:
        enemy = new GhostEnemy(x, y)
        break;
      case enemyTypes.skull:
        enemy = new SkullEnemy(x, y)
      break;  
    }

    return enemy;
  }

  static createFromJson(enemyJson) {
    let enemy;

    switch(enemyJson.type) {
      case enemyTypes.ghost:
        enemy = new GhostEnemy(enemyJson.x, enemyJson.y, enemyJson.hp)
        break;
      case enemyTypes.skull:
        enemy = new SkullEnemy(enemyJson.x, enemyJson.y, enemyJson.hp)
      break;  
    }

    return enemy;
  }
}


class Storage {
  saveItem(key, obj) {}
  getItem(key) {}
}

class LocalStorage extends Storage {
  saveItem(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
  }

  getItem(key) {
    return JSON.parse(localStorage.getItem(key)) || {}
  }
}

function getStorage() {
  return new LocalStorage()
}

// game is the namespace - relevator pattern
const game = (function() {
  const moveFactor = 5;
  let enemies = [];
  // unique notifierBroker instance - singleton patten
  let notifierBroker;
  const storage = getStorage(); // can be replaced with any class which extends Storage class
  const GAME_STORAGE_KEY = 'RPG_GAME'

  const registerKeyListener = () => {
    window.addEventListener('keyup', e => {
      const currentCell = document.getElementById('player')
  
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

      const newXToRender = newX * moveFactor;
      const newYToRender = newY * moveFactor;
  
      if(newXToRender >= window.innerWidth || newYToRender >= window.innerHeight || newXToRender < 0 || newYToRender < 0) return;
  
      currentCell.dataset.move = e.code
      currentCell.dataset.x = newX;
      currentCell.dataset.y = newY;

      currentCell.style.left = `${newXToRender}px`;
      currentCell.style.top = `${newYToRender}px`;
    })
  }

  const addEnemy = enemy => {
    enemies.push(enemy)

    console.log('enemies', enemies)
  }

  const getNotifier = () => {
    if(!notifierBroker) {
      // publish/subscriber pattern
      const topics = [];
      notifierBroker = {
        subscribe: (topic, callback) => {
          if(!topics[topic]) {
            topics[topic] = [callback]
          } else {
            topics[topic].push(callback)
          }
        },
        publish: (topic, data) => {
          if(!topics[topic]) {
            return
          } else {
            topics[topic].forEach(cb => cb(data))
          }
        }
      }
    }

    return notifierBroker;
  }

  const saveGame = () => {
    storage.saveItem(GAME_STORAGE_KEY, {
      enemies
    })
  }

  const loadGame = () => {
    const { enemies: savedEnemies } = storage.getItem(GAME_STORAGE_KEY)
    
    // enemies = savedEnemies || [] // those are not the original prototypes/classes, those are generic object
    // enemies[0].attacked(10) // will fail

    savedEnemies?.forEach(savedEnemy => {
      enemies.push(EnemyFactory.createFromJson(savedEnemy))
    })

    // enemies[0].attacked(10) // will work

  }

  const init = () => {
    loadGame()
    registerKeyListener()
  }

  init();

  return {
    addEnemy,
    getNotifier,
    saveGame,
  }

})()


game.addEnemy(EnemyFactory.create('skull', 40, 50))

console.log(game.getNotifier() === game.getNotifier()) // is true, both are the same object instance

game.getNotifier().subscribe('attack', data => console.log('attack subscriber', data))




game.getNotifier().publish('attack', { damage: 10 })

const currentCell = document.getElementById('player');

// change player hp
currentCell.style.setProperty('--playerHp', '80%');

game.saveGame()