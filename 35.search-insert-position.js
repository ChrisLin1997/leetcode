/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0
  let high = nums.length - 1 
  
  while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2)
      
      if (target === nums[mid]) return mid
      else if (target < nums[mid]) high = mid - 1
      else low = mid + 1
  }
  
  // target not in nums 
  return low
};
// @lc code=end

