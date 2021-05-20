/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = []
  const path = []
  let sum = 0
  
  backTracking()
  return result

  function backTracking (start = 1) {
      if (path.length === k) {
          if (sum === n) result.push([...path])
          return
      }
      
      for (let i = start; i <= 9; ++i) {
          path.push(i)
          sum += i
          backTracking(i + 1)
          path.pop(i)   
          sum -= i
      }
  }
};
// @lc code=end

