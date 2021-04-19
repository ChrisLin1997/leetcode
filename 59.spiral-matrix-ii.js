/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let x = 0
  let y = 0
  let count = 0
  let m = n
  
  let result = Array.from(Array(n), () => Array(n))
  
  n = n - 1
  
  while (n) {
    for (let i = 0; i < 4 * n;i++) {
      result[y][x] = ++count
      
      let d = i >= 2 * n ? -1 : 1
      if (Math.floor(i/n) % 2) y += d
      else x += d
    }
    
    n -= 2
    ++x
    ++y
    
    if (n <= 0) break
  }
  
  if (m % 2) result[y][x] = m ** 2
  
  return result
};
// @lc code=end

