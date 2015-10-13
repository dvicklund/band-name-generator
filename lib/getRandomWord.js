'use strict';

// This function takes an object and returns a random property from it (in this
// case, a "word")
function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
}

module.exports = getRandomWord;