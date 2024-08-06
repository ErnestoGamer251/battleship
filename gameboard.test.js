// gameboard.test.js
const Gameboard = require('./gameboard');
const Ship = require('./ship');

test('can place ship at specified coordinates', () => {
  const gameboard = Gameboard();
  const ship = Ship(3);
  gameboard.placeShip(ship, [0, 0]);
  expect(gameboard.board[0][0]).toBe(ship);
});

test('can receive an attack and hit a ship', () => {
  const gameboard = Gameboard();
  const ship = Ship(3);
  gameboard.placeShip(ship, [0, 0]);
  gameboard.receiveAttack([0, 0]);
  expect(ship.timesHit).toBe(1);
});

test('records missed attacks', () => {
  const gameboard = Gameboard();
  gameboard.receiveAttack([1, 1]);
  expect(gameboard.missedAttacks).toContainEqual([1, 1]);
});

test('reports if all ships are sunk', () => {
  const gameboard = Gameboard();
  const ship = Ship(1);
  gameboard.placeShip(ship, [0, 0]);
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.allShipsSunk()).toBe(true);
});
