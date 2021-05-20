/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []
  const path = []
  let sum = 0
  
  backTracking()
  
  return result
  
  function backTracking (index = 0) {
      if (sum >= target) {
          if (sum === target) result.push([...path])
          return
      }
      
      for (let i = index; i < candidates.length; ++i) {
          path.push(candidates[i])            
          sum += candidates[i]
          backTracking(i)
          path.pop()
          sum -= candidates[i]
      }
  }
};
// @lc code=end

