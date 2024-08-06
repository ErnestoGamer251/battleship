// player.test.js
const Player = require('./player');
const Gameboard = require('./gameboard');

test('player can make a move', () => {
  const player = Player('human');
  const gameboard = Gameboard();
  player.makeMove([0, 0], gameboard);
  expect(gameboard.missedAttacks).toContainEqual([0, 0]);
});
