'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// pigLatin - takes a word, moves all letters, up to the first vowel, to the end and adds 'ay'
// example pigLatin('tiger') => returns 'igertay'
// steps:
/*
  1) Check for valid input - truthy, trim whitespace, make all lower case, turn non-strings to strings
  2) Create an array that holds vowels = ['a','e','i','o','u'].
  3) Get index of first vowel in word using indexOf, store in variable named index. if index = 0, return word + 'yay'
  4) Get letters before first vowel and store in variable named firstLetters, using string.slice(0, index).
  5) Get letters after first vowel(inclusive) and store in variable named lettersAfter, using string.slice(index)
  6) Using concatenation, return lettersAfter + firstLetters + 'ay';
  METHODS: String(), trim(), toLowerCase(), indexOf(), For Loop, 
*/

const pigLatin = (word) => {
  if(word){
    const input = String(word).trim().toLowerCase();
    const vowels = ['a','e','i','o','u'];
    let index;
    for(let i = 0; i < input.length; i++){
      // check if letter in word is in the vowels array, if not goes to next letter
      if(vowels.indexOf(input[i]) > -1){
        let firstVowelIndex = vowels.indexOf(input[i]);
        // use value from vowels array to check the position of vowel in the word
        index = input.indexOf(vowels[firstVowelIndex]);
        if(index === 0){
          return `${input}yay`;
        }
        break;
      }
    }
    const firstLetters = input.slice(0, index || 0);
    const lettersAfter = input.slice(index);
    return `${lettersAfter}${firstLetters}ay`;
  }
}




function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
