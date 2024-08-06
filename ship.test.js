// ship.test.js
const Ship = require('./ship');

test('ship can be hit', () => {
  const ship = Ship(3);
  ship.hit();
  expect(ship.timesHit).toBe(1);
});

test('ship is sunk when hit enough times', () => {
  const ship = Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test('ship is not sunk when not hit enough times', () => {
  const ship = Ship(2);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});
