/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length === 1) return true
    
  let cover = 0
  for (let i = 0; i <= cover; ++i) {
      cover = Math.max(cover, i + nums[i])
      if (cover >= nums.length - 1) return true
  }
  
  return false
};
// @lc code=end

