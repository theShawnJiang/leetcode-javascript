// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
//
// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
//
// The replacement must be in-place, do not allocate extra memory.
//
// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1
// 6,5,4,8,7,5,1 → 6,5,5,1,4,7,8
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  var sIndex = nums.length - 1;

  while (sIndex > 0) {
    if (nums[sIndex - 1] < nums[sIndex]) {
      break;
    }
    sIndex--;
  }

  if (sIndex > 0) {
    sIndex--;
    var lIndex = nums.length - 1;
    while (lIndex > sIndex && nums[lIndex] <= nums[sIndex]) {
      lIndex--;
    }
    var temp1 = nums[sIndex];
    nums[sIndex] = nums[lIndex];
    nums[lIndex] = temp1;

    sIndex++;
  }

  var endIndex = nums.length - 1;
  while (endIndex > sIndex) {
    var temp2 = nums[endIndex];
    nums[endIndex--] = nums[sIndex];
    nums[sIndex++] = temp2;
  }
};
