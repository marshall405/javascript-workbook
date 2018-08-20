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
                    // The Board
                    // [ [ null, null, null, null, null, null, null, null ],
                    //   [ null, null, null, null, null, null, null, null ],
                    //   [ null, null, null, null, null, null, null, null ],
                    //   [ null, null, null, null, null, null, null, null ],
                    //   [ null, null, null, null, null, null, null, null ],
                    //   [ null, null, null, null, null, null, null, null ],
                    //   [ null, null, null, null, null, null, null, null ],
                    //   [ null, null, null, null, null, null, null, null ] ]
// WHAT I WANT
// I want the game to follow the rules from above
// I want the board to show the current state of all pieces left on the board
// I want to input coordinates for the piece I want to move
// I want to input coordinates to where I want that piece to move
// I want the game to tell me if a move is invalid
// I want the game to clear an opponents piece when I jump them
// I want the game to keep track of whos turn it is, and tell me when there is a winner

// new Game will be parent function.
  // add starting checkers to the board
  // create a areCoordsValid(), takes two arguments, (whichPiece, toWhere), check that coordinates are on the board
  // create a isMoveValid(), takes two arguments, (whichPiece, toWhere), 
            // check that (whichPiece) is current players checker,
            // check that (toWhere) is an empty spot, one diagonal move away from current spot, unless jumping
  // create moveChecker(), takes two arguments, (whichPiece, toWhere), sets whichPiece to an empty string ' ', and sets toWhere to either r or b

  // create addCheckers() method to Class Board that adds 24 checkers to the grid
  // ADD CHECKERS TO BOARD
// 



function Checker(player) {
  // Your code here
  return {
    symbol: symbol,
    isKing: false
  }
}

class Board {
  constructor() {
    this.grid = [ [ null,{symbol: 'R', isKing: false}, null, {symbol: 'R', isKing: false}, null, {symbol: 'R', isKing: false}, null, {symbol: 'R', isKing: false} ],   // row 0
                  [ {symbol: 'R', isKing: false}, null,{symbol: 'R', isKing: false}, null,{symbol: 'R', isKing: false}, null, {symbol: 'R', isKing: false}, null ],   // row 1
                  [ null, {symbol: 'R', isKing: false}, null, {symbol: 'R', isKing: false}, null, {symbol: 'R', isKing: false}, null, {symbol: 'R', isKing: false} ],   // row 2
                  [ null, null, null, null, null, null, null, null ],   // row 3
                  [ null, null, null, null, null, null, null, null ],   // row 4
                  [ {symbol: 'B', isKing: false}, null, {symbol: 'B', isKing: false}, null, {symbol: 'B', isKing: false}, null, {symbol: 'B', isKing: false}, null ],   // row 5
                  [ null, {symbol: 'B', isKing: false}, null, {symbol: 'B', isKing: false}, null, {symbol: 'B', isKing: false}, null, {symbol: 'B', isKing: false} ],   // row 6
                  [ {symbol: 'B', isKing: false}, null, {symbol: 'B', isKing: false}, null, {symbol: 'B', isKing: false}, null, {symbol: 'B', isKing: false}, null ] ];  // row 7
    this.checkers = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    // for (let row = 0; row < 8; row++) {
    //   this.grid[row] = [];
    //   // push in 8 columns of nulls
    //   for (let column = 0; column < 8; column++) {
    //     this.grid[row].push(null);
    //   }
    // }
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
    // addCheckers() {
    //   // add red checkers, grid [0] - [2]
    //   for(let i = 0; i < this.grid.length; i++){

    //   }
    // }
}

class Game {
  constructor() {
    this.board = new Board;
    this.currentPlayer = 'B';
  }
  start() {
    this.board.createGrid();
  }
  areCoordsValid(start, end){
    // between 0 and 7
    const isNumberBetween0And7 = number => (number.y <= 7 && number.y >= 0) && (number.x <= 7 && number.x >= 0);
    // checkers are on grid coordinates that when added together are odd
    const areCoordsOdd = coords => coords.x + coords.y % 2 !== 0;
    const isCoordEmpty = coord => this.board.grid[coord.y][coord.x] === null;
    return isNumberBetween0And7(start) && isNumberBetween0And7(end) && areCoordsOdd(start) && areCoordsOdd(end) && !isCoordEmpty(start) && isCoordEmpty(end);
  }
  isJumpValid(start, end){
    if(this.currentPlayer === 'B'){
      return this.board.grid[start.y - 1][start.x - ((start.x - end.x) - 1)].symbol !== 'B';
    } else {
      return this.board.grid[start.y + 1][start.x - ((start.x - end.x) - 1)].symbol !== 'R';
    }
  }
  isMoveValid(start, end) {
    return (end.y - start.y === -1) || (end.y - start.y === 1); 
  }
  isPlayersTurn(start) {
    return this.currentPlayer === this.getChecker(start).symbol;
  }
  getChecker(checker) {
    return this.board.grid[checker.y][checker.x];
  }
  difference(num1, num2){
    return num1 - num2;
  }
  isAJump(start, end) {
    return (end.y - start.y === -2) || (end.y - start.y === 2);
  }

  
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'B' ? 'R' : 'B';
  }
  moveChecker(whichPiece, toWhere){
    const start = {
      y: Number(whichPiece[0]),
      x: Number(whichPiece[1])
    }
    const end = {
      y: Number(toWhere[0]),
      x: Number(toWhere[1]) 
    }
    if(this.areCoordsValid(start, end)){
      if(this.isPlayersTurn(start)){
        if(this.isAJump(start, end)){
          if(this.isJumpValid(start, end)){
            // jump checker
            this.board.grid[end.y][end.x] = this.getChecker(start);
            this.board.grid[start.y][start.x] = null;
            if(this.currentPlayer === 'B'){
              this.board.grid[start.y - 1][start.x - ((start.x - end.x) - 1)] = null; // continue here.....getting rid of the wrong checker....
            } else {
              this.board.grid[start.y + 1][start.x - ((start.x - end.x) - 1)] = null;
            }
            this.switchPlayer()
          } else {
            console.log('Invalid jump');
          }
        }
        if(this.isMoveValid(start, end)){
          // move checker 1 move
          this.board.grid[end.y][end.x] = this.getChecker(start);
          this.board.grid[start.y][start.x] = null;
          this.switchPlayer();
        }else {
          console.log('Invalid Move');
        }
      }else {
        console.log('Must select your own checker');
      }
    }else {
      console.log('Invalid coordinates');
    }
  }
  //     if(this.isMoveValid(start, end) === 'valid jump'){
  //       // jump checker
  //       if(this.currentPlayer === 'B'){
  //         // B's y axis moves up (y decreases)
  //         this.board.grid[end.y][end.x] = this.board.grid[start.y][start.x];
  //         this.board.grid[start.y][start.x] = null;
  //         this.board.grid[start.y - 1][start.x] = null;
  //         this.switchPlayer();
  //       } else {
  //         // R's y axis moves down (y increases)
  //         this.board.grid[end.y][end.x] = this.board.grid[start.y][start.x];
  //         this.board.grid[start.y][start.x] = null;
  //         this.board.grid[start.y + 1][start.x] = null;
  //         this.switchPlayer();
  //       }
  //       // not a jump
  //     }else if(this.isMoveValid(start, end) === 'move checker') {
  //       if(this.currentPlayer === 'B'){
  //         this.board.grid[end.y][end.x] = this.board.grid[start.y][start.x];
  //         this.board.grid[start.y][start.x] = null;
  //         this.switchPlayer();
  //       } else {
  //         this.board.grid[end.y][end.x] = this.board.grid[start.y][start.x];
  //         this.board.grid[start.y][start.x] = null;
  //         this.switchPlayer();
  //       }
  //     } else {
  //       // move is invalid
  //       console.log('Invalid Move');
  //     }
  //   } else {
  //     // coordinates are invalid
  //     console.log('Invalid Coordinates');
  //   }
  // }
}

function getPrompt() {
  game.board.viewGrid();
  console.log(`Current player: ${game.currentPlayer === 'B' ? 'Black' : 'Red'}`);
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
