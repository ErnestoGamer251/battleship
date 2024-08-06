// ship.js
class Ship {
    constructor(length) {
      this.length = length;
      this.timesHit = 0;
    }
  
    hit() {
      this.timesHit += 1;
    }
  
    isSunk() {
      return this.timesHit >= this.length;
    }
  }
  
  module.exports = Ship;
  