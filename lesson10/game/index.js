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
  constructor(x, y) {
    super('skull', x, y, 200);
  }

  attack(player) {}

  damage(damage) {
    this.hp -= damage * 0.8;
  }
}

// Factory pattern
class EnemyFactory {
  static create(type, x, y) {
    let enemy;

    switch(type) {
      case 'skull':
        enemy = new SkullEnemy(x, y);
        break;
      case 'ghost':
      enemy = new GhostEnemy(x, y);
      break;  
    }

    return enemy;
  }
}

class GhostEnemy extends Enemy {
  constructor(x, y) {
    super('ghost', x, y, 150);
  }

  attack(player) {}

  damage(damage) {
    this.hp -= damage * 0.6;
  }
}

// game is the namespace - relevator pattern
const game = (function() {
  const moveFactor = 5;
  const enemies = [];
  // unique notifierBroker instance - singleton patten
  let notifierBroker;

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

  const init = () => {
    registerKeyListener()
  }

  init();

  return {
    addEnemy,
    getNotifier,
  }

})()


game.addEnemy(EnemyFactory.create('skull', 40, 50))

console.log(game.getNotifier() === game.getNotifier()) // is true, both are the same object instance

game.getNotifier().subscribe('attack', data => console.log('attack subscriber', data))

game.getNotifier().publish('attack', { enemy: 'skull' })