/*
 * @lc app=leetcode id=316 lang=javascript
 *
 * [316] Remove Duplicate Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const stack = []
  for (let i = 0; i < s.length; ++i) {
      
      if (stack.indexOf(s[i]) > -1) continue
      
      while (
          stack.length > 0 &&
          stack[stack.length - 1] > s[i] &&
          s.indexOf(stack[stack.length - 1], i) > -1
      ) {
          stack.pop()
      }
      
      stack.push(s[i])
  }
  
  return stack.join('')
};
// @lc code=end

