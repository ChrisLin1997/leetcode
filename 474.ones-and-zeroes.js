/*
 * @lc app=leetcode id=474 lang=javascript
 *
 * [474] Ones and Zeroes
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    
  for (let str of strs) {
      let oneNum = 0
      let zeroNum = 0
      
      for (let i of str) {
          if (i === '1') ++oneNum
          else ++zeroNum
      }
      
      for (let i = m; i >= zeroNum; --i) {
          for (let j = n; j >= oneNum; --j) {
              dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
          }
      }
  }

  return dp[m][n]
};
// @lc code=end

