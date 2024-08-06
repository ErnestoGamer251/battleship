// player.js
class Player {
    constructor(type) {
      this.type = type;
      this.gameboard = new Gameboard();
    }
  
    makeMove(coordinates, opponentGameboard) {
      opponentGameboard.receiveAttack(coordinates);
    }
  }
  
  module.exports = Player;
  