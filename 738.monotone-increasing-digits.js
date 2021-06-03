/*
 * @lc app=leetcode id=738 lang=javascript
 *
 * [738] Monotone Increasing Digits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
  n = n + ''
  const result = []
  
  for (let i = n.length - 1; i >= 0; --i) {
      if (result.length === 0) result.push(n[i])
      else if (result[result.length - 1] >= n[i]) result.push(n[i])
      else {
          result.fill(9)
          result.push(n[i] - 1)
      }
  }
  
  return Number(result.reverse().join(''))
};
// @lc code=end

