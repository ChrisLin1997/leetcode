/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  // 思路 插入之後再合併
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] - b[0] )
  let firstInterval = intervals.shift()
  let result = [firstInterval]
  
  intervals.forEach((interval) => {
    // 區間大於 start && 小於end 合併區間  
    if (result[result.length - 1][1] >= interval[0] && result[result.length - 1][1] < interval[1]) {
      result[result.length - 1][1] = interval[1]
    }
    // 區間小於 start 增加下個區間
    else if (result[result.length - 1][1] < interval[0]) {
      result.push(interval)
    }
  })

  return result
};
// @lc code=end

