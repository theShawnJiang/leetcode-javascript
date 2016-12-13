// Given a non-empty array of integers, return the third maximum number in this array.
// If it does not exist, return the maximum number. The time complexity must be in O(n).

// Example 1:
// Input: [3, 2, 1]
// Output: 1
// Explanation: The third maximum is 1.

// Example 2:
// Input: [1, 2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
// Input: [2, 2, 3, 1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var min, mid, max;
    min = mid = max = -2e31;
    count = 0;

    for (var i = 0, len = nums.length; i < len; i++) {
      if (nums[i] === max || nums[i] === mid) {
        continue;
      } else if (nums[i] > max) {
        min = mid;
        mid = max;
        max = nums[i];
        count++;
      } else if(nums[i] > mid) {
        min = mid;
        mid = nums[i];
        count++;
      } else if (nums[i] >= min) {
        min = nums[i];
        count++;
      }
    }

    if (count >= 3) {
      return min;
    } else {
      return max;
    }
};
