const internalGame = initGame({
  mapElementId: 'map',
  mapSize: 25
});

internalGame.addPlayer({
  name: 'Player 1',
  x: 0,
  y: 0,
  hp: 75,
  playerClass: 'wizard' // warrior, wizard
});
