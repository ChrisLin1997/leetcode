/*
 * @lc app=leetcode id=1351 lang=javascript
 *
 * [1351] Count Negative Numbers in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let sum = 0
    
  for (let list of grid) {
      sum += binarySearch(list)
  }
      
  return sum
  
  function binarySearch (list) {
      let left = 0
      let right = list.length - 1

      while (left <= right) {
          let mid = Math.floor((right - left) / 2) + left

          if (list[mid] >= 0) left = mid + 1
          else if (list[mid] < 0) right = mid - 1
      }
  
      return list.length - left
  }
};
// @lc code=end

