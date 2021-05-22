/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []
  const path = []
  const used = new Set()
  backTracking()
  
  return result
  
  function backTracking () {
      if (path.length === nums.length) {
          result.push([...path])
          return
      }
      for (let i = 0; i < nums.length; ++i) {
          if (used.has(nums[i])) continue
          path.push(nums[i])
          used.add(nums[i])
          backTracking()
          path.pop()
          used.delete(nums[i])
      }
  }
};
// @lc code=end

