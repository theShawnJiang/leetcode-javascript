// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var str = x.toString(),
      len = str.length;
  if (x >= 0) {
    str = str.split('').reverse().join('');
  } else {
    str = '-'+str.slice(1,len).split('').reverse().join('');
  }
    if (Number(str) < Math.pow(2,31) - 1 && Number(str) > -Math.pow(2,31)) {
      return Number(str);
    } else {
      return 0;
    }
};

// 2nd Approach
var reverse2nd = function(x) {
  var result = 0;
  do {
    result = result*10 + x%10;
    x = parseInt(x/10);
  } while (x);

  if (result < Math.pow(2,31) - 1 && result > -Math.pow(2,31)) {
    return result;
  } else {
    return 0;
  }
};
