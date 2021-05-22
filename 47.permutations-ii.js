/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b)
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
          if (!used.has(i - 1) && nums[i] === nums[i - 1]) continue
          if (!used.has(i)) {
              path.push(nums[i])
              used.add(i)
              backTracking()
              path.pop()
              used.delete(i)    
          }
          
      }
  }
};
// @lc code=end

