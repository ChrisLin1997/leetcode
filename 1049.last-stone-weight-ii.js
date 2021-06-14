/*
 * @lc app=leetcode id=1049 lang=javascript
 *
 * [1049] Last Stone Weight II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  let sum = 0
  for (let num of stones) sum += num
  let half = Math.floor(sum / 2)
  
  const dp = Array(stones.length + 1).fill().map(() => Array(half + 1).fill(0))
  
  for (let i = 1; i <= stones.length; ++i) {
      for (let j = 0; j <= half; ++j) {
          if (stones[i - 1] <= j) dp[i][j] = Math.max(stones[i -1] + dp[i - 1][j - stones[i - 1]], dp[i - 1][j])
          else dp[i][j] = dp[i - 1][j]
      }
  }
  
  return sum - 2 * dp[stones.length][half]
};
// @lc code=end

