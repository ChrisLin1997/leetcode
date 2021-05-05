/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const stack = []
  const result = Array(T.length).fill(0)
  
  for (let i = 0; i < T.length; ++i) {
      let answer = 1
      
      while (stack.length) {
          if (stack[stack.length - 1].t < T[i]) {
              const target = stack.pop()
              result[target.index] = answer
              answer += target.answer
          } else break
      }
      
      stack.push({ t: T[i], answer, index: i })
  }

  return result
};
// @lc code=end

