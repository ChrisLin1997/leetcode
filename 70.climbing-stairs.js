/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const dp = { 1: 1, 2: 2 }
    
  for (let i = 3; i <= n; ++i) {
      dp[i] = dp[i - 1] + dp[i - 2]
  }
  
  return dp[n]
  
  // n = 3時 只有兩種可能
  // (n - 1) 的情況 + 1
  // (n - 2) 的情況 + 2
};
// @lc code=end

