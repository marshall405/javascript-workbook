'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// pigLatin takes in a string, moves all letters up to the first vowel to the end of the word and adds 'ay' to the end.
// check input to make sure its a truthy value, convert to a string - should work with strings and numbers
// create array to hold vowels ['a','e','i','o','u']
// create variable pigLatinString to store new string
// loop through vowel array, store index of first vowel in string in a variable called vowelIndex
// 


// return pigLatinString

function pigLatin(word) {

  // Your code here

}
console.log(pigLatin('tiger')) // returns 'igertay'
console.log(pigLatin(123))     // returns '123ay'
console.log(pigLatin('brb'))   // returns 'brbay'


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
