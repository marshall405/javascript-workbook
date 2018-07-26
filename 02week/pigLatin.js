'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// pigLatin should take in a word and move all letters before first vowel to the end and add 'ay'
// pigLatin('tiger') => should return 'igertay'
// Take word and trim whitespace, toLowerCase and split into an array, word.trim().toLowerCase.split() - const wordArray.
// If word starts with a vowel, return word and add 'yay' to the end.
// Loop through word array, checking if its a vowel.
// Push all letters before first vowel to new array - const lettersBeforeVowels.
// If it is a vowel, slice array at that index and store in new array - const firstVowelAndBeyond.
// return firstVowelBeyond + lettersBeforeVowels + 'ay'.

// Create isValidInput() to check for truthy value and isNaN()
// Create isVowel() to check if a letter is a vowel
    // isVowel() should take a single character and return truthy or falsey value
    // isVowel() should hold an array of vowels
// Methods:
// split(), forEach(), push(), slice(), indexOf(), if/else statements, 


function pigLatin(word) {

  // Your code here

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
