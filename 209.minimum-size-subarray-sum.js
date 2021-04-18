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
  let right = 0
  let left = 0
  let result = 0
  let size = 0
  
  while (right < nums.length) {
    result += nums[right]
    
    while (result >= target) {
      size = Math.min(size, right - left + 1) || right - left + 1
      
      // early return
      if (size === 1) return 1
      result -= nums[left++]
    }
    
    ++right
  }
  
  return size
};
// @lc code=end

