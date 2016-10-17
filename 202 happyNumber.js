// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number

// 1^2 + 9^2 = 82
// 8^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (!n) {
      return false;
    }

    var hash = {},
        key = n;

    while (!hash[key]) {
      if (key === 1) {
        return true;
      }

      hash[key] = true;

      var arr = key.toString(10).split("").map(Number),
          len = arr.length;
      key = 0;

      for (var i = 0; i < len; i++) {
        key += arr[i]*arr[i];
      }
    }

    return false;

};
