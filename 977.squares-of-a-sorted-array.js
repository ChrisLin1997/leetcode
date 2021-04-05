/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let left = 0
  let right = nums.length - 1
  let result = []
  
  while (result.length < nums.length) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result.push(nums[left] ** 2)
      ++left
    } else  {
      result.push(nums[right] ** 2)
      --right
    }   
  }
  
  return result.reverse()
};
// @lc code=end

