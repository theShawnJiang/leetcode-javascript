// Given an array of integers and an integer k, find out whether there are two
// distinct indices i and j in the array such that nums[i] = nums[j]
// and the difference between i and j is at most k.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var tempArr = [],
      len = nums.length;
  for (var i = 0; i < len; i++) {
    if (tempArr[nums[i]] === undefined) {
      tempArr[nums[i]] = i;
    } else {
      if ((i-tempArr[nums[i]]) <= k) {
        return true;
      }
      tempArr[nums[i]] = i;
    }
  }
  return false;
};
