/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let left = 1
  let right = n
  
  while (left <= right) {
      let mid = Math.floor((right - left) / 2) + left
      let value = (mid + 1) * mid / 2
      
      if (value === n) return mid
      else if (value < n) left = mid + 1
      else if (value > n) right = mid - 1
  }
  
  return right
};
// @lc code=end

