// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len = nums.length,
        tempArr = [];

    for (var i = 0; i < len; i++) {
      if (tempArr[nums[i]]) {
        tempArr[nums[i]]++;
        if (tempArr[nums[i]] >= len/2) {
          return nums[i];
        }
      } else {
        tempArr[nums[i]] = 1;
        if (len === 1) {
          return nums[i];
        }
      }
    }
};
