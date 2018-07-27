'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
    
    if(hand1 && hand2){
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
      it('should detect a tie', () => {
        assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
        assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
      });
      it('should detect which hand won', () => {
        assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      });
      it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
        assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
        assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
      });
      it('should accept any string starting with r, p or s', () => {
        assert.equal(rockPaperScissors('roooooock', 'p'), "Hand two wins!");
        assert.equal(rockPaperScissors('sscissorrrs', ' PaPERr '), "Hand one wins!");
        assert.equal(rockPaperScissors('r', 'scissors'), "Hand one wins!");
      });
    });
  }