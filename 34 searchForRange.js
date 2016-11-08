// Given a sorted array of integers, find the starting and ending position of a given target value.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// If the target is not found in the array, return [-1, -1].
//
// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var left = 0,
        right = nums.length - 1,
        leftBound = -1,
        rightBound = -1;

    while (left <= right) {
      var mid = parseInt((left+right)/2);
      if (nums[mid] === target) {
          leftBound = mid;
          right = mid - 1;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
    }

    left = 0;
    right = nums.length - 1;

    while (left <= right) {
      mid = parseInt((left+right)/2);
      if (nums[mid] === target) {
          rightBound = mid;
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
    }

    return [leftBound, rightBound];

};
