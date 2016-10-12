// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
// [1,2,3,4]   k = 1 [4,1,2,3]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length,
        tempArr = nums.slice(len-k, len),
        tempLen = tempArr.length;

    k = k%len;
    if (k) {

      nums.splice(len-k, len);
      if (tempArr.length < 1) {
        nums.splice(0, 0);
      } else {
        for (var i = tempLen-1; i >= 0; i--) {
          nums.splice(0, 0, tempArr[i]);
        }
      }
    }


};
