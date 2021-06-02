/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort((a, b) => a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0])
    
  let max = -Infinity
  let result = 0
  
  points.forEach((item, index) => {
      if (item[0] > max) {
          ++result
          max = item[1]
      } else {
          max = Math.min(item[1], max)
      }
      
  })
  
  return result
};
// @lc code=end

