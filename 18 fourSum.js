'use strict';
var fourSum = function(nums, target) {
    var results = [],
    	len = nums.length;

    if (len < 4) {
    	return results;
    }

    nums.sort(function(a, b) {return a - b;});

    for (var i = 0; i < len - 3; i++) {
        var target4Sum = target - nums[i];
        for (var j = i + 1; j < len - 2; j++) {
        	 if(j == i + 1 || nums[j] > nums[j-1]){
                var target3Sum = target4Sum - nums[j],
                left = j + 1,
                right = len - 1;
                
                while(left < right){
                    if(nums[left] + nums[right] === target3Sum){
                        results.push([nums[i],nums[j],nums[left++],nums[right--]]);
                        while(left < right && nums[left] === nums[left-1]){left++;}
                        while(left < right && nums[right] === nums[right+1]){right--;}
                    } else if(nums[left] + nums[right] < target3Sum){
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }
        while(nums[i] === nums[i + 1]) {
            i++;
        }
    }

    return results;
};

console.log(fourSum([-1,-5,-5,-3,2,5,0,4], 0));