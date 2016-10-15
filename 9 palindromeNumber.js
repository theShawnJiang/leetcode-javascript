// Determine whether an integer is a palindrome. Do this without extra space.
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  var div = 1,
      mostSig,
      leastSig;

  while (parseInt(x/div) >= 10) {
    div *= 10;
  }

  do {
    mostSig = parseInt(x/div);
    leastSig = x%10;
    if (mostSig !== leastSig) {
      return false;
    }
    x = parseInt(x/10)%(div/10);
    div /= 100;
  } while (div > 1);

  return true;
};
