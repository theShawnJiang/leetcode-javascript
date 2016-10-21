// Given an array of integers, every element appears three times except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var one = 0,
        two = 0,
        three = 0;

    for (var i = 0, len = nums.length; i < len; i++) {
      two |= (one & nums[i]);
      one ^= nums[i];
      three = one & two;
      two -= three;
      one -= three;
    }
    return one;
};
