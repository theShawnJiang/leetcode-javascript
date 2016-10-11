// Count the number of prime numbers less than a non-negative number, n.
/**
 * @param {number} n
 * @return {number}
 */

// function isPrime(n) {
//    if (n <= 3) { return n > 1; }
//    if (n % 2 == 0 || n % 3 == 0) { return false; }

//    for (var  i = 5; i * i <= n; i += 6) {
//        if (n % i == 0 || n % (i + 2) == 0) { return false; }
//    }
//    return true;
//}

var countPrimes = function(n) {
  var primeCount = 0;
  for (var i = 1; i < n; i++) {
    if (i === 1) {
      continue;
    } else if (i === 2 || i === 3) {
      primeCount++;
    } else {
      var flag = 0;
      if (i % 2 === 0 || i % 3 === 0) {
        flag++;
        continue;
      }

      for (var  j = 5; j * j <= i; j += 6) {
             if (i % j === 0 || i % (j + 2) === 0) {
               flag++;
             }
         }
      if (flag) {
        continue;
      } else {
        primeCount++;
      }
    }
  }
  return primeCount;
};
