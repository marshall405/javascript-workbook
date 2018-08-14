'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

/*
ticTacToe() takes two arguments, a number for row and a number for column
isValidInput() takes two arguments, checks that its a number and is between 0 and 2
If valid input check that its a legal move
isLegalMove() takes two arguments, checks board to make sure nothing is in that spot
If move is legal, add move to board
addMove() takes two arguments, row and column, adds move to board array

After each user input, check for win or switchPlayer().

Check For Win...
  After each input iterate over board array, check if each item is equal to player
    Check horizontal win for each row
      let board = [
          ['X', 'X', 'X'], board[0][0]  board[0][1]  board[0][2]  Check
          [' ', ' ', ' '], board[1][0]  board[1][1]  board[1][2]  Check
          [' ', ' ', ' ']  board[2][0]  board[2][1]  board[2][2]  Check
        ];
        
    Check vertical win for each column 
        let board = [        Check         Check         Check
          ['X', ' ', ' '], board[0][0] | board[0][1] | board[0][2]
          ['X', ' ', ' '], board[1][0] | board[1][1] | board[1][2]
          ['X', ' ', ' ']  board[2][0] | board[2][1] | board[2][2]
        ];

    Check diagonal win
        let board = [         Check         Check
          ['X', ' ', ' '], board[0][0] | board[2][0]
          [' ', 'X', ' '], board[1][1] | board[1][1]
          [' ', ' ', 'X']  board[2][2] | board[0][2]
        ];
Switch player...
  if(player == 'X'){
     player = 'O';
  } else {
    player = 'X';
  }

*/

const isValidInput = (row, column) => (!Number.isNaN(row) && row >= 0 && row <= 2) && (!Number.isNaN(column) && column >= 0 && column <= 2);
const isLegalMove = (row, column) => board[row][column] === ' ';
const addMove = (row, column) => board[row][column] = playerTurn;
const switchPlayer = () => {
  return playerTurn == 'X' ? playerTurn = 'O' : playerTurn = 'X';
}

function horizontalWin() {
  // Your code here
  // return board[0][0] === playerTurn && board[0][1] === playerTurn &&  board[0][2] === playerTurn ||
  //        board[1][0] === playerTurn && board[1][1] === playerTurn &&  board[1][2] === playerTurn ||
  //        board[2][0] === playerTurn && board[2][1] === playerTurn &&  board[2][2] === playerTurn;
  for(let i = 0; i < board.length; i++){
    if(board[i][0] === playerTurn && board[i][1] === playerTurn && board[i][2] === playerTurn){
      return true;
    }
  }
  return false;
}

function verticalWin() {
  // Your code here
  return board[0][0] === playerTurn && board[1][0] === playerTurn &&  board[2][0] === playerTurn ||
         board[0][1] === playerTurn && board[1][1] === playerTurn &&  board[2][1] === playerTurn ||
         board[0][2] === playerTurn && board[1][2] === playerTurn &&  board[2][2] === playerTurn;
}

function diagonalWin() {
  // Your code here
  return board[0][0] === playerTurn && board[1][1] === playerTurn &&  board[2][2] === playerTurn ||
         board[2][0] === playerTurn && board[1][1] === playerTurn &&  board[0][2] === playerTurn;
}

function checkForWin() {
  // Your code here
  return horizontalWin() || verticalWin() || diagonalWin();
}

function ticTacToe(row, column) {
  // Your code here
  if(isValidInput(row, column)){
    if(isLegalMove(row, column)){
      addMove(row, column);
      if(checkForWin()) {
        console.log(`${playerTurn} Wins!`);
      } else {
        switchPlayer();
      }
    } else {
      console.log('Move already made');
    }
  } else {
    console.log('Invalid Input');
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
