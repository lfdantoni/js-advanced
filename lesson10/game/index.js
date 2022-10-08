class PlayerClass {
  constructor(playerClass) {
    this.playerClass = playerClass
  }
}

class Player extends PlayerClass {
  constructor(x, y, hp, playerClass) {
    super(playerClass)
    this.x = x
    this.y = y
    this.hp = hp
  }
}

class Enemy {
  constructor(x, y, hp) {
    this.x = x
    this.y = y
    this.hp = hp
  }
}


const game = (function() {
  const internalGame = initGame({mapElementId: 'map'})

  const player = new Player(10, 10, 80, 'wizard')
  const enemy = new Enemy(20, 10, 100)

  internalGame.addPlayer(player)
  internalGame.addEnemy(enemy)

  function movePlayer(x, y) {
    player.x = x
    player.y = y
  }

  function attackEnemy() {
    enemy.hp -= 5
  }

  return {
    movePlayer,
    attackEnemy
  }
})()

