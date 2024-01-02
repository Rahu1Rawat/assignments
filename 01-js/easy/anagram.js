/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const countStr1 = {};
  const countStr2 = {};

  for (let i = 0; i < str1.length; i++) {
    countStr1[str1[i].toLowerCase()] = 1 + (countStr1[str1[i].toLowerCase()] || 0);
    countStr2[str2[i].toLowerCase()] = 1 + (countStr2[str2[i].toLowerCase()] || 0);
  }

  for (let c in countStr1) {
    if (countStr1[c] !== (countStr2[c] || 0)) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
