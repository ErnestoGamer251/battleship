// game.js
const Player = require('./player');
const Gameboard = require('./gameboard');
const Ship = require('./ship');

document.addEventListener('DOMContentLoaded', () => {
  const player = new Player('human');
  const computer = new Player('computer');

  // Example: Placing ships on the gameboard
  player.gameboard.placeShip(new Ship(3), [0, 0]);
  computer.gameboard.placeShip(new Ship(3), [0, 0]);

  // Render gameboards
  const playerBoard = document.getElementById('player-board');
  const computerBoard = document.getElementById('computer-board');

  renderBoard(playerBoard, player.gameboard);
  renderBoard(computerBoard, computer.gameboard, true);

  function renderBoard(boardElement, gameboard, isClickable = false) {
    boardElement.innerHTML = '';
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.x = i;
        cell.dataset.y = j;
        if (isClickable) {
          cell.addEventListener('click', (e) => {
            const x = e.target.dataset.x;
            const y = e.target.dataset.y;
            player.makeMove([x, y], computer.gameboard);
            renderBoard(computerBoard, computer.gameboard, true);
          });
        }
        boardElement.appendChild(cell);
      }
    }
  }
});
