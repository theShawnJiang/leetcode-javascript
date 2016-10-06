// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.length,
    	maxArea = 0,
    	left = 0,
    	right = len - 1;

    while(left < right) {
    	var interval = right - left;
    	var minHeight = height[left] <= height[right] ? height[left++] : height[right--];
    	var area = minHeight * interval;
    	if (area > maxArea) {
    		maxArea = area;
    	}

    }	

    return maxArea;
};