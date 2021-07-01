/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0
  let right = numbers.length - 1
  
  while (left < right) {
      let sum = numbers[left] + numbers[right]
      if (sum === target) return [left + 1, right + 1]
      else if (sum > target) --right
      else ++left
  }
};
// @lc code=end

