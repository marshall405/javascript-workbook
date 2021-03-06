'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// pigLatin should take in a word and move all letters before first vowel to the end and add 'ay'
// pigLatin('tiger') => should return 'igertay'
// Take word and trim whitespace, toLowerCase and split into an array, word.trim().toLowerCase.split() - const formattedWord.
// If word starts with a vowel, return word and add 'yay' to the end.
// Loop through formattedWord, checking if its a vowel, its not a vowel continue.
// If it is a vowel, slice array at that index and store in new array - const firstVowelAndBeyond and 
// slice at 0 to vowel index and store in new array - const lettersBeforeVowels.
// Break from loop to avoid more letters being pushed to lettersBeforeVowels.
// Join arrays back into strings and
// return firstVowelBeyond + lettersBeforeVowels + 'ay'.
// Methods: split(), for loop, push(), slice(), if/else statements, join().

// Create isValidInput() to check for truthy value and isNaN()
// Methods: isNaN()

// Create isVowel() to check if a letter is a vowel
    // isVowel() should take a single character and return truthy or falsey value
    // isVowel() should hold an array of vowels
// Methods: indexOf()


const isValidInput = (word) => word && isNaN(word);
const isVowel = (letter) => {
  const vowelArray = ['a', 'e', 'i', 'o', 'u'];
  return vowelArray.indexOf(letter) > -1;
}
function pigLatin(word) {
  
  // Your code here
  if(isValidInput(word)){
    const formattedWord = word.trim().toLowerCase();
    // if first letter in word is a vowel, return word with 'yay' at the end
    if(isVowel(formattedWord[0])){
      return `${formattedWord}yay`;
    } else {
      let lettersBeforeVowels = '';
      let firstVowelAndBeyond = '';
      for(let i = 0; i < formattedWord.length; i++) {
        if(isVowel(formattedWord[i])){
          firstVowelAndBeyond = formattedWord.slice(i);
          lettersBeforeVowels = formattedWord.slice(0, i);
          break;
        } else {
          lettersBeforeVowels = formattedWord;
        }
      }
      return `${firstVowelAndBeyond}${lettersBeforeVowels}ay`;
    }
  }
  return 'Invalid input';
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
