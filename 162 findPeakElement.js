// A peak element is an element that is greater than its neighbors.

// Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that num[-1] = num[n] = -∞.

// For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (!nums) {
      return null;
    }
    var len = nums.length;
    nums[-1] = Number.NEGATIVE_INFINITY;
    nums[len] = Number.NEGATIVE_INFINITY;

    for (var i = 0; i <= len; i++) {
      if (nums[i]>nums[i-1] && nums[i]>nums[i+1]) {
        return i;
      }
    }
};
