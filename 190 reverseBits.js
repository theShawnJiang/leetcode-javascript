// Reverse bits of a given 32 bits unsigned integer.

// For example, given input 43261596 (represented in binary as 00000010100101000001111010011100),
// return 964176192 (represented in binary as 00111001011110000010100101000000).
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var res = 0;
    for( var i = 0; i < 32; i++) {
        res = ((res << 1) | (n & 1)) >>> 0;
        n >>>= 1;
    }

    return res;
};
