/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0] === 0 ? a[0] - b[0] : a[1] - b[1])
    
  let result = 0
  let max = -Infinity
  intervals.forEach(item => {
      if (item[0] < max) ++result
      else max = item[1]
  })
      
  return result
};
// @lc code=end

