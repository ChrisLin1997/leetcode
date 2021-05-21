/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b)
  const result = []
  const path = []
  
  backTracking()
  return result
  
  function backTracking (start = 0) {
      result.push([...path])
      for (let i = start; i < nums.length; ++i) {
          if (i !== start && nums[i] === nums[i - 1]) continue
          path.push(nums[i])
          backTracking(i + 1) 
          path.pop()
      }
  }    
};
// @lc code=end

