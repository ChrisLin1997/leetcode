/*
 * @lc app=leetcode id=1005 lang=javascript
 *
 * [1005] Maximize Sum Of Array After K Negations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    
  for (let i = 0; i < nums.length; ++i) {
      if (k === 0) break

      if (nums[i] <= 0) {
          nums[i] = -nums[i]
          --k
      }
  }
  
  if (k > 0 && k % 2 === 1) nums[nums.length - 1] = -nums[nums.length - 1]
  
  return nums.reduce((acc, curr) => acc + curr, 0)
};
// @lc code=end

