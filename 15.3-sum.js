/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []
  nums = nums.sort((a, b) => a - b)
  
  let small = 0
  let left = 1
  let right = nums.length - 1
  let result = []
  
  while (small < right) {
    if (nums[small] > 0) break

    // 跳過重複數字
    if (nums[small] !== nums[small - 1]) {
      while (left < right) {
        let sum = nums[small] + nums[left] + nums[right]
        if (sum > 0) --right
        else if (sum < 0) ++left
        else {
          result.push([nums[small], nums[left++], nums[right--]])
          // 跳過重複數字
          while (nums[left] === nums[left - 1]) ++left
          while (nums[right] === nums[right + 1]) --right
        }
      }
    }
    left = ++small + 1
    right = nums.length - 1
  }
  
  return result
};
// @lc code=end

