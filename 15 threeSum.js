// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// Note: The solution set must not contain duplicate triplets.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 'use strict';
var threeSum = function(nums, target) {
    var results = [],
    	len = nums.length;

    if (len < 3) {
    	return results;
    }

    nums.sort(function(a, b) {return a - b;});

    for (var i = 0; i < len - 2; i++) {
    	if(i === 0 || nums[i] > nums[i-1]){
            targetTemp = target - nums[i];
            left = i + 1;
            right = len - 1;
            
            while(left < right){
                if(nums[left] + nums[right] === targetTemp){
                    results.push([nums[i],nums[left++],nums[right--]]);
                    while(left < right && nums[left] === nums[left-1]){left++;}
                    while(left < right && nums[right] === nums[right+1]){right--;}
                } else if(nums[left] + nums[right] < targetTemp){
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return results;
};

console.log(threeSum([-1,0,1,2,-1,-4], 0));