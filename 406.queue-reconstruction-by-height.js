/*
 * @lc app=leetcode id=406 lang=javascript
 *
 * [406] Queue Reconstruction by Height
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a, b) => {
      if (b[0] - a[0] === 0) return a[1] - b[1]
      return b[0] - a[0]
  })
  
  let result = []
  
  for (let i = 0; i < people.length; ++i) {
      const index = people[i][1]
      result.splice(index, 0, people[i])
  }
  
  return result
};
// @lc code=end

