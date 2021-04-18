/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let picked = 0
  let curr = 0
  
  while (curr < nums.length) {
      if (nums[curr] !== val) {
          nums[picked] = nums[curr]
          ++picked
      }
      ++curr
  }
  
  return picked
};
// @lc code=end

