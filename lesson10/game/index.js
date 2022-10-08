
// STEP 1 >>>>>>>>>>>>
class PlayerClass {
  constructor(playerClass) {
    this.playerClass = playerClass
  }
}

class Player extends PlayerClass {
  constructor(x, y, hp, playerClass) {
    super(playerClass)
    this.id = Date.now()
    this.x = x
    this.y = y
    this.hp = hp

    // STEP 3
    broker.subscribe(`player/attack/${this.id}`, this.attacked)
  }

  // STEP 3
  // attacked(enemyId) {
  //   console.log('player attacked', this.id, enemyId) // 'this' is undefined
  //   this.hp -= 5
  // }
  attacked = (enemyId) => {
    console.log('player attacked', this.id, enemyId)
    this.hp -= 5
  }

  // STEP 3
  attack = (enemyId) => {
    console.log('player attack', this.id, enemyId)
  }
}

class Enemy {
  constructor(x, y, hp) {
    this.id = Date.now()
    this.x = x
    this.y = y
    this.hp = hp

    // STEP 3
    broker.subscribe(`enemy/attack/${this.id}`, this.attacked)
  }

  // STEP 3
  attacked = (playerId) => {
    console.log('enemy attacked', this.id, playerId)
    this.hp -= 5
  }

  // STEP 3
  attack = (playerId) => {
    console.log('enemy attack', this.id, playerId)
  }
}

// <<<<<<<<<<<< STEP 1

// STEP 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const gameConfigSingleton = (function(){
  let instance;

  function init() {
    return {
      mapElementId: 'map',
      mapSize: 25
    }
  }

  return {
    get value() {
      if(!instance) {
        instance = init();
      }

      return instance;
    }
  }
})()

// <<<<<<<<<<<<<<<<<<<< STEP 2


// STEP 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const game = (function() {
  const internalGame = initGame(gameConfigSingleton.value) // STEP 2

  const player = new Player(10, 10, 80, 'wizard')
  const enemy = new Enemy(20, 10, 100)

  internalGame.addPlayer(player)
  internalGame.addEnemy(enemy)

  function movePlayer(x, y) {
    player.x = x
    player.y = y
  }

  // STEP 3
  function attackEnemy(enemyId) {
    broker.publish(`enemy/attack/${enemyId}`, player.id)
  }

  // STEP 3
  function attackPlayer(playerId) {
    broker.publish(`player/attack/${playerId}`, enemy.id)
  }

  return {
    movePlayer,
    attackEnemy,
    attackPlayer
  }
})()

// <<<<<<<<<<<<<<<<<<<<<< STEP 1
