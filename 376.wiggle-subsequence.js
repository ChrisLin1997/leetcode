/*
 * @lc app=leetcode id=376 lang=javascript
 *
 * [376] Wiggle Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  let diff = null
  let result = 1
  for (let i = 1 ; i < nums.length; ++i) {
      const curr = nums[i] - nums[i - 1]
      if (diff === null && curr) {
          ++result
          diff = curr
          continue
      }
      if ((diff > 0 && curr < 0) || (diff < 0 && curr > 0)) {
          ++result
          diff = curr
      }
  }
  return result
};
// @lc code=end

