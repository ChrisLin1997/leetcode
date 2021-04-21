/*
 * @lc app=leetcode id=885 lang=javascript
 *
 * [885] Spiral Matrix III
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
  let result = []
  let matrix = Array.from(Array(R), () => Array(C).fill(null))
  let r = r0
  let c = c0
  let i = 1
  let total = R * C
  
  let dr = 0
  let dc = 1
  let step = 1

  // first location
  result.push([r, c])
  
  // all matrix
  while (i < total) {
    // two steps
    for (let k = 0; k < 2; ++k) {
      // step
      for (let j = 0; j < step; ++j) {
        r = r + dr
        c = c + dc
        if (matrix[r]?.[c] === null) {
          result.push([r, c])
          ++i
          if (i >= total) return result
        }
        ++j
      }
      ++step
      ;[dr, dc] = [dc, -dr]
    }
  }
  return result
};
// @lc code=end

