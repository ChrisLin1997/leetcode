/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0
  let right = nums.length - 1
  
  while (left < right) {
      let mid = Math.floor((right - left) / 2) + left
      
      if (nums[mid] < nums[mid + 1]) left = mid + 1
      else right = mid
  }
  
  return right
};
// @lc code=end

