/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let result = false
  let start = 0
  let end = nums.length <= k + 1 ? nums.length: k + 1
  let size = 0
  let windowSet = new Set(nums.slice(start, end))
  if (windowSet.size < end) return true
  
  while (end < nums.length) {
      windowSet.delete(nums[start++])
      size = windowSet.size
      windowSet.add(nums[end++])
      if (size === windowSet.size) {
          result = true
          break
      }       
  }
  
  return result
};
// @lc code=end

