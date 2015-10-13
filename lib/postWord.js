'use strict';

// This function takes a word String and a word collection Object, checks if
// that word exists in the object, and if not, appends it and shows thank you
// message
function postWord(word, wordObject) {
  if(wordObject.hasOwnProperty(word)) {
    return {
      msg: 'We already have your awesome word, ' + word + ', in our list.'
    };
  }

  wordObject[word] = true;
  console.dir(wordObject);
  return {
    msg: 'Thanks for submitting ' + word + '!'
  };
}

module.exports = postWord;