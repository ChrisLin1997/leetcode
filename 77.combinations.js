/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = []
  const path = []
  backTrace(1)
  
  return result
  
  function backTrace (startIndex) {
      if (path.length === k) {
          result.push([...path])
          return
      }
      for (let i = startIndex; i < n + 1; ++i) {
          path.push(i)
          backTrace(i + 1)
          path.pop()
      }    
  }
};
// @lc code=end

