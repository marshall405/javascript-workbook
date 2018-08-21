'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

// new Game()
  // moveChecker() is the parent function and takes two arguments, the starting point and ending point.
    // areCoordsValid(), takes two arguments, (start, end),
      /* 1) check that coordinates are on the board,
         2) check that the starting point containes a checker,
         3) check that ending point is empty */
    // create isAJump(), takes two argumets, (start, end)
      // check that end point is either plus or minus 2 on the y and x point
    // create isAValidJump(), takes two arguments, (start, end)
      // check that the piece being jumped is a checker
      // check that the piece being jumped is the opponents checker
    // create a isMoveValid(), takes two arguments, (start, end),
      // checks that the starting point is plus or minus 1 for both the ending y and x points 
    // if areCoordsValid and isAJump and isAValidJump -> jump checker -> check for another jump
    // else if areCoordsValid but !isAJump and isMoveValid -> move checker 1 square
  //Board
    // create initBoard that creates and adds the checkers to the board


    // WORK ON ADDING A KING FEATURE


function Checker(player) {
  // Your code here
  return {
    symbol: player,
    isKing: false
  }
}

class Board {
  constructor() {
    this.grid = [];
    this.checkers = {
      'r': [],
      'b': [],
      get length(){
        return this['r'].length + this['b'].length;
      }
    };
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    //loop to create the 8 rows
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
  // create checkers and add to grid
  initBoard(){
    // create 24 checkers, 12 red and 12 black
    for(let i = 0; i < 12; i++){
      this.checkers['r'].push(Checker('r'));
      this.checkers['b'].push(Checker('b'));
    }
    // add red checkers to board
    for(let row = 0; row < 3; row++){
      for(let column = 0; column < this.grid[row].length; column++){
        if((row + column) % 2 !== 0){
          this.grid[row][column] = Checker('r');
        }
      }
    }
    // add black checkers to board
    for(let row = 5; row < 8; row++){
      for(let column = 0; column < this.grid[row].length; column++){
        if((row + column) % 2 !== 0){
          this.grid[row][column] = Checker('b');
        }
      }
    }
  }
}

class Game {
  constructor() {
    this.board = new Board;
    this.currentPlayer = 'b';
  }
  start() {
    this.board.createGrid();
    this.board.initBoard();
  }
  areCoordsValid(start, end){
    const isNumberBetween0And7 = number => (number.y <= 7 && number.y >= 0) && (number.x <= 7 && number.x >= 0);
    const areCoordsOdd = coords => coords.x + coords.y % 2 !== 0;
    const isCoordEmpty = coord => this.board.grid[coord.y][coord.x] === null;
    return isNumberBetween0And7(start) && isNumberBetween0And7(end) && areCoordsOdd(start) && areCoordsOdd(end) && !isCoordEmpty(start) && isCoordEmpty(end);
  }
  isJumpValid(start, end){
    // check that coords are valid again (useful for when checking for another jump)
    if(this.areCoordsValid(start, end)){
      // if currentPlayer is 'b' the y coordinates decrease
      if(this.currentPlayer === 'b'){
        if(end.x < start.x){
          return this.board.grid[start.y - 1][start.x - 1] && this.board.grid[start.y - 1][start.x - 1].symbol !== 'b';
        }
        return this.board.grid[start.y - 1][start.x + 1] && this.board.grid[start.y - 1][start.x + 1].symbol !== 'b';
      } else {
        if(end.x < start.x){
          // start 
          return this.board.grid[start.y + 1][start.x - 1] && this.board.grid[start.y + 1][start.x - 1].symbol !== 'r';
        }
        return this.board.grid[start.y + 1][start.x + 1] && this.board.grid[start.y + 1][start.x + 1].symbol !== 'r';
      }
    }
  }
  isMoveValid(start, end) {
    return (end.y - start.y === -1 || end.y - start.y === 1) && (end.x - start.x === 1 || end.x - start.x === -1); 
  }
  isPlayersTurn(start) {
    return this.currentPlayer === this.getChecker(start).symbol;
  }
  getChecker(checker) {
    return this.board.grid[checker.y][checker.x];
  }
  isAJump(start, end) {
    return (end.y - start.y === -2) || (end.y - start.y === 2);
  }
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'b' ? 'r' : 'b';
  }
  canJumpAgain(end){
    if(this.currentPlayer === 'b'){
      if(end.y >= 3){
        return this.isJumpValid(end, {y: end.y - 2, x: end.x -2}) || this.isJumpValid(end, {y: end.y - 2, x: end.x + 2});
      }
    } else {
      if(end.y <= 5){
        return this.isJumpValid(end, {y: end.y + 2, x: end.x -2}) || this.isJumpValid(end, {y: end.y + 2, x: end.x + 2});
      }
    }
  }
  checkForWinner(){
    return this.board.checkers[this.currentPlayer === 'b' ? 'r' : 'b'].length === 0;
  }
  setToKing(end){
    this.getChecker(end).isKing = true;
    this.getChecker(end).symbol = this.getChecker(end).symbol.toUpperCase(); 
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
    const jumpChecker = (start, end) =>{
      const grid = this.board.grid;
      grid[end.y][end.x] = this.getChecker(start);
      grid[start.y][start.x] = null;
      if(this.currentPlayer === 'b'){
        const row = grid[start.y - 1];
        if(end.x < start.x){
          row[start.x - 1] = null;
        } else {
          row[start.x + 1] = null;
        }
      } else {
        const row = grid[start.y + 1];
        if(end.x < start.x){
           row[start.x - 1] = null;
        } else {
          row[start.x + 1] = null;
        }
      }
      this.board.checkers[this.currentPlayer === 'b' ? 'r' : 'b'].pop();
    }
    if(this.areCoordsValid(start, end)){
      if(this.isPlayersTurn(start)){
        if(this.isAJump(start, end)){
          if(this.isJumpValid(start, end)){
            // jump checker
            jumpChecker(start, end);
            // check for king status
            if(end.y === 0 || end.y === 7){
              this.setToKing(end);
              this.switchPlayer();
            }
            if(this.canJumpAgain(end)){ 
              this.currentMove = end;
            } else {
              this.switchPlayer();
            }
          } else {
            console.log('Invalid jump');
          }
        } else if(this.isMoveValid(start, end)){
          // move checker 1 move
          this.board.grid[end.y][end.x] = this.getChecker(start);
          this.board.grid[start.y][start.x] = null;
          if(end.y === 0 || end.y === 7){
            this.setToKing(end);
          }
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
}

function getPrompt() {
  game.board.viewGrid();
  console.log(`RED: ${game.board.checkers['r'].length}`);
  console.log(`BLACK: ${game.board.checkers['b'].length}`);
  console.log(`Current player: ${game.currentPlayer === 'b' ? 'Black' : 'Red'}`);
  if(game.checkForWinner()){
    console.log(`${game.currentPlayer === 'b' ? 'Black' : 'Red'} Wins!`)
  } else {
    rl.question('which piece?: ', (whichPiece) => {
      rl.question('to where?: ', (toWhere) => {
        game.moveChecker(whichPiece, toWhere);
        getPrompt();
      });
    });
  }
}

const game = new Game();
game.start();

// Uncomment to see a demo 
// const seriesOfCalls = [
//   ['50', '41'], // Move black 
//   ['21', '30'], // Move red 
//   ['52', '43'], // Move black 
//   ['30', '52'], // Red jump black 
//   ['63', '41'], // Black jump red 
//   ['23', '32'], // Move red
//   ['72', '63'], // Move black 
//   ['32', '50'], // Red jump black
//   ['50', '72'] // Red jump black to king
//   ];
// let i = 0;
// let demo = setInterval( () => {
//   game.moveChecker(seriesOfCalls[i][0], seriesOfCalls[i][1]);
//   game.board.viewGrid();
//   i++;
// }, 2000);
// setTimeout( () => clearInterval(demo), 20000);




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
