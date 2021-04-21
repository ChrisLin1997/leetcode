/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let left = 0
  let right = 0
  let sum = 0
  let size = Infinity
  
  while (right < nums.length) {
    sum += nums[right]
    
    while (sum >= target) {
      size = Math.min(size, right - left + 1)
      sum -= nums[left++]
    }
    ++right
  }
  
  return size === Infinity ? 0 : size
};
// @lc code=end

