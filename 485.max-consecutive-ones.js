/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let left = 0
  let right = 0
  let result = 0
  
  while (right < nums.length) {
    if (nums[right] === 0) left = right + 1
    else result = Math.max(result, right -left + 1)
    ++right
  }
  
  return result
};
// @lc code=end

