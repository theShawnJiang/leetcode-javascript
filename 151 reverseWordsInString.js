// Given an input string, reverse the string word by word.

// For example,
// Given s = "the sky is blue",
// return "blue is sky the".
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  if (!str) {
      return '';
  }

  var arr = str.split(' '),
      len = arr.length,
      result = '';

  for(i = len - 1; i >= 0; i--) {
      if (arr[i].length === 0) {
          continue;
      }
      result += ' ' + arr[i];
  }
  return result.trim();
};
