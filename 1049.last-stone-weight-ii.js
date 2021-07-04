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
  const sum = stones.reduce((acc, curr) => acc + curr)
  const half = Math.floor(sum / 2)
  const dp = Array(half + 1).fill(0)
        
  for (let i = 0; i < stones.length; ++i) {
      for (let j = half; j >= 0; --j) {
          if (j >= stones[i]) dp[j] = Math.max(stones[i] + dp[j - stones[i]], dp[j])
      }
  }
  
  return sum - 2 * dp[half]
};
// @lc code=end

