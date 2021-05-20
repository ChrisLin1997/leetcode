/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a-b)
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
          // i - 1 >= index
          // console.log(i, i -1, index)
          if (i - 1 >= index && candidates[i] === candidates[i - 1]) continue
          
          path.push(candidates[i])
          sum += candidates[i]
          backTracking(i + 1)
          path.pop()
          sum -= candidates[i]
      }
  }
};
// @lc code=end

