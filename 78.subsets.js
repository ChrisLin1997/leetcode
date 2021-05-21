/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = []
  const path = []
  
  backTracking()
  return result
  
  function backTracking (start = 0) {
      result.push([...path])
      for (let i = start; i < nums.length; ++i) {
          path.push(nums[i])
          backTracking(i + 1) 
          path.pop()
      }
  }    
};
// @lc code=end

