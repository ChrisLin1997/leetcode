/*
 * @lc app=leetcode id=491 lang=javascript
 *
 * [491] Increasing Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const result = []
  const path = []
  
  backTracking()
  return Array.from(new Set(result.map(item => JSON.stringify(item)))).map(item => JSON.parse(item))
  
  function backTracking (start = 0) {
      if (path.length >= 2) result.push([...path])

      for(let i = start; i < nums.length; ++i) {
          if (nums[i] < path[path.length - 1]) continue
          path.push(nums[i])
          backTracking(i + 1)
          path.pop()
      }
  }
};
// @lc code=end

