/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits === '') return []
  const map = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz',
  }
  
  const result = []
  const path = []
  backTracing()
  return result

  
  function backTracing (index = 0) {
      if (path.length === digits.length) {
          result.push(path.join(''))
          return
      }
      for (let i = 0; i < map[digits[index]].length; ++i) {
      // for (let str of map[digits]) {
          path.push(map[digits[index]][i])
          backTracing(index + 1)
          path.pop(map[digits[index]][i])
      }
  }
};
// @lc code=end

