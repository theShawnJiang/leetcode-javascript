// Implement pow(x, n).
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  } else if(n === 1) {
    return x;
  }

  var half = parseInt(n/2);

  if (n<0) {
    half = -half;
    x = 1/x;
  }

  var temp = myPow(x, half);

  if (n%2 === 0) {
    return temp*temp;
  } else {
    return temp*temp*x;
  }
};
