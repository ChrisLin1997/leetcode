/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0
  for (let i = 0; i < prices.length; ++i) {
      if (prices[i] > prices[i - 1]) {
          result += (prices[i] - (prices[i - 1] || 0))
      }
  }
      
  return result
};
// @lc code=end

