/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let stack = []
  let result = 0
  
  let i = 0
  let length = prices.length
  while (i < length) {
    if ((stack[stack.length - 1] || 0) <= prices[i]) stack.push(prices[i])
    else {
      result += stack[stack.length - 1] - stack[0]
      stack = []
      stack.push(prices[i])
    }
    ++i
  }
  
  if (stack.length) result += stack[stack.length - 1] - stack[0]
  
  return result
};
// @lc code=end

