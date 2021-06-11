/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const equal = nums.reduce((acc, curr) => acc + curr, 0) / 2
  if (Number.isInteger(equal) === false) return false

  const dp = Array(nums.length + 1).fill().map(() => Array(equal + 1).fill(0))
    
  for (let i = 1; i <= nums.length; ++i) {
      for (let j = 1; j <= equal; ++j) {
          if (nums[i - 1] <= j)  dp[i][j] = Math.max(nums[i - 1] + dp[i - 1][j - nums[i - 1]], dp[i - 1][j])
          else dp[i][j] = dp[i - 1][j]
          
          if (dp[i][j] === equal) return true
      }   
  }
  
  return false
};
// @lc code=end

