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
  const sum = nums.reduce((acc, curr) => acc + curr,0)
  if (sum % 2 !== 0) return false
  
  const target = sum / 2
  const dp = Array(target + 1).fill(0)

  for (let i = 0; i < nums.length; ++i) {
    for (let j = target; j >= 0; --j) {
        if (j >= nums[i]) dp[j] = Math.max(nums[i] + dp[j - nums[i]], dp[j])
    }
  }

  return dp[target] === target
};
// @lc code=end

