'use strict';

const assert = require('assert');

const formatHand = (hand) => {
    let setHand;
    switch(hand.trim().toLowerCase().charAt(0)){
      case 'r':
        setHand = 'rock';
        break;
      case 'p':
        setHand = 'paper';
         break;
      case 's':
        setHand = 'scissors';
        break;
      default:
        break;
    }
    return setHand;
  }
  
  function rockPaperScissors(hand1, hand2) {
  
    // Write code here
    
    if((hand1 && hand2) && (isNaN(hand1) && isNaN(hand2))){
      const handOne = formatHand(hand1);
      const handTwo = formatHand(hand2);
      if(handOne && handTwo){
        if(handOne === handTwo){
          return 'It\'s a tie!'
        }
        if(handOne == 'rock'){
          return handTwo == 'paper' ? 'Hand two wins!' : 'Hand one wins!';
        } 
        if(handOne == 'paper'){
          return handTwo == 'scissors' ? 'Hand two wins!' : 'Hand one wins!';
        } 
        if(handOne == 'scissors'){
          return handTwo == 'rock' ? 'Hand two wins!' : 'Hand one wins!';
        } 
      }
    } 
    // One or more arguments are invalid
    return 'Invalid input';
  }
  
  // Tests
  
if (typeof describe === 'function') {
  
    describe('#rockPaperScissors()', () => {
        it('should accept any string that begins with r, p or s', () => {
            assert.equal(rockPaperScissors('roooooocky', 'perfect'), "Hand two wins!");
            assert.equal(rockPaperScissors('sscissorrrs', ' PaPERr '), "Hand one wins!");
            assert.equal(rockPaperScissors('r', 's'), "Hand one wins!");
        });
        it('should detect which hand won', () => {
            assert.equal(rockPaperScissors('rock', 'scissors'), 'Hand one wins!');
            assert.equal(rockPaperScissors('paper', 'rock'), 'Hand one wins!');
            assert.equal(rockPaperScissors('scissors', 'paper'), 'Hand one wins!');
            assert.equal(rockPaperScissors('scissors', 'rock'), 'Hand two wins!');
            assert.equal(rockPaperScissors('rock', 'paper'), 'Hand two wins!');
            assert.equal(rockPaperScissors('paper', 'scissors'), 'Hand two wins!');
        });
        it('should not accept numbers', () => {
            assert.equal(rockPaperScissors(123, 456), 'Invalid input');
            assert.equal(rockPaperScissors('123', '456'), 'Invalid input');
            assert.equal(rockPaperScissors(123, 'rock'), 'Invalid input');
        });
        it('should only accept strings starting with r, p or s', () => {
            assert.equal(rockPaperScissors('apples', 'rock'), 'Invalid input');
            assert.equal(rockPaperScissors('coffee', 'paper'), 'Invalid input');
            assert.equal(rockPaperScissors('notAValidWord', 'scissors'), 'Invalid input');
        });
    });
}