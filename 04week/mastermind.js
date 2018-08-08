'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];



function printBoard() {
  console.log(solution);
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here
  const solutionArray = solution.split('');
  const guessArray = guess.split('');
  let correctLettersLocations = 0;
  for(let i = 0; i < solutionArray.length; i++){
    if(solutionArray[i] === guessArray[i]){
      correctLettersLocations++;
      solutionArray[i] = null;
    }
  }
  let correctLetters = 0;
  for(let i = 0; i < solutionArray.length; i++){
    let targetIndex = solutionArray.indexOf(guessArray[i]);
    if(targetIndex > -1){
      correctLetters++;
      solutionArray[targetIndex] = null;
    }
  }
  return `${correctLettersLocations}-${correctLetters}`;
}
const startNewGame = () => {
  rl.question('Play again? (y/n)', (input) => {
    if(input === 'y'){
      board = [];
      solution = '';
      generateSolution();
      getPrompt();
    } else{
      console.log('Have a great day!');
      rl.close();
    }
  });
}
function mastermind(guess) {
  // solution = 'abdc'; // Comment this out to generate a random solution
  // your code here
  if(guess && typeof guess === 'string' && guess.length === solution.length){
    if(guess === solution){
      console.log('You guessed it!');
      startNewGame();
    } else if(board.length >= 10){
      console.log(`You ran out of turns! The solution was ${solution}`);
      startNewGame();
    } else {
      console.log('Guess again.');
      let hint = `${guess} ${generateHint(guess)}`
      board.push(hint);
    }
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    if(guess != solution || board.length < 11){
      printBoard();
      getPrompt();
    }
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
