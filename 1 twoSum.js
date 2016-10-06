/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [],
    	len = nums.length;
    for (var i = 0; i < len; i++) {
    	var tmp = target - nums[i];
    	if (result[tmp] !== undefined) {
    		return [result[tmp], i];
    	}
    	result[nums[i]] = i;
    }
};

console.log(twoSum([2, 2, 7, 11, 15], 9));
