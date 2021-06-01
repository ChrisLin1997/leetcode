/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const result = [1]
  for (let i = 1; i < ratings.length; ++i) {
      let num = 1
      if (ratings[i] > ratings[i - 1]) result.push(2)
      else result.push(1)
  }
  
  for (let i = ratings.length - 1; i > 0 ; --i) {
      if (ratings[i - 1] > ratings[i] ) {
          result[i - 1] = result[i] + 1
      }
  }
  
  return result.reduce((acc, curr) => acc + curr, 0)
};
// @lc code=end

