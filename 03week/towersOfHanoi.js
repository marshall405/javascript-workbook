'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// towersOfHanoi takes two arguments, startStack and endStack, and pops() the last item from startStack and push() to endStack if move is legal
// Check if input is valid
//    -isValidInput()
//      takes two string arguments
//      check that the inputs are 'a', 'b' or 'c'
// Check if move is legal
//    -isLegal() 
//      takes two arguments,
//      checks if the last item on startStack is less than last item on endStack, if true move piece
// if legal, move piece
//    -movePiece()
//      takes two arguments, startStack and endStack
//      moves last item on startStack to endStack 
//      methods: pop() and push()
// After move, check for win
//    -checkForWin()
//      takes 0 arguments
//      check if all items are on the last stack
//      check the that the first array is empty and either the second or third array is empty

const isValidInput = (startStack, endStack) => {
  const validInputsArr = ['a','b','c'];
  return (startStack != endStack) && (validInputsArr.indexOf(startStack) != -1) && (validInputsArr.indexOf(endStack) != -1);
}

const isLegal = (startStack, endStack) => {
  // Your code here
  const startingStack = stacks[startStack];
  const endingStack = stacks[endStack];
  return startingStack[startingStack.length - 1] < endingStack[endingStack.length - 1] || endingStack.length == 0;
}

const movePiece = (startStack, endStack) => {
  // Your code here
    const removedItem = stacks[startStack].pop();
    stacks[endStack].push(removedItem);
}

const checkForWin = () => stacks.a.length === 0 && (stacks.b.length === 0 || stacks.c.length === 0);


const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  const startStackFormatted = startStack.trim().toLowerCase();
  const endStackFormatted = endStack.trim().toLowerCase();
  if(isValidInput(startStackFormatted, endStackFormatted)){
    if(isLegal(startStackFormatted, endStackFormatted)){
      movePiece(startStackFormatted, endStackFormatted);
      if(checkForWin()) {
        console.log('Winner');
      }
    } else {
      console.log('Invalid Move')
    }
  } else {
    console.log('Invalid Move');
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });
  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
  describe('#isValidInput', () => {
    it('should only accept a, b or c', () => {
      assert.equal(isValidInput('a', 'b'), true);
    });
    it('should not accept any value other than a, b or c', () => {
      assert.equal(isValidInput('notAValidInput', 'a'), false);
    });
    it('should not accept two arguments that have the same value', () => {
      assert.equal(isValidInput('a', 'a'), false);
    });
  });

} else {

  getPrompt();

}


