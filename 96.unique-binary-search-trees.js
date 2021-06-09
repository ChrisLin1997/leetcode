/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const dp = [1]
    
  for (let i = 1; i <= n; ++i) {
      dp[i] = 0
      for (let j = 1; j <= i; ++j) {
          dp[i] += dp[i - j] * dp[j - 1]
      }
  }
    
  return dp[n]
};
// @lc code=end

