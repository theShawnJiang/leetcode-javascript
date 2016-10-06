// Given an array S of n integers, find three integers in S such that the sum is closest 
// to a given number, target. Return the sum of the three integers. 
// You may assume that each input would have exactly one solution.
'use strict';
var threeSumClosest = function(nums, target) {
    var len = nums.length;

    if (len < 3) {
    	return null;
    }

    nums.sort(function(a, b) {return a - b;});
    var tempDiff = target - (nums[0] + nums[1] + nums[2]);

    for (var i = 0; i < len - 2; i++) {
    	if(i === 0 || nums[i] > nums[i-1]){
            var left = i + 1,
                right = len - 1;
            
            while(left < right){
                var sum = nums[i] + nums[left] + nums[right],
                    resultDiff = target - sum;
                if(resultDiff === 0){
                    return target;
                } else if(resultDiff > 0){
                    if (resultDiff < tempDiff) {
                        tempDiff = resultDiff;
                    }
                    left++;
                } else {
                    if (Math.abs(resultDiff) < Math.abs(tempDiff)) {
                        tempDiff = resultDiff;
                    }
                    right--;
                }
            }
        }
    }

    return target - tempDiff;
};

console.log(threeSumClosest([-1,2,1,-4], 1));