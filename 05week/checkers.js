'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// BOARD
/* r = red checker, b = black checker
   0 1 2 3 4 5 6 7
0    r   r   r   r
1  r   r   r   r
2    r   r   r   r
3
4
5  b   b   b   b
6    b   b   b   b
7  b   b   b   b
   0 1 2 3 4 5 6 7  
*/
//  --------RULES FOR CHECKERS-----------
  // Two Players, each start with 12 checkers
  // Checkers are only able to move forward diagonally one square at a time, unless you are jumping the oppenents checker (see jumping rules)
  // Cannot move into a spot that is occupied
  // Cannot move backwards unless you are a King (see king rules).
// Jumping
  // Player must jump opponent if there is an available space beyond the opponents checker
  // After making a jump the player may have another jump availanle and must continue jumping opponents checkers until no more jumps are available 
// King
  // To become a King, you must get your checker to the opponents back row other. Turn ends.
  // Once you are a king, you can move back and forth diagonally.

// Whiteboard
// Class Game is parent function
// create a areCoordsValid(), takes two arguments, (which piece, to where), check that coordinates are on the board
// create a isMoveValid(), takes two arguments, (which piece, to where), 
          // check that (which piece) is current players checker,
          // check that (to where) is an empty spot, one diagonal move away from current spot, unless jumping
          // 
 



function Checker() {
  // Your code here
}

class Board {
  constructor() {
    this.grid = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // Your code here
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
