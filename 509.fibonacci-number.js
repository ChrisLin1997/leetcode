/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  let dp = [0, 1]
    
  for (let i = 2; i <= n; ++i) {
      dp[i] = dp[i - 1] + dp[i - 2]
  }
  
  return dp[n]
};
// @lc code=end

